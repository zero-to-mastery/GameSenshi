import { fireStored } from '1_fire_init/core'

const createDocGetSet = path => {
	const ref = (...args) => fireStored.doc(path(...args))
	const get = (...args) => ref(...args).get()
	const set = (...args) => (data, options = { merge: true }) =>
		ref(...args).set(data, options)
	const colRef = (...args) => {
		const path_ = path(...args).split('/')
		path_.pop()
		return fireStored.collection(path.join('/'))
	}
	const add = (...args) => data => colRef(...args).add(data)
	return { ref, get, set, add, colRef }
}

export { createDocGetSet }
