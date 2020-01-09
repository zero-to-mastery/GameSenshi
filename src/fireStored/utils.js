import { fireStored, auth, getServerTimestamp } from 'firebaseInit/core'
import { UPDATED_AT } from 'constantValues'

const createDocGetSet = path => {
	const ref = (uid = auth().currentUser.uid) => fireStored().doc(path(uid))
	const get = uid => ref(uid).get()
	const set = (data, options = { merge: true }) =>
		ref().set(
			{
				[UPDATED_AT]: getServerTimestamp(),
				...data,
			},
			options
		)
	const onSanpshot = (uid, ...args) => {
		return ref(uid).onSnapshot(...args)
	}
	return [get, set, onSanpshot]
}

export { createDocGetSet }
