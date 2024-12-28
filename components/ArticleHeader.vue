<template>
    <div class="px-md-3">
        <header
            class="
                header-container
                w-100
                d-flex
                align-items-center
                justify-content-center
                overflow-hidden
                position-relative
                mb-5
            "
        >
            <picture
                v-for="image in images"
            >
                <source
                    media="(max-width: 576px)"
                    :srcset="image.mobile"
                >
                <source
                    media="(max-width: 992px)"
                    :srcset="image.tablet"
                >
                <source :srcset="image.desktop">
                <img :src="image.desktop" class="header-image">
            </picture>
            <h1 class="position-absolute p-3 backdrop">{{ title }}</h1>
        </header>
    </div>
</template>

<script>
export default {
    props: {
        images: {
            type: Array,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    },

    data() {
        return {

        };
    }
}
</script>

<style lang="scss">
@import "~/node_modules/bootstrap/scss/functions";
@import "~/node_modules/bootstrap/scss/variables";
@import "~/node_modules/bootstrap/scss/mixins/breakpoints";

.header-container {
    height: 240px;

    @include media-breakpoint-down(lg) {
        height: 200px;
    }

    .header-image {
        width: 34%;
        transform: rotate(-10deg);
        transform-origin: right bottom;
        position: absolute;
        bottom: 0;
    }

    picture:nth-child(1) .header-image {
        left: 0;
    }

    picture:nth-child(2) .header-image {
        left: 35%;
    }

    picture:nth-child(3) .header-image {
        left: 70%;
    }
}
</style>