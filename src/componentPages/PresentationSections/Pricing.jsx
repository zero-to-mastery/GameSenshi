import React from 'react'

// reactstrap components
import {
	Button,
	Card,
	CardBody,
	CardTitle,
	Container,
	Row,
	Col,
	UncontrolledTooltip,
} from 'reactstrap'

class Pricing extends React.Component {
	render() {
		return (
			<>
				<div className='section section-pricing' id='sectionBuy'>
					<Container>
						<div className='our-clients'>
							<Container>
								<Row>
									<Col className='ml-auto' xs='3'>
										<img
											alt='...'
											src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/stanford-white.png'
										/>
									</Col>
									<Col xs='3'>
										<img
											alt='...'
											src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/mit-white.png'
											style={{ marginTop: '-15px' }}
										/>
									</Col>
									<Col className='mr-auto' xs='3'>
										<img
											alt='...'
											src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/harvard-white.png'
										/>
									</Col>
								</Row>
							</Container>
						</div>
						<Row id='pricing'>
							<Col className='ml-auto mr-auto text-center mt-5' md='8'>
								<h2 className='title'>
									Ready to grab{' '}
									<span className='text-primary'>
										BLK• Design System PRO React
									</span>
									?
								</h2>
							</Col>
							<Col className='ml-auto mr-auto' md='8'>
								<p className='description mb-5 text-center'>
									You have <b>Free Unlimited Updates</b> and{' '}
									<b>Premium Support</b> on each package for 6 months. You also
									have <b>24 hours</b> to request a refund if you're not happy
									with your purchase.
									<br /> Read more about{' '}
									<b>
										<a
											href='https://www.creative-tim.com/license?ref=blkdspr-presentation'
											target='_blank'
											rel='noopener noreferrer'>
											licences here
										</a>
									</b>
									.
								</p>
								<Row>
									<Col className='pt-lg-5 mt-lg-5' md='6'>
										<Card className='card-pricing card-plain card-primary'>
											<CardBody>
												<h4 className='title'>Personal License</h4>
												<CardTitle tag='h1'>
													<small>$</small>
													89
												</CardTitle>
												<ul>
													<li>
														<b>React/CSS/SASS</b> Files
													</li>
													<li>
														<b>Fully Coded</b> Components
													</li>
													<li>
														<b>Responsive</b> Design
													</li>
													<li>
														Product <b>Documentation</b>
													</li>
												</ul>
												<Button
													className='btn-round'
													color='info'
													href='https://www.creative-tim.com/buy/blk-design-system-pro-react?ref=blkdspr-presentation'
													target='_blank'>
													Buy Now!
												</Button>
											</CardBody>
										</Card>
									</Col>
									<Col className='pt-lg-5' md='6'>
										<Card className='card-pricing card-plain card-primary'>
											<CardBody>
												<h4 className='title'>Developer License</h4>
												<CardTitle tag='h1'>
													<small>$</small>
													359
												</CardTitle>
												<ul className='b-left'>
													<li>Everything in Personal</li>
													<li>
														You can Create <b>Multiple Websites</b> <b>and</b>{' '}
														Sell to <b>Multiple Clients</b>
													</li>
													<li>
														<b>Or</b> You can <b> Charge Customers</b>
													</li>
													<li>
														<b>Or</b>Use in <b>Commercial Projects</b>
													</li>
													<li>
														<b>Or</b> Use in <b>SaaS Projects</b>
													</li>
												</ul>
												<Button
													className='btn-round'
													color='info'
													href='https://www.creative-tim.com/buy/blk-design-system-pro-react?ref=blkdspr-presentation'
													target='_blank'>
													Buy Now!
												</Button>
											</CardBody>
										</Card>
									</Col>
								</Row>
							</Col>
						</Row>
						<div
							className='section section-download'
							data-background-color='black'
							id='#download-section'>
							<Container>
								<br />
								<br />
								<br />
								<Row className='row-grid align-items-center my-md'>
									<Col lg='6'>
										<h3 className='text-primary font-weight-light mb-2'>
											Thank you for supporting us!
										</h3>
										<h4 className='mb-0 font-weight-light'>
											Let's get in touch on any of these platforms.
										</h4>
									</Col>
									<Col className='text-lg-center btn-wrapper' lg='6'>
										<Button
											className='btn-icon btn-round'
											color='twitter'
											id='twitter'
											size='lg'>
											<i className='fab fa-twitter' />
										</Button>
										<UncontrolledTooltip delay={0} target='twitter'>
											Tweet!
										</UncontrolledTooltip>
										<Button
											className='btn-icon btn-round ml-1'
											color='facebook'
											id='facebook'
											size='lg'>
											<i className='fab fa-facebook-square' />
										</Button>
										<UncontrolledTooltip delay={0} target='facebook'>
											Share!
										</UncontrolledTooltip>
										<Button
											className='btn-icon btn-round ml-1'
											color='github'
											href='https://github.com/creativetimofficial/ct-blk-design-system-pro-react'
											id='tooltip526539911'
											size='lg'
											target='_blank'>
											<i className='fab fa-github' />
										</Button>
										<UncontrolledTooltip delay={0} target='tooltip526539911'>
											Star on Github
										</UncontrolledTooltip>
									</Col>
								</Row>
							</Container>
						</div>
					</Container>
				</div>{' '}
			</>
		)
	}
}

export default Pricing
