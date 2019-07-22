import React from 'react'
import { Button, UncontrolledTooltip } from 'reactstrap'
import reactElementToJSXString from 'react-element-to-jsx-string'

// routing and api
import { handleSignInWithGoogle, handleSignInWithFacebook } from 'api'
import { withLastLocation } from 'react-router-last-location'
import { withRouter } from 'react-router'
import { onSignedInRouting } from 'routes'

// state
import { authModalStore } from 'state'

const SocialAuthSignInButton = props => {
	const { lastLocation, history } = props

	const showSignInModal = (provider, signInWith) => {
		const body = (
			<>
				Please wait while we signing you in with <b>{provider}</b>.
			</>
		)
		const title = 'Signing You In...'
		authModalStore.show(title, body, true)
		const body2 = reactElementToJSXString(
			<span>
				Signing in with <b>{provider}</b>...
				<br />
				<br />
				Almost there!
			</span>
		)
		const title2 = 'Signing You In...'
		authModalStore.setItemInSessionStorage(title2, body2)
		onSignedInRouting(history, lastLocation)
		signInWith()
	}

	return (
		<div className='btn-wrapper text-center'>
			<Button
				size='lg'
				className='btn-icon btn-round'
				color='warning'
				href=''
				id='google'
				target='_blank'
				onClick={() => {
					showSignInModal('Google', handleSignInWithGoogle)
				}}>
				<i className='fab fa-google' />
			</Button>
			<UncontrolledTooltip delay={0} target='google'>
				Sign up with Google!
			</UncontrolledTooltip>
			<Button
				size='lg'
				className='btn-icon btn-round'
				color='facebook'
				href=''
				id='facebook'
				target='_blank'
				onClick={() => {
					showSignInModal('Facebook', handleSignInWithFacebook)
				}}>
				<i className='fab fa-facebook-square' />
			</Button>
			<UncontrolledTooltip delay={0} target='facebook'>
				Sign up with Facebook!
			</UncontrolledTooltip>
		</div>
	)
}

export default withRouter(withLastLocation(SocialAuthSignInButton))
