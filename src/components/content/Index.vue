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
	import ContentStore from '../../data/ContentStore'
	import Item from './Item'

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
			this.ContentStore.on('itemAdded', (item) => {
				this.content.unshift(item)
			})
		}
	}
</script>

<style>
	.items: {
		padding: 0 100px;
	}
</style>