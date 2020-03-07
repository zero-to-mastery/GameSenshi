import { createDocGetSet } from './utils'

import { fireStorePathSellerReviews } from '0_constants'

const { batch: docSellerReviewsBatch } = createDocGetSet(
	fireStorePathSellerReviews
)

export { docSellerReviewsBatch }
