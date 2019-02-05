<template>
    <div>
        <NavBar :backbutton="true" />
        <BottomBar />

        <div class="header">
            <img :src="lieu.img" alt="img" />
            <div class="text">
                <span class="titre">{{ lieu.nom }}</span>
                <span class="categorie">{{ lieu.categorie }}</span>
            </div>
            <div class="buttons">
                <div class="favoris-btn"
                     @click="lieu.favoris = !lieu.favoris"
                     :class="lieu.favoris ? 'active' : ''">
                    <img :src="lieu.favoris ? require('@/assets/icons/heart-white.png') : require('@/assets/icons/heart-blue.png')" alt="img" />
                </div>
                <div class="sejour-btn"
                     @click="goToSejour">
                    <img :src="require('@/assets/icons/bag-thin-green.png')" alt="img" />
                </div>
            </div>
        </div>
        <div class="tripadvisor">
            <img :src="require('@/assets/icons/tripadvisor.png')" alt="img" />
            <span>Basé sur <span class="green">1398 Avis</span></span>
        </div>
        <div class="raccourcis">
            <a :href="lieu.coordonnees" target="_blank">
                <img :src="require('@/assets/icons/map.png')" alt="img" /> <span>Y aller</span>
            </a>
            <a href="tel:0622002985">
                <img :src="require('@/assets/icons/phone.png')" alt="img" /> <span>Appeler</span>
            </a>
            <a>
                <img :src="require('@/assets/icons/export-thin.png')" alt="img" /> <span>Partager</span>
            </a>
        </div>
        <p class="description"
           :class="descriptionExpanded ? 'expanded' : ''"
           @click="descriptionExpanded = !descriptionExpanded">
            {{ lieu.description }}
        </p>
        <ul class="details">
            <li>
                <img :src="require('@/assets/icons/location-black.png')" alt="img" />
                <span>{{ lieu.adresse }}</span>
            </li>
            <li>
                <img :src="require('@/assets/icons/clock.png')" alt="img" />
                <span>Temps sur place : {{ lieu.temps }}</span>
            </li>
            <li>
                <img :src="require('@/assets/icons/bag.png')" alt="img" />
                <span>{{ lieu.nbVisites }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import NavBar from "../components/NavBar";
    import BottomBar from "../components/BottomBar";
    export default {
        name: "Lieu",
        components: {BottomBar, NavBar},
        props: [
            'index'
        ],
        data() {
            return {
                lieu: {},
                sejour: {},
                descriptionExpanded: false,
            }
        },
        created() {
            this.lieu = this.$parent.lieux[this.index];
            this.sejour = this.$parent.sejour;
        },
        methods: {
            goToSejour() {
                this.$router.push({
                    name: 'mon-sejour',
                    params: {
                        lieuSelectionne: this.lieu
                    }
                });
            }
        }
    }
</script>

<style scoped lang="scss">

    .header {
        position: relative;
        width: 100%;

        img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .text {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 10px 20px;
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0.04), #000);
            height: auto;

            span {
                display: block;
                color: #fff;
            }

            .titre {
                font-size: 1.2em;
            }
            .categorie {
                font-size: 0.8em;
            }
        }
        .buttons {
            position: absolute;
            bottom: 0;
            right: 0;
            padding: 17px;

            & > div {
                margin-left: 5px;
                display: inline-block;
                background-color: #ffffff;
                border-radius: 50%;
                height: 36px;
                width: 36px;
            }
            & > div.favoris-btn.active {
                background-color: #009fe3;
            }
            & > div.sejour-btn.active {
                background-color: #38af72;
            }

            img {
                position: relative;
                top: 8px;
                height: 20px;
                object-fit: contain;
            }
        }
    }
    .tripadvisor {
        padding: 10px;
        text-align: center;
        img {
            height: 25px;
            padding-right: 10px;
        }
        & > span {
            position: relative;
            top: -7px;
            .green {
                color: #38af72;
                font-weight: bold;
            }
        }
    }

    .raccourcis {
        display: block;
        background-color: #F1F1F1;

        & > a {
            display: inline-block;
            width: 33%;
            padding: 8px 5px;
            text-align: center;
            text-decoration: none;
            color: inherit;
            img {
                height: 25px;
            }
            span {
                position: relative;
                top: -6px;
                padding-left: 10px;
                text-transform: uppercase;
                font-size: 0.8em;
            }
        }
    }

    .description {
        position: relative;
        text-align: justify;
        padding: 10px 20px 22px 20px;
        margin: 0;
        border-bottom: solid 1px #4b4b4b;
        height: 80px;
        overflow: hidden;
    }
    .description::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background:
                url("../assets/icons/arrow-down.png") center bottom no-repeat,
                linear-gradient(to bottom, rgba(255, 255, 255, 0.36), #ffffff);
        background-size: 30px;
    }
    .description.expanded {
        height: auto;
    }
    .description.expanded::after {
        background:
                url("../assets/icons/arrow-top.png") center bottom no-repeat;
        background-size: 30px;
    }

    .details {
        position: relative;
        list-style: none;
        margin: 0;
        padding: 10px 20px;
        line-height: 35px;

        img {
            width: 30px;
            padding-right: 10px;
        }
        span {
            font-size: 0.9em;
            position: relative;
            top: -3px;
        }
    }

</style>