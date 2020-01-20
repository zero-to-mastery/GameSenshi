import { fireStored, auth, getServerTimestamp } from 'firebaseInit'
import { UPDATED_AT } from 'constantValues'

const createDocGetSet = path => {
	const ref = (uid = auth().currentUser.uid, ...args) =>
		fireStored().doc(path(uid, ...args))
	const get = (...args) => ref(...args).get()
	const set = (...args) => (data, options = { merge: true }) =>
		ref(...args).set(
			{
				[UPDATED_AT]: getServerTimestamp(),
				...data,
			},
			options
		)
	const onSanpshot = (...args) => (...args1) => {
		return ref(...args).onSnapshot(...args1)
	}
	return [get, set, onSanpshot]
}

export { createDocGetSet }
