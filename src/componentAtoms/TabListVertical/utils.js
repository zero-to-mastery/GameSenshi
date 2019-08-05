// routing
import {
	ROUTE_PAGE_SETTINGS_GENERAL,
	ROUTE_PAGE_SETTINGS_BILLING,
	ROUTE_PAGE_SETTINGS_ACCOUNT,
	ROUTE_PAGE_SETTINGS_NOTIFICATION,
} from 'routes'

const settingPageTabList = [
	{
		navLink: 'General',
		icon: 'icon-single-02',
		to: ROUTE_PAGE_SETTINGS_GENERAL,
	},
	{
		navLink: 'Billing',
		icon: 'icon-credit-card',
		to: ROUTE_PAGE_SETTINGS_BILLING,
	},
	{
		navLink: 'Account',
		icon: 'icon-lock-circle',
		to: ROUTE_PAGE_SETTINGS_ACCOUNT,
	},
	{
		navLink: 'Notification',
		icon: 'icon-volume-98',
		to: ROUTE_PAGE_SETTINGS_NOTIFICATION,
	},
]

export { settingPageTabList }
