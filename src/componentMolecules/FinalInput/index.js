import React from 'react'
import { FinalInput } from 'componentMolecules/FinalInput/FinalInput'
import { ExportAtoms } from 'componentAtoms'
import { stopUndefined } from 'utils'

const { InputText, InputSelect } = stopUndefined(ExportAtoms)

const FinalInputText = props => {
	return <FinalInput {...props} Component={InputText} />
}

const FinalInputSelect = props => {
	return <FinalInput {...props} Component={InputSelect} />
}

export { FinalInputText, FinalInputSelect }
