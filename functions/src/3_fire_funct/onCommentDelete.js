import {
	docOnDelete,
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
	INTERNAL_ERROR_CODE_15,
	INTERNAL_ERROR_CODE_16,
	INTERNAL_ERROR_CODE_17,
	FIRESTORE_SELLER_REVIEWS_ORDER_ID,
} from '0_constants'
import { resObj } from '1_utils'

const sellerId = 'sellerId'

const onCommentDelete = docOnDelete(
	fireStorePathSellerReviews(`{${sellerId}}`, '{reviewId}')
)((snap, context) => {
	const review = snap.data()
	const {
		[FIRESTORE_SELLER_REVIEWS_ORDER_ID]: orderId,
		[FIRESTORE_SELLER_REVIEWS_STAR]: star,
	} = review
	const { [sellerId]: uid } = context.params
	return fireStored
		.runTransaction(transaction => {
			const docRef = docSellerRef(uid)
			return transaction
				.get(docRef)
				.then(async doc => {
					const {
						[FIRESTORE_SELLER_LATEST_COMMENTS]: latestComments,
					} = doc.data()

					if (latestComments) {
						latestComments.some((comment, index) => {
							if (comment[FIRESTORE_SELLER_REVIEWS_ORDER_ID] === orderId) {
								latestComments.splice(index, 1)
								return true
							}
						})
					}

					try {
						return await transaction.update(docRef, {
							[FIRESTORE_SELLER_TOTAL_REVIEWS]: fieldIncrement(-1),
							[FIRESTORE_SELLER_TOTAL_STARS]: fieldIncrement(star * -1),
							[FIRESTORE_SELLER_LATEST_COMMENTS]: latestComments,
						})
					} catch (err) {
						console.log(resObj(false, INTERNAL_ERROR_CODE_15, err))
					}
				})
				.catch(err => {
					console.log(resObj(false, INTERNAL_ERROR_CODE_16, err))
				})
		})
		.catch(err => {
			console.log(resObj(false, INTERNAL_ERROR_CODE_17, err))
		})
})

export { onCommentDelete }
