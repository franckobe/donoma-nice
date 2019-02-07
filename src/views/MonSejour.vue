<template>
    <div class="toto">
        <NavBar titre="Mon séjour" />
        <BottomBar />

        <div class="jours">
            <div class="jour"
                 @click="jourSelectionne = index"
                 :class="(index) === jourSelectionne ? 'active' : ''"
                 v-for="(jour, index) in sejour.jours">
                <span>Jour<br/>{{ index + 1 }}</span>
            </div>
            <div class="plus" @click="ajouterJourSejour">
                <span></span>
                <span></span>
            </div>
        </div>

        <div class="sejour">
            <div class="buttons" v-if="jourSelectionne > -1">
                <div>
                    Jour {{ jourSelectionne + 1 }}
                </div>
                <div @click="supprimerJour">
                    Supprimer jour
                </div>
            </div>
            <div class="item" v-for="(lieu, index) in sejour.jours[jourSelectionne]">
                <div class="nb">{{ index + 1 }}</div>
                <div class="top">
                    <router-link :to="{name: 'lieu', params: {index: index}}">
                        <img :src="lieu.img" alt="img" />
                        <div class="text">
                            <span class="titre">{{ lieu.nom }}</span>
                            <span class="categorie">{{ lieu.categorie }}</span>
                        </div>
                    </router-link>
                </div>
                <div class="bottom">
                    <p><span>Temps :</span> {{ lieu.temps }}</p>
                    <p><span>Activités :</span> {{ lieu.hashtags }}</p>
                    <div class="buttons">
                        <div class="itineraire">
                            Itinéraire
                        </div>
                        <div class="supprimer" @click="supprimerItem(index)">
                            Supprimer
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" v-if="lieuSelectionneAjout !== null">
            <div class="modal-backdrop"></div>
            <div class="modal-content">
                <div class="modal-title">
                    <span>Sélectionnez un jour</span>
                </div>
                <div class="selection-jours">
                    <div class="jour"
                         :class="(index) === jourAjout ? 'active' : ''"
                         @click="selectionnerJour(index)"
                         v-for="(jour, index) in sejour.jours"
                    >
                        <span>Jour<br/>{{ index + 1 }}</span>
                    </div>
                    <div class="plus" @click="sejour.jours.push([])">
                        <span></span>
                        <span></span>
                    </div>
                    <div class="error" v-if="error">
                        Déjà programmé ce jour !
                    </div>
                </div>
                <div class="modal-footer">
                    <div @click="annulerSelection" class="btn-annuler">Annuler</div>
                    <div @click="validerSelection" class="btn-ajouter" v-if="btnAjouter">Ajouter</div>
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
                    return null;
                }
            }
        },
        data() {
            return {
                sejour: {},
                jourSelectionne: 0,
                lieuSelectionneAjout: this.lieuSelectionne,
                jourAjout: -1,
                btnAjouter: false,
                error: false,
            };
        },
        created() {
            this.sejour = this.$parent.sejour;
        },
        methods: {
            ajouterJourSejour() {
                this.sejour.jours.push([]);
                this.jourSelectionne = this.sejour.jours.length - 1;
            },
            selectionnerJour(index) {
                this.jourAjout = index;

                const vm = this;
                const lieux = this.sejour.jours[this.jourAjout];
                for (let i=0; i<lieux.length; i++) {
                    if (lieux[i].id === vm.lieuSelectionneAjout.id) {
                        vm.error = true;
                        vm.btnAjouter = false;
                        return false;
                    }
                }
                this.error = false;
                this.btnAjouter = true;
            },
            annulerSelection() {
                this.jourAjout = -1;
                this.lieuSelectionneAjout = null;
                this.btnAjouter = false;
                this.error = false;
            },
            validerSelection() {
                this.sejour.jours[this.jourAjout].push(this.lieuSelectionneAjout);
                this.lieuSelectionneAjout = null;
                this.jourAjout = -1;
                this.btnAjouter = false;
                this.error = false;
            },
            supprimerItem(lieu) {
                this.sejour.jours[this.jourSelectionne].splice(lieu,1);
            },
            supprimerJour() {
                this.sejour.jours.splice(this.jourSelectionne,1);
                this.jourSelectionne = this.jourSelectionne - 1;
            }
        },
    }
</script>

<style scoped lang="scss">

    .toto {
        position: relative;
    }

    .jours {
        position: fixed;
        left: 0;
        top: 90px;
        padding: 5px;
        background-color: #F1F1F1;
        width: 60px;
        min-height: 400px;
        height: 100%;
        overflow-y: auto;

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
    @media screen and (min-width: 993px) {
        .jours {
            top: 141px;
        }
    }

    .sejour {
        position: relative;
        left: 60px;
        top: 0;
        background-color: #fff;
        height: 100%;
        width: calc(100% - 60px);

        .buttons {
            display: flex;

            & > div {
                flex-grow: 1;
                padding: 5px 10px;
            }
            div:first-child {

            }
            div:last-child {
                text-align: right;
                color: #ff4641;
            }
        }

        .item {
            position: relative;
            border-bottom: solid 1px #000;
            border-left: solid 1px #000;
            margin: 10px 10px 0 10px;
            padding: 10px 10px 0 10px;

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
                div.buttons {
                    display: flex;
                    padding: 10px;
                    text-align: center;

                    & > div {
                        flex-grow: 1;
                        padding: 5px 0;
                    }
                    .supprimer {
                        color: #ff4641;
                    }
                    .itineraire {
                        background-color: #009fe3;
                        color: #fff;
                        border-radius: 5px;
                    }
                }
            }
        }
    }

    .modal {
        position: fixed;
        top: 90px;
        left: 0;
        width: 100%;
        height: 100%;

        .modal-backdrop {
            position: fixed;
            background-color: rgba(0, 0, 0, 0.7);
            top: 90px;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 50px;
        }

        .modal-content {
            position: relative;
            background-color: #fff;
            margin: 40px;
            border-radius: 10px;

            .selection-jours {
                position: relative;
                background-color: #f1f1f1;
                padding: 20px;
                .jour {
                    display: inline-block;
                    position: relative;
                    height: 40px;
                    width: 40px;
                    border-radius: 50%;
                    background-color: #fff;
                    text-align: center;
                    text-transform: uppercase;
                    line-height: 0.7em;
                    margin: 5px;
                    border: solid 1px #eee;

                    span {
                        position: relative;
                        top: 11px;
                        font-size: 0.8em;
                    }
                }
                .jour.active {
                    background-color: #009fe3;
                    color: #fff;
                }

                .plus {
                    position: relative;
                    display: block;
                    margin: 10px auto 0 auto;
                    height: 40px;
                    width: 40px;
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
                .error {
                    color: #ff4641;
                    padding: 5px;
                    text-align: center;
                }
            }

            .modal-title {
                text-align: center;
                padding: 10px;
            }
            .modal-footer {
                padding: 10px;
                text-align: center;
                display: flex;
                .btn-annuler {
                    flex-grow: 1;
                }
                .btn-ajouter {
                    flex-grow: 1;
                }
            }
        }
    }

</style>