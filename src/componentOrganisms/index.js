import { Exports as ExportCompounds } from 'componentnCompounds'
import {
	FormSignInPropedSignIn,
	FormSignInStoreSignInPropedApp,
} from './FormSignIn'
import { FormSignUpPropedDefault } from './FormSignUp'
import { FormCard, FORM_CARD_DEFAULT } from './FormCard'
import { TabPaneAccountSettings } from './TabPaneAccountSettings'
import { TabPaneGeneralSettings } from './TabPaneGeneralSettings'
import { FormResetPasswordPropedDefault } from './FormResetPassword'
import { NavbarIndexStoreAlertPropApp } from './NavbarIndex'
import { FormProfile } from './FormProfile'
import { CheckoutCardPropedDefault } from './CheckoutCard'
import { ContainerSearchResultsPropedDefault } from './ContainerSearchResults'

export const Exports = {
	...ExportCompounds,
	FormSignInPropedSignIn,
	FormSignInStoreSignInPropedApp,
	FormSignUpPropedDefault,
	FormCard,
	FORM_CARD_DEFAULT,
	TabPaneAccountSettings,
	TabPaneGeneralSettings,
	FormResetPasswordPropedDefault,
	NavbarIndexStoreAlertPropApp,
	FormProfile,
	CheckoutCardPropedDefault,
	ContainerSearchResultsPropedDefault,
}
