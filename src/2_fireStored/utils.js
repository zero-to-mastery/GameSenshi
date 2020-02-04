import { fireStored, auth, getServerTimestamp } from '1_fire_init'
import { UPDATED_AT } from '0_constants'

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
