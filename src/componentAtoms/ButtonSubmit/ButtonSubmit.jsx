import React, { forwardRef } from 'react'
import Loader from 'react-loader-spinner'
import { Exports } from 'componentaProton'
import { stopUndefined } from 'utils'
const { Button } = stopUndefined(Exports)

const ButtonSubmit = forwardRef((props, ref) => {
	const { submitting, children, ...otherProps } = props
	return (
		<Button ref={ref} {...otherProps}>
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
})

export { ButtonSubmit }
