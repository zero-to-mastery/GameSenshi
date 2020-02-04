import { firebaseStorage, auth } from '1_fire_init/core'

const storageSetGenerator = path => {
	const ref = () => firebaseStorage().ref(path(auth().currentUser.uid))
	const get = () => ref().getDownloadURL()
	const set = dataUrl => ref().putString(dataUrl, 'data_url')
	const remove = () => ref().delete()
	return [get, set, remove]
}

export { storageSetGenerator }
