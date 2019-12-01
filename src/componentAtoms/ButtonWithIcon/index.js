import React from 'react'
import { ButtonWithIcon } from './ButtonWithIcon'

const ButtonAddToCart = props => {
	const { ...otherProps } = props
	return (
		<ButtonWithIcon
			size='lg'
			color='warning'
			type='button'
			icon='tim-icons icon-cart'
			label='Add to cart'
			{...otherProps}
		/>
	)
}

const ButtonChat = props => {
	const { ...otherProps } = props
	return (
		<ButtonWithIcon
			size='lg'
			color='success'
			type='button'
			icon='tim-icons icon-chat-33'
			label='Chat'
			{...otherProps}
		/>
	)
}

const ButtonGroupProfile = props => {
	return (
		<div className='d-flex flex-column'>
			<ButtonChat />
			<ButtonAddToCart />
		</div>
	)
}

export { ButtonGroupProfile }
