import { PageProfile, PAGE_PROFILE_CURRENT_USER_UID } from './PageProfile'
import { StateContainer, storeUser, STORE_USER_STATE_UID } from 'state'

const PageProfileStoreUser = StateContainer(PageProfile, storeUser, {
	[PAGE_PROFILE_CURRENT_USER_UID]: STORE_USER_STATE_UID,
})
export { PageProfileStoreUser }
