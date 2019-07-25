import React from 'react'
// state management
import { alertStoreShow } from 'state'
// api
import { handleSignInWithEmailAndPassword } from 'api'
// routes
import { onSignedInRouting } from 'routes'

const onSuccessfulSubmission = (
	email = '',
	password = '',
	username = '',
	lastLocation
) => {
	const alertBody = (
		<>
			Welcome {username}! An verification email has been sent to{' '}
			<a
				href={'https://' + email}
				target='_blank'
				rel='noopener noreferrer'
				className='alert-link'>
				{email}
			</a>
		</>
	)
	alertStoreShow(alertBody, 'success', 'tim-icons icon-bell-55')
	handleSignInWithEmailAndPassword(email, password)
	onSignedInRouting(lastLocation)
}

export { onSuccessfulSubmission }
