import React, { memo } from 'react'
import { Exports } from 'componentaProton'
import { stopUndefined } from 'utils'
const { Button } = stopUndefined(Exports)

const SIZE = 'size'
const COLOR = 'color'
const TYPE = 'type'

const ButtonAddToCart = memo(props => {
	const { children, [SIZE]: size, [COLOR]: color, [TYPE]: type } = props
	return (
		<Button size={size} color={color} type={type}>
			{children}
		</Button>
	)
})

export { ButtonAddToCart }
