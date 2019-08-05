import { ExportMolecules } from 'componentMolecules'
import { FinalCardNumberPropedDefault } from 'componentnCompounds/FinalCardNumber'
import { FinalCardHolderNamePropedDefault } from 'componentnCompounds/FinalCardHolderName'
import { FinalExpiryMonthPropedDefault } from 'componentnCompounds/FinalExpiryMonth'
import { FinalExpiryYearPropedDefault } from 'componentnCompounds/FinalExpiryYear'
import { FinalCardCVCPropedDefault } from 'componentnCompounds/FinalCardCVC'
import {
	FinalEmailPropedSignUp,
	FinalEmailPropedSignIn,
	FinalEmailPropedForgotPassword,
} from 'componentnCompounds/FinalEmail'
import {
	FinalPasswordPropedSignUp,
	FinalPasswordPropedSignIn,
} from 'componentnCompounds/FinalPassword'
import { FinalUsernamePropedSignUp } from 'componentnCompounds/FinalUsername'

export const ExportCompounds = {
	...ExportMolecules,
	FinalCardNumberPropedDefault,
	FinalCardHolderNamePropedDefault,
	FinalExpiryMonthPropedDefault,
	FinalExpiryYearPropedDefault,
	FinalCardCVCPropedDefault,
	FinalEmailPropedSignUp,
	FinalEmailPropedSignIn,
	FinalEmailPropedForgotPassword,
	FinalPasswordPropedSignUp,
	FinalPasswordPropedSignIn,
	FinalUsernamePropedSignUp,
}
