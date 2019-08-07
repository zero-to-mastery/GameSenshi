import React from 'react'
import { FinalInput } from 'componentMolecules/FinalInput/FinalInput'
import { ExportAtoms } from 'componentAtoms'
import { stopUndefined } from 'utils'

const { InputText, InputSelect } = stopUndefined(ExportAtoms)

const FinalInputText = props => {
	return <FinalInput Component={InputText} {...props} />
}

const FinalInputSelect = props => {
	const { onValueChange } = props
	return (
		<FinalInput
			Component={InputSelect}
			onChange={e => {
				onValueChange(e)
				return e
			}}
			{...props}
		/>
	)
}

export { FinalInputText, FinalInputSelect }
