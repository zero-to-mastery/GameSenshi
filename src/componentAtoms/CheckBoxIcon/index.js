import React from 'react'
import { CheckBoxIcon } from './CheckBoxIcon'
import { useFavourite } from './utils'

const CheckBoxIconPropedFavourite = props => {
	const { uid, ...otherProps } = props
	const { checked, loading } = useFavourite(uid)
	return (
		<CheckBoxIcon
			color='primary'
			tooltipOn='😘Favourite me! '
			tooltipOff='Favourited!'
			icon='tim-icons icon-heart-2'
			checked={checked}
			loading={loading}
			{...otherProps}
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

export { CheckBoxIconPropedFavourite, CheckBoxIconPropedTip }
