import React, { forwardRef } from 'react'
import { Button as Button1 } from 'reactstrap'
import ButtonBase from '@material-ui/core/ButtonBase'

const Button = forwardRef((props, ref) => {
	const { baseClass, baseStyle, ...otherProps } = props
	return (
		<ButtonBase component='span' className={baseClass} style={baseStyle}>
			<Button1 ref={ref} {...otherProps} />
		</ButtonBase>
	)
})

export { Button }
