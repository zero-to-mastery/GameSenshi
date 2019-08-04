import React from 'react'
// nodejs library that concatenates classes
import classnames from 'classnames'
// react plugin used to create google maps
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
} from 'react-google-maps'

// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	CardTitle,
	Label,
	FormGroup,
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
const ContactUsMap = withScriptjs(
	withGoogleMap(props => (
		<GoogleMap
			defaultZoom={13}
			defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
			defaultOptions={{
				scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
				styles: [
					{
						elementType: 'geometry',
						stylers: [
							{
								color: '#1d2c4d',
							},
						],
					},
					{
						elementType: 'labels.text.fill',
						stylers: [
							{
								color: '#8ec3b9',
							},
						],
					},
					{
						elementType: 'labels.text.stroke',
						stylers: [
							{
								color: '#1a3646',
							},
						],
					},
					{
						featureType: 'administrative.country',
						elementType: 'geometry.stroke',
						stylers: [
							{
								color: '#4b6878',
							},
						],
					},
					{
						featureType: 'administrative.land_parcel',
						elementType: 'labels.text.fill',
						stylers: [
							{
								color: '#64779e',
							},
						],
					},
					{
						featureType: 'administrative.province',
						elementType: 'geometry.stroke',
						stylers: [
							{
								color: '#4b6878',
							},
						],
					},
					{
						featureType: 'landscape.man_made',
						elementType: 'geometry.stroke',
						stylers: [
							{
								color: '#334e87',
							},
						],
					},
					{
						featureType: 'landscape.natural',
						elementType: 'geometry',
						stylers: [
							{
								color: '#023e58',
							},
						],
					},
					{
						featureType: 'poi',
						elementType: 'geometry',
						stylers: [
							{
								color: '#283d6a',
							},
						],
					},
					{
						featureType: 'poi',
						elementType: 'labels.text.fill',
						stylers: [
							{
								color: '#6f9ba5',
							},
						],
					},
					{
						featureType: 'poi',
						elementType: 'labels.text.stroke',
						stylers: [
							{
								color: '#1d2c4d',
							},
						],
					},
					{
						featureType: 'poi.park',
						elementType: 'geometry.fill',
						stylers: [
							{
								color: '#023e58',
							},
						],
					},
					{
						featureType: 'poi.park',
						elementType: 'labels.text.fill',
						stylers: [
							{
								color: '#3C7680',
							},
						],
					},
					{
						featureType: 'road',
						elementType: 'geometry',
						stylers: [
							{
								color: '#304a7d',
							},
						],
					},
					{
						featureType: 'road',
						elementType: 'labels.text.fill',
						stylers: [
							{
								color: '#98a5be',
							},
						],
					},
					{
						featureType: 'road',
						elementType: 'labels.text.stroke',
						stylers: [
							{
								color: '#1d2c4d',
							},
						],
					},
					{
						featureType: 'road.highway',
						elementType: 'geometry',
						stylers: [
							{
								color: '#2c6675',
							},
						],
					},
					{
						featureType: 'road.highway',
						elementType: 'geometry.fill',
						stylers: [
							{
								color: '#9d2a80',
							},
						],
					},
					{
						featureType: 'road.highway',
						elementType: 'geometry.stroke',
						stylers: [
							{
								color: '#9d2a80',
							},
						],
					},
					{
						featureType: 'road.highway',
						elementType: 'labels.text.fill',
						stylers: [
							{
								color: '#b0d5ce',
							},
						],
					},
					{
						featureType: 'road.highway',
						elementType: 'labels.text.stroke',
						stylers: [
							{
								color: '#023e58',
							},
						],
					},
					{
						featureType: 'transit',
						elementType: 'labels.text.fill',
						stylers: [
							{
								color: '#98a5be',
							},
						],
					},
					{
						featureType: 'transit',
						elementType: 'labels.text.stroke',
						stylers: [
							{
								color: '#1d2c4d',
							},
						],
					},
					{
						featureType: 'transit.line',
						elementType: 'geometry.fill',
						stylers: [
							{
								color: '#283d6a',
							},
						],
					},
					{
						featureType: 'transit.station',
						elementType: 'geometry',
						stylers: [
							{
								color: '#3a4762',
							},
						],
					},
					{
						featureType: 'water',
						elementType: 'geometry',
						stylers: [
							{
								color: '#0e1626',
							},
						],
					},
					{
						featureType: 'water',
						elementType: 'labels.text.fill',
						stylers: [
							{
								color: '#4e6d70',
							},
						],
					},
				],
			}}>
			<Marker position={{ lat: 40.748817, lng: -73.985428 }} />
		</GoogleMap>
	))
)

class ContactUs extends React.Component {
	state = {}
	render() {
		return (
			<>
				<div className='cd-section' id='contactus'>
					{/* ********* CONTACT US 1 ********* */}
					<div
						className='contactus-1 section-image'
						style={{
							backgroundImage:
								'url(' + require('assets/img/contact1.jpg') + ')',
						}}>
						<Container>
							<Row>
								<Col md='5'>
									<h2 className='title'>Get in Touch</h2>
									<h4 className='description'>
										You need more information? Check what other persons are
										saying about our product. They are very happy with their
										purchase.
									</h4>
									<div className='info info-horizontal'>
										<div className='icon icon-primary'>
											<i className='tim-icons icon-square-pin' />
										</div>
										<div className='description'>
											<h4 className='info-title'>Find us at the office</h4>
											<p className='description'>
												Bld Mihail Kogalniceanu, nr. 8, <br />
												7652 Bucharest, <br />
												Romania
											</p>
										</div>
									</div>
									<div className='info info-horizontal'>
										<div className='icon icon-primary'>
											<i className='tim-icons icon-mobile' />
										</div>
										<div className='description'>
											<h4 className='info-title'>Give us a ring</h4>
											<p className='description'>
												Michael Jordan <br />
												+40 762 321 762 <br />
												Mon - Fri, 8:00-22:00
											</p>
										</div>
									</div>
								</Col>
								<Col className='ml-auto mr-auto' md='5'>
									<Card className='card-contact card-raised'>
										<Form id='contact-form' method='post' role='form'>
											<CardHeader className='text-center'>
												<CardTitle tag='h4'>Contact Us</CardTitle>
											</CardHeader>
											<CardBody>
												<Row>
													<Col md='6'>
														<label>First name</label>
														<InputGroup
															className={classnames({
																'input-group-focus': this.state
																	.firstNameContact1Focus,
															})}>
															<InputGroupAddon addonType='prepend'>
																<InputGroupText>
																	<i className='tim-icons icon-single-02' />
																</InputGroupText>
															</InputGroupAddon>
															<Input
																aria-label='First Name...'
																placeholder='First Name...'
																type='text'
																onFocus={e =>
																	this.setState({
																		firstNameContact1Focus: true,
																	})
																}
																onBlur={e =>
																	this.setState({
																		firstNameContact1Focus: false,
																	})
																}
															/>
														</InputGroup>
													</Col>
													<Col className='pl-2' md='6'>
														<FormGroup>
															<label>Last name</label>
															<InputGroup
																className={classnames({
																	'input-group-focus': this.state
																		.lastNameContact1Focus,
																})}>
																<InputGroupAddon addonType='prepend'>
																	<InputGroupText>
																		<i className='tim-icons icon-caps-small' />
																	</InputGroupText>
																</InputGroupAddon>
																<Input
																	aria-label='Last Name...'
																	placeholder='Last Name...'
																	type='text'
																	onFocus={e =>
																		this.setState({
																			lastNameContact1Focus: true,
																		})
																	}
																	onBlur={e =>
																		this.setState({
																			lastNameContact1Focus: false,
																		})
																	}
																/>
															</InputGroup>
														</FormGroup>
													</Col>
												</Row>
												<FormGroup>
													<label>Email address</label>
													<InputGroup
														className={classnames({
															'input-group-focus': this.state
																.emailContact1Focus,
														})}>
														<InputGroupAddon addonType='prepend'>
															<InputGroupText>
																<i className='tim-icons icon-email-85' />
															</InputGroupText>
														</InputGroupAddon>
														<Input
															placeholder='Email Here...'
															type='text'
															onFocus={e =>
																this.setState({ emailContact1Focus: true })
															}
															onBlur={e =>
																this.setState({ emailContact1Focus: false })
															}
														/>
													</InputGroup>
												</FormGroup>
												<FormGroup>
													<label>Your message</label>
													<Input
														id='message'
														name='message'
														rows='6'
														type='textarea'
													/>
												</FormGroup>
												<Row>
													<Col md='6'>
														<FormGroup check>
															<Label check>
																<Input type='checkbox' />
																<span className='form-check-sign' />
																I'm not a robot
															</Label>
														</FormGroup>
													</Col>
													<Col md='6'>
														<Button
															className='btn-round pull-right'
															color='primary'>
															Send Message
														</Button>
													</Col>
												</Row>
											</CardBody>
										</Form>
									</Card>
								</Col>
							</Row>
						</Container>
					</div>
					{/* ********* END CONTACT US 1 ********* */}
					{/* ********* CONTACT US 2 ********* */}
					<div className='contactus-2'>
						<ContactUsMap
							googleMapURL='https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE'
							loadingElement={<div style={{ height: `100%` }} />}
							containerElement={<div style={{ height: `100%` }} />}
							mapElement={<div className='map' style={{ height: `100%` }} />}
						/>
						<Col lg='6' md='10'>
							<Card className='card-contact card-raised'>
								<Form id='contact-form' method='post' role='form'>
									<CardHeader className='text-center'>
										<CardTitle tag='h4'>Contact Us</CardTitle>
									</CardHeader>
									<CardBody>
										<Row>
											<Col md='6'>
												<div className='info info-horizontal'>
													<div className='icon icon-primary'>
														<i className='tim-icons icon-mobile' />
													</div>
													<div className='description'>
														<h5 className='info-title'>Give us a ring</h5>
														<p>
															Michael Jordan <br />
															+40 762 321 762 <br />
															Mon - Fri, 8:00-22:00
														</p>
													</div>
												</div>
											</Col>
											<Col md='6'>
												<div className='info info-horizontal'>
													<div className='icon icon-primary'>
														<i className='tim-icons icon-square-pin' />
													</div>
													<div className='description'>
														<h5 className='info-title'>
															Find us at the office
														</h5>
														<p>
															Mihail Kogalniceanu, nr. 8, <br />
															7652 Bucharest, <br />
															Romania
														</p>
													</div>
												</div>
											</Col>
										</Row>
										<Row>
											<Col md='6'>
												<label>Full name</label>
												<InputGroup
													className={classnames({
														'input-group-focus': this.state
															.firstNameContact2Focus,
													})}>
													<InputGroupAddon addonType='prepend'>
														<InputGroupText>
															<i className='tim-icons icon-single-02' />
														</InputGroupText>
													</InputGroupAddon>
													<Input
														autoComplete='given-name'
														placeholder='First Name...'
														type='text'
														onFocus={e =>
															this.setState({ firstNameContact2Focus: true })
														}
														onBlur={e =>
															this.setState({ firstNameContact2Focus: false })
														}
													/>
												</InputGroup>
											</Col>
											<Col md='6'>
												<label>Email address</label>
												<InputGroup
													className={classnames({
														'input-group-focus': this.state.emailContact2Focus,
													})}>
													<InputGroupAddon addonType='prepend'>
														<InputGroupText>
															<i className='tim-icons icon-email-85' />
														</InputGroupText>
													</InputGroupAddon>
													<Input
														autoComplete='email'
														placeholder='Email Here...'
														type='email'
														onFocus={e =>
															this.setState({ emailContact2Focus: true })
														}
														onBlur={e =>
															this.setState({ emailContact2Focus: false })
														}
													/>
												</InputGroup>
											</Col>
										</Row>
										<Row className='mt-3'>
											<Col md='6'>
												<FormGroup check>
													<Label check>
														<Input type='checkbox' />
														<span className='form-check-sign' />
														I'm not a robot
													</Label>
												</FormGroup>
											</Col>
											<Col md='6'>
												<Button
													className='btn-round pull-right'
													color='primary'>
													Send Message
												</Button>
											</Col>
										</Row>
									</CardBody>
								</Form>
							</Card>
						</Col>
					</div>
					{/* ********* END CONTACT US 2 ********* */}
					{/* ********* CONTACT US 3 ********* */}
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
						<Container>
							<Row>
								<Col lg='3'>
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
								<Col lg='3'>
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
								<Col lg='3'>
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
								<Col lg='3'>
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
					{/* ********* END CONTACT US 3 ********* */}
					{/* ********* CONTACT US 4 ********* */}
					<div className='contactus-4'>
						<ContactUsMap
							googleMapURL='https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE'
							loadingElement={<div style={{ height: `100%` }} />}
							containerElement={<div className='map' />}
							mapElement={<div style={{ height: `100%` }} />}
						/>
						<Container>
							<Row>
								<Col md='5'>
									<h1 className='title'>Get in Touch</h1>
									<h4 className='description text-white'>
										Do you need more information? Please contact us to find more
										about our products and services.
									</h4>
								</Col>
								<Col className='m-auto' md='12'>
									<Card className='card-contact card-raised'>
										<Row>
											<Col md='8'>
												<Form
													className='p-3'
													id='contact-form'
													method='post'
													role='form'>
													<CardHeader>
														<CardTitle tag='h4'>Send us a message</CardTitle>
													</CardHeader>
													<CardBody>
														<Row>
															<Col md='6'>
																<label>First name</label>
																<InputGroup
																	className={classnames({
																		'input-group-focus': this.state
																			.firstNameContact4Focus,
																	})}>
																	<InputGroupAddon addonType='prepend'>
																		<InputGroupText>
																			<i className='tim-icons icon-single-02' />
																		</InputGroupText>
																	</InputGroupAddon>
																	<Input
																		aria-label='First Name...'
																		placeholder='First Name...'
																		type='text'
																		onFocus={e =>
																			this.setState({
																				firstNameContact4Focus: true,
																			})
																		}
																		onBlur={e =>
																			this.setState({
																				firstNameContact4Focus: false,
																			})
																		}
																	/>
																</InputGroup>
															</Col>
															<Col md='6'>
																<FormGroup>
																	<label>Last name</label>
																	<InputGroup
																		className={classnames({
																			'input-group-focus': this.state
																				.lastNameContact4Focus,
																		})}>
																		<InputGroupAddon addonType='prepend'>
																			<InputGroupText>
																				<i className='tim-icons icon-caps-small' />
																			</InputGroupText>
																		</InputGroupAddon>
																		<Input
																			aria-label='Last Name...'
																			placeholder='Last Name...'
																			type='text'
																			onFocus={e =>
																				this.setState({
																					lastNameContact4Focus: true,
																				})
																			}
																			onBlur={e =>
																				this.setState({
																					lastNameContact4Focus: false,
																				})
																			}
																		/>
																	</InputGroup>
																</FormGroup>
															</Col>
														</Row>
														<FormGroup>
															<label>Email address</label>
															<InputGroup
																className={classnames({
																	'input-group-focus': this.state
																		.emailContact4Focus,
																})}>
																<InputGroupAddon addonType='prepend'>
																	<InputGroupText>
																		<i className='tim-icons icon-email-85' />
																	</InputGroupText>
																</InputGroupAddon>
																<Input
																	placeholder='Email Here...'
																	type='text'
																	onFocus={e =>
																		this.setState({ emailContact4Focus: true })
																	}
																	onBlur={e =>
																		this.setState({ emailContact4Focus: false })
																	}
																/>
															</InputGroup>
														</FormGroup>
														<FormGroup>
															<label>Your message</label>
															<Input
																id='message'
																name='message'
																rows='6'
																type='textarea'
															/>
														</FormGroup>
														<Row>
															<Col md='6'>
																<FormGroup check>
																	<Label check>
																		<Input type='checkbox' />
																		<span className='form-check-sign' />
																		I'm not a robot
																	</Label>
																</FormGroup>
															</Col>
															<Col md='6'>
																<Button
																	className='btn-round pull-right'
																	color='primary'>
																	Send Message
																</Button>
															</Col>
														</Row>
													</CardBody>
												</Form>
											</Col>
											<Col md='4'>
												<div className='info text-left bg-info'>
													<CardTitle tag='h4'>Contact information</CardTitle>
													<div className='info info-horizontal mt-5'>
														<div className='icon'>
															<i className='tim-icons icon-square-pin' />
														</div>
														<div className='description'>
															<h5 className='info-title'>
																345 Street 2 <br />
																Creative Tim Tour
															</h5>
														</div>
													</div>
													<div className='info info-horizontal'>
														<div className='icon'>
															<i className='tim-icons icon-mobile' />
														</div>
														<div className='description'>
															<h5 className='info-title'>+16(3412) 421 241</h5>
														</div>
													</div>
													<div className='info info-horizontal'>
														<div className='icon'>
															<i className='tim-icons icon-email-85' />
														</div>
														<div className='description'>
															<h5 className='info-title'>
																contact@yourwebsite.com
															</h5>
														</div>
													</div>
												</div>
											</Col>
										</Row>
									</Card>
								</Col>
							</Row>
						</Container>
					</div>
					{/* ********* END CONTACT US 4 ********* */}
				</div>{' '}
			</>
		)
	}
}

export default ContactUs
