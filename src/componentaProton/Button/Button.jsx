import React, { forwardRef } from 'react'
import { Button as Button1 } from 'reactstrap'
import ButtonBase from '@material-ui/core/ButtonBase'

const Button = forwardRef((props, ref) => {
	return (
		<ButtonBase component='span'>
			<Button1 ref={ref} {...props} />
		</ButtonBase>
	)
})

export { Button }
