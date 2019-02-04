<template>
    <div>
        <NavBar />
        <BottomBar />

        <h1>Navettes</h1>
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