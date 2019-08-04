import React from 'react'

// reactstrap components
import { Container, Row, Col } from 'reactstrap'

class BasicComponents extends React.Component {
	render() {
		return (
			<>
				<div className='section section-basic-componentAtoms'>
					<Container>
						<Row>
							<Col className='ml-auto mr-auto' lg='5' md='7'>
								<h1 className='title'>Basic Elements</h1>
								<h5 className='category text-primary'>
									<strong>The core elements of your website</strong>
								</h5>
								<p className='description mt-5'>
									We re-styled every Bootstrap 4 element to match the BLK•
									Design System React style. All the Bootstrap 4 components that
									you need in a development have been re-design with the new
									look. Besides the numerous basic elements, we have also
									created additional classes. All these items will help you take
									your project to the next level.
								</p>
							</Col>
							<Col lg='6' md='12'>
								<div className='image-container'>
									<img
										alt='...'
										className='table-img'
										src={require('assets/img/presentation-page/table.png')}
									/>
									<img
										alt='...'
										className='share-btn-img'
										src={require('assets/img/presentation-page/success-btn.png')}
									/>
									<img
										alt='...'
										className='coloured-card-btn-img'
										src={require('assets/img/presentation-page/card-btn.png')}
									/>
									<img
										alt='...'
										className='coloured-card-img'
										src={require('assets/img/presentation-page/card-orange.png')}
									/>
									<img
										alt='...'
										className='linkedin-btn-img'
										src={require('assets/img/presentation-page/dribbble-btn.png')}
									/>
									<img
										alt='...'
										className='path path3'
										src={require('assets/img/path3.png')}
									/>
									{/* SVG Illustration */}
									<figure className='ie-non-standard-hero-shape'>
										<svg
											x='0px'
											y='0px'
											viewBox='10 12 878.9 907'
											style={{ enableBackground: 'new 10 12 878.9 907' }}
											xmlSpace='preserve'
											className='injected-svg js-svg-injector'>
											<g>
												<defs>
													<path
														id='firstShape'
														d='M329.15,403.44c30.22-62,26.51-223.94,94.06-268.46C479,98.23,560.16,257,700.68,151.61c71.25-53.44,85.54,81,160.38,172.6C1008.5,504.74,881.5,639.14,825.35,686.6c-62.54,52.85-246.14,24.42-386.7,79.28S214.07,834,202.07,702C190.39,573.57,288.69,486.43,329.15,403.44Z'
													/>
												</defs>
												<clipPath id='secondShape'>
													<use
														xlinkHref='#firstShape'
														style={{ overflow: 'visible' }}
													/>
												</clipPath>
												<g clipPath='url(#secondShape)'>
													<image
														id='imageShape1'
														style={{ overflow: 'visible' }}
														width='900'
														height='900'
														xlinkHref={require('assets/img/elements-bg.png')}
														transform='matrix(0.9488 0 0 0.9488 25 53.1187)'
													/>
												</g>
											</g>
											<g>
												<defs>
													<path
														id='thirdShape'
														d='M337.17,855.62c-7.81-35.46,42.38-43.95,63.66-52.44,24.39-9.74,135.86-48,192.58-52.52,64.22-5.13,190.21-26.84,160.46,35.34-19.76,41.3-51.47,64.52-87.63,62.33-46.36-2.81-101.56,4.39-150.8,44C448.53,946.08,450.93,865,412,868,372.28,871,340.79,872.08,337.17,855.62Z'
													/>
												</defs>
												<clipPath id='fourthShape'>
													<use
														xlinkHref='#thirdShape'
														style={{ overflow: 'visible' }}
													/>
												</clipPath>
												<g
													transform='matrix(1 0 0 1 0 0)'
													clipPath='url(#fourthShape)'>
													<image
														id='imageShape2'
														style={{ overflow: 'visible' }}
														width='900'
														height='1000'
														xlinkHref={require('assets/img/elements-bg.png')}
														transform='matrix(0.9488 0 0 0.9488 25 53.1187)'>
														{' '}
													</image>
												</g>
											</g>
										</svg>
									</figure>
									{/* End SVG Illustration */}
								</div>
							</Col>
						</Row>
					</Container>
				</div>{' '}
			</>
		)
	}
}

export default BasicComponents
