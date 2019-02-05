<template>
  <div>
    <NavBar titre="Mes favoris" />
    <BottomBar />

    <ul class="list-group">
      <li class="list-group-item" v-for="(lieu, index) in lieux">
        <router-link :to="{name: 'lieu', params: {index: index}}">
          <img :src="lieu.img" alt="img" />
          <div class="list-text">
            <span class="titre">{{ lieu.nom }}</span>
            <span class="categorie">{{ lieu.categorie }}</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

    import NavBar from "../components/NavBar";
    import BottomBar from "../components/BottomBar";

    export default {
        name: 'home',
        components: {NavBar, BottomBar},
        data() {
            return {
                lieux: [],
            }
        },
        created() {
            const parentLieux = this.$parent.lieux;
            this.lieux = parentLieux.filter(lieu => lieu.favoris);
        },
    }

</script>

<style scoped lang="scss">

  .list-group {
    position: relative;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;

    .list-group-item {
      display: block;
      width: 100%;
      a {
        display: block;
        width: 100%;
        position: relative;

        img {
          position: relative;
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .list-text {
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
      }
    }

  }

</style>
