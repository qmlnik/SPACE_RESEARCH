<template>
    <div class="w-100" style="height: 90vh;">
        <Header></Header>
    </div>
    <Timeline />
</template>

<script>
export default {
    data() {
        return {
        };
    }
}
</script>

<style lang="scss">
body {
  background-size: 100% 100%, 100px 100px, 100px 100px;
  background-image:
    linear-gradient(to bottom, transparent, transparent 30%, #0b111b),
    linear-gradient(to right, transparent, transparent calc(50% - 1px), rgb(53, 53, 53) calc(50% + 1px), transparent calc(50% + 1px), transparent 100%),
    linear-gradient(to bottom, transparent, transparent calc(50% - 1px), rgb(53, 53, 53) calc(50% + 1px), transparent calc(50% + 1px), transparent 100%);
}
</style>