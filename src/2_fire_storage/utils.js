import { firebaseStorage, auth } from '1_fire_init/core'

const taskEvent = firebaseStorage.TaskEvent

const storageSetGenerator = path => {
	const ref = () => firebaseStorage().ref(path(auth().currentUser.uid))
	const get = () => ref().getDownloadURL()
	const set = (dataUrl = '') => ref().putString(dataUrl, 'data_url')
	const remove = () => ref().delete()
	const onSnapShot = (dataUrl = '', task = {}) =>
		set(dataUrl).on(taskEvent.STATE_CHANGED, task)
	return [get, set, remove, onSnapShot]
}

export { storageSetGenerator }
