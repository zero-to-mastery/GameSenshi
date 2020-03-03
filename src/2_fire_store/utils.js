import { fireStored, auth } from '1_fire_init'

const createDocGetSet = path => {
	const ref = (uid = auth().currentUser.uid, ...args) =>
		fireStored().doc(path(uid, ...args))
	const get = (...args) => ref(...args).get()
	const set = (...args) => (data, options = { merge: true }) =>
		ref(...args).set(data, options)
	const onSanpshot = (...args) => (...args1) => {
		return ref(...args).onSnapshot(...args1)
	}
	return [get, set, onSanpshot]
}

export { createDocGetSet }
