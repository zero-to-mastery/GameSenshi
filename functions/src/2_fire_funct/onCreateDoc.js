import { firestoreF, getServerTimestamp } from '1_fire_init'
import { CREATED_AT, UPDATED_AT } from '0_constants'
import { allPaths } from './constants'

const [onCreateDoc, onCreateDocSub] = allPaths.map(path =>
	firestoreF.document(path).onCreate(snap => {
		const timestamp = getServerTimestamp()
		return snap.ref.set(
			{
				[CREATED_AT]: timestamp,
				[UPDATED_AT]: timestamp,
			},
			{ merge: true }
		)
	})
)

export { onCreateDoc, onCreateDocSub }
