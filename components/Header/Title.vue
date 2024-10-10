<template>
    <div v-for="(titlePart, titleIndex) in titleParts">
        <div class="char" :style="{
            'animation-delay': `${(charIndex * 80) + (titleIndex * 300)}ms`,
            'animation-name': titleIndex % 2 === 0 ? 'charFloatDown' : 'charFloatUp'
        }" v-for="(char, charIndex) in titlePart">{{ char }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            titleParts: ["űrkutatás", "története"],
        };
    },

};
</script>

<style lang="scss">
@import "~/node_modules/bootstrap/scss/functions";
@import "~/node_modules/bootstrap/scss/variables";
@import "~/node_modules/bootstrap/scss/mixins/breakpoints";

.char {
    position: relative;
    //font-family: header;
    font-size: 2rem;
    display: inline-block;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    opacity: 0;
    text-transform: uppercase;

    @include media-breakpoint-up(md) {
        font-size: 4rem;
    }

    @include media-breakpoint-up(lg) {
        font-size: 5rem;
    }
}

@keyframes charFloatDown {
    0%, 20%, 90%, 100% {
        bottom: 25px;
        opacity: 0;
        filter: blur(1.5px);
    }
    25%, 85% {
        bottom: 0;
        opacity: 1;
        filter: blur(0);
    }
}

@keyframes charFloatUp {
    0%, 20%, 90%, 100% {
        top: 25px;
        opacity: 0;
        filter: blur(1.5px);
    }
    25%, 85% {
        top: 0;
        opacity: 1;
        filter: blur(0);
    }
}
</style>