import React, { memo, Fragment } from 'react'
import { Button } from 'reactstrap'

const SIZE = 'size'
const COLOR = 'color'
const TYPE = 'type'

const ButtonAddToCart = memo(props => {
	const { children, [SIZE]: size, [COLOR]: color, [TYPE]: type } = props
	return (
		<Fragment>
			<Button size={size} color={color} type={type}>
				{children}
			</Button>
		</Fragment>
	)
})

export { ButtonAddToCart }
