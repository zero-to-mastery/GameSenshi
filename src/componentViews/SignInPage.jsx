import React, { useEffect } from 'react'
// reactstrap components
import { Container, Col } from 'reactstrap'
// core components
import { ExportMultiOrganisms } from 'componentpMultiOrganisms'

const { Footer, IndexNavbar, FormSignInPropedDefault } = ExportMultiOrganisms

const SignInPage = props => {
	useEffect(() => {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		document.body.classList.add('login-page')
		return () => {
			document.body.classList.remove('login-page')
		}
	}, [])

	return (
		<>
			<IndexNavbar />
			<div className='page-header'>
				<div className='squares square1' />
				<div className='squares square2' />
				<div className='squares square3' />
				<div className='squares square4' />
				<div className='squares square5' />
				<div className='squares square6' />
				<div className='page-header-image' />
				<Container>
					<Col className='mx-auto' lg='5' md='8'>
						<FormSignInPropedDefault />
					</Col>
				</Container>
			</div>
			<Footer />
		</>
	)
}

export default SignInPage
