<template>
  <div id="app">
    <!--<img src="./assets/logo.png" width="40" height="40">-->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    overflow: hidden;
    height: 100%;
    /*margin-top: 20px;*/
  }
</style>
