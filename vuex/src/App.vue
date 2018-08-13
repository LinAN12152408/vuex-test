<template>
  <div id="app">
    <h1>vuex 小例子</h1>
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <vuex-dom></vuex-dom>
  </div>
</template>

<script>
import VuexDom from '@/view/vuex-dom'
export default {
  name: 'App',
  components: {
    VuexDom
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
