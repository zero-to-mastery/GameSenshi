import React from 'react'
import { FinalTextName, FINAL_TEXT_NAME } from './FinalTextName'

import { signUpUsernameValidation, stopUndefined } from 'utils'

// components
import { ExportMolecules } from 'componentMolecules'

const { LabelForm } = stopUndefined(ExportMolecules)

const FinalTextNamePropedSignUp = props => {
	return <FinalTextName validation={signUpUsernameValidation} {...props} />
}

const FinalTextNamePropedGeneraL = props => {
	return (
		<LabelForm label='Display Name' htmlFor={FINAL_TEXT_NAME}>
			<FinalTextName
				icon=''
				validation={signUpUsernameValidation}
				onlyShowErrorAfterSubmit
				{...props}
			/>
		</LabelForm>
	)
}

export {
	FinalTextNamePropedSignUp,
	FinalTextNamePropedGeneraL,
	FINAL_TEXT_NAME,
}
