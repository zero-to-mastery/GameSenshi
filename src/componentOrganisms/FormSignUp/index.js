import React, { useCallback } from 'react'
import {
	FormSignUp,
	FINAL_TEXT_EMAIL,
	FINAL_TEXT_PASSWORD,
	FINAL_TEXT_NAME,
} from 'componentOrganisms/FormSignUp/FormSignUp'
// routing
import { withLastLocation, ROUTE_PAGE_SIGN_IN } from 'routes'
// api
import {
	handleSignUpWithEmailAndPassword,
	API_SIGN_UP_EMAIL,
	API_SIGN_UP_PASSWORD,
	API_SIGN_UP_DISPLAY_NAME,
} from 'api'
// utils
import { onSuccessfulSignUp } from 'componentOrganisms/FormSignUp/utils'

const FormSignUpPropedDefault = withLastLocation(props => {
	const onSubmit = useCallback(values => {
		const values_ = {
			[API_SIGN_UP_EMAIL]: values[FINAL_TEXT_EMAIL],
			[API_SIGN_UP_PASSWORD]: values[FINAL_TEXT_PASSWORD],
			[API_SIGN_UP_DISPLAY_NAME]: values[FINAL_TEXT_NAME],
		}
		return handleSignUpWithEmailAndPassword(values_, () => {
			onSuccessfulSignUp(values)
		})
	}, [])
	return (
		<FormSignUp
			signInLink={ROUTE_PAGE_SIGN_IN}
			onSubmit={onSubmit}
			{...props}
		/>
	)
})

export { FormSignUp, FormSignUpPropedDefault }
