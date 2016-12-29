<template>
  <div class="item">
    <h1>
      <i class="material-icons md-18 md-fire">spa</i>
      {{item.title}}
    </h1>
    <pre>{{item.snippet}}</pre>
  </div>
</template>

<script>
	export default {
		props: ['item']
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
  }
  .item h1 {
    font-size: 1.4em;
    margin-bottom: 6px;
  }
  .item pre {
    font-size: 1em;
    margin-bottom: 10px;
    white-space: pre-wrap; 
    word-wrap: break-word;
    font-family: inherit;
  }
</style>