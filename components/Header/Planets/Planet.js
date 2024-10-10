import * as THREE from "three";

export default class Planet {
    constructor(planetParameters, textureLoadedCallback) {
        const { textureImage, size, startPosition, startSpinning } = planetParameters;

        this.planetParameters = planetParameters;
        this.textureLoadedCallback = textureLoadedCallback;

        this.isTextureLoaded = false;

        const geometry = new THREE.SphereGeometry(size, 64, 64);
        const texture = new THREE.TextureLoader().load(textureImage, () => {
            this.isTextureLoaded = true;
            this.textureLoadedCallback();
        });
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        const material = new THREE.MeshPhongMaterial({ map: texture });

        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.x =  startPosition.x;
        this.mesh.position.y =  startPosition.y;
        this.mesh.position.z =  startPosition.z;
        
        this.spinning = startSpinning;
    }

    getPlanetParameters() {
        return this.planetParameters;
    }

    getSpinning() {
        return this.spinning;
    }

    getMesh() {
        return this.mesh;
    }

    getLoaded() {
        return this.isTextureLoaded;
    }
};