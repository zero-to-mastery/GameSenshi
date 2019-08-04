import React from 'react'
import { ButtonSignIn } from 'componentAtoms/ButtonSignIn/ButtonSignIn'
//constants
import { ROUTE_PAGE_SIGN_IN } from 'routes'

const ButtonSignInPropedDefault = props => {
	return <ButtonSignIn to={ROUTE_PAGE_SIGN_IN} {...props} />
}

export { ButtonSignInPropedDefault }
