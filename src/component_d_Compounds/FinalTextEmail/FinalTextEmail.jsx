import React from 'react'
import { stopUndefined } from 'utils'
//components
import { Exports } from 'component_c_Molecules'

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
