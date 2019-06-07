import React from 'react'
import { Button, UncontrolledTooltip } from 'reactstrap'

// routing and api
import { handleSignInWithGoogle, handleSignInWithFacebook } from 'api'
import { withLastLocation } from 'react-router-last-location'
import { withRouter } from 'react-router'

// state
import { socialAuthModalStore } from 'state'

// constants
import {
	SOCIAL_AUTH_MODAL_BODY,
	SOCIAL_AUTH_MODAL_OPEN,
	SOCIAL_AUTH_MODAL_TITLE,
	SOCIAL_AUTH_MODAL_PROVIDER_1,
	SOCIAL_AUTH_MODAL_PROVIDER_2,
} from 'constantValues'

const SocialAuthSignInButton = props => {
	const { lastLocation, history } = props

	const showSignInModal = (provider, api) => {
		socialAuthModalStore.setState({
			[SOCIAL_AUTH_MODAL_BODY]: 'Please wait while we signing you in with ',
			[SOCIAL_AUTH_MODAL_OPEN]: true,
			[SOCIAL_AUTH_MODAL_TITLE]: 'Signing You In...',
			[SOCIAL_AUTH_MODAL_PROVIDER_1]: provider,
			[SOCIAL_AUTH_MODAL_PROVIDER_2]: '',
		})
		sessionStorage.setItem('showSignInModal', provider)
		if (lastLocation) {
			history.goBack()
		} else {
			history.push('/index')
		}
		setTimeout(() => {
			api()
		}, 1000)
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
