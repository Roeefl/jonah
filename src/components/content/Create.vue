<template>
  <form class="create-item" @submit.prevent="createItem()">
    <input class="input-item-title" name="title" v-model="title" placeholder="Title" />
    <input class="input-item-snippet" name="snippet" v-model="snippet" placeholder="Say a few words about this..." />
    <button type="submit">+</button>
  </form>
</template>

<script>
  import ContentStore from '../../data/ContentStore.js'

  export default {
    data () {
      return {
        title: '',
        snippet: ''
      }
    },
    methods: {
      createItem () {
        if ( this.title.trim() ) {
          let newItem = {
            title: this.title,
            snippet: this.snippet,
            type: 'content',
            tags: '',
            fires: []
          }
          contentStore.createItem(newItem)
        }
      }
    }
  }
</script>

<style scoped>
  form.create-item {
    position: relative;
    width: 480px;
    margin: 15px auto;
    background: #fff;
    padding: 15px;
    border-radius: 2px;
    box-shadow: 0 1px 5px #ccc;
  }
    form.create-item input {
      width: 100%;
      border: none;
      padding: 4px;
      outline: none;
    }
    form.create-item button {
      position: absolute;
      right: 18px;
      bottom: -18px;
      background: #41b883;
      color: #fff;
      border: none;
      border-radius: 50%;
      width: 36px;
      height: 36px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.3);
      cursor: pointer;
      outline: none;
    }
    form.create-item .input-item-title {
      font-size: 1.4em;
    }
    form.create-item .input-item-snippet {
      font-size: 1em;
    }
</style>