import React, { useCallback } from 'react'
import {
	FormResetPassword,
	FINAL_TEXT_EMAIL,
} from 'componentOrganisms/FormResetPassword/FormResetPassword'
// api
import { handlePasswordReset } from 'api'
// route
import { ROUTE_PAGE_SIGN_IN } from 'routes'

const FormResetPasswordPropedDefault = props => {
	const onSubmit = useCallback(values =>
		handlePasswordReset(values[FINAL_TEXT_EMAIL])
	)
	return (
		<FormResetPassword
			onSubmit={onSubmit}
			linkSignIn={ROUTE_PAGE_SIGN_IN}
			{...props}
		/>
	)
}

export { FormResetPasswordPropedDefault }
