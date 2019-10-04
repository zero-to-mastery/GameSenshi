import { ExportCompounds } from 'componentnCompounds'
import {
	FormSignInPropedDefault,
	FormSignInPropedDefaultStoreSignIn,
} from 'componentOrganisms/FormSignIn'
import { FormSignUpPropedDefault } from 'componentOrganisms/FormSignUp'
import { FormCard, FORM_CARD_DEFAULT } from 'componentOrganisms/FormCard'
import { TabPaneAccountSettings } from 'componentOrganisms/TabPaneAccountSettings'
import { TabPaneGeneralSettings } from 'componentOrganisms/TabPaneGeneralSettings'
import { FormResetPasswordPropedDefault } from 'componentOrganisms/FormResetPassword'
import { NavbarIndexStoreAlert } from 'componentOrganisms/NavbarIndex'
import { TabPaneNotificationSettings } from 'componentOrganisms/TabPaneNotificationSettings'

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
	TabPaneNotificationSettings,
}
