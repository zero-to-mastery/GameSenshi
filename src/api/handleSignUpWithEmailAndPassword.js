import gql from 'graphql-tag'

import {
	SIGN_UP,
	SIGN_UP_EMAIL,
	SIGN_UP_PASSWORD,
	SIGN_UP_USERNAME,
	DATA,
	STATUS,
	CODE,
	MESSAGE,
} from 'constantValues'

const SIGNING_UP = gql`
	mutation signUp($${DATA}:signUpInput!) {
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

const defaultValues = {
	// undefined = success
	[SIGN_UP_USERNAME]: undefined,
	[SIGN_UP_EMAIL]: undefined,
	[SIGN_UP_PASSWORD]: undefined,
}

const handleSignUpWithEmailAndPassword = (
	values = defaultValues,
	apolloClient
) => {
	return apolloClient
		.mutate({
			mutation: SIGNING_UP,
			variables: {
				[DATA]: {
					[SIGN_UP_EMAIL]: values[SIGN_UP_EMAIL],
					[SIGN_UP_PASSWORD]: values[SIGN_UP_PASSWORD],
					[SIGN_UP_USERNAME]: values[SIGN_UP_USERNAME],
				},
			},
		})
		.then(res => {
			return res[DATA][SIGN_UP]
		})
		.catch(err => {
			return 'Unexpected Error Code 3'
		})
}

export default handleSignUpWithEmailAndPassword
