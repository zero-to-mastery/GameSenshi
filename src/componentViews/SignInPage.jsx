import React from 'react'
import { stopUndefined } from 'utils'
// reactstrap components
import { Container, Row, Col } from 'reactstrap'
// core components
import { Exports } from 'componentpMultiOrganisms'

const {
	Footer,
	FormSignInPropedDefault,
	WrapperPropedLogin,
	Section,
} = stopUndefined(Exports)

const SignInPage = () => {
	return (
		<WrapperPropedLogin>
			<Section>
				<div className='squares square1' />
				<div className='squares square2' />
				<div className='squares square3' />
				<div className='squares square4' />
				<div className='squares square5' />
				<div className='squares square6' />
				<div className='page-header-image' />
				<Container>
					<Row>
						<Col className='mx-auto' lg='5' md='8'>
							<FormSignInPropedDefault />
						</Col>
					</Row>
				</Container>
				<div className='mt-5' />
			</Section>
			<Footer />
		</WrapperPropedLogin>
	)
}

export { SignInPage }
