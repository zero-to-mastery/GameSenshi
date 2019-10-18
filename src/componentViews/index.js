import { Exports as ExportMultiOrganisms } from 'componentpMultiOrganisms'

import { IndexPage } from './IndexPage.jsx'
import { ProfilePage } from './ProfilePage.jsx'
import { SettingsPage } from './SettingsPage'
import { SignInPage } from './SignInPage'
import { SignUpPage } from './SignUpPage'
import { PasswordResetPage } from './PasswordResetPage'
import { Error404Page } from './Error404Page'

export const Exports = {
	...ExportMultiOrganisms,
	IndexPage,
	ProfilePage,
	SettingsPage,
	SignInPage,
	SignUpPage,
	PasswordResetPage,
	Error404Page,
}
