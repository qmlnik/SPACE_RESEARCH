<template>
    <div class="w-100 h-100 overflow-hidden" style="background: black;" ref="container">
        <TypingText
            v-if="!isFinishedLoading"
            text="betöltés..."
        />

        <div
            class="w-100 h-100 position-relative d-flex align-items-center justify-content-center "
            style="opacity: 0;"
            ref="headerContainer"
        >
            <ClientOnly>
                <HeaderPlanets
                    ref="headerPlanets"
                    @assets-loaded="isAssetsLoaded = true"
                />
                <div
                    v-if="isFinishedLoading"
                    class="header-title-container"
                >
                    <h1 class="fw-normal">
                        <TypingText
                            text="űrkutatás katalógus"
                            :is-header="true"
                        />
                    </h1>
                </div>
                <div class="scroll-indicator-container">
                    <div class="scroll-indicator-arrow" style="margin-bottom: -3px;"></div>
                    <div class="scroll-indicator-arrow" style="animation-delay: 100ms"></div>
                </div>
            </ClientOnly>
        </div>
    </div>
</template>

<script>
import gsap from "gsap";

const { MIN_LOAD_TIME, FADE_IN_TIME, FADE_IN_DELAY } = CONFIG.HEADER;

export default {
    data() {
        return {
            isDelayLoading: true,
            isAssetsLoaded: false,
            BGWidth: 0,
            BGHeight: 0,
            containerWidth: 0,
            containerHeight: 0,
            isFillBGVertically: false,
            BGScaleFitRotate: 1
        };
    },
    mounted() {
        setTimeout(() => {
            this.isDelayLoading = false;
        }, MIN_LOAD_TIME);
    },
    watch: {
        isFinishedLoading(newIsAssetsLoaded) {
            if (newIsAssetsLoaded) {
                this.$refs.headerPlanets.startRendering();

                gsap.to(
                    this.$refs.headerContainer,
                    {
                        opacity: 1,
                        duration: FADE_IN_DELAY / 1000,
                        delay: FADE_IN_TIME / 1000,
                        ease: "power4.out"
                    }
                );
            }
        }
    },
    computed: {
        isFinishedLoading() {
            return !this.isDelayLoading && this.isAssetsLoaded;
        }
    },
    unMounted() {
        window.removeEventListener("resize", this.setContainerSize);
    }
};
</script>

<style lang="scss" scoped>
.header-title-container {
    position: absolute;
    bottom: 25%;
    z-index: 1;
    text-align: center;
}

.scroll-indicator-container {
    position: absolute;
    bottom: 5%;
    z-index: 1;
}

.scroll-indicator-arrow {
    width: 25px;
    height: 25px;
    border-width: 2px;
    border-right-color: white;
    border-bottom-color: white;
    border-left-color: transparent;
    border-top-color: transparent;
    border-style: solid;
    transform: rotate(45deg);
    position: relative;
    border-radius: 2px;
    animation: scroll-indicator 1.5s infinite;
}

@keyframes scroll-indicator {
    0% {
        bottom: 25px;
        opacity: 0;
    }
    50%  {
        opacity: 1;
    }
    100% {
        bottom: 0px;
        opacity: 0;
    }
}
</style>