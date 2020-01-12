import React from 'react'
import Loader from 'react-loader-spinner'
import { Exports } from 'componentaProton'
import { stopUndefined } from 'utils'
const { Button } = stopUndefined(Exports)

const ButtonSubmit = props => {
	const { submitting, children, ...otherProps } = props
	return (
		<Button {...otherProps}>
			{submitting ? (
				<>
					<Loader type='Watch' color='#00BFFF' height='19px' width='19px' />
					&nbsp;&nbsp;{children || 'Submitting'}
				</>
			) : (
				children || 'Submit'
			)}
		</Button>
	)
}

export { ButtonSubmit }
