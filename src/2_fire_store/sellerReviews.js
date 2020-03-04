import { createDocGetSet } from './utils'

import { fireStorePathSellerReviews } from '0_constants'

const [, , docSellereReviewsOnSnapShot] = createDocGetSet(
	fireStorePathSellerReviews
)

export { docSellereReviewsOnSnapShot }
