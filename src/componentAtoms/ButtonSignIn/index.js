import React from 'react'
import { ButtonSignIn } from 'componentAtoms/ButtonSignIn/ButtonSignIn'
import { withRouter } from 'react-router-dom'
//constants
import { ROUTE_PAGE_SIGN_IN } from 'routes'

const ButtonSignInPropedNavbar = withRouter(props => {
	const {
		location: { pathname },
	} = props

	return pathname.toLowerCase() !== ROUTE_PAGE_SIGN_IN && <ButtonSignIn to={ROUTE_PAGE_SIGN_IN} {...props} />
})

export { ButtonSignInPropedNavbar }
