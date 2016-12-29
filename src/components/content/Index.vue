<template>
	<div class="items" :ref="content">
		<ul>
			<Item		v-for="item in content"
							:item="item" >
			</Item>
		</ul>
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
	  		content: []
			}
		},

		mounted: function () {
			firebase.initializeApp(fireSettings.config)

			const fireAuth = firebase.auth()
			const fireDb = firebase.database()
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