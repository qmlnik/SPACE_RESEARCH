<template>
    <NuxtLink
        class="timeline-container"
        :class="[isStrip ? 'strip-container' : null, yearContent?.isHighlighted ? 'container-highlighted' : null]"
        :to="`/year/${year}`"
    >
        <div class="py-5 py-md-2 px-2 d-flex">
            <div
                class="d-flex align-items-center mx-2"
                :class="[yearContent?.isHighlighted ? 'text-decoration-underline' : null]"
                style="width: 3rem;"
            >
                {{ year }}
            </div>
            <div class="dot-line-container">
                <template v-if="!isStrip">  
                    <div class="dot">
                    </div>
                    <div class="line"></div>
                </template>
            </div>
            <div class="row g-4" style="width: calc(100% - 100px);">
                <div class="col-md-7 d-flex align-items-center">
                    {{ yearContent?.text }}
                </div>
                <div class="col-md-5 d-flex">
                    <div
                        v-for="{ src, caption } in yearContent?.images ?? []"
                        class="image-cropper"
                    >
                        <img :src="src" />
                        <div class="image-caption">{{ caption }}</div>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script>
export default {
    props: {
        year: {
            type: Number,
            required: true
        },
        isStrip: {
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
@import "./variables";

.timeline-wrapper {
    &:hover, &:focus {
        .timeline-container {
            padding: $containerHoverAdditionalHeight / 2 0;   
        }

        .dot {
            border-color: white !important;
        }
    }

    &:first-of-type .line {
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

.timeline-container {
    display: inline-block;
    width: 100%;
    font-size: 1.1rem;
    color: $inactiveColor;
    background: black;
    transition: $containerTransition;

    .image-cropper {
        width: 50%;
        height: 150px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        filter: grayscale(0.6);

        img {
            height: 100%;
            width: auto;
        }

        .image-caption {
            position: absolute;
            bottom: 0;
            background: black;
            width: 100%;
            text-align: center;
            padding: 0.2rem;
            font-size: 0.8rem;
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
            background: black;
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

    &.strip-container {
        padding: 0 !important;
        font-size: 1.2rem;
        color: white;

        .image-cropper {
            height: calc(150px + $containerHoverAdditionalHeight);
            filter: grayscale(0);
        }
    }

    &.container-highlighted {
        font-size: 1.2rem;

        &.strip-container {
            font-size: 1.3rem;
        }
    }
}
</style>