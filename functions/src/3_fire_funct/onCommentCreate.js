import {
	docOnCreate,
	fieldIncrement,
	fireStored,
	docSellerRef,
} from '2_fire_store'
import {
	FIRESTORE_SELLER_REVIEWS_STAR,
	FIRESTORE_SELLER_TOTAL_REVIEWS,
	FIRESTORE_SELLER_TOTAL_STARS,
	FIRESTORE_SELLER_LATEST_COMMENTS,
	fireStorePathSellerReviews,
} from '0_constants'

const sellerId = 'sellerId'

const onCommentCreate = docOnCreate(
	fireStorePathSellerReviews(`{${sellerId}}`, '{reviewId}')
)((snap, context) => {
	const { [FIRESTORE_SELLER_REVIEWS_STAR]: star } = snap.data()
	const { [sellerId]: uid } = context.params
	return fireStored.runTransaction(transaction => {
		const docRef = docSellerRef(uid)
		//const { get, update } = transaction
		//! cannot destructure, must create with transaction
		return transaction
			.get(docRef)
			.then(doc => {
				const {
					[FIRESTORE_SELLER_LATEST_COMMENTS]: latestComments,
				} = doc.data()

				return transaction
					.update(docRef, {
						[FIRESTORE_SELLER_TOTAL_REVIEWS]: fieldIncrement(1),
						[FIRESTORE_SELLER_TOTAL_STARS]: fieldIncrement(star),
					})
					.catch(console.log)
			})
			.catch(console.log)
	})
})

export { onCommentCreate }
