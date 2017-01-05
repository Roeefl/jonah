// This class will contain the data layer for Firebase Content

import EventEmitter from 'events'
import firebase from 'firebase'

var fireSettings = require ('../settings/firebase-settings.js')

class ContentStore extends EventEmitter {
	constructor() {
    super()

    const fireApp = firebase.initializeApp(fireSettings.config)
    const fireAuth = fireApp.auth()
    const fireDb = fireApp.database()
    
    this.contentRef = fireDb.ref('content')

    this.attachFirebaseListeners()

  }  

 // attach listeners to Firebase
  attachFirebaseListeners () {
    this.contentRef.on('child_added', this.onAdded, this)
    this.contentRef.on('child_removed', this.onRemoved, this)
    this.contentRef.on('child_changed', this.onChanged, this)
  }

  onAdded (snapshot) {
    // process data
    let item = this.snapshotToItem(snapshot)
    // propagate event outwards with item
    this.emit('itemAdded', item)
    console.log('item added: ' + item.title)
  }

  onChanged (snapshot) {
    let item = this.snapshotToItem(snapshot)
    this.emit('itemChanged', item)
  }

  onRemoved (oldSnapshot) {
    let item = this.snapshotToItem(oldSnapshot)
    this.emit('itemRemoved', item)
  }

  // convert snapshot into value + key
  snapshotToItem(snapshot) {
    var key = snapshot.key
    var item = snapshot.val()
    item.key = key
    return item   
  }

  // Push a new Item into firebase
  pushItem( {title = '', snippet = '', type = '', tags = '', fires = []} ) {
    this.contentRef.push( {
      title: title,
      snippet: snippet,
      type: type,
      tags: tags,
      fires: fires
    }).then(function() {
      console.log('Success pushing '+title+' to content')
    }.bind(this)).catch(function (error) {
      console.log('Error writing '+title+' to firebase DB: ' + error)
    })
  }

  updateItem( key, { title = '', snippet = ''} ) {
    this.contentRef.child(key).update({title, snippet}).then(function() {
      console.log('Success updating '+title+' at key '+key)
    }.bind(this)).catch(function (error) {
      console.log('Error updating '+title+' at key '+key)
    })
  }

  removeItem(key) {
    this.contentRef.child(key).remove().then(function() {
      console.log('Success removing key: '+key)
    }.bind(this)).catch(function (error) {
      console.log('Error removing key: '+key)
    })
  }

  // Finds the note inside the array by looking for its key
  find(content, key) {
    return content.find(item => item.key === key)
  }
}
	
export default new ContentStore()