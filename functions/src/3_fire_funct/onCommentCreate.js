import { docOnCreate } from '2_fire_store'
import { FIRESTORE_SELLER_REVIEWS_STAR, fireStorePathSeller } from '0_constants'

const onCommentCreate = docOnCreate(fireStorePathSeller('{sellerId}'))(snap => {
	return snap.ref.set(
		{
			[FIRESTORE_SELLER_REVIEWS_STAR]: '',
		},
		{ merge: true }
	)
})

export { onCommentCreate }
