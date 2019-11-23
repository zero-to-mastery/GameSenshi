import React from 'react'
import Loader from 'react-loader-spinner'
import { Exports } from 'componentaProton'
import { stopUndefined } from 'utils'
const { Button } = stopUndefined(Exports)

const ButtonSubmit = props => {
	const {
		submitRef,
		className,
		color,
		size,
		disabled,
		onClick,
		children,
		block,
	} = props
	return (
		<Button
			ref={submitRef}
			block={block}
			className={className}
			color={color}
			size={size}
			disabled={disabled}
			onClick={onClick}
		>
			{disabled ? (
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
