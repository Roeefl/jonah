// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App'

// const chatRef = db.ref('chat')
// const logRef = db.ref('log')

// var setChatEntry = function(data) {
// 	var val = data.val()
// }

// chatRef.off()
// chatRef.on('child_added', setChatEntry)

// contentRef.off()
// contentRef.on('child_added', setEntry)

// chatRef.push( {
// 	name: 'Roee FL',
// 	text: text
// }).then(function() {
// 	alert('pushed: ' + text)
// }.bind(this)).catch(function (error) {
// 	alert('Error @push: ' + error)
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
