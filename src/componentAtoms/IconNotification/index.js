import React from 'react'
import {
	IconNotification,
	ICON_NOTIFICATION_STATE_SIGNED_IN,
} from 'componentAtoms/IconNotification/IconNotification'
import { StateContainer, storeUser, STORE_USER_STATE_SIGNED_IN } from 'state'
import { ROUTE_PAGE_NOTIFICATIONS } from 'routes'

const mapStoreUserStateToProp = {
	[ICON_NOTIFICATION_STATE_SIGNED_IN]: STORE_USER_STATE_SIGNED_IN,
}

const IconNotificationStoreUser = StateContainer(
	IconNotification,
	[storeUser],
	[mapStoreUserStateToProp],
	[]
)

const IconNotificationStoreUserPropedIndexNavbar = props => {
	return <IconNotificationStoreUser to={ROUTE_PAGE_NOTIFICATIONS} {...props} />
}

export { IconNotificationStoreUserPropedIndexNavbar }
