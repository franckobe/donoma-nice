<template>
  <div id="app">

    <div id="navbar">
      <div id="backdrop" :class="menuOpened ? 'opened' : ''" @click="menuOpened = !menuOpened"></div>
      <div class="menu-btn" :class="menuOpened ? 'opened' : ''" @click="menuOpened = !menuOpened">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <img src="./assets/logo_nice.png" alt="Logo" />
      <ul class="side-menu" :class="menuOpened ? 'opened' : ''">
        <li class="top">
          <div class="menu-btn" :class="menuOpened ? 'opened' : ''" @click="menuOpened = !menuOpened">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="user">
            <div class="photo">
              <img src="./assets/logo.png" alt="" />
            </div>
            <div class="details">
              <span>Nicolas</span>
              <span>Bouffier</span>
              <router-link to="profil" @click.native="closeMenu">Mon profil</router-link>
            </div>
          </div>
        </li>
        <li><router-link to="inspirations" @click.native="closeMenu">Trouver l'inspiration</router-link></li>
        <li class="separator"></li>
        <li><router-link to="essentiel" @click.native="closeMenu">Essentiel de voyage</router-link></li>
        <li class="separator"></li>
        <li><router-link to="transports-publics" @click.native="closeMenu">Transports publics</router-link></li>
        <li><router-link to="navettes" @click.native="closeMenu">Navette à la demande</router-link></li>
        <li><router-link to="carte-guide" @click.native="closeMenu">Carte & guide</router-link></li>
        <li><router-link to="qr-code" @click.native="closeMenu">QR Code</router-link></li>
        <li class="separator"></li>
        <li><router-link to="a-propos" @click.native="closeMenu">A propos</router-link></li>
        <li><router-link to="deconnexion">Déconnexion</router-link></li>
      </ul>
    </div>

    <div id="bottombar">
      <ul class="menu">
        <li>
          <router-link to="/">
            <img src="./assets/logo.png" alt="" />
            Accueil
          </router-link>
        </li>
        <li>
          <router-link to="/favoris">
            <img src="./assets/logo.png" alt="" />
            Favoris
          </router-link>
        </li>
        <li>
          <router-link to="/monnaie">
            <img src="./assets/logo.png" alt="" />
            Monnaie
          </router-link>
        </li>
        <li>
          <router-link to="/mon-sejour">
            <img src="./assets/logo.png" alt="" />
            Mon séjour
          </router-link>
        </li>
      </ul>
    </div>

    <router-view/>

  </div>
</template>

<script>
  export default {
      name: 'App',
      data() {
          return {
              menuOpened: false,
          }
      },
      methods: {
          closeMenu() {
              this.menuOpened = false;
          }
      }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

  #navbar {
    display: block;
    position: relative;
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
      background-color: rgba(0, 0, 0, 0.68);
      &.opened {
        display: block;
        z-index: 9;
        animation: fadeIn 0.5s;
      }
    }

    img {
      height: $navbarElemsHeight;
      width: auto;
    }

    .side-menu {
      z-index: 10;
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
      border-left: solid 1px #7d7d7d;

      &.opened {
        left: 20%;
      }

      li {
        margin: 0;
        padding: 0;
        line-height: 20px;
        font-size: 20px;
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
        &.top {
          position: relative;
          padding: 15px 40px 15px 10px;
          height: 116px;
          width: 100%;
          .user {
            display: flex;
            font-size: 16px;
            .photo {
              text-align: center;
              padding: 10px;
              img {
                height: 40px;
                width: 40px;
                object-fit: contain;
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
          }
        }
      }
      li a {
        color: #404040;
        text-decoration: none;
        display: block;
        height: 100%;
        width: 100%;
        padding: 10px;
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

  }


  #bottombar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;

    @media screen and (min-width: 993px) {
      position: relative;
      border-top: solid 1px #eee;
      border-bottom: solid 1px #eee;
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
        font-size: 0.8em;
        img {
          display: block;
          margin: 0 auto;
          height: 24px;
          width: auto;
        }
        a {
          text-decoration: none;
          color: #000;
          display: block;
          height: 100%;
          width: 100%;
        }
      }
      li:not(:last-child)::after {
        content: '';
        position: absolute;
        right: 0;
        height: 80%;
        width: 1px;
        background-color: #eee;
        top: 10%;
      }
    }

  }


</style>
