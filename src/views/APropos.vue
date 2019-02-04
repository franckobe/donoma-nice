<template>
    <div>
        <NavBar />
        <BottomBar />

        <h1>A propos</h1>
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