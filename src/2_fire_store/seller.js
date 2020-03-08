import { docGetSetBatch } from './utils'

import { fireStorePathSeller } from '0_constants'

const { on: docSellereOnSnapShot } = docGetSetBatch(fireStorePathSeller)

export { docSellereOnSnapShot }
