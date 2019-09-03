import React from 'react'
// state management
import { storeAlertShow, userStore, STORE_USER_SET_IS_SIGNING_IN } from 'state'
// api
import { handleSignInWithEmailAndPassword } from 'api'
// routes
import { onSignedInRouting } from 'routes'

const onSuccessfulSubmission = (values, lastLocation) => {
	const { email, password, username } = values
	const alertBody = (
		<>
			Welcome {username}! An verification email has been sent to&nbsp;
			<a
				href={'https://' + email}
				target='_blank'
				rel='noopener noreferrer'
				className='alert-link'>
				{` ${email}`}
			</a>
		</>
	)
	userStore[STORE_USER_SET_IS_SIGNING_IN](true, () => {
		storeAlertShow(
			'Connection timeout, please sign in manually',
			'danger',
			'tim-icons icon-alert-circle-exc'
		)
	})
	storeAlertShow(alertBody, 'success', 'tim-icons icon-bell-55')
	handleSignInWithEmailAndPassword(email, password)
	onSignedInRouting(lastLocation)
}

export { onSuccessfulSubmission }
