<template>
	<div class="items">
		<ul v-if="content.length > 0">
			<Item v-for="item in content"
						:item="item" >
			</Item>
		</ul>
		<div v-else>{{NO_CONTENT}}</div>
	</div>
</template>

<script>
	import firebase from 'firebase'
	import Item from './Item'
	var fireSettings = require ('../../firebase-settings.js')

	// Initialize Firebase
	export default {
		components: {
			Item
		},
		data () {
			return {
				NO_CONTENT: 'There is no content to show.',
	  		content: []
			}
		},

		mounted: function () {
			const fireApp = firebase.initializeApp(fireSettings.config)

			const fireAuth = fireApp.auth()
			const fireDb = fireApp.database()
			const contentRef = fireDb.ref('content')

			var setContentEntry = function(data) {
				var item = data.val()
				this.content.unshift(item)
			}.bind(this)

			contentRef.off()
			contentRef.on('child_added', setContentEntry)
		}
	}
</script>

<style>
	.items: {
		padding: 0 100px;
	}
</style>