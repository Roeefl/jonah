<template>
  <div v-if="itemKey" transition="modal" class="backdrop" @click="dismissModal">
    <form class="edit-item" @submit.prevent="updateItem()" @click.stop="" @keyup.esc="dismissModal">
      <input name="title" v-model="newTitle" placeholder="Title" />
      <input name="snippet" v-model="newSnippet" placeholder="ay a few words about this..." />
      <button type="button" @click="remove">
        <i class="material-icons md-18">delete_sweep</i>
      </button>
      <button type="submit">Done</button>
    </form>
  </div>
</template>

<script>
  import ContentStore from '../../data/ContentStore.js'

  export default {
    props: ['item'],
    data() {
      return {
        itemKey: null,
        newTitle: null,
        newSnippet: null
      }
    },
    watch: {
      item: function(newItem) {
        this.itemKey = newItem.key
        this.newTitle = newItem.title
        this.newSnippet = newItem.snippet
      }
    },
    methods: {
      remove: function() {
        ContentStore.removeItem(this.itemKey)
        this.dismissModal()
      },
      updateItem: function() {
        ContentStore.updateItem(this.itemKey, {title: this.newTitle, snippet: this.newSnippet} )
        this.dismissModal()
      },
      dismissModal () {
        this.itemKey = null
        this.newTitle = null
        this.newSnippet = null
      }
    }
  }
</script>

<style>
  .backdrop {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(50,50,50,0.8);
  }

  form.edit-item {
    position: relative;
    width: 480px;
    max-width: 100%;
    margin: 25vh auto 0;
    background: #fff;
    padding: 15px;
    border-radius: 2px;
    box-shadow: 0 1px 50px #555;
  }
    form.edit-item input {
      width: 100%;
      max-width: 100%;
      border: none;
      padding: 4px;
      outline: none;
      font-size: 1.2em;
    }
    form.edit-item button[type=submit] {
      font-size: 18px;
      float: right;
      background: #41b883;
      color: #fff;
      border: none;
      border-radius: 3px;
      opacity: 1;
      cursor: pointer;
      padding: 4px 6px;
      margin: 0;
    }
    form.edit-item button {
      background: none;
      border: none;
      font-size: 20px;
      opacity: 0.6;
      cursor: pointer;
      transition: opacity .5s;
      margin: 0 4px 0 0;
    }
    form.edit-item button:hover, form.edit-item button:focus{
      opacity: 1;
    }

  /* modal transition */
  .modal-transition {
    transition: opacity .3s ease;
    opacity: 1;
  }
  .modal-transition form {
    transition: transform .3s ease;
  }
  .modal-enter, .modal-leave {
    opacity: 0;
  }
  .modal-enter form, .modal-leave form {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>