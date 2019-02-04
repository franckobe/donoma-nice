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
    padding-top: 96px;
    padding-bottom: 51px;
  }
  @media screen and (min-width: 993px) {
    main {
      padding-bottom: 0;
    }
  }
</style>
