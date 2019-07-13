import { auth } from 'firebaseInit'
import { signUpResObj } from 'utils/objects'
import gql from 'graphql-tag'

import {
	USER_DISPLAY_NAME,
	USER_PHOTO_URL,
	SIGN_UP,
	SIGN_UP_EMAIL,
	SIGN_UP_PASSWORD,
	SIGN_UP_USERNAME,
	SIGN_UP_GQL_INPUT,
	DATA,
	STATUS,
	CODE,
	MESSAGE,
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
	const {
		[SIGN_UP_EMAIL]: email,
		[SIGN_UP_PASSWORD]: password,
		[SIGN_UP_USERNAME]: username,
	} = values

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
		.then(async res => {
			const {
				[SIGN_UP]: { [STATUS]: status },
				[SIGN_UP]: signUpRes,
			} = res[DATA]

			if (status) {
				const isUserCreated = await auth()
					.createUserWithEmailAndPassword(email, password)
					.then(credential => ({ status: true, credential }))
					.catch(err => ({ status: false, err }))

				if (isUserCreated.status) {
					const {
						credential: { user },
					} = isUserCreated
					if (user && user.emailVerified === false) {
						user.sendEmailVerification().catch(err => {
							console.log('email user failed', err)
						})
						user
							.updateProfile({
								[USER_DISPLAY_NAME]: username,
								[USER_PHOTO_URL]: '',
							})
							.catch(err => {
								console.log('update username failed', err)
							})
					}
					return signUpResObj(true)
				} else {
					console.log('submit error', isUserCreated.err)
					return signUpResObj(false, 'Internal Error Code 5', 5)
				}
			} else {
				return signUpRes
			}
		})
		.catch(err => {
			return 'Unexpected Error Code 3'
		})
}

export default handleSignUpWithEmailAndPassword
