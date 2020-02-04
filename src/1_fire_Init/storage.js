import { firebaseStorage, auth } from '1_fire_Init/core'

import { storagePathUserAvatar } from '0_constantValues'

const storageSetGenerator = path => {
	const ref = () => firebaseStorage().ref(path(auth().currentUser.uid))
	const get = () => ref().getDownloadURL()
	const set = dataUrl => ref().putString(dataUrl, 'data_url')
	const remove = () => ref().delete()
	return [get, set, remove]
}

const [
	storageUserAvatarGet,
	storageUserAvatarSet,
	storageUserAvatarRemove,
] = storageSetGenerator(storagePathUserAvatar)

export { storageUserAvatarGet, storageUserAvatarSet, storageUserAvatarRemove }
