<template>
    <div>
        <NavBar />
        <BottomBar />
        <h1>Profil</h1>
    </div>
</template>

<script>
    import NavBar from "../components/NavBar";
    import BottomBar from "../components/BottomBar";

    export default {
        name: "Profil",
        components: {NavBar, BottomBar},
    }
</script>

<style scoped>

</style>