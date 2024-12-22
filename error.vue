<template>
    <div class="error-container d-flex align-items-center justify-content-center">
        <div class="p-5 d-flex align-items-center flex-column text-center backdrop">
            <h1 class="mb-4 fw-bold fs-1">{{ error.statusCode }}</h1>
            <h2 class="mb-4">{{ error.statusCode === 404 ? message404 : messageDefault }}</h2>
            <button
                @click="redirect"
                class="btn btn-outline-primary btn-lg"
                type="button"
            >
                <i class="bi bi-arrow-left-short fs-2" style="position: relative; top: 4px;"></i> Vissza a főoldalra
            </button>
        </div>
        <div class="position-absolute bottom-0 p-3 backdrop fst-italic"> A Perseverance rover képe a Santa Cruz dombról a Mars Jezero kráterében</div>
    </div>
</template>

<script>
export default {
    props: {
        error: {
            type: Object
        }
    },
    data() {
        return {
            message404: "Erre még csak rover járt, ember nem hagyta nyomát",
            messageDefault: "Hiba történt"
        };
    },
    methods: {
        redirect() {
            this.$router.push("/");
        }
    }
};
</script>

<style>
.error-container {
    width: 100%;
    /* biztosan leérjen a háttérkép a képernyő aljáig (toolbar issue) */
    height: max(100vh, 100%);
    background: url(~/assets/images/mars_perseverance_santa_cruz.webp);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
</style>