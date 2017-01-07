<template>
  <div class="item" @click="select">
    <h1>
      <i class="material-icons md-18 md-fire">spa</i>
      {{item.title}}
    </h1>
    <pre>{{item.snippet}}</pre>
    <button type="button" @click.stop="remove" class="remove">
      <i class="material-icons md-18">delete_sweep</i>
    </button>
    <button type="button" class="edit">
      <i class="material-icons md-18">create</i>
    </button>
  </div>
</template>

<script>
  import ContentStore from '../../data/ContentStore.js'

	export default {
		props: ['item'],
    methods: {
      remove: function() {
        ContentStore.removeItem(this.item.key)
      },
      select: function(event) {
        this.$emit('itemSelected', this.item);
      }
    }
	}
</script>

<style scoped>
 .item {
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 5px #ccc;
    padding: 8px;
    width: 240px;
    margin: 12px;
    float: left;
    transition: box-shadow 0.5s;
    cursor: default;
    position: relative;
  }
    .item h1 {
      font-size: 1.4em;
      margin-bottom: 6px;
      word-wrap: break-word;
    }
    .item pre {
      font-size: 1em;
      margin-bottom: 10px;
      white-space: pre-wrap; 
      word-wrap: break-word;
      font-family: inherit;
    }
    .item button {
      background: none;
      border: none;
      font-size: 20px;
      opacity: 0;
      cursor: pointer;
      transition: opacity 0.5s;
      margin: 0 4px 0 0;
    }
    .item button.remove {
      position: absolute;
      bottom: 2px;
      left: 8px;
    }
    .item button.edit {
      position: absolute;
      bottom: 2px;
      right: 4px;
    }
    .item:hover, .item:focus{
      box-shadow: 0 5px 10px #999;
    }
    .item:hover button, .item:focus button{
      opacity: 0.6;
    }
    .item button:hover, .item button:focus{
      opacity: 1;
    }
</style>