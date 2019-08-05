import React from 'react'
import { stopUndefined } from 'utils'
//components
import { ExportMolecules } from 'componentMolecules'

const { FinalInputText } = stopUndefined(ExportMolecules)

const FinalUsername = props => {
	const { ...restProps } = props
	return (
		<FinalInputText
			type='username'
			placeholder='Username'
			icon='tim-icons icon-single-02'
			{...restProps}
		/>
	)
}

export { FinalUsername }
