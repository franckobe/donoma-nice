<template>
    <div>
        <NavBar />
        <BottomBar />

        <h1>Essentiel</h1>
    </div>
</template>

<script>
    import NavBar from "../components/NavBar";
    import BottomBar from "../components/BottomBar";

    export default {
        name: "Essentiel",
        components: {NavBar, BottomBar},
    }
</script>

<style scoped>

</style>