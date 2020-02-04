import React from 'react'
import { ButtonSignInUp, BUTTON_SIGN_IN_STATE_SHOW } from './ButtonSignInUp'
import { ROUTE_PAGE_SIGN_IN, ROUTE_PAGE_SIGN_UP, useLocation } from '2_routes'
import { StateContainer, storeUser, STORE_USER_STATE_SIGNED_IN } from '2_state'

const mapStoreUserStateToProp = {
	[BUTTON_SIGN_IN_STATE_SHOW]: state => !state[STORE_USER_STATE_SIGNED_IN],
}

const ButtonSignInUpStoreUser = StateContainer(
	ButtonSignInUp,
	[storeUser],
	[mapStoreUserStateToProp],
	[]
)

const ButtonSignInStoreUserPropedIndexNavbar = props => {
	const { pathname } = useLocation()
	const { small } = props
	return (
		((small && pathname.toLowerCase() === ROUTE_PAGE_SIGN_UP.toLowerCase()) ||
			!small) && (
			<ButtonSignInUpStoreUser
				navItemClass='p-0'
				buttonClass={'btn-simple font-weight-bold text-nowrap'}
				to={ROUTE_PAGE_SIGN_IN}
				{...props}
			>
				Sign In
			</ButtonSignInUpStoreUser>
		)
	)
}

const ButtonSignUpStoreUserPropedIndexNavbar = props => {
	return (
		<ButtonSignInUpStoreUser
			navItemClass='active'
			buttonClass='text-nowrap'
			to={ROUTE_PAGE_SIGN_UP}
			{...props}
		>
			Sign Up
		</ButtonSignInUpStoreUser>
	)
}

export {
	ButtonSignInStoreUserPropedIndexNavbar,
	ButtonSignUpStoreUserPropedIndexNavbar,
}
