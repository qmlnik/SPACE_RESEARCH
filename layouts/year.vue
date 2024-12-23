<template>
    <NuxtLink
        :to="`/#idovonal-ev-${$route.path.split('/').at(-1)}`"
        class="back-button d-block container fs-4 my-3 text-center"
    >
        <i class="bi bi-arrow-left-short fs-2" style="position: relative; top: 4px;"></i> Vissza
    </NuxtLink>

    <article class="container bg-primary" style="min-height: 100%;">
        <NuxtPage />
    </article>
</template>

<script>
</script>

<style lang="scss">
@import "~/assets/bootstrap/variables";

.back-button {
    background: $secondary;

    &:hover {
        background: lighten($secondary, 6%);
    }
}
</style>