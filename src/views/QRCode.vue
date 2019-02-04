<template>
    <div>
        <NavBar />
        <BottomBar />
        <h1>QR Code</h1>
    </div>
</template>

<script>
    import NavBar from "../components/NavBar";
    import BottomBar from "../components/BottomBar";

    export default {
        name: "QRCode",
        components: {NavBar, BottomBar},
    }
</script>

<style scoped>

</style>