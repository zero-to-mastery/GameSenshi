import { bucketDefault } from '1_fire_init'

const storageSetGenerator = path => {
	const file = (...args) => bucketDefault.file(path(...args))
	const get = (...args) => file(...args).get()
	const set = (...args) => (content, options) =>
		file(...args).save(content, options)
	const del = (...args) => file(...args).delete()
	const writeStream = (...args) => config =>
		file(...args).createWriteStream(config)
	return { get, set, del, writeStream, file }
}

export { storageSetGenerator, bucketDefault }
