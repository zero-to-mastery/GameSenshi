import React from 'react'

// reactstrap components
import {
	Badge,
	Button,
	Card,
	CardHeader,
	CardBody,
	CardTitle,
	FormGroup,
	Input,
	Container,
	Row,
	Col,
	Carousel,
	CarouselItem,
} from 'reactstrap'

// core components
import ColorNavbar from 'componentsAtom/Navbars/ColorNavbar.jsx'
import DemoFooter from 'componentsAtom/Footers/DemoFooter.jsx'

const items = [
	{
		content: (
			<Container>
				<Row>
					<Col md='4'>
						<h1 className='title'>Charlie Watson</h1>
					</Col>
					<Col md='4'>
						<img
							alt='...'
							className='d-block'
							src={require('assets/img/charlie.jpg')}
						/>
					</Col>
					<Col md='4'>
						<div className='wrapper'>
							<div className='category'>
								<strong>Position:</strong> Artist <br />
								<strong>Experience:</strong> 5 years
							</div>
							<div className='description'>
								Artist is a term applied to a person who engages in an activity
								deemed to be an art. An artist also may be defined unofficially
								as "a person who expresses him- or herself through a medium". He
								is a descriptive term applied to a person who engages in an
								activity deemed to be an art. An artist also may be defined
								unofficially as "a person who expresses him- or herself through
								a medium".
							</div>
							<div className='footer'>
								<Button
									className='btn-icon btn-round mr-1'
									color='twitter'
									href='#pablo'
									onClick={e => e.preventDefault()}>
									<i className='fab fa-twitter' />
								</Button>
								<Button
									className='btn-icon btn-round mr-1'
									color='facebook'
									href='#pablo'
									onClick={e => e.preventDefault()}>
									<i className='fab fa-facebook-square' />
								</Button>
								<Button
									className='btn-icon btn-round'
									color='dribbble'
									href='#pablo'
									onClick={e => e.preventDefault()}>
									<i className='fab fa-dribbble' />
								</Button>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		),
		altText: '',
		caption: '',
		src: '0',
	},
	{
		content: (
			<Container>
				<Row>
					<Col md='4'>
						<h1 className='title'>Quavo Austen</h1>
					</Col>
					<Col md='4'>
						<img
							alt='...'
							className='d-block'
							src={require('assets/img/tom-klein.jpg')}
						/>
					</Col>
					<Col md='4'>
						<div className='wrapper'>
							<div className='category'>
								<strong>Position:</strong> Actor <br />
								<strong>Experience:</strong> 1 year
							</div>
							<div className='description'>
								Artist is a term applied to a person who engages in an activity
								deemed to be an art. An artist also may be defined unofficially
								as "a person who expresses him- or herself through a medium". He
								is a descriptive term applied to a person who engages in an
								activity deemed to be an art. An artist also may be defined
								unofficially as "a person who expresses him- or herself through
								a medium".
							</div>
							<div className='footer'>
								<Button
									className='btn-icon btn-round mr-1'
									color='twitter'
									href='#pablo'
									onClick={e => e.preventDefault()}>
									<i className='fab fa-twitter' />
								</Button>
								<Button
									className='btn-icon btn-round mr-1'
									color='facebook'
									href='#pablo'
									onClick={e => e.preventDefault()}>
									<i className='fab fa-facebook-square' />
								</Button>
								<Button
									className='btn-icon btn-round'
									color='dribbble'
									href='#pablo'
									onClick={e => e.preventDefault()}>
									<i className='fab fa-dribbble' />
								</Button>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		),
		altText: '',
		caption: '',
		src: '1',
	},
	{
		content: (
			<Container>
				<Row>
					<Col md='4'>
						<h1 className='title'>Lucy</h1>
					</Col>
					<Col md='4'>
						<img
							alt='...'
							className='d-block'
							src={require('assets/img/lucy.jpg')}
						/>
					</Col>
					<Col md='4'>
						<div className='wrapper'>
							<div className='category'>
								<strong>Position:</strong> CEO <br />
								<strong>Experience:</strong> 7 years
							</div>
							<div className='description'>
								Artist is a term applied to a person who engages in an activity
								deemed to be an art. An artist also may be defined unofficially
								as "a person who expresses him- or herself through a medium". He
								is a descriptive term applied to a person who engages in an
								activity deemed to be an art. An artist also may be defined
								unofficially as "a person who expresses him- or herself through
								a medium".
							</div>
							<div className='footer'>
								<Button
									className='btn-icon btn-round mr-1'
									color='twitter'
									href='#pablo'
									onClick={e => e.preventDefault()}>
									<i className='fab fa-twitter' />
								</Button>
								<Button
									className='btn-icon btn-round mr-1'
									color='facebook'
									href='#pablo'
									onClick={e => e.preventDefault()}>
									<i className='fab fa-facebook-square' />
								</Button>
								<Button
									className='btn-icon btn-round'
									color='dribbble'
									href='#pablo'
									onClick={e => e.preventDefault()}>
									<i className='fab fa-dribbble' />
								</Button>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		),
		altText: '',
		caption: '',
		src: '2',
	},
]

class AboutUs extends React.Component {
	state = {
		activeIndex: 0,
	}
	componentDidMount() {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		this.refs.wrapper.scrollTop = 0
		document.body.classList.add('about-us')
	}
	componentWillUnmount() {
		document.body.classList.remove('about-us')
	}
	onExiting = () => {
		this.animating = true
	}

	onExited = () => {
		this.animating = false
	}

	next = () => {
		if (this.animating) return
		const nextIndex =
			this.state.activeIndex === items.length - 1
				? 0
				: this.state.activeIndex + 1
		this.setState({ activeIndex: nextIndex })
	}

	previous = () => {
		if (this.animating) return
		const nextIndex =
			this.state.activeIndex === 0
				? items.length - 1
				: this.state.activeIndex - 1
		this.setState({ activeIndex: nextIndex })
	}
	render() {
		return (
			<>
				<ColorNavbar />
				<div className='wrapper' ref='wrapper'>
					<div className='page-header'>
						<img
							alt='...'
							className='path path3'
							src={require('assets/img/path3.png')}
						/>
						<svg className='hidden'>
							{/* All deco shapes */}
							<defs>
								<path
									d='M292,517.91s-15.55-56.18-82.16-38.13C144.29,497.54,155.58,363.16,162,313.12S224.89,15.59,387.71,4.49,515.3,133.38,499.28,174.22s-48.71,85.09,11,218.26S455,582.74,430.06,588.37,339.71,621.12,292,517.91Z'
									id='deco2'
								/>
							</defs>
						</svg>
						<div className='content-center'>
							<Container>
								<Row className='align-items-center text-left'>
									<Col className='ml-auto mr-auto' lg='6' md='8' xs='12'>
										<h1 className='title'>
											Integrated <br />
											<strong className='text-warning'>Front marketing</strong>
										</h1>
										<p className='description'>
											We aim high at being focused on building relationships
											with our clients and community. Using our creative gifts
											drives this foundation.
										</p>
										<Row className='row-input'>
											<Col className='mt-1' md='8' xs='6'>
												<Input
													aria-label='Your email'
													id='signupSrEmail'
													name='email'
													placeholder='Your email'
													type='email'
												/>
											</Col>
											<Col md='4' xs='6'>
												<Button color='warning'>Get Started</Button>
											</Col>
										</Row>
									</Col>
									<Col className='ml-auto mr-auto' lg='6' md='8' xs='12'>
										{/* SVG Illustration */}
										<figure className='ie-non-standard-hero-shape'>
											<svg
												className='injected-svg js-svg-injector'
												data-img-paths={
													'[{&quot;targetId&quot;: &quot;#imageShape1&quot;, &quot;newPath&quot;: &quot;' +
													require('assets/img/painter.png') +
													'&quot;},{&quot;targetId&quot;: &quot;#imageShape2&quot;, &quot;newPath&quot;: &quot;' +
													require('assets/img/painter.png') +
													'&quot;}]'
												}
												data-parent='#SVGNonStandardHeroShape'
												style={{ enableBackground: 'new 10 12 878.9 907' }}
												viewBox='10 12 878.9 907'
												x='0px'
												y='0px'
												xmlSpace='preserve'>
												<g>
													<defs>
														<path
															d='M299.27,772.72s-24.67-76.08-131.42-51.33C62.82,745.74,81.48,563.56,92,495.71S193.94,92.18,454.77,76.46,658.58,250.62,632.75,306s-78.37,115.53,16.76,295.77-89.33,258.1-129.36,265.84S375.3,912.41,299.27,772.72Z'
															id='firstShape'
														/>
													</defs>
													<clipPath id='secondShape'>
														<use
															style={{ overflow: 'visible' }}
															xlinkHref='#firstShape'
														/>
													</clipPath>
													<g clipPath='url(#secondShape)'>
														<image
															height='1000'
															id='imageShape1'
															style={{ overflow: 'visible' }}
															transform='matrix(0.9488 0 0 0.9488 25 53.1187)'
															width='1000'
															xlinkHref={require('assets/img/painter.png')}
														/>
													</g>
												</g>
												<g>
													<defs>
														<path
															d='M741.49,643q-2.58-.31-5.17-.4c-12-.45-46.58-14.37-79.24-71.85-17.81-31.35-47.32-96.41-37.88-167.21,7.84-58.79,38.38-97.1,48.34-130.64,24.82-83.61,66.62-77.07,98-77.07,15.93,0,31.1,14.82,39.21,26.39,11.55,16.48,19.72,46.24-9.1,93.32-60.66,99.07,14.09,139.33-.93,239.68C781.72,641.8,750,644,741.49,643Z'
															id='thirdShape'
														/>
													</defs>
													<clipPath id='fourthShape'>
														<use
															style={{ overflow: 'visible' }}
															xlinkHref='#thirdShape'
														/>
													</clipPath>
													<g
														clipPath='url(#fourthShape)'
														transform='matrix(1 0 0 1 0 0)'>
														<image
															height='1000'
															id='imageShape2'
															style={{ overflow: 'visible' }}
															transform='matrix(0.9488 0 0 0.9488 25 53.1187)'
															width='1000'
															xlinkHref={require('assets/img/painter.png')}
														/>
													</g>
												</g>
											</svg>
										</figure>
										{/* End SVG Illustration */}
									</Col>
								</Row>
							</Container>
						</div>
					</div>
					<div className='features-1'>
						<Container>
							<Row>
								<Col className='ml-auto mr-auto' md='8'>
									<Badge color='warning'>Insight</Badge>
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
											Track actions taken on your website, understand the impact
											on your bottom line.
										</p>
									</div>
								</Col>
							</Row>
						</Container>
					</div>
					<div className='section about-description'>
						<img
							alt='...'
							className='path path4'
							src={require('assets/img/path4.png')}
						/>
						<Container>
							<Row className='mb-5'>
								<Col className='ml-auto mr-auto text-center' md='8'>
									<h2 className='title'>Create your awesome product</h2>
									<h4 className='description'>
										This is the paragraph where you can write more details about
										your project. Keep you user engaged by providing meaningful
										information.
									</h4>
								</Col>
							</Row>
							<Row>
								<Col className='ml-auto mr-auto' md='8'>
									<img
										alt='...'
										className='d-block'
										src={require('assets/img/matthew-henry.jpg')}
									/>
								</Col>
							</Row>
						</Container>
					</div>
					<div className='section about-pricing'>
						<Container>
							<Row className='align-items-center'>
								<Col className='mx-auto' lg='5' md='10' xs='12'>
									<h1 className='title'>You should be here!</h1>
									<p className='description'>
										5,000 capacity venue, holding some of the latest technology
										lighting with a 24 colour laser system Amnesia is one of the
										islands most legendary clubs.
									</p>
									<Row>
										<Col className='mb-3' md='12' sm='8'>
											<FormGroup>
												<Input defaultValue='Full Name' type='text' />
											</FormGroup>
											<FormGroup>
												<Input defaultValue='Your Email' type='email' />
											</FormGroup>
											<Button
												className='btn-icon btn-round'
												color='info'
												href='#pablo'
												onClick={e => e.preventDefault()}>
												<i className='tim-icons icon-send' />
											</Button>
										</Col>
									</Row>
								</Col>
								<Col className='ml-auto' lg='6' md='12' xs='12'>
									<Row>
										<Col md='6'>
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
															<i className='tim-icons icon-alert-circle-exc' />{' '}
															No Support
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
										<Col md='6'>
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
															<i className='tim-icons icon-email-85' /> 100
															email
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
									</Row>
								</Col>
							</Row>
						</Container>
					</div>
					<div className='section'>
						<div className='team-1'>
							<Container>
								<Row>
									<Col className='ml-auto mr-auto text-center' md='8'>
										<h2 className='title'>Our Awesome Team 1</h2>
										<h4 className='description'>
											This is the paragraph where you can write more details
											about your team. Keep you user engaged by providing
											meaningful information.
										</h4>
									</Col>
								</Row>
								<Row>
									<Carousel
										activeIndex={this.state.activeIndex}
										next={this.next}
										previous={this.previous}
										className='carousel-team'>
										{items.map((item, key) => {
											return (
												<CarouselItem
													onExiting={this.onExiting}
													onExited={this.onExited}
													key={key}>
													{item.content}
												</CarouselItem>
											)
										})}
										<a
											className='carousel-control-prev'
											data-slide='prev'
											href='#pablo'
											onClick={e => {
												e.preventDefault()
												this.previous()
											}}
											role='button'>
											<i className='tim-icons icon-minimal-left' />
											<span className='sr-only'>Previous</span>
										</a>
										<a
											className='carousel-control-next'
											data-slide='next'
											href='#pablo'
											onClick={e => {
												e.preventDefault()
												this.next()
											}}
											role='button'>
											<i className='tim-icons icon-minimal-right' />
											<span className='sr-only'>Next</span>
										</a>
									</Carousel>
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

export default AboutUs
