import { createDocGetSet } from './utils'

import { fireStorePathSellerReviews } from '0_constants'

const { add: docSellerReviewsAdd } = createDocGetSet(fireStorePathSellerReviews)

export { docSellerReviewsAdd }
