import React from 'react'
import { FinalTextUsername } from 'componentnCompounds/FinalTextUsername/FinalTextUsername'

import { signUpUsernameValidation } from 'utils'

const FinalTextUsernamePropedSignUp = props => {
	return <FinalTextUsername validation={signUpUsernameValidation} {...props} />
}

export { FinalTextUsernamePropedSignUp }
