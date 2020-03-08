import { firestore, auth } from '1_fire_init'

const fireStored = firestore()

const docGetSetBatch = path => {
	const ref = (uid = auth().currentUser.uid, ...otherArgs) =>
		fireStored.doc(path(uid, ...otherArgs))
	const get = (...args) => ref(...args).get()
	const set = (...args) => (data, options = { merge: true }) =>
		ref(...args).set(data, options)
	const on = (...args) => (...args1) => {
		return ref(...args).onSnapshot(...args1)
	}
	const colRef = (uid = auth().currentUser.uid, ...otherArgs) => {
		const path_ = path(uid, ...otherArgs).split('/')
		path_.pop()
		return fireStored.collection(path.join('/'))
	}
	const add = (...args) => data => colRef(...args).add(data)
	const batch = (newBatch = createBatch()) => (...args) => {
		const set = (data, options = { merge: true }) =>
			newBatch.set(ref(...args), data, options)
		const add = data => newBatch.set(colRef(...args).doc(), data)
		const commit = () => newBatch.commit()
		return { set, add, commit }
	}

	return { ref, get, set, on, add, colRef, batch }
}

const runTransaction = fireStored.runTransaction

const createBatch = fireStored.batch

const getTimestamp = firestore.FieldValue.serverTimestamp

export { docGetSetBatch, getTimestamp, createBatch, runTransaction }
