<template>
    <div>
        <NavBar />
        <BottomBar />
        <h1>Carte & guide</h1>
    </div>
</template>

<script>
    import NavBar from "../components/NavBar";
    import BottomBar from "../components/BottomBar";

    export default {
        name: "CarteGuide",
        components: {NavBar, BottomBar},
    }
</script>

<style scoped>

</style>