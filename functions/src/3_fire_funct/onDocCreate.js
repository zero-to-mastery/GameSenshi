import { docOnCreate, getTimestamp } from '2_fire_store'
import { CREATED_AT } from '0_constants'
import { allPaths } from './constants'

const [onDocCreate, onDocSubCreate] = allPaths.map(path =>
	docOnCreate(path)(snap => {
		const timestamp = getTimestamp()
		return snap.ref
			.update({
				[CREATED_AT]: timestamp,
			})
			.catch(console.log)
	})
)

export { onDocCreate, onDocSubCreate }
