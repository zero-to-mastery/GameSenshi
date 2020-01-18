import { firestoreF, getServerTimestamp } from 'firebaseInit'
import { CREATED_AT, UPDATED_AT } from 'constantValues'

const paths = [
	'{collecId}/{docId}',
	'{collecId}/{docId}/{subCollecId}/{subDocId}',
]
const [onCreateDoc, onCreateDocSub] = paths.map(path =>
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
