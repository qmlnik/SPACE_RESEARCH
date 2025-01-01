<template>
    <div class="fst-italic" style="word-break: break-word;">
        Források:<br />
        <ul>
            <li v-for="source in sources">
                <a :href="source" class="text-decoration-underline" target="_blank">{{ source }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        sources: {
            type: Array,
            required: true
        }
    }
};
</script>