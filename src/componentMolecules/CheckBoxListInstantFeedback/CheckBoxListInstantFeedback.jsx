import React from 'react'
import { stopUndefined } from 'utils'
import { ExportAtoms } from 'componentAtoms'

const { CheckBox } = stopUndefined(ExportAtoms)

const BODY = 'body'
const NAME = 'name'

const CheckBoxList = props => {
	const { list, loading, value, onChange } = props
	return list.map(checkBox => {
		const { [BODY]: body, [NAME]: name } = checkBox
		return (
			<CheckBox
				key={name}
				name={name}
				onChange={onChange}
				loading={loading}
				value={value[name]}>
				{body}
			</CheckBox>
		)
	})
}

export { CheckBoxList, BODY, NAME }
