import Vue from 'vue'
import Router from 'vue-router'
import Accueil from './views/Accueil.vue'
import Favoris from './views/Favoris.vue'
import Monnaie from "./views/Monnaie";
import MonSejour from "./views/MonSejour";
import Inspirations from "./views/Inspirations";
import Essentiel from "./views/Essentiel";
import Profil from "./views/Profil";
import TransportsPublics from "./views/TransportsPublics";
import Navettes from "./views/Navettes";
import CarteGuide from "./views/CarteGuide";
import QRCode from "./views/QRCode";
import APropos from "./views/APropos";
import Lieu from "./views/Lieu";

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'accueil',
            component: Accueil
        },
        {
            path: '/favoris',
            name: 'favoris',
            component: Favoris
        },
        {
            path: '/monnaie',
            name: 'monnaie',
            component: Monnaie
        },
        {
            path: '/mon-sejour',
            name: 'mon-sejour',
            component: MonSejour,
            props: true
        },
        {
            path: '/profil',
            name: 'profil',
            component: Profil
        },

        {
            path: '/lieu',
            name: 'lieu',
            component: Lieu,
            props: true
        },

        {
            path: '/inspirations',
            name: 'inspirations',
            component: Inspirations
        },
        {
            path: '/essentiel',
            name: 'essentiel',
            component: Essentiel
        },
        {
            path: '/transports-publics',
            name: 'transports-publics',
            component: TransportsPublics
        },
        {
            path: '/navettes',
            name: 'navettes',
            component: Navettes
        }
        ,
        {
            path: '/carte-guide',
            name: 'carte-guide',
            component: CarteGuide
        }
        ,
        {
            path: '/qr-code',
            name: 'qr-code',
            component: QRCode
        }
        ,
        {
            path: '/a-propos',
            name: 'a-propos',
            component: APropos
        }
        ,
        {
            path: '/deconnexion',
            name: 'deconnexion',
            component: Accueil
        }



    ]
})
