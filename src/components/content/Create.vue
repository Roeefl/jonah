<template>
  <form class="create-item" @submit.prevent="createItem()">
    <input name="title" v-model="title" placeholder="Title"/>
    <textarea name="snippet" v-model="snippet" placeholder="Say a few words about this..." rows="2">
    </textarea>
    <button type="submit">+</button>
  </form>
</template>

<script>
  import firebase from 'firebase'

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
          const fireDb = firebase.database()
          const contentRef = fireDb.ref('content')

          contentRef.push( {
            title: this.title,
            snippet: this.snippet,
            type: 'movie',
            tags: 'tag1',
            fires: []
          }).then(function() {
            console.log('pushed ' + this.title + ' to content')
            this.title = ''
            this.snippet = ''
          }.bind(this)).catch(function (error) {
            console.log('Error writing new entry to firebase DB: ' + error)
          })
        }
      }
    }
  }
</script>

<style>
  form.create-item{
    position: relative;
    width: 480px;
    margin: 15px auto;
    background: #fff;
    padding: 15px;
    border-radius: 2px;
    box-shadow: 0 1px 5px #ccc;
  }
  form.create-item input, form.create-item textarea{
    width: 100%;
    border: none;
    padding: 4px;
    outline: none;
    font-size: 1.2em;
  }
  form.create-item button{
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
</style>