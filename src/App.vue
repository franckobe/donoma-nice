<template>
  <div id="app">

    <main>
      <router-view/>
    </main>

  </div>
</template>

<script>
  export default {
      name: 'App',
      components: {},
      data() {
          return {
              lieux: [
                  {
                      id: 1,
                      nom: 'Promenade des anglais',
                      img: require('@/assets/images/promenade.jpeg'),
                      categorie: 'Attraction incontournable',
                      description: 'La promenade des Anglais est une avenue longeant le bord de mer dans la baie des ' +
                          'Anges, à Nice. Son histoire, liée aux débuts du tourisme international, et sa situation ' +
                          'exceptionnelle, en bord de mer, longée par des hôtels prestigieux, en font l\'une des ' +
                          'plus célèbres avenues du monde.',
                      adresse: 'Promenade des anglais, 06200 Nice',
                      coordonnees: 'https://www.google.fr/maps/place/197+Prom.+des+Anglais,+06200+Nice/@43.6868201,7.2355243,17z/data=!3m1!4b1!4m5!3m4!1s0x12cdd044a520e6bf:0x29a7a6881bf8188f!8m2!3d43.6868201!4d7.237713',
                      temps: '2-3 heures',
                      nbVisites: '11 millions de touristes chaque année',
                      favoris: true,
                  },
                  {
                      id: 2,
                      nom: 'Place Massena',
                      img: require('@/assets/images/massena.jpg'),
                      categorie: 'Patrimoine et culture',
                      description: 'La place Masséna est une place du centre-ville de Nice, désignée ainsi en hommage ' +
                          'au maréchal d’Empire André Masséna, niçois de naissance. Depuis sa construction progressive ' +
                          'à partir des années 1820-1830 sur le modèle de la place Vittorio Veneto de Turin, la place ' +
                          'Masséna s’est profondément inscrite dans le patrimoine niçois. Elle est un « joyau » de la ' +
                          'ville (Édouard Scoffier dans son œuvre, réalisée avec Felix Blanchi, sur le Consiglio ' +
                          'd\'Ornato) et un espace central de la ville de Nice.',
                      adresse: 'Place Massena, 06000 Nice',
                      coordonnees: 'https://www.google.fr/maps/place/Place+Massena,+Nice/@43.6972089,7.2684123,17z/data=!3m1!4b1!4m5!3m4!1s0x12cddaa161703019:0x4069c261780c67c!8m2!3d43.697205!4d7.2705956',
                      temps: '1-2 heures',
                      nbVisites: '11 millions de touristes chaque année',
                      hashtags: '#Visite #vue #mer',
                      favoris: false,
                  },
                  {
                      id: 3,
                      nom: 'Marché artisanal nocture',
                      img: require('@/assets/images/marche2.jpg'),
                      categorie: 'Shopping',
                      description: 'Un marché d’artisanat estival nocturne qui anime le Cours Saleya de mi-mai à ' +
                          'mi-septembre. Pendant les rafraichissantes soirées d’été, admirez les bijoux, poteries ' +
                          'et peintures réalisés avec passion par des artisans niçois.',
                      adresse: 'Cours Saleya, 06300 Nice',
                      coordonnees: 'https://www.google.fr/maps/place/Cours+Saleya,+06300+Nice/@43.6956109,7.2727394,17z/data=!3m1!4b1!4m5!3m4!1s0x12cddaa320b7663b:0xc17d02743fe180be!8m2!3d43.695607!4d7.2749227',
                      temps: '1-2 heures',
                      nbVisites: '1 millions de touristes chaque année',
                      hashtags: '#Visite #vue #mer',
                      favoris: false,
                  }
              ],
              sejour: {
                  jours: [
                      [
                          {
                              id: 2,
                              nom: 'Place Massena',
                              img: require('@/assets/images/massena.jpg'),
                              categorie: 'Patrimoine et culture',
                              description: 'La place Masséna est une place du centre-ville de Nice, désignée ainsi en hommage ' +
                                  'au maréchal d’Empire André Masséna, niçois de naissance. Depuis sa construction progressive ' +
                                  'à partir des années 1820-1830 sur le modèle de la place Vittorio Veneto de Turin, la place ' +
                                  'Masséna s’est profondément inscrite dans le patrimoine niçois. Elle est un « joyau » de la ' +
                                  'ville (Édouard Scoffier dans son œuvre, réalisée avec Felix Blanchi, sur le Consiglio ' +
                                  'd\'Ornato) et un espace central de la ville de Nice.',
                              adresse: 'Place Massena, 06000 Nice',
                              coordonnees: 'https://www.google.fr/maps/place/Place+Massena,+Nice/@43.6972089,7.2684123,17z/data=!3m1!4b1!4m5!3m4!1s0x12cddaa161703019:0x4069c261780c67c!8m2!3d43.697205!4d7.2705956',
                              temps: '1-2 heures',
                              nbVisites: '11 millions de touristes chaque année',
                              hashtags: '#Visite #vue #mer',
                              favoris: false,
                          },
                          {
                              id: 3,
                              nom: 'Marché artisanal nocture',
                              img: require('@/assets/images/marche2.jpg'),
                              categorie: 'Shopping',
                              description: 'Un marché d’artisanat estival nocturne qui anime le Cours Saleya de mi-mai à ' +
                                  'mi-septembre. Pendant les rafraichissantes soirées d’été, admirez les bijoux, poteries ' +
                                  'et peintures réalisés avec passion par des artisans niçois.',
                              adresse: 'Cours Saleya, 06300 Nice',
                              coordonnees: 'https://www.google.fr/maps/place/Cours+Saleya,+06300+Nice/@43.6956109,7.2727394,17z/data=!3m1!4b1!4m5!3m4!1s0x12cddaa320b7663b:0xc17d02743fe180be!8m2!3d43.695607!4d7.2749227',
                              temps: '1-2 heures',
                              nbVisites: '1 millions de touristes chaque année',
                              hashtags: '#Visite #vue #mer',
                              favoris: false,
                          },
                      ]
                  ],
              }
          }
      },
      created() {

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
  main {
    padding-top: 90px;
    padding-bottom: 51px;
  }
  @media screen and (min-width: 993px) {
    main {
      padding-bottom: 0;
    }
  }
</style>
