<template>
  <div class="chat">
    <h1>{{ msg }}</h1>

    <div id="messages-card" class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--6-col-tablet mdl-cell--6-col-desktop">

      <div class="mdl-layout__header">
        <div class=" mdl-layout__header-row">
          <h3 class="mdl-layout-title">Chat</h3>
        </div>
      </div>

      <div class="mdl-card__supporting-text mdl-color-text--grey-600">
        <div id="messages" class="card-content">
        <p v-for="msg in messages">AAAAAAAAAAAAAAAAAA</p>
        </div>
      </div>

      <div class="mdl-card__actions mdl-card--border">
        <form id="message-form" action="#" @submit="submitChatMsg">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="message" v-model="msg" autocomplete="off">
            <label class="mdl-textfield__label" for="message">Message...</label>
          </div>
          <button   id="submit"
                    :disabled="!msg" 
                    type="submit"
                    class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" >
            Send
          </button>
        </form>
        <div class="mdl-layout-spacer"></div>
        <form id="image-form" action="#">
          <input id="mediaCapture" type="file" accept="image/*,capture=camera">
          <button disabled='true' id="submitImage" title="Add an image" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--amber-400 mdl-color-text--white">
            <i class="material-icons md-36 md-light md-inactive">image</i>
          </button>
        </form>
      </div>

    </div>

  </div>
</template>

<script>
  import ChatMessage from './ChatMessage'

  import VueFire from 'vuefire'
  import Firebase from 'firebase'

  // Firebase Configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCqA82Pfk-XTVUGfcb7BlNok6TMyVRAyWk",
    authDomain: "yonsel-ae20b.firebaseapp.com",
    databaseURL: "https://yonsel-ae20b.firebaseio.com",
    storageBucket: "yonsel-ae20b.appspot.com",
    messagingSenderId: "1098171935126"
  }

  // Init firebase
  const fireApp = Firebase.initializeApp(firebaseConfig)
  const fireDb = Firebase.database()
  const messagesRef = fireDb.ref('messages')

  export default {
    name: 'Chat',
    firebase: {
      messages: messagesRef
    },
    components: {
      chatmsg: ChatMessage
    },
    data () {
      return {
        msg: 'Chat'
      }
    }
  }
</script>

<style scoped>

</style>
