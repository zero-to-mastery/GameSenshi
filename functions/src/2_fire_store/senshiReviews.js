import { docGetSetBatch } from './utils'

import { fireStorePathSellerReviews } from '0_constants'

const { batch: docSellerReviewsBatch } = docGetSetBatch(
	fireStorePathSellerReviews
)

export { docSellerReviewsBatch }
