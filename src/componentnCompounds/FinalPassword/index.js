import React from 'react'
import { FinalPassword } from 'componentnCompounds/FinalPassword/FinalPassword'

import {
	signUpPasswordValidation,
	passwordPopoverMessages,
	signInPasswordValidation,
} from 'utils'

const FinalPasswordPropedSignUp = props => {
	return (
		<FinalPassword
			validation={signUpPasswordValidation}
			popoverMessages={passwordPopoverMessages}
			{...props}
		/>
	)
}

const FinalPasswordPropedSignIn = props => {
	return (
		<FinalPassword
			validation={signInPasswordValidation}
			hideSuccess
			{...props}
		/>
	)
}

export { FinalPasswordPropedSignUp, FinalPasswordPropedSignIn }
