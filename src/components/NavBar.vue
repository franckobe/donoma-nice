<template>
    <div id="navbar">
        <div id="backdrop" :class="menuOpened ? 'opened' : ''" @click="menuOpened = !menuOpened"></div>
        <div class="menu-btn" :class="menuOpened ? 'opened' : ''" @click="menuOpened = !menuOpened">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="search-btn">
            <img src="../assets/search.png" alt="" />
        </div>
        <div class="logo">
            <img src="../assets/logo_nice.png" alt="Logo" />
        </div>
        <ul class="side-menu" :class="menuOpened ? 'opened' : ''">
            <li class="top">
                <div class="menu-btn" :class="menuOpened ? 'opened' : ''" @click="menuOpened = !menuOpened">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="user" v-if="userConnected">
                    <div class="photo">
                        <img src="../assets/amandine.png" alt="" />
                    </div>
                    <div class="details">
                        <span>Amandine</span>
                        <span>Vigier</span>
                        <router-link to="profil" @click.native="closeMenu">Mon profil</router-link>
                    </div>
                </div>
                <div class="user" v-else>
                    <router-link to="connexion" class="btn-connexion">
                        Connexion
                    </router-link>
                </div>
            </li>
            <li class="separator"></li>
            <li class="big"><router-link to="inspirations" @click.native="closeMenu">Trouver l'inspiration</router-link></li>
            <li class="separator"></li>
            <li class="title">
                Essentiel de voyage
            </li>
            <li><router-link to="transports-publics" @click.native="closeMenu">Transports publics</router-link></li>
            <li><router-link to="navettes" @click.native="closeMenu">Navette à la demande</router-link></li>
            <li><router-link to="carte-guide" @click.native="closeMenu">Carte & guide</router-link></li>
            <li><router-link to="qr-code" @click.native="closeMenu">QR Code</router-link></li>
            <li><router-link to="qr-code" @click.native="closeMenu">Exposition</router-link></li>
            <li class="separator"></li>
            <li class="title">
                L'application
            </li>
            <li><router-link to="a-propos" @click.native="closeMenu">A propos</router-link></li>
            <li><router-link to="deconnexion">Déconnexion</router-link></li>
            <li class="separator"></li>
            <li class="big"><router-link to="tell-my-city">Tell my city</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        data() {
            return {
                menuOpened: false,
                userConnected: true,
            }
        },
        methods: {
            closeMenu() {
                this.menuOpened = false;
            }
        }
    }
</script>

<style scoped lang="scss">
    #navbar {
        display: block;
        z-index: 10;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: #F9F9F9;
        padding: 15px 40px;

        @keyframes fadeIn {
            0% {
                opacity: 0;
            }
            20% {
                display: block;
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }

        #backdrop {
            transition: opacity ease 1s;
            position: fixed;
            top: 0;
            left: 0;
            display: none;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.6);
            &.opened {
                display: block;
                z-index: 9;
                animation: fadeIn 0.5s;
            }
        }

        .logo {
            text-align: center;
        }
        img {
            height: 60px;
            width: auto;
        }

        .side-menu {
            z-index: 15;
            position: fixed;
            left: 100%;
            height: 100%;
            background-color: #f9f9f9;
            top: 0;
            list-style: none;
            width: 80%;
            margin: 0;
            padding: 0;
            transition: all ease 0.4s;
            border-left: solid 1px #cbcbcb;

            &.opened {
                left: 20%;
            }

            li {
                margin: 0;
                padding: 0;
                font-size: 1.2em;
                cursor: pointer;
                width: 100%;
                &.separator {
                    position: relative;
                    padding: 0;
                    height: 1px;
                    background-color: #dfdfdf;
                    width: 90%;
                    margin: 0 auto;
                }
                &.title {
                    padding: 10px;
                }
                &:not(.title):not(.separator):not(.top):not(.big) {
                    font-size: 0.9em;
                }
                &.top {
                    position: relative;
                    padding: 15px 40px 10px 10px;
                    height: 96px;
                    width: 100%;
                    .user {
                        display: flex;
                        font-size: 16px;
                        .photo {
                            text-align: center;
                            padding: 5px 10px;
                            img {
                                height: 55px;
                                width: 55px;
                                object-fit: cover;
                                border: solid 1px #a0a0a0;
                                border-radius: 50%;
                            }
                        }
                        .details {
                            a {
                                padding: 0;
                            }
                            span {
                                display: block;
                            }
                        }
                        .btn-connexion {
                            position: relative;
                            background-color: #009fe3;
                            color: #ffffff;
                            padding: 5px 10px;
                            border-radius: 5px;
                        }
                    }
                }

                a {
                    color: #404040;
                    text-decoration: none;
                    display: block;
                    height: 100%;
                    width: 100%;
                    padding: 5px 10px;
                }
                a.router-link-exact-active {
                    color: #009fe3;
                }
            }

        }
        @media screen and (min-width: 993px) {
            .side-menu {
                width: 50%;
                &.opened {
                    left: 50%;
                }
            }
        }

        .menu-btn {
            float: right;
            position: relative;
            top: 21px;
            height: 24px;
            width: 24px;
            background: none;
            border: none;
            padding: 5px;
            cursor: pointer;
            span {
                background: #404040;
                height: 2px;
                border-radius: 5px;
                width: 100%;
                left: 0;
                position: absolute;
                transition: all ease 0.6s;
            }
            span:first-child {
                top: 4px;
            }
            span:nth-child(2) {
                top: 11px;
            }
            span:last-child {
                bottom: 4px;
            }

            &.opened {
                span:nth-child(2) {
                    display: none;
                }
                span:nth-child(1) {
                    transform: rotate(-45deg);
                    position: absolute;
                    top: 50%;
                }
                span:nth-child(3) {
                    transform: rotate(45deg);
                    position: absolute;
                    top: calc(50%);
                }
            }
        }

        .search-btn {
            position: absolute;
            left: 40px;
            top: 40px;
            img {
                height: 24px;
                cursor: pointer;
            }
        }

    }
</style>