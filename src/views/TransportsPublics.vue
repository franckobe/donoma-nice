<template>
    <div>
        <NavBar />
        <BottomBar />
        <h1>Transports publics</h1>
    </div>
</template>

<script>
    import NavBar from "../components/NavBar";
    import BottomBar from "../components/BottomBar";

    export default {
        name: "TransportsPublics",
        components: {NavBar, BottomBar},
    }
</script>

<style scoped>

</style>