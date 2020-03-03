import { firestoreF, getServerTimestamp } from '1_fire_init'
import { UPDATED_AT } from '0_constants'
import { allPaths } from './constants'

const [onUpdateDoc, onUpdateDocSub] = allPaths.map(path =>
	firestoreF.document(path).onUpdate(change => {
		const timestamp = getServerTimestamp()
		//eslint-disable-next-line
		const { [UPDATED_AT]: updatedAt, ...newData } = change.after.data()
		//eslint-disable-next-line
		const { [UPDATED_AT]: updatedAt2, ...oldData } = change.before.data()

		if (JSON.stringify(oldData) !== JSON.stringify(newData)) {
			return change.after.ref.set(
				{
					[UPDATED_AT]: timestamp,
				},
				{ merge: true }
			)
		}
	})
)

export { onUpdateDoc, onUpdateDocSub }
