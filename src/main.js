// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueFire from 'vuefire'
import firebase from 'firebase'

import App from './App'
import Home from './components/Home'
import Chat from './components/Chat'
import Logger from './components/Logger'

// We want to apply VueResource and VueRouter to our Vue instance
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueFire)

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/home', component: Home },
  { path: '/chat', component: Chat },
  { path: '/logger', component: Logger },
  { path: '*', component: Home }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for routes: routes
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
new Vue({
  el: "#app",
  router,
  template: '<App/>',
  data: {

  },
  computed: {

  },
  methods: {

  },
  ready: function(){
  },
  render: h => h(App)
})

// Now the app has started!

/* -- Initialize App -- */
window.onload = function() {
  // Update scrolling in chat after messages have finished loading
  // $('#messages').bind('DOMNodeInserted', this.chatScrollTop.bind(this));
  // $('#logger').bind('DOMNodeInserted', this.loggerScrollTop.bind(this));

  // Firebase Configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCV6dm_dKfOuy-CnMurpV_RJjiRp7hTP88",
    authDomain: "jonah-6d965.firebaseapp.com",
    databaseURL: "https://jonah-6d965.firebaseio.com",
    storageBucket: "jonah-6d965.appspot.com",
    messagingSenderId: "749894228558"
  }

  // Init firebase
  const fireApp = firebase.initializeApp(firebaseConfig);
  alert(fireApp);

  // Shortcuts to Firebase SDK features.
  this.auth = firebase.auth();
  this.database = firebase.database(); 
  this.storage = firebase.storage();
};