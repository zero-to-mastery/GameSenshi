import React from 'react'
// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	FormGroup,
	Form,
	Input,
	Container,
	Row,
	Col,
	UncontrolledTooltip,
	Carousel,
	CarouselItem,
	CarouselIndicators,
} from 'reactstrap'

// core components
import { Footer, IndexNavbar } from 'components'

const items = [
	{
		altText: '',
		caption: 'Big City Life, United States',
		src: require('assets/img/denys.jpg'),
	},
	{
		altText: '',
		caption: 'Somewhere Beyond, United States',
		src: require('assets/img/fabien-bazanegue.jpg'),
	},
	{
		altText: '',
		caption: 'Stocks, United States',
		src: require('assets/img/mark-finn.jpg'),
	},
]

class ProfilePage extends React.Component {
	state = {
		tabs: 1,
		activeIndex: 0,
	}
	componentDidMount() {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		this.refs.wrapper.scrollTop = 0
		document.body.classList.add('profile-page')
	}
	componentWillUnmount() {
		document.body.classList.remove('profile-page')
	}
	toggleTabs = (e, stateName, index) => {
		e.preventDefault()
		this.setState({
			[stateName]: index,
		})
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

	goToIndex = newIndex => {
		if (this.animating) return
		this.setState({ activeIndex: newIndex })
	}
	render() {
		return (
			<>
				<IndexNavbar />
				<div className='wrapper' ref='wrapper'>
					<div className='page-header'>
						<img
							alt='...'
							className='dots'
							src={require('assets/img/dots.png')}
						/>
						<img
							alt='...'
							className='path'
							src={require('assets/img/path4.png')}
						/>
						<Container className='align-items-center'>
							<Row>
								<Col className='ml-auto mr-auto' lg='4' md='6'>
									<Card className='card-coin card-plain'>
										<CardHeader>
											<img
												alt='...'
												className='img-center img-fluid rounded-circle'
												src={require('assets/img/mike.jpg')}
											/>
											<h3 className='title'>Mike Scheinder</h3>
											<p className='text-muted text-center'>@mighty_mike</p>
											{/* Social icons */}
											<Row className='btn-wrapper profile justify-content-center pt-3'>
												<Button
													className='btn-icon btn-round'
													color='twitch'
													href='https://twitch.tv/#my_channel'
													id='tooltip_twitch_icon'
													target='_blank'>
													<i className='fab fa-twitch' />
												</Button>
												<UncontrolledTooltip
													delay={0}
													target='tooltip_twitch_icon'>
													Subscribe to us
												</UncontrolledTooltip>
												<Button
													className='btn-icon btn-round'
													color='youtube'
													href='https://youtube.com/channel/#my_channel'
													id='tooltip_youtube_icon'
													target='_blank'>
													<i className='fab fa-youtube' />
												</Button>
												<UncontrolledTooltip
													delay={0}
													target='tooltip_youtube_icon'>
													Subscribe to us
												</UncontrolledTooltip>
											</Row>
										</CardHeader>
										<CardBody>
											{/* Biography */}
											<p className='profile-description'>
												A veteran in MOBA and FPS games, I can give you a
												significant boost in ranking mode.
											</p>
										</CardBody>
									</Card>
								</Col>
								<Col lg='6' md='6'>
									<h1 className='text-left'>Favorite Games</h1>
									<Row className='btn-wrapper profile justify-content-center pt-3'>
										<Button
											className='btn-icon btn-round'
											href='#games/chess'
											target='_blank'>
											<i className='fab fa-chess' />
										</Button>
										<Button
											className='btn-icon btn-round'
											href='#games/puzzle'
											target='_blank'>
											<i className='fab fa-puzzle-piece' />
										</Button>
										<Button
											className='btn-icon btn-round'
											href='#games/solitaire'
											target='_blank'>
											<i className='fab fa-heart' />
										</Button>
									</Row>
								</Col>
							</Row>
						</Container>
					</div>
					<div className='section'>
						<Container>
							<Row className='justify-content-between'>
								<Col md='6'>
									<Row className='justify-content-between align-items-center'>
										<Carousel
											activeIndex={this.state.activeIndex}
											next={this.next}
											previous={this.previous}>
											<CarouselIndicators
												items={items}
												activeIndex={this.state.activeIndex}
												onClickHandler={this.goToIndex}
											/>
											{items.map((prop, key) => {
												return (
													<CarouselItem
														onExiting={this.onExiting}
														onExited={this.onExited}
														key={prop.src}>
														<img src={prop.src} alt='...' className='d-block' />
														<div className='carousel-caption d-none d-md-block'>
															<h5>{prop.caption}</h5>
														</div>
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
											</a>
										</Carousel>
									</Row>
								</Col>
								<Col md='5'>
									<h1 className='profile-title text-left'>Projects</h1>
									<h5 className='text-on-back'>02</h5>
									<p className='profile-description text-left'>
										An artist of considerable range, Ryan — the name taken by
										Melbourne-raised, Brooklyn-based Nick Murphy — writes,
										performs and records all of his own music, giving it a warm,
										intimate feel with a solid groove structure. An artist of
										considerable range.
									</p>
									<div className='btn-wrapper pt-3'>
										<Button
											className='btn-simple'
											color='primary'
											href='#pablo'
											onClick={e => e.preventDefault()}>
											<i className='tim-icons icon-book-bookmark' /> Bookmark
										</Button>
										<Button
											className='btn-simple ml-1'
											color='info'
											href='#pablo'
											onClick={e => e.preventDefault()}>
											<i className='tim-icons icon-bulb-63' /> Check it!
										</Button>
									</div>
								</Col>
							</Row>
						</Container>
					</div>
					<section className='section'>
						<Container>
							<Row>
								<Col md='6'>
									<Card className='card-plain'>
										<CardHeader>
											<h1 className='profile-title text-left'>Contact</h1>
											<h5 className='text-on-back'>03</h5>
										</CardHeader>
										<CardBody>
											<Form>
												<Row>
													<Col md='6'>
														<FormGroup>
															<label>Your Name</label>
															<Input defaultValue='Mike' type='text' />
														</FormGroup>
													</Col>
													<Col md='6'>
														<FormGroup>
															<label>Email address</label>
															<Input
																placeholder='mike@email.com'
																type='email'
															/>
														</FormGroup>
													</Col>
												</Row>
												<Row>
													<Col md='6'>
														<FormGroup>
															<label>Phone</label>
															<Input defaultValue='001-12321345' type='text' />
														</FormGroup>
													</Col>
													<Col md='6'>
														<FormGroup>
															<label>Company</label>
															<Input defaultValue='CreativeTim' type='text' />
														</FormGroup>
													</Col>
												</Row>
												<Row>
													<Col md='12'>
														<FormGroup>
															<label>Message</label>
															<Input placeholder='Hello there!' type='text' />
														</FormGroup>
													</Col>
												</Row>
												<Button
													className='btn-round float-right'
													color='primary'
													id='tooltip191750994'
													type='button'>
													Send text
												</Button>
												<UncontrolledTooltip
													delay={0}
													placement='right'
													target='tooltip191750994'>
													Can't wait for your message
												</UncontrolledTooltip>
											</Form>
										</CardBody>
									</Card>
								</Col>
								<Col className='ml-auto' lg='4' md='6'>
									<div className='info info-horizontal'>
										<div className='icon icon-primary'>
											<i className='tim-icons icon-square-pin' />
										</div>
										<div className='description'>
											<h4 className='info-title'>Find us at the office</h4>
											<p>
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
											<p>
												Michael Jordan <br />
												+40 762 321 762 <br />
												Mon - Fri, 8:00-22:00
											</p>
										</div>
									</div>
								</Col>
							</Row>
						</Container>
					</section>
					<Footer />
				</div>
			</>
		)
	}
}

export default ProfilePage
