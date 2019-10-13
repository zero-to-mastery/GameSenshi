import React from 'react'
// state management
import { storeAlertShow } from 'state'
import { FINAL_TEXT_EMAIL, FINAL_TEXT_NAME } from './FormSignUp'

const onSuccessfulSignUp = values => {
	const { [FINAL_TEXT_EMAIL]: email, [FINAL_TEXT_NAME]: username } = values
	const alertBody = (
		<span>
			Welcome {username}! An verification email has been sent to&nbsp;
			<a
				href={'https://' + email}
				target='_blank'
				rel='noopener noreferrer'
				className='alert-link'>
				{` ${email}`}
			</a>
		</span>
	)
	storeAlertShow(alertBody, 'success', 'tim-icons icon-bell-55')
}

export { onSuccessfulSignUp }
