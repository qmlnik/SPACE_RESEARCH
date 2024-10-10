import * as THREE from "three";
import gsap from "gsap";

import Planet from "./Planet";
import EarthCloudsTexture from "~/assets/images/earth_clouds_texture.jpg";
import MoonTexture from "~/assets/images/moon_texture.jpg";

const { FADE_IN_TIME, FADE_IN_DELAY } = CONFIG.HEADER;

export default class Engine {
    constructor(canvasRef, allPlanetLoadedCallback){
        this.canvasRef = canvasRef;
        this.allPlanetLoadedCallback = allPlanetLoadedCallback;

        this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvasRef, alpha: true });
        this.renderer.setClearColor(0xffffff, 0);

        this.responsiveRenderDistance = 0;

        this.scene = new THREE.Scene();

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
            this.planetLoadedCallback.bind(this)
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
            this.planetLoadedCallback.bind(this)
        );

        this.planets = [earth, moon];

        this.scene.add(earthGroup);
        this.scene.add(moon.getMesh());

        let ambientLight = new THREE.AmbientLight(0xffffff, 0.05);
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
        directionalLight.position.z = 70;
        directionalLight.position.x = 10;
        directionalLight.position.y = 0;
        this.scene.add(directionalLight);

        const { offsetWidth, offsetHeight } = this.canvasRef;
        this.camera  = new THREE.PerspectiveCamera(75, offsetWidth / offsetHeight, 0.1, 1000);
        this.camera.position.y = 5;

        this.requestAnimationFrame = null;

        this.setRenderSize();
    }

    planetLoadedCallback() {
        const isAllPlanetLoaded = !this.planets.some(planet => !planet.getLoaded());
        if (isAllPlanetLoaded) {
            this.allPlanetLoadedCallback();
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
        this.renderer.render(this.scene, this.camera);
    }

    setRenderSize() {
        const { offsetWidth, offsetHeight } = this.canvasRef;

        this.responsiveRenderDistance = (1920 - offsetWidth) / ((1920 - 640) / 20);

        this.renderer.setSize(offsetWidth, offsetHeight);
        this.camera.aspect = offsetWidth / offsetHeight;
        this.camera.updateProjectionMatrix();
    }
};