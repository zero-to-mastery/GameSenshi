import React from 'react'

// reactstrap components
import { Button, Card, CardBody, Container, Row, Col } from 'reactstrap'

class FreeDemo extends React.Component {
	render() {
		return (
			<>
				<div className='section section-free-demo'>
					<Container>
						<Row>
							<Col lg='7' md='12'>
								<div className='section-description'>
									<h2 className='title'>Free Demo</h2>
									<p className='description mb-4'>
										Do you want to test and see the benefits of this Design
										System before purchasing it? You can give the demo version a
										try. It features enough basic components for you to get a
										feel of the design and also test the quality of the code.
										Get it free on GitHub!
									</p>
									<div className='github-buttons'>
										<Button
											className='btn-round'
											color='primary'
											href='https://github.com/creativetimofficial/blk-design-system'
											target='_blank'>
											View Demo on Github
										</Button>
										<Button
											className='btn-round btn-simple'
											color='primary'
											href='https://github.com/creativetimofficial/blk-design-system'
											target='_blank'>
											Star
										</Button>
									</div>
									<div className='clearfix' />
								</div>
								<Row>
									<Col className='pt-5' md='6'>
										<Card className='card-pricing card-plain card-info'>
											<CardBody>
												<h2 className='title'>Free Version</h2>
												<ul>
													<li>
														<strong>70</strong> Components
													</li>
													<li>
														<strong>3</strong> Example Pages
													</li>
													<li>
														<i className='tim-icons icon-simple-remove text-warning' />{' '}
														Uncoventional cards
													</li>
													<li>
														<i className='tim-icons icon-simple-remove text-warning' />{' '}
														Sections
													</li>
													<li>
														<i className='tim-icons icon-simple-remove text-warning' />{' '}
														Photoshop for Prototype
													</li>
													<li>
														<i className='tim-icons icon-simple-remove text-warning' />{' '}
														Premium Support
													</li>
												</ul>
											</CardBody>
										</Card>
									</Col>
									<Col className='pt-5' md='6'>
										<Card className='card-pricing card-plain card-info'>
											<CardBody>
												<h2 className='title'>PRO Version</h2>
												<ul>
													<li>
														<strong>1100+</strong> Components
													</li>
													<li>
														<strong>17</strong> Example Pages
													</li>
													<li>
														<i className='tim-icons icon-check-2 text-success' />{' '}
														Uncoventional cards
													</li>
													<li>
														<i className='tim-icons icon-check-2 text-success' />{' '}
														Sections
													</li>
													<li>
														<i className='tim-icons icon-check-2 text-success' />{' '}
														Photoshop for Prototype
													</li>
													<li>
														<i className='tim-icons icon-check-2 text-success' />{' '}
														Premium Support
													</li>
												</ul>
											</CardBody>
										</Card>
									</Col>
								</Row>
							</Col>
							<Col lg='5' md='12'>
								<div className='github-background-container'>
									<i className='fab fa-github' />
								</div>
							</Col>
						</Row>
					</Container>
				</div>{' '}
			</>
		)
	}
}

export default FreeDemo
