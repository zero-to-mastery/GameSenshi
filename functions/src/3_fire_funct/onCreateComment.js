import {
	docOnCreate,
	fieldIncrement,
	docSellerSet,
	docSellerGet,
} from '2_fire_store'
import {
	FIRESTORE_SELLER_REVIEWS_STAR,
	FIRESTORE_SELLER_TOTAL_REVIEWS,
	FIRESTORE_SELLER_TOTAL_STARS,
	FIRESTORE_SELLER_LATEST_COMMENTS,
	fireStorePathSellerReviews,
} from '0_constants'

const sellerId = 'sellerId'

const onCreateComment = docOnCreate(
	fireStorePathSellerReviews(`{${sellerId}}`, '{reviewId}')
)(async (snap, context) => {
	const { [FIRESTORE_SELLER_REVIEWS_STAR]: star } = snap.data()
	const {
		[FIRESTORE_SELLER_LATEST_COMMENTS]: latestComments,
	} = await docSellerGet().data()
	return docSellerSet(context.params[sellerId])({
		[FIRESTORE_SELLER_TOTAL_REVIEWS]: fieldIncrement(1),
		[FIRESTORE_SELLER_TOTAL_STARS]: fieldIncrement(star),
	}).catch(console.log)
})

export { onCreateComment }
