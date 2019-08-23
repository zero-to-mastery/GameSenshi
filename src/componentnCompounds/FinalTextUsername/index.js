import React from 'react'
import {
	FinalTextUsername,
	FINAL_TEXT_USERNAME,
} from 'componentnCompounds/FinalTextUsername/FinalTextUsername'

import { signUpUsernameValidation } from 'utils'

const FinalTextUsernamePropedSignUp = props => {
	return <FinalTextUsername validation={signUpUsernameValidation} {...props} />
}

const FinalTextUsernamePropedSetting = props => {
	return (
		<FinalTextUsername
			icon=''
			validation={signUpUsernameValidation}
			onlyShowErrorOnSubmit
			placeHolder='Name'
			{...props}
		/>
	)
}

export {
	FinalTextUsernamePropedSignUp,
	FinalTextUsernamePropedSetting,
	FINAL_TEXT_USERNAME,
}
