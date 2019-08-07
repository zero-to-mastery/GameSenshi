import React from 'react'
import { stopUndefined } from 'utils'
//components
import { ExportMolecules } from 'componentMolecules'

const { FinalInputText } = stopUndefined(ExportMolecules)
const FINAL_TEXT_EMAIL = 'email'

const FinalTextEmail = props => {
	const { ...restProps } = props
	return (
		<FinalInputText
			type={FINAL_TEXT_EMAIL}
			name={FINAL_TEXT_EMAIL}
			autoComplete={FINAL_TEXT_EMAIL}
			placeholder='Email'
			icon='tim-icons icon-email-85'
			{...restProps}
		/>
	)
}

export { FinalTextEmail, FINAL_TEXT_EMAIL }
