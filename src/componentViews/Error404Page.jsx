import React, { useRef, useEffect } from 'react'
import { stopUndefined } from 'utils'
// reactstrap components
import { Container, Row, Col } from 'reactstrap'

// core components
import { ExportMultiOrganisms } from 'componentpMultiOrganisms'

const { Footer, IndexNavbar } = stopUndefined(ExportMultiOrganisms)

const Error404Page = props => {
	const wrapper = useRef(null)

	useEffect(() => {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		wrapper.current.scrollTop = 0
		document.body.classList.add('error-page')

		return () => {
			document.body.classList.remove('error-page')
		}
	}, [])

	return (
		<>
			<IndexNavbar />
			<div className='wrapper' ref={wrapper}>
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
								<h1 className='title'>404</h1>
								<h2 className='description'>Page not found :(</h2>
								<h4 className='description'>
									Ooooups! Looks like you got lost.
								</h4>
								<h5 className='description'>
									You might have typo in your url.
								</h5>
							</Col>
						</Row>
					</Container>
				</div>
				<Footer />
			</div>
		</>
	)
}

export { Error404Page }
