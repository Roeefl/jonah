<template>
  <div v-if="item" transition="modal" class="backdrop" @click="dismissModal">
    <form class="edit-item" @submit.prevent="updateItem()" @click.stop="" @keyup.esc="dismissModal">
      <input name="title" v-model="updatingTitle" placeholder="Title" />
      <input name="snippet" v-model="updatingSnippet" placeholder="ay a few words about this..." />
      <button type="button" @click="removeItem">
        <i class="material-icons md-18">delete_sweep</i>
      </button>
      <button type="submit">Done</button>
    </form>
  </div>
</template>

<script>
  export default {
    props: ['item'],
    data () {
      return {
        updatingTitle: null,
        updatingSnippet: null
      }
    },
    watch: {
      item: function(newItem) {
        if (newItem) {
          this.initUpdatedItem(newItem)
        }
      }
    },
    methods: {
      initUpdatedItem(newItem) {
        this.updatingTitle = newItem.title
        this.updatingSnippet = newItem.snippet
      },
      removeItem: function() {
        this.$store.commit('removeItem', this.item.key)
        this.dismissModal()
      },
      updateItem: function() {
        this.$store.commit('updateItem', this.item.key, this.updatingTitle, this.updatingSnippet )
        this.dismissModal()
      },
      dismissModal () {
        this.updatingTitle = null
        this.setUpdatingSnippet = null
        this.$store.commit('nullifySelectedContentItem')
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