import { docGetSetBatch } from './utils'

import { fireStorePathSellerReviews } from '0_constants'

const { on: docSellereReviewsOnSnapShot } = docGetSetBatch(
	fireStorePathSellerReviews
)

export { docSellereReviewsOnSnapShot }
