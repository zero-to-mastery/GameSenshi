import React from 'react'
import { stopUndefined } from 'utils'
import { Container, Row, Col } from 'reactstrap'
import { Exports } from 'componentAtoms'
const { WrapperStoreWrapperPropedError } = stopUndefined(Exports)

const PAGE_ERROR_CODE_NOT_FOUND = '404'
const PAGE_ERROR_CODE_UNAUTHORIZED = '401'

const PageError = props => {
	const { code } = props
	return (
		<WrapperStoreWrapperPropedError>
			<div className='page-header error-page header-filter'>
				<div
					className='page-header-image'
					style={{
						backgroundImage:
							'url(' + require('assets/img/braden-collum.jpg') + ')',
					}}
				/>
				<Container>
					<Row>
						<Col md='12'>
							<h1 className='title'>{code}</h1>
							{code === PAGE_ERROR_CODE_NOT_FOUND ? (
								<>
									<h2 className='description'>Page not found :(</h2>
									<h4 className='description'>
										Ooooups! Looks like you got lost.
									</h4>
									<h5 className='description'>
										You might have typo in your url.
									</h5>
								</>
							) : code === PAGE_ERROR_CODE_UNAUTHORIZED ? (
								<>
									<h2 className='description'>Unauthorized :(</h2>
									<h4 className='description'>Unknown life form detected!</h4>
									<h5 className='description'>Please login before proceed.</h5>
								</>
							) : (
								<>
									<h2 className='description'>Something went wrong :(</h2>
									<h4 className='description'>Please try again later.</h4>
									<h5 className='description'>
										Contact support if issue persist.
									</h5>
								</>
							)}
						</Col>
					</Row>
				</Container>
			</div>
		</WrapperStoreWrapperPropedError>
	)
}

export { PageError, PAGE_ERROR_CODE_NOT_FOUND, PAGE_ERROR_CODE_UNAUTHORIZED }
