import React from 'react'
import {
	ButtonSignInUp,
	BUTTON_SIGN_IN_STATE_SHOW,
} from 'componentAtoms/ButtonSignInUp/ButtonSignInUp'
import { withRouter } from 'react-router-dom'
//constants
import { ROUTE_PAGE_SIGN_IN, ROUTE_PAGE_SIGN_UP } from 'routes'
import { StateContainer, storeUser, STORE_USER_STATE_SIGNED_IN } from 'state'

const mapStoreUserStateToProp = {
	[BUTTON_SIGN_IN_STATE_SHOW]: state => !state[STORE_USER_STATE_SIGNED_IN],
}

const ButtonSignInUpStoreUser = StateContainer(
	ButtonSignInUp,
	[storeUser],
	[mapStoreUserStateToProp],
	[]
)

const ButtonSignInStoreUserPropedIndexNavbar = withRouter(props => {
	const {
		small,
		location: { pathname },
	} = props
	return (
		((small && pathname.toLowerCase() === ROUTE_PAGE_SIGN_UP.toLowerCase()) ||
			!small) && (
			<ButtonSignInUpStoreUser
				navItemClass='p-0'
				buttonClass={'btn-simple font-weight-bold'}
				to={ROUTE_PAGE_SIGN_IN}
				{...props}>
				Sign In
			</ButtonSignInUpStoreUser>
		)
	)
})

const ButtonSignUpStoreUserPropedIndexNavbar = props => {
	return (
		<ButtonSignInUpStoreUser
			navItemClass='active'
			to={ROUTE_PAGE_SIGN_UP}
			{...props}>
			Sign Up
		</ButtonSignInUpStoreUser>
	)
}

export {
	ButtonSignInStoreUserPropedIndexNavbar,
	ButtonSignUpStoreUserPropedIndexNavbar,
}
