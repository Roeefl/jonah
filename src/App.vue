<template>
  <div id="app">
    <img id="logo" :class="{'animated-logo': isAnimated}" src="./assets/stash.svg" @click="toggleAnimation()">
    <CreateItem></CreateItem>
    <Index></Index>
  </div>
</template>

<script>
  import Index from './components/content/Index'
  import CreateItem from './components/content/Create'

  export default {
    name: 'app',
    components: {
      Index,
      CreateItem
    },
    data () {
      return {
        isAnimated: true
      }
    },
    methods: {
      toggleAnimation: function() {
        this.isAnimated = !this.isAnimated
      }
    }
  }
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html{
    font-family: sans-serif;
  }
  body{
    background: #eee;
    padding: 0 16px;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    color: #000;
  }

  #logo {
    width: 128px;
    height: 128px;
    margin-bottom: 20px;
    cursor: pointer;
  }
  .animated-logo {
    /* animation: App-logo-spin 10s linear;
    animation-iteration-count: infinite; */
  }
    @keyframes App-logo-spin {
      0% { transform: rotate(360deg); }
      50% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

   /* Sizes for Material Icons */
  .material-icons.md-18 { font-size: 18px; }
  .material-icons.md-24 { font-size: 24px; }
  .material-icons.md-30 { font-size: 30px; }
  .material-icons.md-36 { font-size: 36px; }
  .material-icons.md-48 { font-size: 48px; }
  .material-icons.md-fire { color: rgb(245, 130, 12); }
</style>
