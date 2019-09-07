import React from 'react'
import {
	FinalTextUsername,
	FINAL_TEXT_USERNAME,
} from 'componentnCompounds/FinalTextUsername/FinalTextUsername'

import { signUpUsernameValidation, stopUndefined } from 'utils'

// components
import { ExportMolecules } from 'componentMolecules'

const { LabelForm } = stopUndefined(ExportMolecules)

const FinalTextUsernamePropedSignUp = props => {
	return <FinalTextUsername validation={signUpUsernameValidation} {...props} />
}

const FinalTextUsernamePropedGeneraL = props => {
	return (
		<LabelForm label='Username' htmlFor={FINAL_TEXT_USERNAME}>
			<FinalTextUsername
				icon=''
				validation={signUpUsernameValidation}
				onlyShowErrorAfterSubmit
				{...props}
			/>
		</LabelForm>
	)
}

export {
	FinalTextUsernamePropedSignUp,
	FinalTextUsernamePropedGeneraL,
	FINAL_TEXT_USERNAME,
}
