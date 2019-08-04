import React, { useState, useEffect, useRef } from 'react'
import { stopUndefined } from 'utils'
// ReactJS plugin for a nice carousel
import Slick from 'react-slick'
import 'holderjs'
// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	Media,
	Container,
	Row,
	Col,
	UncontrolledTooltip,
	Carousel,
	CarouselItem,
	CarouselIndicators,
} from 'reactstrap'
// core components
import { ExportMultiOrganisms } from 'componentpMultiOrganisms'

const { Footer, IndexNavbar } = stopUndefined(ExportMultiOrganisms)

let imageSlickSettings = {
	dots: true,
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 4,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			},
		},
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	],
}

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

const ProfilePage = props => {
	const [activeIndex, setActiveIndex] = useState(0)
	const [animating] = useState({ value: false })

	const wrapper = useRef(null)

	useEffect(() => {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		wrapper.current.scrollTop = 0
		document.body.classList.add('profile-page')
		return () => {
			document.body.classList.remove('profile-page')
		}
	}, [])

	const onExiting = () => {
		animating.value = true
	}

	const onExited = () => {
		animating.value = false
	}

	const next = () => {
		if (animating.value) return
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
		setActiveIndex(nextIndex)
	}

	const previous = () => {
		if (animating.value) return
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
		setActiveIndex(nextIndex)
	}

	const goToIndex = newIndex => {
		if (animating.value) return
		setActiveIndex(newIndex)
	}
	return (
		<>
			<IndexNavbar />
			<div className='wrapper' ref={wrapper}>
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
				<section className='section'>
					<Container>
						<Row>
							<h1>Images</h1>
						</Row>
						<Row>
							<Col md='12'>
								<Slick {...imageSlickSettings}>
									<div>
										<Media
											object
											data-src='holder.js/150x150?text=1'
											alt='...'
										/>
									</div>
									<div>
										<Media
											object
											data-src='holder.js/150x150?text=2'
											alt='...'
										/>
									</div>
									<div>
										<Media
											object
											data-src='holder.js/150x150?text=3'
											alt='...'
										/>
									</div>
									<div>
										<Media
											object
											data-src='holder.js/150x150?text=4'
											alt='...'
										/>
									</div>
									<div>
										<Media
											object
											data-src='holder.js/150x150?text=5'
											alt='...'
										/>
									</div>
									<div>
										<Media
											object
											data-src='holder.js/150x150?text=6'
											alt='...'
										/>
									</div>
									<div>
										<Media
											object
											data-src='holder.js/150x150?text=7'
											alt='...'
										/>
									</div>
									<div>
										<Media
											object
											data-src='holder.js/150x150?text=8'
											alt='...'
										/>
									</div>
								</Slick>
							</Col>
						</Row>
					</Container>
				</section>
				<section className='section'>
					<Container>
						<Row>
							<h1>Videos</h1>
						</Row>
						<Row className='justify-content-center'>
							<Carousel
								activeIndex={activeIndex}
								next={next}
								previous={previous}>
								<CarouselIndicators
									items={items}
									activeIndex={activeIndex}
									onClickHandler={goToIndex}
								/>
								{items.map((prop, key) => {
									return (
										<CarouselItem
											onExiting={onExiting}
											onExited={onExited}
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
										previous()
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
										next()
									}}
									role='button'>
									<i className='tim-icons icon-minimal-right' />
								</a>
							</Carousel>
						</Row>
					</Container>
				</section>
				<Footer />
			</div>
		</>
	)
}

export default ProfilePage
