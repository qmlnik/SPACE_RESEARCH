<template>
    <NuxtLink
        :to="`/#idovonal-ev-${parseInt($route.path.split('/').at(-1))}`"
        class="back-button d-block container fs-4 my-3 text-center"
    >
        <i class="bi bi-arrow-left-short fs-2" style="position: relative; top: 4px;"></i> Vissza
    </NuxtLink>

    <article class="container article-container" style="min-height: 100%;">
        <NuxtPage />
    </article>
</template>

<script>
</script>

<style lang="scss">
@import "~/assets/bootstrap/variables";
@import "~/node_modules/bootstrap/scss/functions";
@import "~/node_modules/bootstrap/scss/variables";
@import "~/node_modules/bootstrap/scss/mixins/breakpoints";

.article-container {
    background: $primary;

    @include media-breakpoint-down(md) {
        background: transparent;
    }
}

.back-button {
    background: $secondary;

    &:hover {
        background: lighten($secondary, 6%);
    }
}



.article-image-container {
    margin: 0 0 1rem 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    &.article-image-left {
        float: left;
        margin: 0 1rem 1rem 0;
    }

    &.article-image-right {
        float: right;
        margin: 0 0 1rem 1rem;
    }

    @include media-breakpoint-down(sm) {
        margin: 0 0 1rem 0 !important;
        width: 100%;
    }

    img {
        height: auto;
    }
}

.article-table-container {
    display: flex;
    justify-content: center;

    table {
        max-width: 800px;

        thead th {
            width: 50%;
        }
    }
}
</style>