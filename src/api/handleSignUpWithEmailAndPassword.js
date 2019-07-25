import gql from 'graphql-tag'
import { simplerFirebaseErrorMessage } from 'utils/simplerErrorMessages'

import {
	SIGN_UP,
	SIGN_UP_EMAIL,
	SIGN_UP_PASSWORD,
	SIGN_UP_USERNAME,
	SIGN_UP_GQL_INPUT,
	DATA,
	STATUS,
	CODE,
	MESSAGE,
	UNEXPECTED_ERROR_CODE_5,
} from 'constantValues'

const SIGNING_UP = gql`
	mutation signUp($${DATA}:${SIGN_UP_GQL_INPUT}!) {
		${SIGN_UP}(${DATA}: $${DATA}) {
			${STATUS}
			${CODE}
			${MESSAGE}
			${DATA}{
				${SIGN_UP_EMAIL}
				${SIGN_UP_PASSWORD}
				${SIGN_UP_USERNAME}
			}
		}
	}
`

const handleSignUpWithEmailAndPassword = (
	email = '',
	password = '',
	username = '',
	apolloClient
) => {
	return apolloClient
		.mutate({
			mutation: SIGNING_UP,
			variables: {
				[DATA]: {
					[SIGN_UP_EMAIL]: email,
					[SIGN_UP_PASSWORD]: password,
					[SIGN_UP_USERNAME]: username,
				},
			},
		})
		.then(res => {
			return res[DATA][SIGN_UP]
		})
		.catch(err => {
			return simplerFirebaseErrorMessage(err, UNEXPECTED_ERROR_CODE_5)
		})
}

export default handleSignUpWithEmailAndPassword
