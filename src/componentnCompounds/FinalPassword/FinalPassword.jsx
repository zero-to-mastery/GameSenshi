import React from 'react'
import { stopUndefined } from 'utils'
//components
import { ExportMolecules } from 'componentMolecules'

const { FinalInputText } = stopUndefined(ExportMolecules)

const FinalPassword = props => {
	const { ...restProps } = props
	return (
		<FinalInputText
			type='password'
			placeholder='Password'
			icon='tim-icons icon-single-02'
			{...restProps}
		/>
	)
}

export { FinalPassword }
