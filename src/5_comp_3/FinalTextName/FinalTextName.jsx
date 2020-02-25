import React from 'react'
import { stopUndefined } from '1_utils'
import { Exports } from '5_comp_2'

const { FinalInputText } = stopUndefined(Exports)

const FINAL_TEXT_NAME = 'name'

const FinalTextName = props => {
	return (
		<FinalInputText
			name={FINAL_TEXT_NAME}
			autoComplete={FINAL_TEXT_NAME}
			placeholder='Display Name'
			icon='tim-icons icon-single-02'
			{...props}
		/>
	)
}

export { FinalTextName, FINAL_TEXT_NAME }
