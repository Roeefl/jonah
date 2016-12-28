<template>
  <div id="app">
		  
   <img id="logo" src="./assets/logo.png">
  	<div id="main-layout" class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
		  
		  <header class="mdl-layout__header mdl-color-text--white">
		    <div class="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">
		      <div class="mdl-layout__header-row mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-desktop">
		        <h1><i class="material-icons md-24 md-light">local_movies</i> Jonah: Share great shit</h1>
		      </div>
		      <div id="user-container">
		        <div hidden id="user-pic"></div>
		        <div hidden id="user-name"></div>
		        <button hidden
		        				id="sign-out"
		        				class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--white"
		        				@click="signOut" >
		          Sign-out
		        </button>
		        <button 	hidden
		        					id="sign-in"
		        					class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--white"
		        					@click="signIn" >
		          <i class="material-icons md-36 md-light">account_circle</i>Sign-in with Google
		        </button>
		      </div>
		    </div>

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
		  </header>

	  </div>
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
	  margin-top: 60px;
	  font-family: 'Roboto', 'Helvetica', sans-serif;
	}

	main {
	  height: 100%;
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
	  text-decoration: none
	}

	a {
	  color: #42b983;
	}

	.mdl-layout__header-row {
  padding: 0;
  margin: 0 auto;
}
  .mdl-layout__header-row span {
    margin-left: 10px;
  }
  .mdl-layout__header-row .material-icons {
    position: relative;
    top: 6px;
  }

	#user-container {
	  position: absolute;
	  display: flex;
	  flex-direction: row;
	  top: 24px;
	  width: 100%;
	  right: 0;
	  padding-left: 10px;
	  justify-content: flex-end;
	  padding-right: 10px;
	}
	  #user-container #user-pic {
	    top: -3px;
	    position: relative;
	    display: inline-block;
	    background-image: url('/images/profile_placeholder.png');
	    background-repeat: no-repeat;
	    width: 40px;
	    height: 40px;
	    background-size: 40px;
	    border-radius: 20px;
	  }
	  #user-container #user-name {
	    font-size: 16px;
	    line-height: 36px;
	    padding-right: 10px;
	    padding-left: 20px;
	  }

  /* Material Design Icons */
.material-icons {
  padding: 0;
}
	/* Sizes for Material Icons */
	.material-icons.md-18 { font-size: 18px; }
	.material-icons.md-24 { font-size: 24px; }
	.material-icons.md-30 { font-size: 30px; }
	.material-icons.md-36 { font-size: 36px; }
	.material-icons.md-48 { font-size: 48px; }

	/* Rules for using icons as black on a light background. */
	.material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }
	.material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }

	/* Rules for using icons as white on a dark background. */
	.material-icons.md-light { color: rgba(255, 255, 255, 1); }
	.material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }

	/* Custom Colors */
	.material-icons.orange600 { color: #FB8C00; }
	.material-icons.md-fire {
	  color: rgb(245, 130, 12);
	}
	.material-icons.md-accent {
	  color: #FF5252;
	}
</style>