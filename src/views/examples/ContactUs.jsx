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
	Badge,
	Button,
	CardBody,
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
import ColorNavbar from 'componentsAtom/Navbars/ColorNavbar.jsx'
import DemoFooter from 'componentsAtom/Footers/DemoFooter.jsx'

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
	componentDidMount() {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		this.refs.wrapper.scrollTop = 0
		document.body.classList.add('contact-page')
	}
	componentWillUnmount() {
		document.body.classList.remove('contact-page')
	}
	render() {
		return (
			<>
				<ColorNavbar />
				<div className='wrapper' ref='wrapper'>
					<div className='page-header header-filter contactus-3'>
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
					<div className='main'>
						<Container fluid>
							<Row className='infos mb-5'>
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
							<Row className='mt-5 mb-4 pt-5'>
								<Col className='ml-auto mr-auto text-center mt-5' md='8'>
									<Badge color='info'>Leave a message</Badge>
									<h1 className='title'>
										Tell us more about <b>yourself</b>
									</h1>
									<h4 className='desc'>
										Whether you have questions or you would just like to say
										hello, contact us.
									</h4>
								</Col>
							</Row>
							<Row>
								<Col className='mx-auto' md='10'>
									<Form
										className='p-3'
										id='contact-form'
										method='post'
										role='form'>
										<CardBody>
											<Row>
												<Col md='6'>
													<label>First name</label>
													<InputGroup
														className={classnames({
															'input-group-focus': this.state.firstNameFocus,
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
																this.setState({ firstNameFocus: true })
															}
															onBlur={e =>
																this.setState({ firstNameFocus: false })
															}
														/>
													</InputGroup>
												</Col>
												<Col md='6'>
													<FormGroup>
														<label>Last name</label>
														<InputGroup
															className={classnames({
																'input-group-focus': this.state.lastNameFocus,
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
																	this.setState({ lastNameFocus: true })
																}
																onBlur={e =>
																	this.setState({ lastNameFocus: false })
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
														'input-group-focus': this.state.emailFocus,
													})}>
													<InputGroupAddon addonType='prepend'>
														<InputGroupText>
															<i className='tim-icons icon-email-85' />
														</InputGroupText>
													</InputGroupAddon>
													<Input
														placeholder='Email Here...'
														type='text'
														onFocus={e => this.setState({ emailFocus: true })}
														onBlur={e => this.setState({ emailFocus: false })}
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
												<Col className='ml-auto' md='6'>
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
							</Row>
						</Container>
					</div>
					<ContactUsMap
						googleMapURL='https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE'
						loadingElement={<div style={{ height: `100%` }} />}
						containerElement={<div className='map' />}
						mapElement={<div style={{ height: `100%` }} />}
					/>
					<DemoFooter />
				</div>
			</>
		)
	}
}

export default ContactUs
