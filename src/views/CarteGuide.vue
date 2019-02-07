<template>
    <div class="toto">
        <NavBar />
        <BottomBar />

        <div class="buttons">
            <div :class="selected === 'carte' ? 'active' : ''"
                @click="selected = 'carte'"
            >Carte</div>
            <div :class="selected === 'guide' ? 'active' : ''"
                @click="selected = 'guide'"
            >Guide</div>
        </div>

        <img :src="require('@/assets/captures/maps.png')"
             v-if="selected === 'carte'"
             alt="maps" />
        <img :src="require('@/assets/captures/guide.png')"
             v-if="selected === 'guide'"
             alt="guide" />

    </div>
</template>

<script>
    import NavBar from "../components/NavBar";
    import BottomBar from "../components/BottomBar";

    export default {
        name: "CarteGuide",
        components: {NavBar, BottomBar},
        data() {
            return {
                selected: 'carte',
            };
        }
    }
</script>

<style scoped lang="scss">
    .toto {
        position: relative;
    }
    .buttons {
        z-index: 5;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        height: 47px;
        line-height: 47px;
        text-align: center;
        background-color: #fff;
        div {
            position: relative;
            flex-grow: 1;
        }
        div.active {
            text-decoration: underline;
        }
    }
    img {
        z-index: 3;
        position: relative;
        height: 100%;
        width: 100%;
    }
</style>