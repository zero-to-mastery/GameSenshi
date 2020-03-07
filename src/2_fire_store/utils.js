import { fireStored, auth } from '1_fire_init'

const createDocGetSet = path => {
	const ref = (uid = auth().currentUser.uid, ...otherArgs) =>
		fireStored().doc(path(uid, ...otherArgs))
	const get = (...args) => ref(...args).get()
	const set = (...args) => (data, options = { merge: true }) =>
		ref(...args).set(data, options)
	const on = (...args) => (...args1) => {
		return ref(...args).onSnapshot(...args1)
	}
	const add = (...args) => data => {
		const path_ = path(...args).split('/')
		path_.pop()
		return fireStored.doc(path.join('/')).add(data)
	}
	return { ref, get, set, on, add }
}

export { createDocGetSet }
