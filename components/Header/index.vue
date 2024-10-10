<template>
    <div class="w-100 h-100 overflow-hidden" style="background: black;" ref="container">
        <TypingText
            v-if="!isAssetsLoaded"
            text="betöltés..."
        />

        <div
            class="w-100 h-100 position-relative d-flex align-items-center justify-content-center "
            style="opacity: 0;"
            ref="headerContainer"
        >
            <ClientOnly>
                <img
                    src="~/assets/images/stars_background_5.jpg" 
                    class="position-absolute"
                    :class="[...(isFillBGVertically ? ['w-100', 'h-auto'] : ['h-100', 'w-auto'])]"
                    ref="BGImage"
                    @load="BGLoaded"
                />
            </ClientOnly>
            <HeaderPlanets
                ref="headerPlanets"
                @all-planet-loaded="isAllPlanetLoaded = true"
            />
            <div
                v-if="isAssetsLoaded"
                class="header-title-container"
            >
                <TypingText
                    text="űrkutatás katalógus"
                    :is-header="true"
                />
            </div>
            <div class="scroll-indicator-container">
                <div class="scroll-indicator-arrow" style="margin-bottom: -3px;"></div>
                <div class="scroll-indicator-arrow" style="animation-delay: 100ms"></div>
            </div>
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
            isBGLoaded: false,
            isAllPlanetLoaded: false,
            BGWidth: 0,
            BGHeight: 0,
            containerWidth: 0,
            containerHeight: 0,
            isFillBGVertically: false,
            BGScaleFitRotate: 1
        };
    },
    mounted() {
        window.addEventListener("resize", this.setBGImageContainerRelations);

        setTimeout(() => {
            this.isDelayLoading = false;
        }, MIN_LOAD_TIME);
    },
    watch: {
        isAssetsLoaded(newIsAssetsLoaded) {
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
        isAssetsLoaded() {
            return !this.isDelayLoading && this.isBGLoaded && this.isAllPlanetLoaded;
        }
    },
    unMounted() {
        window.removeEventListener("resize", this.setContainerSize);
    },
    methods: {
        setBGImageContainerRelations() {
            const { offsetWidth: ContOffsetWidth, offsetHeight: ContOffsetHeight } = this.$refs.container;
            const { offsetWidth: BGOffsetWidth, offsetHeight: BGOffsetHeight } = this.$refs.BGImage;

            this.isFillBGVertically = (ContOffsetWidth / ContOffsetHeight) > (BGOffsetWidth / BGOffsetHeight);

            const containerDiagonal = Math.sqrt(Math.pow(ContOffsetWidth / 2, 2) + Math.pow(ContOffsetHeight / 2, 2));
            const BGShortestSide = Math.min(BGOffsetWidth, BGOffsetHeight);

            this.BGScaleFitRotate = Math.max(containerDiagonal / (BGShortestSide / 2), 1);
        },
        BGLoaded() {
            this.setBGImageContainerRelations();

            this.$nextTick(() => {
                this.isBGLoaded = true;
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.header-title-container {
    position: absolute;
    bottom: 25%;
    z-index: 1;
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