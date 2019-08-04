import gql from 'graphql-tag'
import { simplerFirebaseErrorMessage } from 'utils'

import {
	API_SIGN_UP,
	API_SIGN_UP_EMAIL,
	API_SIGN_UP_PASSWORD,
	API_SIGN_UP_USERNAME,
	API_SIGN_UP_INPUT,
	API_DATA,
	API_STATUS,
	API_CODE,
	API_MESSAGE,
	UNEXPECTED_ERROR_CODE_5,
} from 'constantValues'

const SIGNING_UP = gql`
	mutation signUp($${API_DATA}:${API_SIGN_UP_INPUT}!) {
		${API_SIGN_UP}(${API_DATA}: $${API_DATA}) {
			${API_STATUS}
			${API_CODE}
			${API_MESSAGE}
			${API_DATA}{
				${API_SIGN_UP_EMAIL}
				${API_SIGN_UP_PASSWORD}
				${API_SIGN_UP_USERNAME}
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
				[API_DATA]: {
					[API_SIGN_UP_EMAIL]: email,
					[API_SIGN_UP_PASSWORD]: password,
					[API_SIGN_UP_USERNAME]: username,
				},
			},
		})
		.then(res => {
			return res[API_DATA][API_SIGN_UP]
		})
		.catch(err => {
			return simplerFirebaseErrorMessage(err, UNEXPECTED_ERROR_CODE_5)
		})
}

export default handleSignUpWithEmailAndPassword
