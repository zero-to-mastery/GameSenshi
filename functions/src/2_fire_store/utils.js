import { firestore, functions } from '1_fire_init'

const fireStored = new firestore.Firestore()

const docGetSetBatch = path => {
	const ref = (...args) => fireStored.doc(path(...args))
	const get = (...args) => ref(...args).get()
	const set = (...args) => (data, options = { merge: true }) =>
		ref(...args).set(data, options)
	const colRef = (...args) => {
		const path_ = path(...args).split('/')
		path_.pop()
		return fireStored.collection(path_.join('/'))
	}
	const add = (...args) => data => colRef(...args).add(data)
	const batch = (newBatch = createBatch()) => (...args) => {
		const set = (data, options = { merge: true }) =>
			newBatch.set(ref(...args), data, options)
		const add = data => newBatch.set(colRef(...args).doc(), data)
		const commit = () => newBatch.commit()
		return { set, add, commit }
	}
	return { ref, get, set, add, colRef, batch }
}

const createBatch = fireStored.batch

const FieldValue = firestore.FieldValue

const runTransaction = fireStored.runTransaction

const getTimestamp = FieldValue.serverTimestamp

const fieldIncrement = FieldValue.increment

const fieldDelete = FieldValue.delete

const docTrigger = functions.firestore.document

const docOnCreate = path => callback => docTrigger(path).onCreate(callback)

const docOnUpdate = path => callback => docTrigger(path).onUpdate(callback)

const docOnDelete = path => callback => docTrigger(path).onDelete(callback)

export {
	docGetSetBatch,
	getTimestamp,
	fieldIncrement,
	fieldDelete,
	docOnCreate,
	docOnUpdate,
	docOnDelete,
	createBatch,
	runTransaction,
}
