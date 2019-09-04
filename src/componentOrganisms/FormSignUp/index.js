import React, { useCallback } from 'react'
import {
	FormSignUp,
	FINAL_TEXT_EMAIL,
	FINAL_TEXT_PASSWORD,
	FINAL_TEXT_USERNAME,
} from 'componentOrganisms/FormSignUp/FormSignUp'
// routing
import { withLastLocation, ROUTE_PAGE_SIGN_IN } from 'routes'
// api
import {
	handleSignUpWithEmailAndPassword,
	API_SIGN_UP_EMAIL,
	API_SIGN_UP_PASSWORD,
	API_SIGN_UP_USERNAME,
} from 'api'
// utils
import { onSuccessfulSignUp } from 'componentOrganisms/FormSignUp/utils'

const FormSignUpPropedDefault = withLastLocation(props => {
	const { lastLocation, ...restProps } = props
	const onSubmit = useCallback(values => {
		const values_ = {
			[API_SIGN_UP_EMAIL]: values[FINAL_TEXT_EMAIL],
			[API_SIGN_UP_PASSWORD]: values[FINAL_TEXT_PASSWORD],
			[API_SIGN_UP_USERNAME]: values[FINAL_TEXT_USERNAME],
		}
		return handleSignUpWithEmailAndPassword(values_, () => {
			onSuccessfulSignUp(values)
		})
	}, [])
	return (
		<FormSignUp
			signInLink={ROUTE_PAGE_SIGN_IN}
			onSubmit={onSubmit}
			{...restProps}
		/>
	)
})

export { FormSignUp, FormSignUpPropedDefault }
