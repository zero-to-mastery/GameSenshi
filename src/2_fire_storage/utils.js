import { fbStorage, auth } from '1_fire_init'

const taskEvent = fbStorage.TaskEvent

const storageSetGenerator = path => {
	const ref = (uid = auth().currentUser.uid, ...otherArgs) =>
		fbStorage().ref(path(uid, ...otherArgs))
	const get = (...args) => ref(...args).getDownloadURL()
	const set = (...args) => (dataUrl = '') =>
		ref(...args).putString(dataUrl, 'data_url')
	const remove = (...args) => ref(...args).delete()
	const onSnapShot = (...args) => (dataUrl = '', task = {}) =>
		set(...args)(dataUrl).on(taskEvent.STATE_CHANGED, task)
	return [get, set, remove, onSnapShot]
}

export { storageSetGenerator }
