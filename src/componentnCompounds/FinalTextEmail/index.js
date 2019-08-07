import React from 'react'
import { FinalTextEmail } from 'componentnCompounds/FinalTextEmail/FinalTextEmail'
// api
import { handleIsEmailNotExist, handleIsPasswordResetAble } from 'api'
// validation
import { signUpEmailValidation, signInEmailValidation } from 'utils'

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

export {
	FinalTextEmailPropedSignUp,
	FinalTextEmailPropedSignIn,
	FinalTextEmailPropedForgotPassword,
}
