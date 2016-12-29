<template>
  <div id="app">
    <img id="logo" src="./assets/treasure.svg" @click="stopAnimation()">
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
    methods: {
      stopAnimation: function() {
        alert('stop')
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
    animation: App-logo-spin 20s linear;
    animation-iteration-count: infinite;
  }

  @keyframes App-logo-spin {
    0% { transform: rotate(-180deg); }
    50% { transform: rotate(180deg); }
    100% { transform: rotate(-180deg); }
  }

</style>
