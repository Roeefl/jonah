import firebase from 'firebase'

class ContentStore {
	constructor() {
		super()
		// Firebase refs
    const fireDb = firebase.database()
    const contentRef = fireDb.ref('content')
    
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
    this.$emit('itemAdded', item)
  }
  onRemoved (oldSnapshot) {
    let item = this.snapshotToItem(oldSnapshot)
    this.$emit('itemRemoved', item)
  }
  onChanged (snapshot) {
    let item = this.snapshotToItem(snapshot)
    this.$emit('itemChanged', item)
  }

  snapshotToItem(snapshot) {
		var key = snapshot.key()
  	var item = snapshot.val()
  	item.key = key
  	return item		
  }
}
	
export default new ContentStore()