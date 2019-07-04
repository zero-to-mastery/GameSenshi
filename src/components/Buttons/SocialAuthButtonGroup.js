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

// constants
import {
	MODAL_BODY,
	MODAL_OPEN,
	MODAL_TITLE,
	MODAL_LOADER,
} from 'constantValues'

const SocialAuthSignInButton = props => {
	const { lastLocation, history } = props

	const showSignInModal = (provider, api) => {
		authModalStore.setState({
			[MODAL_BODY]: (
				<>
					Please wait while we signing you in with <b>{provider}</b>.
				</>
			),
			[MODAL_OPEN]: true,
			[MODAL_TITLE]: 'Signing You In...',
			[MODAL_LOADER]: true,
		})
		sessionStorage.setItem(
			'authModal',
			JSON.stringify({
				[MODAL_BODY]: reactElementToJSXString(
					<span>
						Signing in with <b>{provider}</b>...
						<br />
						<br />
						Almost there!
					</span>
				),
				[MODAL_TITLE]: 'Signing You In...',
			})
		)
		onSignedInRouting(history, lastLocation)
		api()
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
