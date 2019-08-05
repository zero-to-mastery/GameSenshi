import React from 'react'
import { FinalEmail } from 'componentnCompounds/FinalEmail/FinalEmail'
// api
import { handleIsEmailNotExist, handleIsPasswordResetAble } from 'api'
// validation
import { signUpEmailValidation, signInEmailValidation } from 'utils'

const FinalEmailPropedSignUp = props => {
	return (
		<FinalEmail
			validation={signUpEmailValidation}
			serverValidation={handleIsEmailNotExist}
			{...props}
		/>
	)
}

const FinalEmailPropedSignIn = props => {
	return (
		<FinalEmail validation={signInEmailValidation} hideSuccess {...props} />
	)
}

const FinalEmailPropedForgotPassword = props => {
	return (
		<FinalEmail
			validation={signInEmailValidation}
			serverValidation={handleIsPasswordResetAble}
			hideSuccess
			{...props}
		/>
	)
}

export {
	FinalEmailPropedSignUp,
	FinalEmailPropedSignIn,
	FinalEmailPropedForgotPassword,
}
