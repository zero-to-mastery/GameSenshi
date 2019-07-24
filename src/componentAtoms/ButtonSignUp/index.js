import React from 'react'
import { ButtonSignUp } from 'componentAtoms/ButtonSignUp/ButtonSignUp'
//constants
import { ROUTE_PAGE_SIGN_UP } from 'routes'

const ButtonSignUpProped = props => {
	return <ButtonSignUp to={ROUTE_PAGE_SIGN_UP} {...props} />
}

export { ButtonSignUpProped }
