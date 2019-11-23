import React from 'react'
import { Button as Button1 } from 'reactstrap'
import ButtonBase from '@material-ui/core/ButtonBase'

const Button = props => {
	return (
		<ButtonBase>
			<Button1 {...props} />
		</ButtonBase>
	)
}

export { Button }
