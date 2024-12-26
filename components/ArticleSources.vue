<template>
    <p class="fst-italic">
        Források:<br />
        <ul>
            <li v-for="source in sources">
                <a :href="source" class="text-decoration-underline" target="_blank">{{ source }}</a>
            </li>
        </ul>
    </p>
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