import React from 'react'
import { stopUndefined } from 'utils'
import { Container, Row, Col } from 'reactstrap'
// core components
import { Exports } from 'componentpMultiOrganisms'

const {
	FormResetPasswordPropedDefault,
	Section,
	WrapperPropedReset,
} = stopUndefined(Exports)

const PasswordResetPage = () => {
	return (
		<WrapperPropedReset>
			<Section>
				<div className='squares square1' />
				<div className='squares square2' />
				<div className='squares square3' />
				<div className='squares square4' />
				<div className='squares square5' />
				<div className='squares square6' />
				<div className='page-header-image' />
				<Container>
					<Row className='ml-0 mr-0'>
						<Col className='mx-auto' lg='5' md='8'>
							<FormResetPasswordPropedDefault />
						</Col>
					</Row>
				</Container>
				<div className='mb-5' />
			</Section>
		</WrapperPropedReset>
	)
}

export { PasswordResetPage }
