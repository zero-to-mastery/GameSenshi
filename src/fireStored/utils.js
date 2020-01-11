import { fireStored, auth, getServerTimestamp } from 'firebaseInit/core'
import { UPDATED_AT } from 'constantValues'

const createDocGetSet = path => {
	const ref = (uid = auth().currentUser.uid, uid2) =>
		fireStored().doc(path(uid, uid2))
	const get = (uid, uid2) => ref(uid, uid2).get()
	const set = (data, options = { merge: true }, uid, uid2) =>
		ref(uid, uid2).set(
			{
				[UPDATED_AT]: getServerTimestamp(),
				...data,
			},
			options
		)
	const onSanpshot = (uid, uid2) => (...args) => {
		return ref(uid, uid2).onSnapshot(...args)
	}
	return [get, set, onSanpshot]
}

export { createDocGetSet }
