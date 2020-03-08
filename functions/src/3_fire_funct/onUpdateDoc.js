import { docOnUpdate, getTimestamp } from '2_fire_store'
import { UPDATED_AT } from '0_constants'
import { allPaths } from './constants'

const [onUpdateDoc, onUpdateDocSub] = allPaths.map(path =>
	docOnUpdate(path)(change => {
		const timestamp = getTimestamp()
		//eslint-disable-next-line
		const { [UPDATED_AT]: updatedAt, ...newData } = change.after.data()
		//eslint-disable-next-line
		const { [UPDATED_AT]: updatedAt2, ...oldData } = change.before.data()

		if (JSON.stringify(oldData) !== JSON.stringify(newData)) {
			return change.after.ref
				.update({
					[UPDATED_AT]: timestamp,
				})
				.catch(console.log)
		}
	})
)

export { onUpdateDoc, onUpdateDocSub }
