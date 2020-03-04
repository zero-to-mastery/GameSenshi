import { createDocGetSet } from './utils'

import { fireStorePathSeller } from '0_constants'

const [, , docSellereOnSnapShot] = createDocGetSet(fireStorePathSeller)

export { docSellereOnSnapShot }
