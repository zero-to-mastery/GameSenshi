// routing
import {
	ROUTE_PAGE_SETTINGS_GENERAL,
	ROUTE_PAGE_SETTINGS_PAYMENT,
	ROUTE_PAGE_SETTINGS_ACCOUNT,
	ROUTE_PAGE_SETTINGS_NOTIFICATION,
	ROUTE_PAGE_POLICY_PRIVACY_POLICY,
	ROUTE_PAGE_POLICY_COOKIES,
	ROUTE_PAGE_POLICY_TERMS,
} from 'routes'

const settingPageTabList = [
	{
		navLink: 'General',
		icon: 'icon-single-02',
		to: ROUTE_PAGE_SETTINGS_GENERAL,
	},
	{
		navLink: 'Payment',
		icon: 'icon-credit-card',
		to: ROUTE_PAGE_SETTINGS_PAYMENT,
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

const policyPageTabList = [
	{
		navLink: 'Privacy',
		icon: 'tim-icons icon-lock-circle',
		to: ROUTE_PAGE_POLICY_PRIVACY_POLICY,
	},
	{
		navLink: 'Cookie',
		icon: 'fas fa-cookie-bite',
		to: ROUTE_PAGE_POLICY_COOKIES,
	},
	{
		navLink: 'Terms',
		icon: 'tim-icons icon-single-copy-04',
		to: ROUTE_PAGE_POLICY_TERMS,
	},
]

export { settingPageTabList }
