import React from 'react'
import { stopUndefined } from 'utils'
//components
import { ExportMolecules } from 'componentMolecules'

const { FinalInputText } = stopUndefined(ExportMolecules)

const FINAL_TEXT_USERNAME = 'name'

const FinalTextUsername = props => {
	const { ...restProps } = props
	return (
		<FinalInputText
			autoComplete={FINAL_TEXT_USERNAME}
			placeholder='Username'
			icon='tim-icons icon-single-02'
			{...restProps}
		/>
	)
}

export { FinalTextUsername, FINAL_TEXT_USERNAME }
