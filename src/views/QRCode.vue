<template>
    <div>
        <NavBar />
        <BottomBar />

        <img :src="require('@/assets/captures/QRCode.png')"
             alt="transports" />

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
    img {
        z-index: 3;
        position: relative;
        height: 100%;
        width: 100%;
    }
</style>