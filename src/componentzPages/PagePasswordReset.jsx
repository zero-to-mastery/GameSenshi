import React from 'react'
import { stopUndefined } from 'utils'
import { Container, Row, Col } from 'reactstrap'
import { Exports } from 'componentpMultiOrganisms'

const {
	FormResetPasswordPropedDefault,
	Section,
	WrapperStoreWrapperPropedReset,
} = stopUndefined(Exports)

const PagePasswordReset = () => {
	return (
		<WrapperStoreWrapperPropedReset>
			<Section>
				<div className='squares square1' />
				<div className='squares square2' />
				<div className='squares square3' />
				<div className='squares square4' />
				<div className='squares square5' />
				<div className='squares square6' />
				<div className='page-header-image' />
				<Container>
					<Row className='mx-0'>
						<Col className='mx-auto' lg='5' md='8'>
							<FormResetPasswordPropedDefault />
						</Col>
					</Row>
				</Container>
				<div className='mb-5' />
			</Section>
		</WrapperStoreWrapperPropedReset>
	)
}

export { PagePasswordReset }
