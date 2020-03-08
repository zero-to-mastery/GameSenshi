import { fbStorage } from '1_fire_init'

const storageSetGenerator = path => {
	const ref = (...args) => fbStorage.file(path(...args))
	const get = (...args) => ref(...args).get()
	const set = (...args) => (content, options) =>
		ref(...args).save(content, options)
	const del = (...args) => ref(...args).delete()
	const writeStream = (...args) => config =>
		ref(...args).createWriteStream(config)
	return { get, set, del, writeStream }
}

export { storageSetGenerator }
