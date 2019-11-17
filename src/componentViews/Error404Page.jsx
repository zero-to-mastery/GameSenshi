import React from 'react'
import { stopUndefined } from 'utils'
import { Container, Row, Col } from 'reactstrap'
import { Exports } from 'componentpMultiOrganisms'
const { WrapperStoreWrapperPropedError } = stopUndefined(Exports)

const Error404Page = () => {
	return (
		<WrapperStoreWrapperPropedError>
			<div className='page-header error-page header-filter'>
				<div
					className='page-header-image'
					style={{
						backgroundImage: 'url(' + require('assets/img/braden-collum.jpg') + ')',
					}}
				/>
				<Container>
					<Row>
						<Col md='12'>
							<h1 className='title'>404</h1>
							<h2 className='description'>Page not found :(</h2>
							<h4 className='description'>Ooooups! Looks like you got lost.</h4>
							<h5 className='description'>You might have typo in your url.</h5>
						</Col>
					</Row>
				</Container>
			</div>
		</WrapperStoreWrapperPropedError>
	)
}

export { Error404Page }
