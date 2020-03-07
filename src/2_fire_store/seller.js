import { createDocGetSet } from './utils'

import { fireStorePathSeller } from '0_constants'

const { on: docSellereOnSnapShot } = createDocGetSet(fireStorePathSeller)

export { docSellereOnSnapShot }
