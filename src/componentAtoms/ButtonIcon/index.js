import React from 'react'
import { ButtonIcon } from './ButtonIcon'

const ButtonIconPropedFavorite = props => {
	return (
		<ButtonIcon
			color='danger'
			tooltip='Favourite me! 😘'
			tooltip2={`Please don't unfavorite me! 😭`}
			icon='tim-icons icon-heart-2'
			{...props}
		/>
	)
}

const ButtonIconPropedTip = props => {
	return (
		<ButtonIcon
			color='success'
			tooltip='Like me? Tip me!💖'
			icon='tim-icons icon-coins'
			{...props}
		/>
	)
}

export { ButtonIconPropedFavorite, ButtonIconPropedTip }
