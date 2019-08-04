import React from 'react'
// ReactJS plugin for a nice carousel
import Slick from 'react-slick'

// reactstrap components
import {
	Button,
	Card,
	CardBody,
	CardTitle,
	Container,
	Row,
	Col,
	Carousel,
	CarouselItem,
	CarouselIndicators,
} from 'reactstrap'

// core components
const items1 = [
	{
		content: (
			<Container>
				<Row>
					<Col className='mr-auto' md='5'>
						<div className='space-100' />
						<CardTitle tag='h3'>Isaac Hunter</CardTitle>
						<h3 className='text-warning'>• • •</h3>
						<h4 className='description'>
							Take up one idea. Make that one idea your life - think of it,
							dream of it, live on that idea. Let the brain, muscles, nerves,
							every part of your body, be full of that idea, and just leave
							every other idea alone. This is the way to success. A single rose
							can be my garden... a single friend, my world.
						</h4>
						<Button
							color='warning'
							href='#pablo'
							onClick={e => e.preventDefault()}>
							Read more
						</Button>
					</Col>
					<Col className='ml-auto' md='6'>
						<img
							alt='...'
							className='d-block'
							src={require('assets/img/lucy.jpg')}
						/>
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
					<Col className='mr-auto' md='5'>
						<div className='space-100' />
						<CardTitle tag='h3'>Isaac Hunter</CardTitle>
						<h3 className='text-warning'>• • •</h3>
						<h4 className='description'>
							Take up one idea. Make that one idea your life - think of it,
							dream of it, live on that idea. Let the brain, muscles, nerves,
							every part of your body, be full of that idea, and just leave
							every other idea alone. This is the way to success. A single rose
							can be my garden... a single friend, my world.
						</h4>
						<Button
							color='warning'
							href='#pablo'
							onClick={e => e.preventDefault()}>
							Read more
						</Button>
					</Col>
					<Col className='ml-auto' md='6'>
						<img
							alt='...'
							className='d-block'
							src={require('assets/img/tom-klein.jpg')}
						/>
					</Col>
				</Row>
			</Container>
		),
		altText: '',
		caption: '',
		src: '1',
	},
]

const items2 = [
	{
		content: (
			<div className='info info-primary'>
				<div className='card-avatar'>
					<a href='#pablo' onClick={e => e.preventDefault()}>
						<img
							alt='...'
							className='img img-raised rounded'
							src={require('assets/img/michael.jpg')}
						/>
					</a>
				</div>
				<h4 className='info-title'>Best Quality</h4>
				<p className='description'>
					Gain access to the demographics, psychographics, and location of
					unique people.
				</p>
			</div>
		),
		altText: '',
		caption: '',
		src: '0',
	},
	{
		content: (
			<div className='info info-warning'>
				<div className='card-avatar'>
					<a href='#pablo' onClick={e => e.preventDefault()}>
						<img
							alt='...'
							className='img img-raised rounded'
							src={require('assets/img/olivia.jpg')}
						/>
					</a>
				</div>
				<h4 className='info-title'>Best Quality</h4>
				<p className='description'>
					Gain access to the demographics, psychographics, and location of
					unique people.
				</p>
			</div>
		),
		altText: '',
		caption: '',
		src: '1',
	},
]

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

let slickSettings = {
	dots: false,
	infinite: true,
	centerMode: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	prevArrow: <PrevButton />,
	nextArrow: <NextButton />,
	className: 'center slider',
	slide: 'section',
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

class Testimonials extends React.Component {
	state = {
		carousel1Index: 0,
		carousel2Index: 0,
	}
	onExiting = carousel => {
		this['carousel' + carousel + 'Animating'] = true
	}

	onExited = carousel => {
		this['carousel' + carousel + 'Animating'] = false
	}
	next = (carousel, items) => {
		if (this['carousel' + carousel + 'Animating']) return
		const nextIndex =
			this.state['carousel' + carousel + 'Index'] === items.length - 1
				? 0
				: this.state['carousel' + carousel + 'Index'] + 1
		this.setState({ ['carousel' + carousel + 'Index']: nextIndex })
	}
	previous = (carousel, items) => {
		if (this['carousel' + carousel + 'Animating']) return
		const nextIndex =
			this.state['carousel' + carousel + 'Index'] === 0
				? items.length - 1
				: this.state['carousel' + carousel + 'Index'] - 1
		this.setState({ ['carousel' + carousel + 'Index']: nextIndex })
	}
	goToIndex = (newIndex, carousel) => {
		if (this['carousel' + carousel + 'Animating']) return
		this.setState({ ['carousel' + carousel + 'Index']: newIndex })
	}
	render() {
		return (
			<>
				<div className='cd-section' id='testimonials'>
					{/* ********* TESTIMONIALS 1 ********* */}
					<div className='testimonials-1'>
						<Container>
							<Row>
								<Col className='ml-auto mr-auto text-center' md='6'>
									<h2 className='title'>What Clients Say</h2>
								</Col>
							</Row>
							<Carousel
								activeIndex={this.state.carousel1Index}
								next={() => this.next(1, items1)}
								previous={() => this.previous(1, items1)}
								className='carousel-team'>
								{items1.map((item, key) => {
									return (
										<CarouselItem
											onExiting={() => this.onExiting(1)}
											onExited={() => this.onExited(1)}
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
										this.previous(1, items1)
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
										this.next(1, items1)
									}}
									role='button'>
									<i className='tim-icons icon-minimal-right' />
									<span className='sr-only'>Next</span>
								</a>
							</Carousel>
						</Container>
					</div>
					{/* ********* END TESTIMONIALS 1 ********* */}
					{/* ********* TESTIMONIALS 2 ********* */}
					<div className='testimonials-2'>
						<Container>
							<Row>
								<Col md='12'>
									<Carousel
										activeIndex={this.state.carousel2Index}
										next={() => this.next(2, items2)}
										previous={() => this.previous(2, items2)}>
										<CarouselIndicators
											items={items2}
											activeIndex={this.state.carousel2Index}
											onClickHandler={newIndex => this.goToIndex(newIndex, 2)}
										/>
										{items2.map((item, key) => {
											return (
												<CarouselItem
													onExiting={() => this.onExiting(2)}
													onExited={() => this.onExited(2)}
													key={key}
													className='justify-content-center'>
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
												this.previous(2, items2)
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
												this.next(2, items2)
											}}
											role='button'>
											<i className='tim-icons icon-minimal-right' />
										</a>
									</Carousel>
								</Col>
							</Row>
						</Container>
					</div>
					{/* ********* END TESTIMONIALS 2 ********* */}
					{/* ********* TESTIMONIALS 3 ********* */}
					<div className='testimonials-3'>
						<Container>
							<Row>
								<Col className='ml-auto mr-auto text-center' md='6'>
									<h2 className='title'>What Clients Say</h2>
								</Col>
							</Row>
							<Row>
								<div
									className='carousel slide carousel-team'
									id='carousel-testimonials3'>
									<div className='carousel-inner'>
										<div className='carousel-item active'>
											<div className='info text-left bg-danger'>
												<div className='icon icon-white'>
													<i className='fa fa-quote-right' />
												</div>
												<p className='description text-white'>
													Take up one idea. Make that one idea your life - think
													of it, dream of it, live on that idea. Let the brain,
													muscles, nerves, every part of your body, be full of
													that idea, and just leave every other idea alone. This
													is the way to success. A single rose can be my
													garden... a single friend, my world.
												</p>
												<div className='author'>
													<img
														alt='...'
														className='avatar img-raised'
														src={require('assets/img/p10.jpg')}
													/>
													<span>Mike John</span>
												</div>
											</div>
											<Card
												className='card-blog card-background'
												data-animation={true}>
												<div
													className='full-background'
													style={{
														backgroundImage:
															'url(' +
															require('assets/img/marc-olivier-jodoin.jpg') +
															')',
													}}
												/>
												<CardBody>
													<div className='content-bottom ml-auto'>
														<Button
															className='btn-round btn-simple btn-neutral'
															color='default'
															href='#pablo'
															onClick={e => e.preventDefault()}>
															Read more
														</Button>
													</div>
												</CardBody>
											</Card>
										</div>
										<div className='carousel-item'>
											<div className='info text-left bg-info'>
												<div className='icon icon-white'>
													<i className='fa fa-quote-right' />
												</div>
												<p className='description text-white'>
													Take up one idea. Make that one idea your life - think
													of it, dream of it, live on that idea. Let the brain,
													muscles, nerves, every part of your body, be full of
													that idea, and just leave every other idea alone. This
													is the way to success. A single rose can be my
													garden... a single friend, my world.
												</p>
												<div className='author'>
													<img
														alt='...'
														className='avatar img-raised'
														src={require('assets/img/olivia.jpg')}
													/>
													<span>Andrew Lino</span>
												</div>
											</div>
											<Card
												className='card-blog card-background'
												data-animation={true}>
												<div
													className='full-background'
													style={{
														backgroundImage:
															'url(' + require('assets/img/contact1.jpg') + ')',
													}}
												/>
												<CardBody>
													<div className='content-bottom ml-auto'>
														<Button
															className='btn-round btn-simple btn-neutral'
															color='default'
															href='#pablo'
															onClick={e => e.preventDefault()}>
															Read more
														</Button>
													</div>
												</CardBody>
											</Card>
										</div>
									</div>
								</div>
							</Row>
						</Container>
					</div>
					{/* ********* END TESTIMONIALS 3 ********* */}
					{/* ********* TESTIMONIALS 4 ********* */}
					<div className='testimonials-4'>
						<Container fluid>
							<Row>
								<Col className='ml-auto mr-auto text-center' md='6'>
									<h2 className='title'>Join our world</h2>
								</Col>
							</Row>
							<Row>
								<Col className='positioned' lg='4' md='8' xs='10'>
									<h1 className='title'>See our customers opinion</h1>
									<p className='description text-white'>
										Meet Wingman, a robust suite of styled pages and components,
										powered by Bootstrap 4. The ideal starting point for product
										landing pages, stylish web-apps and complete company
										websites.
									</p>
									<Button
										color='info'
										href='#pablo'
										onClick={e => e.preventDefault()}
										size='lg'>
										Contact us
									</Button>
								</Col>
								<Col md='12'>
									<Slick {...slickSettings}>
										<div>
											<div className='info text-left'>
												<p className='description text-white'>
													{`"Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success. A single rose can be my garden... a single friend, my world."`}
												</p>
												<div className='author'>
													<img
														alt='...'
														className='avatar img-raised'
														src={require('assets/img/olivia.jpg')}
													/>
													<span>Andrew Lino</span>
												</div>
											</div>
										</div>
										<div>
											<div className='info text-left'>
												<p className='description text-white'>
													{`"Artist is a term applied to a person who engages in an activity deemed to be an art. An artist also may be defined unofficially as "a person who expresses him- or herself through a medium". He is a descriptive term applied to a person who engages in an activity deemed to be an art."`}
												</p>
												<div className='author'>
													<img
														alt='...'
														className='avatar img-raised'
														src={require('assets/img/james.jpg')}
													/>
													<span>Michael Jenos</span>
												</div>
											</div>
										</div>
										<div>
											<div className='info text-left'>
												<p className='description text-white'>
													{`"The simplest visual description uses ordinary words to convey what the writer sees. First he or she must look at the subject – slowly, carefully, and repeatedly, if possible – to identify the parts that make the whole"`}
												</p>
												<div className='author'>
													<img
														alt='...'
														className='avatar img-raised'
														src={require('assets/img/ryan.jpg')}
													/>
													<span>Rose Arthur</span>
												</div>
											</div>
										</div>
										<div>
											<div className='info text-left'>
												<p className='description text-white'>
													{`"Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover, which raised $65 million to expand its pet sitting and dog-walking businesses..Finding temporary housing for your dog should be as easy as renting an Airbnb."`}
												</p>
												<div className='author'>
													<img
														alt='...'
														className='avatar img-raised'
														src={require('assets/img/lora.jpg')}
													/>
													<span>Lora Jimi</span>
												</div>
											</div>
										</div>
										<div>
											<div className='info text-left'>
												<p className='description text-white'>
													{`"Venture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large, late-stage financings and a few outsized early-stage rounds in tech and healthcare..enture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large."`}
												</p>
												<div className='author'>
													<img
														alt='...'
														className='avatar img-raised'
														src={require('assets/img/mike.jpg')}
													/>
													<span>Mike Ranson</span>
												</div>
											</div>
										</div>
									</Slick>
								</Col>
							</Row>
						</Container>
					</div>
					{/* ********* END TESTIMONIALS 4 ********* */}
				</div>
			</>
		)
	}
}

export default Testimonials
