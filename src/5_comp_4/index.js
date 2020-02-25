import { Exports as ExportCompounds } from '5_comp_3'
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
	CheckoutCardPropedDefault,
	ContainerSearchResultsPropedDefault,
}
