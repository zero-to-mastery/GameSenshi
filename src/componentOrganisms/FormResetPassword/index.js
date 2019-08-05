import React from 'react'
import { FormResetPassword } from 'componentOrganisms/FormResetPassword/FormResetPassword'
// api
import { handlePasswordReset } from 'api'
// route
import { ROUTE_PAGE_SIGN_IN } from 'routes'

const FormResetPasswordPropedDefault = props => {
	return (
		<FormResetPassword
			onSubmit={handlePasswordReset}
			linkSignIn={ROUTE_PAGE_SIGN_IN}
			{...props}
		/>
	)
}

export { FormResetPasswordPropedDefault }
