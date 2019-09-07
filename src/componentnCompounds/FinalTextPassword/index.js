import React from 'react'
import {
	FinalTextPassword,
	FINAL_TEXT_PASSWORD,
} from 'componentnCompounds/FinalTextPassword/FinalTextPassword'

import {
	signUpPasswordValidation,
	passwordPopoverMessages,
	signInPasswordValidation,
} from 'utils'

// components
import { stopUndefined } from 'utils'
import { ExportMolecules } from 'componentMolecules'

const { LabelFormPropedInput } = stopUndefined(ExportMolecules)

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

const FinalTextPasswordPropedAccount = props => {
	return (
		<LabelFormPropedInput label='Email' htmlFor={FINAL_TEXT_PASSWORD}>
			<FinalTextPassword
				validation={signUpPasswordValidation}
				hideSuccess
				onlyShowErrorAfterSubmit
				{...props}
			/>
		</LabelFormPropedInput>
	)
}

export {
	FinalTextPasswordPropedSignUp,
	FinalTextPasswordPropedSignIn,
	FinalTextPasswordPropedAccount,
	FINAL_TEXT_PASSWORD,
}
