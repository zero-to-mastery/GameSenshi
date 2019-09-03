import gql from 'graphql-tag'
import { simplerResponseHandling } from 'utils'

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

const handleSignUpWithEmailAndPassword = (values, apolloClient) => {
	const { email, password, name } = values
	return apolloClient
		.mutate({
			mutation: SIGNING_UP,
			variables: {
				[API_DATA]: {
					[API_SIGN_UP_EMAIL]: email,
					[API_SIGN_UP_PASSWORD]: password,
					[API_SIGN_UP_USERNAME]: name,
				},
			},
		})
		.then(res => {
			return res[API_DATA][API_SIGN_UP]
		})
		.catch(err => {
			return simplerResponseHandling(false, UNEXPECTED_ERROR_CODE_5, err)
		})
}

export default handleSignUpWithEmailAndPassword
