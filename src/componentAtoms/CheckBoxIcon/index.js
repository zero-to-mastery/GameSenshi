import React from 'react'
import { CheckBoxIcon } from './CheckBoxIcon'

const CheckBoxIconPropedFavorite = props => {
	return (
		<CheckBoxIcon
			color='primary'
			tooltipOn='😘Favourite me! '
			tooltipOff='Favourited!'
			icon='tim-icons icon-heart-2'
			{...props}
		/>
	)
}

const CheckBoxIconPropedTip = props => {
	return (
		<CheckBoxIcon
			color='success'
			tooltipOn='💖Tip me!'
			icon='tim-icons icon-coins'
			{...props}
		/>
	)
}

export { CheckBoxIconPropedFavorite, CheckBoxIconPropedTip }
