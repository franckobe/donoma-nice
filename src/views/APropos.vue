<template>
    <div>
        <NavBar />
        <BottomBar />

        <div class="container">
            <p>
                Cette application est un prototype, les données ne sont pas réellement enregistrées.
            </p>
            <p>
                Développé par Donoma Agency
            </p>
        </div>

    </div>
</template>

<script>
    import BottomBar from "../components/BottomBar";
    import NavBar from "../components/NavBar";

    export default {
        name: "APropos",
        components: {NavBar, BottomBar},
    }
</script>

<style scoped>

</style>