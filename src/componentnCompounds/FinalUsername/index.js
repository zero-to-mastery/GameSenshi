import React from 'react'
import { FinalUsername } from 'componentnCompounds/FinalUsername/FinalUsername'

import { signUpUsernameValidation } from 'utils'

const FinalUsernamePropedSignUp = props => {
	return <FinalUsername validation={signUpUsernameValidation} {...props} />
}

export { FinalUsernamePropedSignUp }
