<template>
    <div>
        <NavBar titre="Mon séjour" />
        <BottomBar />

        <div class="jours">
            <div class="jour"
                 @click="jourSelectionne = index"
                 :class="(index) === jourSelectionne ? 'active' : ''"
                 v-for="(jour, index) in sejour.jours">
                <span>Jour<br/>{{ index + 1 }}</span>
            </div>
            <div class="plus" @click="sejour.jours.push({})">
                <span></span>
                <span></span>
            </div>
        </div>

        <div class="sejour">
            <div class="item" v-for="(lieu, index) in sejour.jours[jourSelectionne]">
                <div class="nb">{{ index }}</div>
                <div class="top">
                    <img :src="lieu.img" alt="img" />
                    <div class="text">
                        <span class="titre">{{ lieu.nom }}</span>
                        <span class="categorie">{{ lieu.categorie }}</span>
                    </div>
                </div>
                <div class="bottom">
                    <p><span>Temps :</span> {{ lieu.temps }}</p>
                    <p><span>Activités :</span> {{ lieu.hashtags }}</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import NavBar from "../components/NavBar";
    import BottomBar from "../components/BottomBar";

    export default {
        name: "MonSejour",
        components: {NavBar, BottomBar},
        props: {
            lieuSelectionne: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        data() {
            return {
                sejour: {},
                jourSelectionne: 0
            };
        },
        created() {
            this.sejour = this.$parent.sejour;
        }
    }
</script>

<style scoped lang="scss">

    .jours {
        position: absolute;
        left: 0;
        top: 90px;
        padding: 5px;
        background-color: #F1F1F1;
        width: 60px;
        height: 100%;

        .jour {
            position: relative;
            height: 50px;
            width: 50px;
            border-radius: 50%;
            background-color: #fff;
            text-align: center;
            text-transform: uppercase;
            line-height: 0.9em;
            margin-bottom: 10px;

            span {
                position: relative;
                top: 12px;
                font-size: 0.9em;
            }
        }

        .jour.active {
            background-color: #009fe3;
            color: #fff;
        }

        .plus {
            position: relative;
            height: 50px;
            width: 50px;
            border-radius: 50%;
            background-color: #009fe3;

            span {
                position: absolute;
                height: 3px;
                border-radius: 10px;
                width: 60%;
                left: 20%;
                background-color: #fff;
                top: calc(50% - 1px);
            }
            span:last-child {
                transform: rotate(90deg);
            }
        }
    }

    .sejour {
        position: absolute;
        left: 60px;
        top: 90px;
        background-color: #fff;
        height: 100%;
        width: calc(100% - 60px);

        .item {
            position: relative;
            border-bottom: solid 1px #000;
            border-left: solid 1px #000;
            margin: 10px;
            padding: 10px;

            .nb {
                position: absolute;
                left: -9px;
                top: 0;
                background-color: #fff;
                border: solid 1px #000;
                border-radius: 50%;
                height: 1.1em;
                width: 1.1em;
                line-height: 1.1em;
                text-align: center;
                font-size: 0.9em;
            }

            .top {
                position: relative;

                img {
                    position: relative;
                    width: 100%;
                    height: 100px;
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
                        font-size: 1.1em;
                    }
                    .categorie {
                        font-size: 0.7em;
                    }
                }
            }
            .bottom {
                padding: 5px 0;
                p {
                    margin: 0;
                    font-size: 0.9em;
                    span {
                        font-weight: bold;
                    }
                }
            }
        }
    }

</style>