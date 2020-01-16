import React from 'react'
import { CheckBoxIcon } from './CheckBoxIcon'
import { useFavourite } from './utils'
import {
	StateContainer,
	storeUser,
	STORE_USER_STATE_SIGNING_IN,
	STORE_USER_STATE_SIGNED_IN,
} from 'state'

const SIGNED_IN = 'signedIn'
const SIGNING_IN = 'signingIn'

const CheckBoxIconPropedFavourite = props => {
	const {
		[SIGNING_IN]: signingIn,
		[SIGNED_IN]: signedIn,
		uid,
		...otherProps
	} = props
	const [loading, checked, onClick] = useFavourite(uid, signingIn, signedIn)

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

const CheckBoxIconPropedFavouriteStoreUser = StateContainer(
	CheckBoxIconPropedFavourite,
	storeUser,
	{
		[SIGNING_IN]: STORE_USER_STATE_SIGNING_IN,
		[SIGNED_IN]: STORE_USER_STATE_SIGNED_IN,
	}
)

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

export { CheckBoxIconPropedFavouriteStoreUser, CheckBoxIconPropedTip }
