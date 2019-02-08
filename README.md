# donoma-nice

Ceci est un prototype d'application en rapport avec la demande d'ATOS à 
destination de la ville de Nice, dans le cadre des Workshop Ynov.

---

## Technologie utilisée
Pour ce projet, nous avons obté pour VueJS en mode CLI. 
En effet, très simple d'utilisation, sa notion de "component" permet 
de découper proprement le projet, afin de le rendre maintenable, et faciliter 
la réutilisation de certains éléments.
De plus, son système de "templating" permet de manipuler simplement les données.

---

## Les components et views
Ici, nous utilisons VueRouter pour permettre une navigation dynamique. 
Cela permet de présenter des vues dans un élément donné. Nous avons donc 
séparé les vues des composants, qui sont semblables mais qui n'ont pas la même utilité.
### Les components
#### BottomBar
Le composant BottomBar est utilisé dans la totalité des vues, et ne dispose pas d'options particulières.
Il sert juste à afficher le menu du bas, et permet de naviguer dans les pages principales.
#### NavBar
Le composant NavBar est aussi utilisé partout, mais avec des options différentes.
En effet, grâce aux "props", il est possible de passer différentes options à chaque appel. 

Nous avons défini un style de base, puis il est possible par exemple d'afficher un bouton 
retour pour revenir à la vue précédente. Ou bien d'afficher un titre plutôt que le logo principal.

### Les views
#### Accueil
Vue Accueil ou Recommandés affiche les lieux et activités à Nice.
#### APropos
Contient les renseignements de l'application.
#### CarteGuide
Permet d'afficher la carte de Nice avec des repères sur tous les lieux par catégorie, 
ou de consulter le guide que l'ont met à disposition pour trouver des idées d'activité.
#### Expositions
Présente les différentes expositions prévues dans la ville de Nice en fonction de la période. 
#### Favoris
Liste les lieux et activités cochées comme favoris.
#### Inspirations
Permet de consulter le guide que l'ont met à disposition pour trouver des idées d'activité.
#### Lieu
Affiche le détail d'un lieu, avec une description, des informations diverses comme le temps de visite,
et permet de mettre en favoris ou d'ajouter le lieu au séjour programmé.
#### Monnaie
Un système de convertisseur de devises en direct, et permet d'afficher les bureaux de change à proximité.
#### MonSejour
Affiche les différentes activités prévues pour le séjour. On peut paramétrer ici la durée du séjour,
afin de répartir correctement son voyage. 
#### Navettes
Permet de consulter nos différents types de navette à disposition en fonction de l'itinéraire.
Réservation en direct.
#### Profil
Afficher et éditer son profil.
#### QRCode
Permet de scanner les QRCode présents dans la ville. 
#### TransportsPublics
Liste les différentes lignes de transports publics.

---

## Remarques
Ce projet est un prototype, il peut servir de base pour le projet réel dans lequel nous 
conseillons de s'orienter vers ReactNative ou deux applications natives iOS et Android.

Pour les traitements et la persistance des données, nous conseillons NestJs, permettant 
de réaliser un Webservice. 

---

## Installation du projet
Prérequis: avoir NodeJs installé.


Après avoir cloner ou télécharger le projet, voici les quelques commandes utiles :
### Téléchargement des dépendances
```
npm install
```

### Compiler et émuler un serveur de développement
```
npm run serve
```

### Compiler et minifier pour la production
```
npm run build
```
