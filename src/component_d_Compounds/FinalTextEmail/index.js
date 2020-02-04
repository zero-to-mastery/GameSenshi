import React from 'react'
import { FinalTextEmail, FINAL_TEXT_EMAIL } from './FinalTextEmail'
// api
import { handleIsEmailAccountNotExist, handleIsPasswordResetAble } from '3_api'
// validation
import {
	signUpEmailValidation,
	signInEmailValidation,
	stopUndefined,
} from '1_utils'
// components
import { Exports } from '4_comp_3_Molecules'

const { LabelForm } = stopUndefined(Exports)

const FinalTextEmailPropedSignUp = props => {
	return (
		<FinalTextEmail
			validation={signUpEmailValidation}
			serverValidation={handleIsEmailAccountNotExist}
			{...props}
		/>
	)
}

const FinalTextEmailPropedSignIn = props => {
	return (
		<FinalTextEmail validation={signInEmailValidation} hideSuccess {...props} />
	)
}

const FinalTextEmailPropedForgotPassword = props => {
	return (
		<FinalTextEmail
			validation={signInEmailValidation}
			serverValidation={handleIsPasswordResetAble}
			hideSuccess
			{...props}
		/>
	)
}

const FinalTextEmailPropedAccount = props => {
	return (
		<LabelForm label='Email' htmlFor={FINAL_TEXT_EMAIL}>
			<FinalTextEmail
				validation={signInEmailValidation}
				hideSuccess
				onlyShowErrorAfterSubmit
				{...props}
			/>
		</LabelForm>
	)
}

export {
	FinalTextEmailPropedSignUp,
	FinalTextEmailPropedSignIn,
	FinalTextEmailPropedForgotPassword,
	FinalTextEmailPropedAccount,
	FINAL_TEXT_EMAIL,
}
