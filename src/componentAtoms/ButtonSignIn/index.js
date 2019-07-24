import React from 'react'
import { ButtonSignIn } from 'componentAtoms/ButtonSignIn/ButtonSignIn'
//constants
import { ROUTE_PAGE_SIGN_IN } from 'routes'

const ButtonSignInProped = props => {
	return <ButtonSignIn to={ROUTE_PAGE_SIGN_IN} {...props} />
}

export { ButtonSignInProped }
