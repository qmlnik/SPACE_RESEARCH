<template>
    <NuxtLink
        class="year-container"
        :class="[isActive ? 'active-container' : null, yearContent?.isHighlighted ? 'highlighted-container' : null]"
        :to="`/ev/${year}`"
    >
        <article class="py-5 py-md-2 px-3 d-flex">
            <div
                class="d-flex align-items-center mx-2"
                :class="[yearContent?.isHighlighted ? 'text-decoration-underline' : null]"
                style="width: 3rem;"
            >
                {{ year }}
            </div>
            <div class="dot-line-container">
                <template v-if="isShowDotLine">  
                    <div class="dot bg-primary">
                    </div>
                    <div class="line"></div>
                </template>
            </div>
            <div class="row g-4" style="width: calc(100% - 100px);">
                <div class="col-md-7">
                    {{ yearContent?.text }}
                </div>
                <div class="col-md-5 d-flex align-items-center">
                    <div class="row g-4 g-md-0 w-100">
                        <div
                            v-for="{ src, caption } in yearContent?.images ?? []"
                            class="image-container col-md-6 overflow-hidden d-flex align-items-center justify-content-center flex-column"
                        >
                            <img :src="src" :alt="src.split('/').at(-1)" />
                            <div
                                class="image-caption w-100 text-center bg-primary"
                                style="padding: 0.2rem; font-size: 0.8rem;"
                            >
                                {{ caption }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </NuxtLink>
</template>

<script>
export default {
    props: {
        year: {
            type: Number,
            required: true
        },
        isActive: {
            type: Boolean,
            required: true
        },
        isShowDotLine: {
            type: Boolean,
            required: true
        },
        yearContent: {
            type: Object,
            required: true
        }
    }
};
</script>

<style lang="scss">
@import "~/node_modules/bootstrap/scss/functions";
@import "~/node_modules/bootstrap/scss/variables";
@import "~/node_modules/bootstrap/scss/mixins/breakpoints";

@import "./variables";
@import "~/assets/bootstrap/variables";

.timeline-wrapper {
    &:hover, &:focus {
        .year-container {
            padding: $containerHoverAdditionalHeight / 2 0;   
        }

        .dot {
            border-color: white !important;
        }
    }

    &:nth-child(2) .line {
        height: 50% !important;
        background: linear-gradient(to bottom, white, grey) !important;
        top: 50%;
    }

    &:last-of-type .line {
        height: 50% !important;
        background: linear-gradient(to bottom, grey, white) !important;
        bottom: 50%;
    }
}

.year-container {
    display: inline-block;
    width: 100%;
    font-size: 1.1rem;
    color: $inactiveColor;
    transition: $containerTransition;
    background: $primary;

    @include media-breakpoint-down(md) {
        background: transparent;
    }


    .image-container {
        height: 150px;
        filter: grayscale(0.6);

        img {
            height: 100%;
            width: auto;

            @include media-breakpoint-down(md) {
                height: auto; 
                width: 100%;
            }
        }

        .image-caption {
            position: absolute;
            bottom: 0;

            @include media-breakpoint-down(md) {
                position: relative;
            }
        }
    }

    .dot-line-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 20px;

        .dot {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 2px solid $inactiveColor;
            position: absolute;
            z-index: 3;
        }

        .line {
            position: absolute;
            height: 100%;
            width: 2px;
            transition: $containerTransition;
            z-index: 2;
            background: linear-gradient(to bottom, grey, white 50%, grey);
        }
    }

    &.active-container {
        padding: 0 !important;
        font-size: 1.2rem;
        color: white;

        .image-container {
            height: calc(150px + $containerHoverAdditionalHeight);
            filter: grayscale(0);

            @include media-breakpoint-down(md) {
                height: auto; 
            }
        }
    }

    &.highlighted-container {
        font-size: 1.2rem;

        &.active-container {
            font-size: 1.3rem;
        }
    }
}
</style>