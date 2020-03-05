import React from 'react'
import { PageProfile, PAGE_PROFILE_STATE_CURRENT_USER_UID } from './PageProfile'
import { StateContainer, storeUser, STORE_USER_STATE_UID } from '2_state'
import { useData, comments } from './utils'

const PageProfilePropedData = props => (
	<PageProfile useData={useData} comments={comments} {...props} />
)
const PageProfileStoreUser = StateContainer(PageProfilePropedData, storeUser, {
	[PAGE_PROFILE_STATE_CURRENT_USER_UID]: STORE_USER_STATE_UID,
})
export { PageProfileStoreUser }
