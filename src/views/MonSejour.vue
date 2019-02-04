<template>
    <div>
        <NavBar />
        <BottomBar />

        <h1>Mon séjour</h1>

        <div class="rond">
            <div class="jauge p-25"></div>
            <div class="container"></div>
        </div>

        <div class="rond">
            <div class="jauge p-50"></div>
            <div class="container"></div>
        </div>

        <div class="rond">
            <div class="jauge p-75"></div>
            <div class="container"></div>
        </div>

    </div>
</template>

<script>
    import NavBar from "../components/NavBar";
    import BottomBar from "../components/BottomBar";

    export default {
        name: "MonSejour",
        components: {NavBar, BottomBar},
    }
</script>

<style scoped lang="scss">

    .rond {
        position: relative;
        height: 100px;
        width: 100px;
        border-radius: 100%;
        padding: 5px;
        border: solid 2px #b14823;
        overflow: hidden;

        .container {
            position: absolute;
            background-color: #b14823;
            width: calc(100% - 10px);
            height: calc(100% - 10px);
            top: 5px;
            border-radius: 100%;
            z-index: 10;
        }

        .jauge {
            z-index: 9;
            position: relative;
            height: 100%;
            background-color: #b1960d;
        }
        .jauge.p-25 {
            left: 50%;
            bottom: 50%;
        }
        .jauge.p-50 {
            left: 50%;
            top: -5px;
            height: calc(100% + 10px);
        }
    }

</style>