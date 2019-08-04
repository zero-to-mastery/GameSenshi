import React from 'react'
// nodejs library that concatenates classes
import classnames from 'classnames'
// ReactJS plugin for a nice carousel
import Slick from 'react-slick'
// reactstrap components
import {
	Button,
	UncontrolledCollapse,
	Label,
	FormGroup,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
	Row,
	Col,
} from 'reactstrap'

// core components
let slickHeader2Settings = {
	slidesToShow: 6,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2500,
	arrows: false,
	dots: false,
	pauseOnHover: false,
	className: 'customer-logos',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 4,
			},
		},
		{
			breakpoint: 520,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
}

// custom previous button for the slick component
const PrevButton = props => {
	return (
		<Button
			className='btn-round btn-icon btn-simple slick-prev slick-arrow'
			color='primary'
			aria-label='Previous'
			type='button'
			onClick={props.onClick}>
			<i className='tim-icons icon-minimal-left' />
		</Button>
	)
}
// custom next button for the slick component
const NextButton = props => {
	return (
		<Button
			className='btn-round btn-icon btn-simple slick-next slick-arrow'
			color='primary'
			aria-label='Next'
			type='button'>
			<i className='tim-icons icon-minimal-right' onClick={props.onClick} />
		</Button>
	)
}

let slickHeader3Settings = {
	dots: false,
	infinite: true,
	centerMode: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	prevArrow: <PrevButton />,
	nextArrow: <NextButton />,
	className: 'center slider slick-buttons-under',
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	],
}

class Headers extends React.Component {
	state = {}
	render() {
		return (
			<>
				<div className='cd-section' id='headers'>
					{/* ********* HEADER 1 ********* */}
					<div className='header header-1'>
						<Navbar className='bg-primary navbar-absolute' expand='lg'>
							<Container>
								<div className='navbar-translate'>
									<button className='navbar-toggler' id='example-header-1'>
										<span className='navbar-toggler-bar bar1' />
										<span className='navbar-toggler-bar bar2' />
										<span className='navbar-toggler-bar bar3' />
									</button>
									<NavbarBrand href='#pablo' onClick={e => e.preventDefault()}>
										Creative Tim
									</NavbarBrand>
								</div>
								<UncontrolledCollapse navbar toggler='#example-header-1'>
									<div className='navbar-collapse-header'>
										<Row>
											<Col className='collapse-brand' xs='6'>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													BLK• <span>PRO React</span>
												</a>
											</Col>
											<Col className='collapse-close text-right' xs='6'>
												<button
													className='navbar-toggler'
													id='example-header-1'>
													<i className='tim-icons icon-simple-remove' />
												</button>
											</Col>
										</Row>
									</div>
									<Nav className='mx-auto' navbar>
										<NavItem className='active'>
											<NavLink href='#pablo' onClick={e => e.preventDefault()}>
												Home
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink href='#pablo' onClick={e => e.preventDefault()}>
												About Us
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink href='#pablo' onClick={e => e.preventDefault()}>
												Contact Us
											</NavLink>
										</NavItem>
									</Nav>
									<Nav className='nav' navbar>
										<NavItem>
											<NavLink
												href='https://twitter.com/CreativeTim'
												target='_blank'>
												<i className='fab fa-twitter' />
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												href='https://www.facebook.com/CreativeTim'
												target='_blank'>
												<i className='fab fa-facebook-square' />
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												href='https://www.instagram.com/CreativeTimOfficial'
												target='_blank'>
												<i className='fab fa-instagram' />
											</NavLink>
										</NavItem>
									</Nav>
								</UncontrolledCollapse>
							</Container>
						</Navbar>
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
									<Col className='mr-auto text-left mt-5' lg='5' md='7'>
										<h6 className='category'>BLK Design System</h6>
										<h1 className='title'>
											You can build awesome project with this Design System!
										</h1>
										<br />
										<div className='buttons'>
											<Button
												className='btn-round mr-3 pulse'
												color='primary'
												href='#pablo'
												onClick={e => e.preventDefault()}
												size='lg'>
												<i className='tim-icons icon-delivery-fast' />
											</Button>
											<p>Watch now!</p>
										</div>
									</Col>
									<Col className='ml-auto mt-5' lg='7' md='12'>
										<div className='iframe-container'>
											<img
												alt='...'
												src='https://s3.amazonaws.com/creativetim_bucket/github/gif/black-dashboard.gif'
											/>
										</div>
									</Col>
								</Row>
							</Container>
						</div>
					</div>
					{/* ********* END HEADER 1 ********* */}
					{/* ********* HEADER 2 ********* */}
					<div className='header header-2'>
						<Navbar className='bg-white navbar-absolute' expand='lg'>
							<Container>
								<div className='navbar-translate'>
									<button className='navbar-toggler' id='example-header-2'>
										<span className='navbar-toggler-bar bar1' />
										<span className='navbar-toggler-bar bar2' />
										<span className='navbar-toggler-bar bar3' />
									</button>
									<NavbarBrand href='#pablo' onClick={e => e.preventDefault()}>
										Creative Tim
									</NavbarBrand>
								</div>
								<UncontrolledCollapse navbar toggler='#example-header-2'>
									<div className='navbar-collapse-header'>
										<Row>
											<Col className='collapse-brand' xs='6'>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													BLK• <span>PRO React</span>
												</a>
											</Col>
											<Col className='collapse-close text-right' xs='6'>
												<button
													className='navbar-toggler'
													id='example-header-2'>
													<i className='tim-icons icon-simple-remove' />
												</button>
											</Col>
										</Row>
									</div>
									<Nav className='mx-auto' navbar>
										<NavItem className='active'>
											<NavLink href='#pablo' onClick={e => e.preventDefault()}>
												Home
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink href='#pablo' onClick={e => e.preventDefault()}>
												About Us
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink href='#pablo' onClick={e => e.preventDefault()}>
												Products
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink href='#pablo' onClick={e => e.preventDefault()}>
												Contact Us
											</NavLink>
										</NavItem>
									</Nav>
									<Nav className='nav navbar-right' navbar>
										<NavItem>
											<NavLink
												href='https://twitter.com/CreativeTim'
												target='_blank'>
												<i className='fab fa-twitter' />
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												href='https://www.facebook.com/CreativeTim'
												target='_blank'>
												<i className='fab fa-facebook-square' />
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												href='https://www.instagram.com/CreativeTimOfficial'
												target='_blank'>
												<i className='fab fa-instagram' />
											</NavLink>
										</NavItem>
									</Nav>
								</UncontrolledCollapse>
							</Container>
						</Navbar>
						<div className='page-header header-filter'>
							<div
								className='page-header-image'
								style={{
									backgroundImage:
										'url(' + require('assets/img/matt-palmer.jpg') + ')',
								}}
							/>
							<Container>
								<Row className='text-left'>
									<Col md='6' xs='12'>
										<h1 className='title'>You should be here!</h1>
										<p className='description'>
											5,000 capacity venue, holding some of the latest
											technology lighting with a 24 colour laser system Amnesia
											is one of the islands most legendary clubs.
										</p>
										<Row>
											<Col className='mb-3' md='12' sm='8'>
												<Row>
													<FormGroup className='no-border'>
														<Input defaultValue='Full Name' type='text' />
													</FormGroup>
													<FormGroup className='no-border'>
														<Input defaultValue='Your Email' type='email' />
													</FormGroup>
													<Button
														className='btn-icon btn-round'
														color='primary'
														href='#pablo'
														onClick={e => e.preventDefault()}>
														<i className='tim-icons icon-send' />
													</Button>
												</Row>
												<FormGroup check>
													<Label check>
														<Input type='checkbox' />
														<span className='form-check-sign' />I agree to the{' '}
														<a href='#pablo' onClick={e => e.preventDefault()}>
															terms and conditions
														</a>
														.
													</Label>
												</FormGroup>
											</Col>
										</Row>
									</Col>
								</Row>
								<Row>
									<Slick {...slickHeader2Settings}>
										<div className='slide'>
											<img
												alt='...'
												src='https://www.solodev.com/assets/carousel/image1.png'
											/>
										</div>
										<div className='slide'>
											<img
												alt='...'
												src='https://www.solodev.com/assets/carousel/image2.png'
											/>
										</div>
										<div className='slide'>
											<img
												alt='...'
												src='https://www.solodev.com/assets/carousel/image3.png'
											/>
										</div>
										<div className='slide'>
											<img
												alt='...'
												src='https://www.solodev.com/assets/carousel/image4.png'
											/>
										</div>
										<div className='slide'>
											<img
												alt='...'
												src='https://www.solodev.com/assets/carousel/image5.png'
											/>
										</div>
										<div className='slide'>
											<img
												alt='...'
												src='https://www.solodev.com/assets/carousel/image6.png'
											/>
										</div>
										<div className='slide'>
											<img
												alt='...'
												src='https://www.solodev.com/assets/carousel/image7.png'
											/>
										</div>
										<div className='slide'>
											<img
												alt='...'
												src='https://www.solodev.com/assets/carousel/image8.png'
											/>
										</div>
									</Slick>
								</Row>
							</Container>
						</div>
					</div>
					{/* ********* END HEADER 2 ********* */}
					{/* ********* HEADER 3 ********* */}
					<div className='header header-3'>
						<Navbar className='navbar-transparent navbar-absolute' expand='lg'>
							<Container>
								<div className='navbar-translate'>
									<button className='navbar-toggler' id='example-header-3'>
										<span className='navbar-toggler-bar bar1' />
										<span className='navbar-toggler-bar bar2' />
										<span className='navbar-toggler-bar bar3' />
									</button>
									<NavbarBrand href='#pablo' onClick={e => e.preventDefault()}>
										Creative Tim
									</NavbarBrand>
								</div>
								<UncontrolledCollapse navbar toggler='#example-header-3'>
									<div className='navbar-collapse-header'>
										<Row>
											<Col className='collapse-brand' xs='6'>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													BLK• <span>PRO React</span>
												</a>
											</Col>
											<Col className='collapse-close text-right' xs='6'>
												<button
													className='navbar-toggler'
													id='example-header-3'>
													<i className='tim-icons icon-simple-remove' />
												</button>
											</Col>
										</Row>
									</div>
									<Nav className='ml-auto' navbar>
										<NavItem className='active'>
											<NavLink href='#pablo' onClick={e => e.preventDefault()}>
												Home
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink href='#pablo' onClick={e => e.preventDefault()}>
												About Us
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink href='#pablo' onClick={e => e.preventDefault()}>
												Contact Us
											</NavLink>
										</NavItem>
									</Nav>
								</UncontrolledCollapse>
							</Container>
						</Navbar>
						<div className='page-header header-filter'>
							<div className='content-center'>
								<Row>
									<Col
										className='ml-auto mr-auto positioned'
										lg='5'
										md='8'
										xs='12'>
										<h1 className='title'>Build stunning websites and apps</h1>
										<p className='description'>
											Meet Wingman, a robust suite of styled pages and
											components, powered by Bootstrap 4. The ideal starting
											point for product landing pages, stylish web-apps and
											complete company websites.
										</p>
										<Button
											color='primary'
											href='#pablo'
											onClick={e => e.preventDefault()}
											size='lg'>
											Purchase Now
										</Button>
									</Col>
									<Col md='12'>
										<Slick {...slickHeader3Settings}>
											<div>
												<img
													alt='...'
													height='500'
													src={require('assets/img/mark-harrison.jpg')}
													width='450'
												/>
											</div>
											<div>
												<img
													alt='...'
													height='500'
													src={require('assets/img/steven-roe.jpg')}
													width='450'
												/>
											</div>
											<div>
												<img
													alt='...'
													height='500'
													src={require('assets/img/rezaul-karim.jpg')}
													width='450'
												/>
											</div>
											<div>
												<img
													alt='...'
													height='500'
													src={require('assets/img/pawel-nolbert.jpg')}
													width='450'
												/>
											</div>
											<div>
												<img
													alt='...'
													height='500'
													src={require('assets/img/serge-kutuzov.jpg')}
													width='450'
												/>
											</div>
										</Slick>
									</Col>
								</Row>
							</div>
						</div>
					</div>
					{/* ********* END HEADER 3 ********* */}
					{/* ********* HEADER 4 w/ VIDEO ********* */}
					<div className='header header-4'>
						<div className='header-wrapper'>
							<Navbar className='navbar-transparent' expand='lg'>
								<Container>
									<div className='navbar-translate'>
										<button className='navbar-toggler' id='example-header-4'>
											<span className='navbar-toggler-bar bar1' />
											<span className='navbar-toggler-bar bar2' />
											<span className='navbar-toggler-bar bar3' />
										</button>
										<NavbarBrand
											href='#pablo'
											onClick={e => e.preventDefault()}>
											Creative Tim
										</NavbarBrand>
									</div>
									<UncontrolledCollapse navbar toggler='#example-header-4'>
										<div className='navbar-collapse-header'>
											<Row>
												<Col className='collapse-brand' xs='6'>
													<a href='#pablo' onClick={e => e.preventDefault()}>
														BLK• <span>PRO React</span>
													</a>
												</Col>
												<Col className='collapse-close text-right' xs='6'>
													<button
														className='navbar-toggler'
														id='example-header-4'>
														<i className='tim-icons icon-simple-remove' />
													</button>
												</Col>
											</Row>
										</div>
										<Nav className='mx-auto' navbar>
											<NavItem className='active'>
												<NavLink
													href='#pablo'
													onClick={e => e.preventDefault()}>
													Home
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													href='#pablo'
													onClick={e => e.preventDefault()}>
													About Us
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													href='#pablo'
													onClick={e => e.preventDefault()}>
													Products
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													href='#pablo'
													onClick={e => e.preventDefault()}>
													Contact Us
												</NavLink>
											</NavItem>
										</Nav>
										<Nav className='nav navbar-right' navbar>
											<NavItem>
												<NavLink
													href='https://twitter.com/CreativeTim'
													target='_blank'>
													<i className='fab fa-twitter' />
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													href='https://www.facebook.com/CreativeTim'
													target='_blank'>
													<i className='fab fa-facebook-square' />
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													href='https://www.instagram.com/CreativeTimOfficial'
													target='_blank'>
													<i className='fab fa-instagram' />
												</NavLink>
											</NavItem>
										</Nav>
									</UncontrolledCollapse>
								</Container>
							</Navbar>
							<div className='page-header header-video header-filter'>
								<div className='overlay' />
								<video
									autoPlay='autoplay'
									loop='loop'
									muted='muted'
									playsInline='playsinline'>
									<source
										src='https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4'
										type='video/mp4'
									/>
								</video>
								<Container className='text-center'>
									<div className='video-text'>
										<h2 className='description'>Make it</h2>
										<h1 className='title'>Stand out</h1>
										<br />
										<Button
											className='btn-simple btn-neutral'
											color='default'
											href='#pablo'
											onClick={e => e.preventDefault()}>
											Dare for more
										</Button>
									</div>
								</Container>
							</div>
						</div>
					</div>
					{/* ********* END HEADER 4 ********* */}
					{/* ********* HEADER 5 ********* */}
					<div className='header header-5'>
						<Navbar className='bg-default navbar-absolute' expand='lg'>
							<Container>
								<div className='navbar-translate'>
									<button className='navbar-toggler' id='example-header-5'>
										<span className='navbar-toggler-bar bar1' />
										<span className='navbar-toggler-bar bar2' />
										<span className='navbar-toggler-bar bar3' />
									</button>
									<NavbarBrand href='#pablo' onClick={e => e.preventDefault()}>
										Creative Tim
									</NavbarBrand>
								</div>
								<UncontrolledCollapse navbar toggler='#example-header-5'>
									<div className='navbar-collapse-header'>
										<Row>
											<Col className='collapse-brand' xs='6'>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													BLK• <span>PRO React</span>
												</a>
											</Col>
											<Col className='collapse-close text-right' xs='6'>
												<button
													className='navbar-toggler'
													id='example-header-5'>
													<i className='tim-icons icon-simple-remove' />
												</button>
											</Col>
										</Row>
									</div>
									<Nav className='ml-auto' navbar>
										<NavItem className='active'>
											<NavLink href='#pablo' onClick={e => e.preventDefault()}>
												Home
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink href='#pablo' onClick={e => e.preventDefault()}>
												About Us
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink href='#pablo' onClick={e => e.preventDefault()}>
												Contact Us
											</NavLink>
										</NavItem>
									</Nav>
								</UncontrolledCollapse>
							</Container>
						</Navbar>
						<div className='page-header'>
							<Container>
								<Row className='align-items-center mt-md-5'>
									<Col className='ml-auto mr-auto' lg='6' md='8'>
										<div className='logo'>
											<div className='logo-image'>
												<img
													alt='...'
													src={require('assets/img/creative-tim-white-slim2.png')}
												/>
											</div>
										</div>
										<h2 className='title text-left'>
											Start learning coding with the best programmers and with
											the best technology
										</h2>
										<InputGroup
											className={classnames({
												'input-group-focus': this.state.focus,
											})}>
											<Input
												placeholder="Email me when it's done"
												type='text'
												onFocus={e => this.setState({ focus: true })}
												onBlur={e => this.setState({ focus: false })}
											/>
											<InputGroupAddon addonType='append'>
												<InputGroupText>
													<i className='tim-icons icon-lock-circle' />
												</InputGroupText>
											</InputGroupAddon>
										</InputGroup>
										<Button
											className='btn-simple btn-icon'
											color='info'
											href=''>
											<i className='tim-icons icon-send' />
										</Button>
									</Col>
									<Col className='ml-auto text-center' lg='4'>
										<div className='phone-container'>
											<img
												alt='...'
												className='phone'
												src={require('assets/img/iphone2.png')}
											/>
										</div>
										<img
											alt='...'
											className='shape'
											src={require('assets/img/patrat.png')}
										/>
										<img
											alt='...'
											className='shape2'
											src={require('assets/img/cercuri.png')}
										/>
										<img
											alt='...'
											className='shape3'
											src={require('assets/img/waves.png')}
										/>
									</Col>
								</Row>
							</Container>
						</div>
					</div>
					{/* ********* END HEADER 5 ********* */}
					{/* ********* HEADER 6 ********* */}
					<div className='header header-6'>
						<Navbar className='navbar-transparent' expand='lg'>
							<Container>
								<div className='navbar-translate'>
									<button className='navbar-toggler' id='example-header-6'>
										<span className='navbar-toggler-bar bar1' />
										<span className='navbar-toggler-bar bar2' />
										<span className='navbar-toggler-bar bar3' />
									</button>
									<NavbarBrand href='#pablo' onClick={e => e.preventDefault()}>
										Creative Tim
									</NavbarBrand>
								</div>
								<UncontrolledCollapse navbar toggler='#example-header-6'>
									<div className='navbar-collapse-header'>
										<Row>
											<Col className='collapse-brand' xs='6'>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													BLK• <span>PRO React</span>
												</a>
											</Col>
											<Col className='collapse-close text-right' xs='6'>
												<button
													className='navbar-toggler'
													id='example-header-6'>
													<i className='tim-icons icon-simple-remove' />
												</button>
											</Col>
										</Row>
									</div>
									<Nav className='mx-auto' navbar>
										<NavItem className='active'>
											<NavLink href='#pablo' onClick={e => e.preventDefault()}>
												Home
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink href='#pablo' onClick={e => e.preventDefault()}>
												About Us
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink href='#pablo' onClick={e => e.preventDefault()}>
												Products
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink href='#pablo' onClick={e => e.preventDefault()}>
												Contact Us
											</NavLink>
										</NavItem>
									</Nav>
									<Nav className='nav navbar-right' navbar>
										<NavItem>
											<NavLink
												href='https://twitter.com/CreativeTim'
												target='_blank'>
												<i className='fab fa-twitter' />
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												href='https://www.facebook.com/CreativeTim'
												target='_blank'>
												<i className='fab fa-facebook-square' />
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												href='https://www.instagram.com/CreativeTimOfficial'
												target='_blank'>
												<i className='fab fa-instagram' />
											</NavLink>
										</NavItem>
									</Nav>
								</UncontrolledCollapse>
							</Container>
						</Navbar>
						<div className='page-header'>
							<div className='content-center'>
								<Container>
									<Row className='align-items-center text-left'>
										<Col lg='6' xs='12'>
											<h1 className='title'>
												Integrated <br />
												<strong className='text-info'>Front marketing</strong>
											</h1>
											<p className='description'>
												We aim high at being focused on building relationships
												with our clients and community. Using our creative gifts
												drives this foundation.
											</p>
											<Row className='row-input'>
												<Col className='mt-1' sm='8' xs='12'>
													<Input
														aria-label='Your email'
														id='signupSrEmail'
														name='email'
														placeholder='Your email'
														type='email'
													/>
												</Col>
												<Col sm='4' xs='12'>
													<Button block color='info'>
														Get Started
													</Button>
												</Col>
											</Row>
										</Col>
										<Col lg='6' xs='12'>
											<img
												alt='...'
												className='path path3'
												src={require('assets/img/shape-s.png')}
											/>
											{/* SVG Illustration */}
											<figure className=' header-shape'>
												<svg
													className=' injected-svg js-svg-injector'
													style={{ enableBackground: 'new 10 12 878.9 907' }}
													viewBox='10 12 878.9 907'
													x='0px'
													y='0px'
													xmlSpace='preserve'>
													<g>
														<defs>
															<path
																d='M300.34,75.35C379.42-7.43,305.86,185.78,540.87,98.95,647.68,46,677,219,674.65,258.55c-11,185-132.32,65-13.89,317.66,56.86,121.32-94.88,256-155.89,151.41-55.11-94.48-151.56-85.1-189-90.54-311-45.27-9.33-148.52-125.21-256.78C9.7,211.2,190.5,100.86,306.34,70.35Z'
																id='shape1'
															/>
														</defs>
														<clipPath id='shape2'>
															<use
																style={{ overflow: 'visible' }}
																xlinkHref='#shape1'
															/>
														</clipPath>
														<g clipPath='url(#shape2)'>
															<image
																height='900'
																id='imageShape1'
																style={{ overflow: 'visible' }}
																transform='matrix(0.9488 0 0 0.9488 25 53.1187)'
																width='800'
																xlinkHref={require('assets/img/img_352.png')}
															/>
														</g>
													</g>
													<g>
														<defs>
															<path
																d='M186.26,647.36c7,1,14,1.87,21.11,2.4,42.73,3.24,173.84,9.32,234.51,60.15,72.83,61,105.38,80.19,37.4,96.45C388.73,828,438.49,724,312,749.28c-167.3,33.46-210.61-70.86-181.08-90.54C151.8,644.8,174.69,645.67,186.26,647.36Z'
																id='shape3'
															/>
														</defs>
														<clipPath id='shape4'>
															<use
																style={{ overflow: 'visible' }}
																xlinkHref='#shape3'
															/>
														</clipPath>
														<g
															clipPath='url(#shape4)'
															transform='matrix(1 0 0 1 0 0)'>
															<image
																height='900'
																id='imageShape2'
																style={{ overflow: 'visible' }}
																transform='matrix(0.9488 0 0 0.9488 25 53.1187)'
																width='900'
																xlinkHref={require('assets/img/img_352.png')}
															/>
														</g>
													</g>
												</svg>
											</figure>
										</Col>
									</Row>
								</Container>
							</div>
						</div>
					</div>
					{/* ********* END HEADER 6 ********* */}
				</div>{' '}
			</>
		)
	}
}

export default Headers
