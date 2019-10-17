import React from 'react'
import { ButtonAddToCart } from './ButtonAddToCart'

const ButtonAddToCartPropedProfile = props => {
	return (
		<ButtonAddToCart size='lg' color='warning' type='button' {...props}>
			Add to cart
		</ButtonAddToCart>
	)
}

export { ButtonAddToCartPropedProfile }
