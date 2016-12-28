<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Jonah</h1>
    <p>
	    <!-- use router-link component for navigation. -->
	    <!-- specify the link by passing the `to` prop. -->
	    <!-- <router-link> will be rendered as an `<a>` tag by default -->
	    <router-link to="/home">Home</router-link>
	    <router-link to="/chat">Chat</router-link>
	    <router-link to="/logger">Logger</router-link>
	  </p>
	  <!-- route outlet -->
	  <!-- component matched by the route will render here -->
	  <router-view></router-view>
  </div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style scoped>
	#app {
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  text-align: center;
	  color: #2c3e50;
	  margin-top: 60px;
	}

	h1, h2 {
	  font-weight: normal;
	}

	ul {
	  list-style-type: none;
	  padding: 0;
	}

	li {
	  display: inline-block;
	  margin: 0 10px;
	}

	a {
	  color: #42b983;
	}
</style>