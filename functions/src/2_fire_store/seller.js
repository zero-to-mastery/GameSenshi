import { docGetSetBatch } from './utils'

import { fireStorePathSeller } from '0_constants'

const { set: docSellerSet, get: docSellerGet } = docGetSetBatch(
	fireStorePathSeller
)

export { docSellerSet, docSellerGet }
