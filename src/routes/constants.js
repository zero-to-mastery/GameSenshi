import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

const ROUTE = 'route'
const ROUTE_TO = ROUTE + 'To'
const ROUTE_FROM = ROUTE + 'From'
const ROUTE_PATH = ROUTE + 'Path'
const ROUTE_ACCESSIBILITY = ROUTE + 'Guarded'
const ROUTE_ACCESSIBILITY_PRIVATE = ROUTE + 'Private'
const ROUTE_ACCESSIBILITY_PUBLIC = ROUTE + 'Public'
const ROUTE_ACCESSIBILITY_FREE = ROUTE + 'Free'
const ROUTE_PAGE_INDEX = '/index'
const ROUTE_PAGE_FILTER = '/filter'
const ROUTE_PAGE_PROFILE = '/profile'
const ROUTE_PARAM_UID = 'uid'
const ROUTE_PAGE_PROFILE_ID = `${ROUTE_PAGE_PROFILE}/:${ROUTE_PARAM_UID}`
const ROUTE_PAGE_SIGN_UP = '/signUp'
const ROUTE_PAGE_SIGN_IN = '/signIn'
const ROUTE_PAGE_SETTINGS = '/settings'
const ROUTE_PAGE_NOTIFICATIONS = '/notifications'
const ROUTE_PAGE_404 = '/404'
const ROUTE_PAGE_CHECKOUT = '/checkout'
const ROUTE_PAGE_JOIN = '/join'
const ROUTE_PAGE_HELP = '/help'
const ROUTE_PAGE_APPOINTMENTS = '/appointments'
const ROUTE_PAGE_SENSHI = '/senshi'
const ROUTE_PAGE_CHAT = '/chat'
const ROUTE_PAGE_PASSWORD_RESET = '/passwordReset'
const ROUTE_PAGE_POLICY = '/policy'
const ROUTE_PARAM_POLICY = 'tabPane'
const ROUTE_POLICY_PARAM_PRIVACY_POLICY = 'privacy'
const ROUTE_POLICY_PARAM_COOKIES = 'cookie'
const ROUTE_POLICY_PARAM_TERMS = 'terms'
const ROUTE_PAGE_POLICY_COMMON = `${ROUTE_PAGE_POLICY}/:${ROUTE_PARAM_POLICY}(${ROUTE_POLICY_PARAM_PRIVACY_POLICY}|${ROUTE_POLICY_PARAM_COOKIES}|${ROUTE_POLICY_PARAM_TERMS})`
const ROUTE_PAGE_POLICY_PRIVACY = `${ROUTE_PAGE_POLICY}/${ROUTE_POLICY_PARAM_PRIVACY_POLICY}`
const ROUTE_PAGE_POLICY_COOKIES = `${ROUTE_PAGE_POLICY}/${ROUTE_POLICY_PARAM_COOKIES}`
const ROUTE_PAGE_POLICY_TERMS = `${ROUTE_PAGE_POLICY}/${ROUTE_POLICY_PARAM_TERMS}`
const ROUTE_PARAM_SETTINGS = 'tabPane'
const ROUTE_SETTINGS_PARAM_GENERAL = 'general'
const ROUTE_SETTINGS_PARAM_PAYMENT = 'payment'
const ROUTE_SETTINGS_PARAM_ACCOUNT = 'account'
const ROUTE_SETTINGS_PARAM_NOTIFICATION = 'notification'
const ROUTE_PAGE_SETTINGS_COMMON = `${ROUTE_PAGE_SETTINGS}/:${ROUTE_PARAM_SETTINGS}(${ROUTE_SETTINGS_PARAM_GENERAL}|${ROUTE_SETTINGS_PARAM_PAYMENT}|${ROUTE_SETTINGS_PARAM_ACCOUNT}|${ROUTE_SETTINGS_PARAM_NOTIFICATION})`
const ROUTE_PAGE_SETTINGS_GENERAL = `${ROUTE_PAGE_SETTINGS}/${ROUTE_SETTINGS_PARAM_GENERAL}`
const ROUTE_PAGE_SETTINGS_PAYMENT = `${ROUTE_PAGE_SETTINGS}/${ROUTE_SETTINGS_PARAM_PAYMENT}`
const ROUTE_PAGE_SETTINGS_ACCOUNT = `${ROUTE_PAGE_SETTINGS}/${ROUTE_SETTINGS_PARAM_ACCOUNT}`
const ROUTE_PAGE_SETTINGS_NOTIFICATION = `${ROUTE_PAGE_SETTINGS}/${ROUTE_SETTINGS_PARAM_NOTIFICATION}`

export {
	history,
	ROUTE_TO,
	ROUTE_FROM,
	ROUTE_PATH,
	ROUTE_ACCESSIBILITY,
	ROUTE_ACCESSIBILITY_PRIVATE,
	ROUTE_ACCESSIBILITY_PUBLIC,
	ROUTE_ACCESSIBILITY_FREE,
	ROUTE_PAGE_INDEX,
	ROUTE_PAGE_FILTER,
	ROUTE_PARAM_UID,
	ROUTE_PAGE_PROFILE,
	ROUTE_PAGE_PROFILE_ID,
	ROUTE_PAGE_SIGN_UP,
	ROUTE_PAGE_SIGN_IN,
	ROUTE_PAGE_SETTINGS,
	ROUTE_PARAM_SETTINGS,
	ROUTE_PAGE_SETTINGS_COMMON,
	ROUTE_PAGE_SETTINGS_GENERAL,
	ROUTE_PAGE_SETTINGS_PAYMENT,
	ROUTE_PAGE_SETTINGS_ACCOUNT,
	ROUTE_PAGE_SETTINGS_NOTIFICATION,
	ROUTE_PAGE_PASSWORD_RESET,
	ROUTE_PAGE_404,
	ROUTE_PAGE_NOTIFICATIONS,
	ROUTE_PAGE_JOIN,
	ROUTE_PAGE_HELP,
	ROUTE_PAGE_APPOINTMENTS,
	ROUTE_PAGE_SENSHI,
	ROUTE_PAGE_CHAT,
	ROUTE_PAGE_POLICY,
	ROUTE_PAGE_POLICY_COMMON,
	ROUTE_PAGE_POLICY_COOKIES,
	ROUTE_PAGE_POLICY_TERMS,
	ROUTE_PAGE_POLICY_PRIVACY,
	ROUTE_PAGE_CHECKOUT,
}
