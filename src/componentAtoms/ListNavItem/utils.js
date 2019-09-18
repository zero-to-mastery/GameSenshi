import React from 'react'
import { Row, Col } from 'reactstrap'

import {
	LIST_NAV_ITEM_PROPS_TO,
	LIST_NAV_ITEM_PROPS_BODY,
	LIST_NAV_ITEM_PROPS_LINK_CLASS_NAME,
	LIST_NAV_ITEM_ON_CLICK,
} from 'componentAtoms/ListNavItem/ListNavItem'

import { AvatarUserStoreUser } from 'componentAtoms/AvatarUser'
import { storeUser, STATE, STORE_USER_STATE_USERNAME } from 'state'

import { auth } from 'firebaseInit'

import {
	ROUTE_PAGE_JOIN,
	ROUTE_PAGE_APPOINTMENTS,
	ROUTE_PAGE_SENSHI,
	ROUTE_PAGE_SETTINGS_GENERAL,
	ROUTE_PAGE_PROFILE,
} from 'routes'

const signOut = () => {
	auth().signOut()
}

const simpleIconLabel = (icon, children) => {
	return (
		<Row>
			<Col xs='2'>
				<i className={icon} />
			</Col>
			<Col>
				<p>{children}</p>
			</Col>
		</Row>
	)
}

const signedInNavItems = [
	{
		[LIST_NAV_ITEM_PROPS_TO]: ROUTE_PAGE_JOIN,
		[LIST_NAV_ITEM_PROPS_BODY]: 'Senshi Portal',
	},
]

const signedInNavItemsCollapsed = [
	{
		[LIST_NAV_ITEM_PROPS_TO]: ROUTE_PAGE_PROFILE,
		[LIST_NAV_ITEM_PROPS_LINK_CLASS_NAME]: 'avatarLink',
		[LIST_NAV_ITEM_PROPS_BODY]: (
			<Row>
				<Col
					xs='2'
					style={{
						paddingLeft: 12,
						paddingRight: 18,
					}}>
					<AvatarUserStoreUser height={24} width={24} />
				</Col>
				<Col>
					<p>{storeUser[STATE][STORE_USER_STATE_USERNAME]}</p>
				</Col>
			</Row>
		),
	},
	{
		[LIST_NAV_ITEM_PROPS_TO]: ROUTE_PAGE_APPOINTMENTS,
		[LIST_NAV_ITEM_PROPS_BODY]: simpleIconLabel(
			'fab fas fa-user-plus',
			'My Appointments'
		),
	},
	{
		[LIST_NAV_ITEM_PROPS_TO]: ROUTE_PAGE_SENSHI,
		[LIST_NAV_ITEM_PROPS_BODY]: simpleIconLabel(
			'tim-icons icon-key-25',
			'Senshi Portal'
		),
	},
	{
		[LIST_NAV_ITEM_PROPS_TO]: ROUTE_PAGE_SETTINGS_GENERAL,
		[LIST_NAV_ITEM_PROPS_BODY]: simpleIconLabel(
			'fab fas fa-question',
			'Settings'
		),
	},
	{
		[LIST_NAV_ITEM_PROPS_TO]: '#',
		[LIST_NAV_ITEM_PROPS_BODY]: simpleIconLabel(
			'fab fas fa-sign-out-alt',
			'Sign Out'
		),
		[LIST_NAV_ITEM_ON_CLICK]: signOut,
	},
]

export { signedInNavItems, signedInNavItemsCollapsed }
