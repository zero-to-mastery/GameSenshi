import React from 'react'
// nodejs library that concatenates classes
import classnames from 'classnames'
// reactstrap components
import {
	Badge,
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	CardTitle,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Container,
	Row,
	Col,
} from 'reactstrap'

// core components
import ColorNavbar from 'componentAtoms/Navbars/ColorNavbar.jsx'
import DemoFooter from 'componentAtoms/Footers/DemoFooter.jsx'

class Pricing extends React.Component {
	state = {}
	componentDidMount() {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		this.refs.wrapper.scrollTop = 0
		document.body.classList.add('pricing')
	}
	componentWillUnmount() {
		document.body.classList.remove('pricing')
	}
	render() {
		return (
			<>
				<ColorNavbar />
				<div className='wrapper' ref='wrapper'>
					<div className='page-header header-filter page-header-small'>
						<div
							className='page-header-image'
							style={{
								backgroundImage:
									'url(' + require('assets/img/lucas-benjamin.jpg') + ')',
							}}
						/>
						<Container>
							<Row>
								<Col className='ml-auto mr-auto text-center' md='8'>
									<h1 className='title'>Our Pricing Plan</h1>
									<h4 className='description'>
										To get started, you will need to choose a plan for your
										needs. You have Free Unlimited Updates and Premium Support
										on each package.
									</h4>
								</Col>
							</Row>
						</Container>
					</div>
					<div className='main'>
						<div className='pricing-2 project-raised'>
							<Container>
								<Row>
									<Col md='4'>
										<Card className='card-pricing'>
											<CardHeader className='bg-danger'>
												<Badge className='badge-default'>Pro</Badge>
												<CardTitle tag='h1'>
													<small>$</small>
													45
												</CardTitle>
												<h5>per month</h5>
											</CardHeader>
											<CardBody>
												<ul>
													<li>
														<i className='tim-icons icon-check-2' /> 2000 MB
													</li>
													<li>
														<i className='tim-icons icon-email-85' /> 100 email
													</li>
													<li>
														<i className='tim-icons icon-chart-bar-32' /> 10
														Databases
													</li>
													<li>
														<i className='tim-icons icon-alert-circle-exc' />{' '}
														Support
													</li>
												</ul>
												<Button
													className='mt-4'
													color='info'
													href='#pablo'
													onClick={e => e.preventDefault()}>
													Get started
												</Button>
											</CardBody>
										</Card>
									</Col>
									<Col md='4'>
										<Card className='card-pricing'>
											<CardHeader className='bg-info'>
												<Badge className='badge-default'>Starter</Badge>
												<CardTitle tag='h1'>
													<small>$</small>
													22
												</CardTitle>
												<h5>per month</h5>
											</CardHeader>
											<CardBody>
												<ul>
													<li>
														<i className='tim-icons icon-check-2' /> 1000 MB
													</li>
													<li>
														<i className='tim-icons icon-email-85' /> 3 email
													</li>
													<li>
														<i className='tim-icons icon-chart-bar-32' /> 5
														Databases
													</li>
													<li>
														<i className='tim-icons icon-alert-circle-exc' /> No
														Support
													</li>
												</ul>
												<Button
													className='mt-4'
													color='info'
													href='#pablo'
													onClick={e => e.preventDefault()}>
													Get started
												</Button>
											</CardBody>
										</Card>
									</Col>
									<Col md='4'>
										<Card className='card-pricing'>
											<CardHeader className='bg-warning'>
												<Badge className='badge-default'>Enterprise</Badge>
												<CardTitle tag='h1'>
													<small>$</small>
													68
												</CardTitle>
												<h5>per month</h5>
											</CardHeader>
											<CardBody>
												<ul>
													<li>
														<i className='tim-icons icon-check-2' /> 10.000 MB
													</li>
													<li>
														<i className='tim-icons icon-email-85' /> Unlimited
														emails
													</li>
													<li>
														<i className='tim-icons icon-chart-bar-32' /> 50
														Databases
													</li>
													<li>
														<i className='tim-icons icon-alert-circle-exc' />{' '}
														Premium Support
													</li>
												</ul>
												<Button
													className='mt-4'
													color='info'
													href='#pablo'
													onClick={e => e.preventDefault()}>
													Get started
												</Button>
											</CardBody>
										</Card>
									</Col>
								</Row>
							</Container>
						</div>
						<div className='features-1'>
							<Container>
								<Row>
									<Col className='ml-auto mr-auto' md='8'>
										<Badge color='primary' pill>
											Insight
										</Badge>
										<h1 className='title'>Full-Funnel Social Analytics</h1>
									</Col>
								</Row>
								<Row>
									<Col md='4'>
										<div className='info info-hover'>
											<div className='icon icon-primary'>
												<img
													alt='...'
													className='bg-blob'
													src={require('assets/img/feature-blob/primary.png')}
												/>
												<i className='tim-icons icon-user-run' />
											</div>
											<h4 className='info-title'>Social Conversations</h4>
											<p className='description'>
												Gain access to the demographics, psychographics, and
												location of unique people.
											</p>
										</div>
									</Col>
									<Col md='4'>
										<div className='info info-hover'>
											<div className='icon icon-success'>
												<img
													alt='...'
													className='bg-blob'
													src={require('assets/img/feature-blob/success.png')}
												/>
												<i className='tim-icons icon-atom' />
											</div>
											<h4 className='info-title'>Analyze Performance</h4>
											<p className='description'>
												Unify data from Facebook, Instagram, Twitter, LinkedIn,
												and Youtube to gain rich insights.
											</p>
										</div>
									</Col>
									<Col md='4'>
										<div className='info info-hover'>
											<div className='icon icon-warning'>
												<img
													alt='...'
													className='bg-blob'
													src={require('assets/img/feature-blob/warning.png')}
												/>
												<i className='tim-icons icon-gift-2' />
											</div>
											<h4 className='info-title'>Measure Conversions</h4>
											<p className='description'>
												Track actions taken on your website, understand the
												impact on your bottom line.
											</p>
										</div>
									</Col>
								</Row>
							</Container>
						</div>
						<div className='contactus-3'>
							<div className='page-header header-filter'>
								<div
									className='page-header-image'
									style={{
										backgroundImage:
											'url(' + require('assets/img/andre-benz.jpg') + ')',
									}}
								/>
								<Container>
									<Row>
										<Col className='text-center' md='12'>
											<h1 className='title'>Got a question?</h1>
											<h3>We'd like to talk more about what you need</h3>
										</Col>
									</Row>
								</Container>
							</div>
							<Container fluid>
								<Row>
									<Col md='3'>
										<div className='info info-hover'>
											<div className='icon icon-primary'>
												<img
													alt='...'
													className='bg-blob'
													src={require('assets/img/feature-blob/primary.png')}
												/>
												<i className='tim-icons icon-square-pin' />
											</div>
											<h4 className='info-title'>Address</h4>
											<p className='description'>12124 First Street, nr 54</p>
										</div>
									</Col>
									<Col md='3'>
										<div className='info info-hover'>
											<div className='icon icon-info'>
												<img
													alt='...'
													className='bg-blob'
													src={require('assets/img/feature-blob/info.png')}
												/>
												<i className='tim-icons icon-email-85' />
											</div>
											<h4 className='info-title'>Email</h4>
											<p className='description'>support@youremail.com</p>
										</div>
									</Col>
									<Col md='3'>
										<div className='info info-hover'>
											<div className='icon icon-warning'>
												<img
													alt='...'
													className='bg-blob'
													src={require('assets/img/feature-blob/warning.png')}
												/>
												<i className='tim-icons icon-mobile' />
											</div>
											<h4 className='info-title'>Phone Number</h4>
											<p className='description'>+1(424) 535 3523</p>
										</div>
									</Col>
									<Col md='3'>
										<div className='info info-hover'>
											<div className='icon icon-success'>
												<img
													alt='...'
													className='bg-blob'
													src={require('assets/img/feature-blob/success.png')}
												/>
												<i className='tim-icons icon-single-02' />
											</div>
											<h4 className='info-title'>Contact</h4>
											<p className='description'>Andrew Samian</p>
										</div>
									</Col>
								</Row>
							</Container>
						</div>
						<div className='section projects-2'>
							<Container>
								<Row>
									<Col className='ml-auto mr-auto text-center' md='8'>
										<h2 className='title'>We continually work to improve</h2>
										<h4 className='description'>
											By accepting this, you will be kept up to date on new
											developments concerning the CMS
										</h4>
									</Col>
								</Row>
								<Row className='mt-5'>
									<Col md='4'>
										<Card>
											<div className='card-image h-100'>
												<img
													alt='...'
													className='img rounded'
													src='https://s3.amazonaws.com/creativetim_bucket/products/83/thumb/opt_mk_react_thumbnail.jpg?1525851474'
												/>
											</div>
											<CardBody className='text-left'>
												<CardFooter className='mt-0'>
													<div className='stats stats-right'>
														<div className='stars text-warning'>
															<i className='tim-icons icon-shape-star' />
															<i className='tim-icons icon-shape-star ml-1' />
															<i className='tim-icons icon-shape-star ml-1' />
															<i className='tim-icons icon-shape-star ml-1' />
															<i className='tim-icons icon-shape-star ml-1' />
														</div>
													</div>
													<div className='author'>
														<img
															alt='...'
															className='avatar img-raised'
															src={require('assets/img/Tim.png')}
														/>
														<span className='ml-1'>Material Kit React</span>
													</div>
												</CardFooter>
											</CardBody>
										</Card>
									</Col>
									<Col md='4'>
										<Card>
											<div className='card-image h-100'>
												<img
													alt='...'
													className='img rounded'
													src='https://s3.amazonaws.com/creativetim_bucket/products/136/thumb/opt_bd_react.jpg?1543482024'
												/>
											</div>
											<CardBody className='text-left'>
												<CardFooter className='mt-0'>
													<div className='stats stats-right'>
														<i className='tim-icons icon-heart-2 text-danger' />{' '}
														342 ·{' '}
														<i className='tim-icons icon-single-copy-04 text-info' />{' '}
														43
													</div>
													<div className='author'>
														<img
															alt='...'
															className='avatar img-raised'
															src={require('assets/img/Tim.png')}
														/>
														<span className='ml-1'>Black Dashboard React</span>
													</div>
												</CardFooter>
											</CardBody>
										</Card>
									</Col>
									<Col md='4'>
										<Card>
											<div className='card-image h-100'>
												<img
													alt='...'
													className='img rounded'
													src='https://s3.amazonaws.com/creativetim_bucket/products/155/thumb/opt_adp_react_thumbnail.jpg?1554905507'
												/>
											</div>
											<CardBody className='text-left'>
												<CardFooter className='mt-0'>
													<div className='stats stats-right'>
														<i className='tim-icons icon-heart-2 text-danger' />{' '}
														127
													</div>
													<div className='author'>
														<img
															alt='...'
															className='avatar img-raised'
															src={require('assets/img/Tim.png')}
														/>
														<span className='ml-1'>
															Argon Dashboard Pro React
														</span>
													</div>
												</CardFooter>
											</CardBody>
										</Card>
									</Col>
								</Row>
							</Container>
						</div>
						<div className='subscribe-line'>
							<Container>
								<Row>
									<Col className='ml-auto mr-auto' lg='6' md='10'>
										<div className='text-center'>
											<h2 className='title'>Subscribe to our Newsletter</h2>
											<p className='description'>
												You'll be informed about updates, special offers and
												planned changes..
											</p>
										</div>
										<Card className='card-raised card-form-horizontal'>
											<CardBody>
												<Form action='' method=''>
													<Row>
														<Col sm='8'>
															<InputGroup
																className={classnames({
																	'input-group-focus': this.state.emailFocus,
																})}>
																<InputGroupAddon addonType='prepend'>
																	<InputGroupText>
																		<i className='tim-icons icon-email-85' />
																	</InputGroupText>
																</InputGroupAddon>
																<Input
																	placeholder='Your Email...'
																	type='email'
																	onFocus={e =>
																		this.setState({ emailFocus: true })
																	}
																	onBlur={e =>
																		this.setState({ emailFocus: false })
																	}
																/>
															</InputGroup>
														</Col>
														<Col sm='4'>
															<Button color='primary' type='button'>
																Subscribe
															</Button>
														</Col>
													</Row>
												</Form>
											</CardBody>
										</Card>
									</Col>
								</Row>
							</Container>
						</div>
					</div>
					<DemoFooter />
				</div>
			</>
		)
	}
}

export default Pricing
