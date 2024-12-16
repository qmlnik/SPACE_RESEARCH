<template>
    <div class="w-100" style="height: 90vh;">
        <Header></Header>
    </div>
    <Timeline />
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import "~/node_modules/bootstrap/scss/functions";
@import "~/node_modules/bootstrap/scss/variables";
@import "~/node_modules/bootstrap/scss/mixins/breakpoints";

body {
    background-size: 100vw 100vh, 100px 100px, 100px 100px;
    background-image:
        linear-gradient(to bottom, transparent, transparent 30%, #0b111b),
        linear-gradient(to right, transparent, transparent calc(50% - 1px), rgb(53, 53, 53) calc(50% + 1px), transparent calc(50% + 1px), transparent 100%),
        linear-gradient(to bottom, transparent, transparent calc(50% - 1px), rgb(53, 53, 53) calc(50% + 1px), transparent calc(50% + 1px), transparent 100%);
    background-attachment: fixed;

    @include media-breakpoint-down(md) {
        background-size: 100vw 100vh;
        background-image:
            linear-gradient(to bottom right, transparent, transparent 30%, #142136);
        background-attachment: fixed;
    }
}
</style>