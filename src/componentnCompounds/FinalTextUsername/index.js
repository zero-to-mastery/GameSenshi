import React from 'react'
import {
	FinalTextUsername,
	FINAL_TEXT_USERNAME,
} from 'componentnCompounds/FinalTextUsername/FinalTextUsername'

import { signUpUsernameValidation } from 'utils'

const FinalTextUsernamePropedSignUp = props => {
	return <FinalTextUsername validation={signUpUsernameValidation} {...props} />
}

export { FinalTextUsernamePropedSignUp, FINAL_TEXT_USERNAME }
