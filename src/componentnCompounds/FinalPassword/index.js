import React from 'react'
import { FinalPassword } from 'componentnCompounds/FinalPassword/FinalPassword'

import { signUpPasswordValidation, emailPopoverMessages } from 'utils'

const FinalPasswordPropedSignUp = props => {
	return (
		<FinalPassword
			validation={signUpPasswordValidation}
			popoverMessages={emailPopoverMessages}
			{...props}
		/>
	)
}

export { FinalPasswordPropedSignUp }
