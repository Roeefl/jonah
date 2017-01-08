<template>
	<div class="items">
		<ul v-if="content.length > 0">
			<Item v-for="item in content"
						:item="item"
						@itemSelected="selectItem(arguments[0])">
			</Item>
		</ul>
		<div v-else>{{ NO_CONTENT }}</div>
		<Update :item="selectedItem"></Update>
	</div>
</template>

<script>
	import Item from './Item'
  import Update from './Update'

	export default {
		components: {
			Item,
			Update
		},
		data() {
			return {
		    NO_CONTENT: 'There is no content to show'
			}
		},
		computed: {
			content() {
				return this.$store.state.content
			},
			selectedItem() {
				return this.$store.state.selectedContentItem
			}
		},
		methods: {
			selectItem: function(item) {
				this.$store.commit('selectContentItem', item)
			}
		}
	}
</script>

<style>
	.items: {
		padding: 0 100px;
	}
</style>