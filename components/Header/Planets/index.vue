<template>
    <canvas class="w-100 h-100  position-absolute" ref="canvas"></canvas>
</template>

<script>
import Engine from "./Engine.js";

export default {
    deta() {
        return { 
            engine: null
        };
    },
    mounted() {
        this.engine = new Engine(this.$refs.canvas, this.emitAssetsLoaded);
    },
    unmounted() {
        this.engine.stopRendering();
    },
    methods: {
        emitAssetsLoaded() {
            this.$emit("assetsLoaded");
        },
        startRendering() {
            this.engine.startRendering();
        }
    }
};
</script>

<style lang="scss">
</style>