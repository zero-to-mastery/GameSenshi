import React from 'react'
import { FinalTextEmail, FINAL_TEXT_EMAIL } from './FinalTextEmail'
// api
import { handleIsEmailNotExist, handleIsPasswordResetAble } from 'api'
// validation
import {
	signUpEmailValidation,
	signInEmailValidation,
	stopUndefined,
} from 'utils'
// components
import { Exports } from 'componentMolecules'

const { LabelForm } = stopUndefined(Exports)

const FinalTextEmailPropedSignUp = props => {
	return (
		<FinalTextEmail
			validation={signUpEmailValidation}
			serverValidation={handleIsEmailNotExist}
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
