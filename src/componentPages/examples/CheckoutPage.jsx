import React from 'react'
// nodejs library that concatenates classes
import classnames from 'classnames'
// react plugin used to create DropdownMenu for selecting items
import Select from 'react-select'

// reactstrap components
import {
	Button,
	ButtonGroup,
	Card,
	CardBody,
	Form,
	Input,
	InputGroupAddon,
	InputGroup,
	Media,
	TabContent,
	TabPane,
	Container,
	Row,
	Col,
} from 'reactstrap'

// core components
import ColorNavbar from 'componentAtoms/Navbars/ColorNavbar.jsx'
import DemoFooter from 'componentAtoms/Footers/DemoFooter.jsx'

class CheckoutPage extends React.Component {
	state = { paymentTabs: 1 }
	componentDidMount() {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		this.refs.wrapper.scrollTop = 0
		document.body.classList.add('checkout-page')
	}
	componentWillUnmount() {
		document.body.classList.remove('checkout-page')
	}
	toggleTabs = (e, stateName, index) => {
		e.preventDefault()
		this.setState({
			[stateName]: index,
		})
	}
	render() {
		return (
			<>
				<ColorNavbar />
				<div className='wrapper' ref='wrapper'>
					<div className='section'>
						<Container>
							<Row>
								<Col lg='4'>
									<h2 className='title'>Order summary</h2>
									<Card>
										<CardBody>
											<Media className='align-items-center mb-3'>
												<Col md='5' xs='6'>
													<img
														alt='...'
														className='img-fluid rounded shadow'
														src={require('assets/img/gucci.png')}
													/>
												</Col>
												<Media body>
													<h2 className='h6'>Shorts</h2>
													<small className='d-block text-secondary'>
														Small
													</small>
												</Media>
												<Media body className='text-right'>
													<span>$29</span>
												</Media>
											</Media>
											<Media className='align-items-center'>
												<Col md='5' xs='6'>
													<img
														alt='...'
														className='img-fluid rounded shadow'
														src={require('assets/img/jacket.png')}
													/>
												</Col>
												<Media body>
													<h2 className='h6 mb-0'>Jacket</h2>
												</Media>
												<Media body className='text-right'>
													<span>$999</span>
												</Media>
											</Media>
											<hr className='line-info mb-5' />
											<Form className='code-validate'>
												<label>Discount</label>
												<InputGroup
													className={classnames({
														'input-group-focus': this.state.discountFocus,
													})}>
													<Input
														aria-label='Discount'
														name='name'
														placeholder='Discount Code'
														type='text'
														onFocus={e =>
															this.setState({ discountFocus: true })
														}
														onBlur={e =>
															this.setState({ discountFocus: false })
														}
													/>
													<InputGroupAddon addonType='append'>
														<Button color='info' type='button'>
															Apply
														</Button>
													</InputGroupAddon>
												</InputGroup>
											</Form>
											<hr className='line-info mb-3' />
											<Media className='align-items-center'>
												<h3 className='h6 text-secondary mr-3'>Subtotal</h3>
												<Media body className='text-right'>
													<span>$1038</span>
												</Media>
											</Media>
											<Media className='align-items-center'>
												<h3 className='h6 text-secondary mr-3'>Shipping</h3>
												<Media body className='text-right'>
													<span>$5.8</span>
												</Media>
											</Media>
											<hr className='line-info mb-3' />
											<Media className='align-items-center'>
												<h3 className='h6'>Total</h3>
												<Media body className='text-right'>
													<span className='font-weight-semi-bold'>$1045.8</span>
												</Media>
											</Media>
										</CardBody>
									</Card>
								</Col>
								<Col lg='8'>
									<Form className='js-validate'>
										<Container>
											<h3 className='title'>Billing address</h3>
											<Row>
												<Col md='6'>
													<label className='labels'>
														First name <span className='text-danger'>*</span>
													</label>
													<Input
														aria-label='Cristopher'
														name='firstName'
														placeholder='Cristopher'
														required=''
														type='text'
													/>
												</Col>
												<Col md='6'>
													<label className='labels'>
														Last name <span className='text-danger'>*</span>
													</label>
													<Input
														aria-label='Thompson'
														name='lastName'
														placeholder='Thompson'
														required=''
														type='text'
													/>
												</Col>
											</Row>
											<br />
											<Row>
												<Col md='6'>
													<div className='js-form-message mb-6'>
														<label className='labels'>
															Email address{' '}
															<span className='text-danger'>*</span>
														</label>
														<Input
															aria-label='thompson@gmail.com'
															name='emailAddress'
															placeholder='thompson@gmail.com'
															required=''
															type='email'
														/>
													</div>
												</Col>
												<Col md='6'>
													<div className='js-form-message mb-6'>
														<label className='labels'>Phone</label>
														<Input
															aria-label='+4 (0762) 230991'
															placeholder='+4 (0762) 230991'
															type='text'
														/>
													</div>
												</Col>
											</Row>
											<br />
											<Row>
												<Col md='8'>
													<div className='js-form-message mb-6'>
														<label className='labels'>
															Street address{' '}
															<span className='text-danger'>*</span>
														</label>
														<Input
															aria-label='420 Long Beach, CA'
															name='streetAddress'
															placeholder='420 Long Beach, CA'
															required=''
															type='text'
														/>
													</div>
												</Col>
												<Col md='4'>
													<div className='js-form-message mb-6'>
														<label className='labels'>
															Postcode/Zip{' '}
															<span className='text-danger'>*</span>
														</label>
														<Input
															aria-label='340112'
															name='postcode'
															placeholder='340112'
															required=''
															type='text'
														/>
													</div>
												</Col>
											</Row>
											<br />
											<Row>
												<Col md='4'>
													<div className='js-form-message mb-6'>
														<label className='labels'>Apt, suite, etc.</label>
														<Input
															aria-label='YC7B 3UT'
															placeholder='YC7B 3UT'
															type='text'
														/>
													</div>
												</Col>
												<Col md='4'>
													<div className='js-form-message mb-6'>
														<label className='labels'>
															City <span className='text-danger'>*</span>
														</label>
														<Input
															aria-label='London'
															name='cityAddress'
															placeholder='London'
															required=''
															type='text'
														/>
													</div>
												</Col>
												<Col md='4'>
													<div className='mb-6'>
														<label className='labels'>
															Country <span className='text-danger'>*</span>
														</label>
														<Select
															className='react-select react-select-info'
															classNamePrefix='react-select'
															placeholder='Select country'
															value={this.state.country}
															onChange={value =>
																this.setState({ country: value })
															}
															options={[
																{ value: '', label: 'Select country' },
																{ value: 'CZ', label: 'Czech Republic' },
																{ value: 'DK', label: 'Denmark' },
																{ value: 'DO', label: 'Dominican Republic' },
																{ value: 'IQ', label: 'Iraq' },
																{ value: 'IL', label: 'Israel' },
																{ value: 'IT', label: 'Italy' },
																{ value: 'JM', label: 'Jamaica' },
																{ value: 'JP', label: 'Japan' },
																{ value: 'MG', label: 'Madagascar' },
																{ value: 'MT', label: 'Malta' },
																{ value: 'NO', label: 'Norway' },
																{ value: 'PL', label: 'Poland' },
																{ value: 'PT', label: 'Portugal' },
																{ value: 'RO', label: 'Romania' },
																{ value: 'RU', label: 'Russian Federation' },
																{ value: 'LC', label: 'Saint Lucia' },
																{ value: 'WS', label: 'Samoa' },
																{ value: 'SM', label: 'San Marino' },
																{ value: 'SA', label: 'Saudi Arabia' },
																{ value: 'ES', label: 'Spain' },
																{ value: 'SZ', label: 'Swaziland' },
																{ value: 'SE', label: 'Sweden' },
																{ value: 'TR', label: 'Turkey' },
																{ value: 'UG', label: 'Uganda' },
																{ value: 'UA', label: 'Ukraine' },
																{ value: 'AE', label: 'United Arab Emirates' },
																{ value: 'GB', label: 'United Kingdom' },
																{ value: 'US', label: 'United States' },
																{ value: 'VN', label: 'Viet Nam' },
															]}
														/>
													</div>
												</Col>
											</Row>
											<h4 className='title'>Payment method</h4>
											<ButtonGroup
												className='nav nav-tabs nav-tabs-primary'
												role='tablist'>
												<Button
													color='info'
													href='#pablo'
													className={classnames('btn-simple', {
														active: this.state.paymentTabs === 1,
													})}
													onClick={e => this.toggleTabs(e, 'paymentTabs', 1)}
													size='sm'>
													Credit Card
												</Button>
												<Button
													color='info'
													href='#pablo'
													className={classnames('btn-simple', {
														active: this.state.paymentTabs === 2,
													})}
													onClick={e => this.toggleTabs(e, 'paymentTabs', 2)}
													size='sm'>
													PayPal
												</Button>
											</ButtonGroup>
											<TabContent
												className='tab-space'
												activeTab={'payment' + this.state.paymentTabs}>
												<TabPane tabId='payment1'>
													<Row>
														<Col md='12'>
															<div className='js-form-message'>
																<label className='form-label'>
																	Card number
																</label>
																<Input
																	aria-label='**** **** **** ***'
																	name='cardNumber'
																	placeholder='**** **** **** ***'
																	required=''
																	type='text'
																/>
															</div>
														</Col>
													</Row>
													<br />
													<Row>
														<Col md='8'>
															<div className='js-form-message mb-6'>
																<label className='form-label'>
																	Card holder
																</label>
																<Input
																	aria-label='Jack Wayley'
																	name='cardHolder'
																	placeholder='Jack Wayley'
																	required=''
																	type='text'
																/>
															</div>
														</Col>
														<Col md='2'>
															<div className='js-form-message mb-6'>
																<label className='form-label'>Expiration</label>
																<Input
																	aria-label='MM/YY'
																	name='cardExpirationDate'
																	placeholder='MM/YY'
																	required=''
																	type='text'
																/>
															</div>
														</Col>
														<Col md='2'>
															<div className='js-form-message mb-6'>
																<label className='form-label'>CVC</label>
																<Input
																	aria-label='***'
																	name='cardCVC'
																	placeholder='***'
																	required=''
																	type='text'
																/>
															</div>
														</Col>
													</Row>
													<div className='d-flex justify-content-between align-items-center'>
														<a href='#pablo' onClick={e => e.preventDefault()}>
															<span className='fas fa-angle-left mr-2' />
															Return to cart
														</a>
														<Button color='info' size='sm' type='button'>
															Order now
														</Button>
													</div>
												</TabPane>
												<TabPane tabId='payment2'>
													<h5>Send payment to:</h5>
													<Input
														placeholder='Name or email'
														required=''
														type='text'
													/>
													<br />
													<Button color='info' size='sm' type='button'>
														Pay with PayPal
													</Button>
												</TabPane>
											</TabContent>
										</Container>
									</Form>
								</Col>
							</Row>
						</Container>
					</div>
					<DemoFooter />
				</div>
			</>
		)
	}
}

export default CheckoutPage
