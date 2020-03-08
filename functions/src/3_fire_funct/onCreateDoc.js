import { docOnCreate, getTimestamp } from '2_fire_store'
import { CREATED_AT } from '0_constants'
import { allPaths } from './constants'

const [onCreateDoc, onCreateDocSub] = allPaths.map(path =>
	docOnCreate(path)(snap => {
		const timestamp = getTimestamp()
		return snap.ref.set(
			{
				[CREATED_AT]: timestamp,
			},
			{ merge: true }
		)
	})
)

export { onCreateDoc, onCreateDocSub }
