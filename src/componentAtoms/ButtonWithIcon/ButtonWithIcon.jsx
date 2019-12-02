import React, { memo } from 'react'
import { Exports } from 'componentaProton'
import { stopUndefined } from 'utils'
const { Button } = stopUndefined(Exports)

const SIZE = 'size'
const COLOR = 'color'
const TYPE = 'type'
const LABEL = 'label'
const ICON = 'icon'

const ButtonWithIcon = memo(props => {
	const {
		[LABEL]: label,
		[ICON]: icon,
		[SIZE]: size,
		[COLOR]: color,
		[TYPE]: type,
	} = props
	return (
		<Button style={{ flex: 1 }} size={size} color={color} type={type}>
			{label} <i className={icon}></i>
		</Button>
	)
})

export { ButtonWithIcon }
