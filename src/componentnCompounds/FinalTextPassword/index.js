import React from 'react'
import { FinalTextPassword } from 'componentnCompounds/FinalTextPassword/FinalTextPassword'

import {
	signUpPasswordValidation,
	passwordPopoverMessages,
	signInPasswordValidation,
} from 'utils'

const FinalTextPasswordPropedSignUp = props => {
	return (
		<FinalTextPassword
			validation={signUpPasswordValidation}
			popoverMessages={passwordPopoverMessages}
			{...props}
		/>
	)
}

const FinalTextPasswordPropedSignIn = props => {
	return (
		<FinalTextPassword
			validation={signInPasswordValidation}
			hideSuccess
			{...props}
		/>
	)
}

export { FinalTextPasswordPropedSignUp, FinalTextPasswordPropedSignIn }
