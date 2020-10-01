<template>
  <div id="app">
    <TopBar/>
    <Body/>
    <Menu/>
  </div>
</template>

<script>
import TopBar from '../components/TopBar.vue'
import Body from '../components/Body.vue'
import Menu from '../components/Menu.vue'

export default {
  name: 'App',
  components: {
    TopBar,
    Body,
    Menu
  }
}
</script>

<style>
#app {
  width: 375px;
  height: 100%;
  font-family: Kanit, Helvetica, Arial, Menuns-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
