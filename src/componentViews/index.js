import { Exports as ExportMultiOrganisms } from 'componentpMultiOrganisms'

import { ProfilePage } from './ProfilePage'
import { SettingsPage } from './SettingsPage'
import { SignInPage } from './SignInPage'
import { SignUpPage } from './SignUpPage'
import { PasswordResetPage } from './PasswordResetPage'
import { Error404Page } from './Error404Page'
import { PoliciesPage } from './PoliciesPage'
import { CheckoutPage } from './CheckoutPage'
import { IndexPage } from './IndexPage'
import { SearchedPage } from './SearchedPage'

export const Exports = {
	...ExportMultiOrganisms,
	ProfilePage,
	SettingsPage,
	SignInPage,
	SignUpPage,
	PasswordResetPage,
	Error404Page,
	PoliciesPage,
	CheckoutPage,
	IndexPage,
	SearchedPage,
}
