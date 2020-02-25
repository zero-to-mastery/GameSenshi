import React from 'react'
import { stopUndefined } from '1_utils'
import { Exports } from '5_comp_2'

const { FinalInputText } = stopUndefined(Exports)

const FINAL_TEXT_EMAIL = 'email'

const FinalTextEmail = props => {
	return (
		<FinalInputText
			type={FINAL_TEXT_EMAIL}
			name={FINAL_TEXT_EMAIL}
			autoComplete={FINAL_TEXT_EMAIL}
			placeholder='Email'
			icon='tim-icons icon-email-85'
			{...props}
		/>
	)
}

export { FinalTextEmail, FINAL_TEXT_EMAIL }
