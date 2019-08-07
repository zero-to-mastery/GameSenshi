import React from 'react'
import { stopUndefined } from 'utils'
//components
import { ExportMolecules } from 'componentMolecules'

const { FinalInputText } = stopUndefined(ExportMolecules)

const FinalTextEmail = props => {
	const { ...restProps } = props
	return (
		<FinalInputText
			type='email'
			placeholder='Email'
			icon='tim-icons icon-email-85'
			{...restProps}
		/>
	)
}

export { FinalTextEmail }
