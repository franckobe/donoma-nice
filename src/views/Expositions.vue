<template>
    <div>
        <NavBar />
        <BottomBar />

        <div class="container">
            <p>
                Ici seront présentées les différentes expositions de la ville.
            </p>
        </div>

    </div>
</template>

<script>
    import BottomBar from "../components/BottomBar";
    import NavBar from "../components/NavBar";

    export default {
        name: "Navette",
        components: {NavBar, BottomBar},
    }
</script>

<style scoped>

</style>