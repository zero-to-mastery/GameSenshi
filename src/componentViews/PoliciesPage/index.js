import { PoliciesPage } from './PoliciesPage'
import {
	ROUTE_PAGE_POLICY_PRIVACY_POLICY,
	ROUTE_PAGE_POLICY_COOKIES,
	ROUTE_PAGE_POLICY_TERMS,
} from 'routes'

const policyPageTabList = [
	{
		navLink: 'Privacy Policy',
		icon: 'tim-icons icon-lock-circle',
		to: ROUTE_PAGE_POLICY_PRIVACY_POLICY,
	},
	{
		navLink: 'Cookie Policy',
		icon: 'fas fa-cookie-bite',
		to: ROUTE_PAGE_POLICY_COOKIES,
	},
	{
		navLink: 'Terms & conditions',
		icon: 'tim-icons icon-single-copy-04',
		to: ROUTE_PAGE_POLICY_TERMS,
	},
]

export { PoliciesPage, policyPageTabList }
