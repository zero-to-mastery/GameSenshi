import React from 'react'
import { stopUndefined } from '1_utils'
//components
import { Exports } from '4_comp_3_Molecules'

const { FinalInputText } = stopUndefined(Exports)

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
