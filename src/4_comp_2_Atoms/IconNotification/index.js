import React from 'react'
import {
	IconNotification,
	ICON_NOTIFICATION_STATE_SIGNED_IN,
} from './IconNotification'
import { StateContainer, storeUser, STORE_USER_STATE_SIGNED_IN } from '2_state'
import { ROUTE_PAGE_NOTIFICATIONS } from '2_routes'

const mapStoreUserStateToProp = {
	[ICON_NOTIFICATION_STATE_SIGNED_IN]: STORE_USER_STATE_SIGNED_IN,
}

const IconNotificationStoreUser = StateContainer(
	IconNotification,
	[storeUser],
	[mapStoreUserStateToProp],
	[]
)

const IconNotificationStoreUserPropedNavbar = props => {
	return <IconNotificationStoreUser to={ROUTE_PAGE_NOTIFICATIONS} {...props} />
}

export { IconNotificationStoreUserPropedNavbar }
