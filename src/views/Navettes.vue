<template>
    <div>
        <NavBar />
        <BottomBar />

        <div class="container">
            <p>
                Ici seront présentées les différentes lignes de navettes que nous proposons.
            </p>
            <p>
                Il sera possible de réserver en ligne, tous les types de navettes en fonction de l'itinéraire.
            </p>
        </div>

    </div>
</template>

<script>
    import BottomBar from "../components/BottomBar";
    import NavBar from "../components/NavBar";

    export default {
        name: "Navette",
        components: {NavBar, BottomBar},
    }
</script>

<style scoped>

</style>