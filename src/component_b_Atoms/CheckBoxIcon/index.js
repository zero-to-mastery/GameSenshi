import React, { useCallback } from 'react'
import { CheckBoxIcon } from './CheckBoxIcon'
import { useFavourite } from './utils'
import { needLoginToClick } from 'component_0_Utils'

const CheckBoxIconPropedFavourite = props => {
	const { uid, ...otherProps } = props
	const { checked, loading } = useFavourite(uid)

	const onClick = useCallback(() => {
		needLoginToClick()
	}, [])

	return (
		<CheckBoxIcon
			color='primary'
			tooltipOn='😘Favourite me! '
			tooltipOff='Favourited!'
			icon='tim-icons icon-heart-2'
			checked={checked}
			loading={loading}
			onClick={onClick}
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
