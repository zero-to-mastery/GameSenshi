import React, { useCallback } from 'react'
import {
	FormSignUp,
	FINAL_TEXT_EMAIL,
	FINAL_TEXT_PASSWORD,
	FINAL_TEXT_NAME,
} from './FormSignUp'
// routing
import {
	withLastLocation,
	ROUTE_PAGE_SIGN_IN,
	ROUTE_PAGE_POLICY_PRIVACY,
	ROUTE_PAGE_POLICY_TERMS,
} from 'routes'
// api
import {
	handleSignUpWithEmailAndPassword,
	API_SIGN_UP_EMAIL,
	API_SIGN_UP_PASSWORD,
} from 'api'
// utils
import { onSuccessfulSignUp } from './utils'
import { FB_FS_SETTINGS_GENERAL_DISPLAY_NAME } from 'constantValues'

const FormSignUpPropedDefault = withLastLocation(props => {
	const onSubmit = useCallback(values => {
		const values_ = {
			[API_SIGN_UP_EMAIL]: values[FINAL_TEXT_EMAIL],
			[API_SIGN_UP_PASSWORD]: values[FINAL_TEXT_PASSWORD],
			[FB_FS_SETTINGS_GENERAL_DISPLAY_NAME]: values[FINAL_TEXT_NAME],
		}
		return handleSignUpWithEmailAndPassword(values_, () => {
			onSuccessfulSignUp(values)
		})
	}, [])
	return (
		<FormSignUp
			signInLink={ROUTE_PAGE_SIGN_IN}
			onSubmit={onSubmit}
			privacy={ROUTE_PAGE_POLICY_PRIVACY}
			terms={ROUTE_PAGE_POLICY_TERMS}
			{...props}
		/>
	)
})

export { FormSignUp, FormSignUpPropedDefault }
