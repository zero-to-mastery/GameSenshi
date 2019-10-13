import { ExportCompounds } from 'componentnCompounds'
import {
	FormSignInPropedDefault,
	FormSignInPropedDefaultStoreSignIn,
} from './FormSignIn'
import { FormSignUpPropedDefault } from './FormSignUp'
import { FormCard, FORM_CARD_DEFAULT } from './FormCard'
import { TabPaneAccountSettings } from './TabPaneAccountSettings'
import { TabPaneGeneralSettings } from './TabPaneGeneralSettings'
import { FormResetPasswordPropedDefault } from './FormResetPassword'
import { NavbarIndexStoreAlert } from './NavbarIndex'

export const ExportOrganisms = {
	...ExportCompounds,
	FormSignInPropedDefault,
	FormSignInPropedDefaultStoreSignIn,
	FormSignUpPropedDefault,
	FormCard,
	FORM_CARD_DEFAULT,
	TabPaneAccountSettings,
	TabPaneGeneralSettings,
	FormResetPasswordPropedDefault,
	NavbarIndexStoreAlert,
}
