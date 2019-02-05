<template>
    <div>
        <NavBar titre="Convertisseur de devises" />
        <BottomBar />

        <div class="top">
            <div class="flag">
                <img src="../assets/icons/france.png" alt="fr" />
                <div class="devises">
                    <span>EUR</span>
                    <span>Euro</span>
                </div>
                <span class="value">1.00</span>
            </div>
        </div>
        <img src="../assets/icons/fleches.png" alt="fleches" class="fleches" />
        <div class="bottom">
            <div class="flag">
                <img src="../assets/icons/usa.png" alt="usa" />
                <div class="devises">
                    <span>USD</span>
                    <span>Dollars Américain</span>
                </div>
                <span class="value">1.50</span>
            </div>
        </div>
        <div class="proximite">
            <span>Bureaux de change à proximité</span>
        </div>
        <div class="proximites">
            <div class="localisation-btn">
                <img src="../assets/icons/location-white.png" alt="pt" />
                <span>Autoriser la localisation</span>
            </div>
        </div>
    </div>
</template>

<script>
    import BottomBar from "../components/BottomBar";
    import NavBar from "../components/NavBar";

    export default {
        name: "Monnaie",
        components: {NavBar, BottomBar},
    }
</script>

<style scoped lang="scss">
    .top, .bottom {
        display: block;
        width: 100%;
        position: relative;
        height: 150px;
        padding: 25px;
    }
    .top {
        background-color: #f1f1f1;
    }
    .flag {
        position: relative;
        img {
            height: 100px;
            float: left;
        }
        .devises {
            position: relative;
            top: 25px;
            left: 10px;
        }
        span {
            display: block;
        }
        span.value {
            float: right;
        }
    }
    .proximite {
        background-color: #f1f1f1;
        padding: 10px 25px;
        text-align: center;
    }

    .proximites {
        text-align: center;
    }
    .fleches {
        position: absolute;
        height: 50px;
        left: calc(50% - 25px);
        margin-top: -25px;
    }
    .localisation-btn {
        position: relative;
        background-color: #009fe3;
        color: #fff;
        margin-top: 20px;
        display: inline-block;
        border-radius: 5px;
        padding: 5px 10px;
        text-align: center;
        height: 40px;
        line-height: 40px;
        img {
            position: relative;
            height: 100%;
        }
        span {
            position: relative;
            padding-left: 1em;
            top: -9px;
        }
    }
</style>