<template>
    <div class="w-100 vh-100">
        <Header></Header>
    </div>
    <div class="container p-5" style="background: black; padding: 0 100px;">
        <Timeline></Timeline>
    </div>
</template>

<script>
export default {
    data() {
        return {
            timelineInfoTexts: {
                1957: "Első Űrrepülés.",
                1969: "Első Holdra szállás."
            }
        };
    }
}
</script>

<style lang="scss">
body {
  background-size: 100px 100px;
  background-image:
    linear-gradient(to right, transparent, transparent calc(50% - 1px), rgb(53, 53, 53) calc(50% + 1px), transparent calc(50% + 1px), transparent 100%),
    linear-gradient(to bottom, transparent, transparent calc(50% - 1px), rgb(53, 53, 53) calc(50% + 1px), transparent calc(50% + 1px), transparent 100%)
}
</style>