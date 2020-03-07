import { createDocGetSet } from './utils'

import { fireStorePathSellerReviews } from '0_constants'

const { on: docSellereReviewsOnSnapShot } = createDocGetSet(
	fireStorePathSellerReviews
)

export { docSellereReviewsOnSnapShot }
