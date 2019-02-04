<template>
    <div id="bottombar">
        <ul class="menu">
            <li>
                <router-link to="/">
                    <img src="../assets/icons/star.png" alt="" />
                    Recommandés
                </router-link>
            </li>
            <li>
                <router-link to="/favoris">
                    <img src="../assets/icons/heart.png" alt="" />
                    Favoris
                </router-link>
            </li>
            <li>
                <router-link to="/monnaie">
                    <img src="../assets/icons/devises.png" alt="" />
                    Monnaie
                </router-link>
            </li>
            <li>
                <router-link to="/mon-sejour">
                    <img src="../assets/icons/bag-thin.png" alt="" />
                    Mon séjour
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "BottomBar"
    }
</script>

<style scoped lang="scss">
    #bottombar {
        z-index: 9;
        position: fixed;
        background-color: #fff;
        bottom: 0;
        left: 0;
        width: 100%;
        border-top: solid 1px #eee;

        @media screen and (min-width: 993px) {
            position: fixed;
            border-bottom: solid 1px #eee;
            top: 96px;
            bottom: inherit;
        }

        .menu {
            list-style: none;
            display: flex;
            margin: 0;
            padding: 0;
            li {
                position: relative;
                text-align: center;
                flex: 1;
                padding: 5px;
                font-size: 0.6em;
                img {
                    display: block;
                    margin: 0 auto 3px auto;
                    height: 24px;
                    width: auto;
                }
                a {
                    text-decoration: none;
                    color: #000;
                    display: block;
                    height: 100%;
                    width: 100%;
                    text-transform: uppercase;
                }
                a.router-link-exact-active {
                    color: #009fe3;
                }
            }
            li:not(:last-child)::after {
                content: '';
                position: absolute;
                right: 0;
                height: 80%;
                width: 1px;
                background-color: transparent;
                top: 10%;
            }
        }

    }
</style>