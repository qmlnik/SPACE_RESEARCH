import * as THREE from "three";
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader";
import gsap from "gsap";

import Planet from "./Planet";
import EarthCloudsTexture from "~/assets/images/earth_clouds_texture.jpg";
import MoonTexture from "~/assets/images/moon_texture.jpg";
import stars_background_5 from "~/assets/images/stars_background_6.jpg";

const { FADE_IN_TIME, FADE_IN_DELAY } = CONFIG.HEADER;

export default class Engine {
    constructor(canvasRef, allAssetLoadedCallback){
        this.canvasRef = canvasRef;
        this.allAssetLoadedCallback = allAssetLoadedCallback;
        this.isBackgroundLoaded = false;

        this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvasRef, alpha: true });
        this.renderer.setClearColor(0xffffff, 0);

        this.responsiveRenderDistance = 0;

        this.scene = new THREE.Scene();

        new THREE.TextureLoader().load(stars_background_5, textureImage => {
            this.scene.background = textureImage;
            this.isBackgroundLoaded = true;

            this.setBackgroundScale();
            this.assetLoadedCallback();
        });

        const earth = new Planet(
            {
                textureImage: EarthCloudsTexture,
                size: 10,
                startPosition: {
                    x: -3,
                    y: 0,
                    z: -7
                },
                finalPosition: {
                    x: 0,
                    y: 0,
                    z: -7
                },
                baseRotation: {

                },
                startSpinning: 0.025,
                finalSpinning: 0.0012
            },
            this.assetLoadedCallback.bind(this)
        );

        const earthGroup = new THREE.Group();
        earthGroup.rotation.z = Math.PI / 180 * 23.5;
        earthGroup.add(earth.getMesh());

        const moon = new Planet(
            {
                textureImage: MoonTexture,
                size: 3,
                startPosition: {
                    x: -5,
                    y: 0,
                    z: 15
                },
                finalPosition: {
                    x: -3,
                    y: 0,
                    z: 15
                },
                startSpinning: 0.015,
                finalSpinning: 0.001
            },
            this.assetLoadedCallback.bind(this)
        );

        this.planets = [earth, moon];

        this.scene.add(earthGroup);
        this.scene.add(moon.getMesh());

        let ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
        directionalLight.position.z = 70;
        directionalLight.position.x = 10;
        directionalLight.position.y = 0;
        this.scene.add(directionalLight);

        const { offsetWidth, offsetHeight } = this.canvasRef;
        this.camera  = new THREE.PerspectiveCamera(75, offsetWidth / offsetHeight, 0.1, 1000);
        this.camera.position.y = 5;

        var parameters = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBAFormat, stencilBuffer: false };

        var renderTarget = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, parameters);

        this.bloomComposer = new EffectComposer(this.renderer, renderTarget);

        const renderScene = new RenderPass(this.scene, this.camera);
        this.bloomComposer.addPass(renderScene);

        const bloomPass = new UnrealBloomPass(new THREE.Vector2(offsetWidth, offsetHeight), 1.5, 0.4, 0.85);
        bloomPass.threshold = 0;
        bloomPass.strength = 0.5;
        bloomPass.radius = 0.4;
        this.bloomComposer.addPass(bloomPass);

        const effectFXAA = new ShaderPass(FXAAShader);
        effectFXAA.uniforms.resolution.value.set(1 / offsetWidth, 1 / offsetHeight);
        effectFXAA.renderToScreen = true;
        this.bloomComposer.addPass(effectFXAA);   

        this.requestAnimationFrame = null;

        this.setRenderSize();
    }

    assetLoadedCallback() {
        const isAllAssetLoaded = !this.planets.some(planet => !planet.getLoaded()) && this.isBackgroundLoaded;

        if (isAllAssetLoaded) {
            this.allAssetLoadedCallback();
        }
    }

    startRendering() {
        window.addEventListener("resize", this.setRenderSize.bind(this));

        this.planets.forEach(planet => {
            const { finalSpinning, finalPosition: { x, y, z } } = planet.getPlanetParameters();
            const mesh = planet.getMesh();

            gsap.to(
                mesh.position,
                {
                    x,
                    y,
                    z,
                    duration: FADE_IN_DELAY / 1000,
                    delay: FADE_IN_TIME / 1000,
                    ease: "power4.out"
                }
            );

            gsap.to(
                planet,
                {
                    spinning: finalSpinning,
                    duration: FADE_IN_DELAY / 1000,
                    delay: FADE_IN_TIME / 1000,
                    ease: "power4.out"
                }
            );

            gsap.to(
                this.camera.position,
                {
                    y: 0,
                    duration: FADE_IN_DELAY / 1000,
                    delay: FADE_IN_TIME / 1000,
                    ease: "power4.out"
                }
            );
        });

        this.render();
    }

    stopRendering() {
        if (this.requestAnimationFrame) {
            window.removeEventListener("resize", this.setRenderSize.bind(this));

            cancelAnimationFrame(this.requestAnimationFrame);
        }
    }

    render() {
        this.requestAnimationFrame = requestAnimationFrame(this.render.bind(this));
        this.planets.forEach(planet => planet.getMesh().rotation.y += planet.getSpinning());
        this.camera.position.x = 20 + this.responsiveRenderDistance;
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        this.bloomComposer.render();
    }

    setRenderSize() {
        const { offsetWidth, offsetHeight } = this.canvasRef;

        this.responsiveRenderDistance = (1920 - offsetWidth) / ((1920 - 640) / 20);

        this.renderer.setSize(offsetWidth, offsetHeight);
        this.bloomComposer.setSize(offsetWidth, offsetHeight);
        this.camera.aspect = offsetWidth / offsetHeight;
        this.camera.updateProjectionMatrix();

        if (this.scene.background !== null) {
            this.setBackgroundScale(); 
        }
    }

    setBackgroundScale() {
        const backgroundImageCanwasWidthRatio = this.canvasRef.offsetWidth / this.scene.background.image.naturalWidth;
        
        this.scene.background.repeat.set(backgroundImageCanwasWidthRatio, 1);
    }
};