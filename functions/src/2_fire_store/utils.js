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
	const batch = (...args) => {
		const newBatch = fireStored.batch()
		const set = (data, options = { merge: true }) =>
			newBatch.set(ref(...args), data, options)
		const add = data => newBatch.set(colRef(...args).doc(), data)
		const commit = () => newBatch.commit()
		return { set, add, commit }
	}
	return { ref, get, set, add, colRef, batch }
}

export { createDocGetSet }
