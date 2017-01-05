<template>
	<div class="items">
		<ul v-if="content.length > 0">
			<Item v-for="item in content"
						:item="item"
						@itemSelected="selectItem(arguments[0])">
			</Item>
		</ul>
		<div v-else>{{NO_CONTENT}}</div>
		<Update :item="selectedItem"></Update>
	</div>
</template>

<script>
	import ContentStore from '../../data/ContentStore'
	import Item from './Item'
  import Update from './Update'

	export default {
		components: {
			Item,
			Update
		},
		data () {
			return {
				NO_CONTENT: 'There is no content to show',
	  		content: [],
	  		selectedItem: null
			}
		},
		methods: {
			pushItem: function(item) {
				this.content.unshift(item)
			},
			updateItem: function(item) {
				let changedItem = ContentStore.find(this.content, item.key)
				changedItem.title = item.title
				changedItem.snippet = item.snippet
				changedItem.fires = item.fires
				changedItem.type = item.type
				changedItem.tags = item.tags
			},
			removeItem: function(item) {
				let removedItem = ContentStore.find(this.content, item.key)
				var ind = this.content.indexOf(removedItem)
    		this.content.splice(ind, 1)
			},
			selectItem: function(item) {
				this.selectedItem = item
			}
		},
		mounted: function () {
			ContentStore.on('itemAdded', this.pushItem)
			ContentStore.on('itemChanged', this.updateItem)
			ContentStore.on('itemRemoved', this.removeItem)
		}
	}
</script>

<style>
	.items: {
		padding: 0 100px;
	}
</style>