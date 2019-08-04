import React from 'react'

// reactstrap components
import {
	Badge,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardTitle,
	Container,
	Row,
	Col,
	UncontrolledTooltip,
	Carousel,
	CarouselItem,
} from 'reactstrap'

// core components
import ColorNavbar from 'componentAtoms/Navbars/ColorNavbar.jsx'
import DemoFooter from 'componentAtoms/Footers/DemoFooter.jsx'

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

class Ecommerce extends React.Component {
	constructor(props) {
		super(props)
		let windowScrollTop
		if (window.innerWidth >= 768) {
			windowScrollTop = window.pageYOffset / 3
		} else {
			windowScrollTop = 0
		}
		this.state = {
			transform: 'translate3d(0,' + windowScrollTop + 'px,0)',
			carousel1Index: 0,
		}
	}
	componentDidMount() {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		this.refs.wrapper.scrollTop = 0
		document.body.classList.add('ecommerce-page')
		if (window.innerWidth >= 768) {
			var windowScrollTop = window.pageYOffset / 3
			this.setState({
				transform: 'translate3d(0,' + windowScrollTop + 'px,0)',
			})
			window.addEventListener('scroll', this.resetTransform)
		}
	}
	componentWillUnmount() {
		document.body.classList.remove('ecommerce-page')
		if (window.innerWidth >= 768) {
			window.removeEventListener('scroll', this.resetTransform)
		}
	}
	resetTransform = () => {
		var windowScrollTop = window.pageYOffset / 3
		this.setState({
			transform: 'translate3d(0,' + windowScrollTop + 'px,0)',
		})
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
	render() {
		return (
			<>
				<ColorNavbar />
				<div className='wrapper' ref='wrapper'>
					<div className='header header-1'>
						<div className='page-header header-filter'>
							<div
								className='page-header-image'
								style={{
									backgroundImage:
										'url(' + require('assets/img/shop.jpeg') + ')',
									transform: this.state.transform,
								}}
							/>
							<Container>
								<Row>
									<Col className='mr-auto text-left' lg='6' md='7'>
										<h1 className='title'>See our latest collection!</h1>
										<br />
										<div className='buttons'>
											<Button
												className='btn-round mr-3 pulse'
												color='success'
												href='#pablo'
												onClick={e => e.preventDefault()}
												size='lg'>
												<i className='tim-icons icon-bag-16' />
											</Button>
											<p>Shop Now!</p>
										</div>
									</Col>
								</Row>
							</Container>
						</div>
					</div>
					<div className='main'>
						<div className='section'>
							<Container>
								<Row>
									<Col className='mx-auto text-center' md='10'>
										<h3 className='desc my-5'>Fresh new collection</h3>
									</Col>
								</Row>
								<Row>
									<Col md='12'>
										<Row>
											<Col lg='3' md='6'>
												<Card className='card-product card-plain'>
													<div className='card-image'>
														<Badge color='info'>NEW</Badge>
														<a href='#pablo' onClick={e => e.preventDefault()}>
															<img
																alt='...'
																src={require('assets/img/tshirt.png')}
															/>
														</a>
													</div>
													<CardBody>
														<a href='#pablo' onClick={e => e.preventDefault()}>
															<CardTitle tag='h4'>Polo Ralph Lauren</CardTitle>
														</a>
														<CardFooter>
															<div className='price-container'>
																<span className='price'>€ 300</span>
															</div>
															<Button
																className='btn-neutral btn-icon btn-round pull-right'
																color='danger'
																id='tooltip426328914'>
																<i className='tim-icons icon-heart-2' />
															</Button>
															<UncontrolledTooltip
																delay={0}
																placement='left'
																target='tooltip426328914'>
																Remove from wishlist
															</UncontrolledTooltip>
														</CardFooter>
													</CardBody>
												</Card>
												{/* end card */}
											</Col>
											<Col lg='3' md='6'>
												<Card className='card-product card-plain'>
													<div className='card-image'>
														<a href='#pablo' onClick={e => e.preventDefault()}>
															<img
																alt='...'
																src={require('assets/img/bag.png')}
															/>
														</a>
													</div>
													<CardBody>
														<a href='#pablo' onClick={e => e.preventDefault()}>
															<CardTitle tag='h4'>Tom Ford</CardTitle>
														</a>
														<CardFooter>
															<div className='price-container'>
																<span className='price-old'>€ 1179</span>
																<span className='price-new ml-2'>€ 999</span>
															</div>
															<Button
																className='btn-icon btn-round pull-right'
																color='neutral'
																id='tooltip744986655'>
																<i className='tim-icons icon-heart-2' />
															</Button>
															<UncontrolledTooltip
																delay={0}
																placement='left'
																target='tooltip744986655'>
																Add to wishlist
															</UncontrolledTooltip>
														</CardFooter>
													</CardBody>
												</Card>
												{/* end card */}
											</Col>
											<Col lg='3' md='6'>
												<Card className='card-product card-plain'>
													<div className='card-image'>
														<a href='#pablo' onClick={e => e.preventDefault()}>
															<img
																alt='...'
																src={require('assets/img/shirt.png')}
															/>
														</a>
													</div>
													<CardBody>
														<a href='#pablo' onClick={e => e.preventDefault()}>
															<CardTitle tag='h4'>Wooyoungmi</CardTitle>
														</a>
														<CardFooter>
															<div className='price-container'>
																<span className='price'>€ 555</span>
															</div>
															<Button
																className='btn-icon btn-round pull-right'
																color='neutral'
																id='tooltip461484140'>
																<i className='tim-icons icon-heart-2' />
															</Button>
															<UncontrolledTooltip
																delay={0}
																placement='left'
																target='tooltip461484140'>
																Add to wishlist
															</UncontrolledTooltip>
														</CardFooter>
													</CardBody>
												</Card>
												{/* end card */}
											</Col>
											<Col lg='3' md='6'>
												<Card className='card-product card-plain'>
													<div className='card-image'>
														<a href='#pablo' onClick={e => e.preventDefault()}>
															<img
																alt='...'
																src={require('assets/img/jeans.png')}
															/>
														</a>
													</div>
													<CardBody>
														<a href='#pablo' onClick={e => e.preventDefault()}>
															<CardTitle tag='h4'>Thom Sweeney</CardTitle>
														</a>
														<CardFooter>
															<div className='price-container'>
																<span className='price'>€ 680</span>
															</div>
															<Button
																className='btn-icon btn-round pull-right'
																color='neutral'
																id='tooltip864054081'>
																<i className='tim-icons icon-heart-2' />
															</Button>
															<UncontrolledTooltip
																delay={0}
																placement='left'
																target='tooltip864054081'>
																Add to wishlist
															</UncontrolledTooltip>
														</CardFooter>
													</CardBody>
												</Card>
												{/* end card */}
											</Col>
											<Col className='ml-auto mr-auto mt-5 text-center' md='3'>
												<Button
													className='btn-round btn-simple'
													color='primary'
													id='tooltip511288396'>
													Load more...
												</Button>
												<UncontrolledTooltip
													delay={0}
													target='tooltip511288396'
												/>
											</Col>
										</Row>
									</Col>
								</Row>
							</Container>
						</div>
						{/* section */}
						<Container className='text-center'>
							<Row>
								<Col className='mx-auto text-center mt-5' md='10'>
									<h3 className='section-title'>
										Simplicity is the ultimate sophistication
									</h3>
								</Col>
							</Row>
							<Row>
								<Col md='6'>
									<Card
										className='card-blog card-background'
										data-animation={true}>
										<div
											className='full-background'
											style={{
												backgroundImage:
													'url(' +
													require('assets/img/leather-shoes.jpeg') +
													')',
											}}
										/>
										<CardBody>
											<div className='content-bottom'>
												<h6 className='card-category'>Footwear</h6>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<CardTitle tag='h3'>Leather Shoes</CardTitle>
												</a>
											</div>
										</CardBody>
									</Card>
								</Col>
								<Col md='6'>
									<Card
										className='card-blog card-background'
										data-animation={true}>
										<div
											className='full-background'
											style={{
												backgroundImage:
													'url(' + require('assets/img/tshirts.jpeg') + ')',
											}}
										/>
										<CardBody>
											<div className='content-bottom'>
												<h6 className='card-category'>T-shirts</h6>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<CardTitle tag='h3'>100% Silk T-shirts</CardTitle>
												</a>
											</div>
										</CardBody>
									</Card>
								</Col>
							</Row>
							<Row>
								<Col md='4'>
									<Card
										className='card-blog card-background'
										data-animation={true}>
										<div
											className='full-background'
											style={{
												backgroundImage:
													'url(' + require('assets/img/accesories.jpeg') + ')',
											}}
										/>
										<CardBody>
											<div className='content-bottom'>
												<h6 className='card-category'>Accessories</h6>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<CardTitle tag='h3'>Bracelets and Watches</CardTitle>
												</a>
											</div>
										</CardBody>
									</Card>
								</Col>
								<Col md='8'>
									<Card
										className='card-blog card-background'
										data-animation={true}>
										<div
											className='full-background'
											style={{
												backgroundImage:
													'url(' + require('assets/img/winter.jpeg') + ')',
											}}
										/>
										<CardBody>
											<div className='content-bottom'>
												<h6 className='card-category'>Winter</h6>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<CardTitle tag='h3'>Latest FW Collection</CardTitle>
												</a>
											</div>
										</CardBody>
									</Card>
								</Col>
							</Row>
						</Container>
						<div className='section'>
							<Container>
								<Row>
									<Col className='mx-auto text-center' md='10'>
										<h3 className='desc my-5'>The latest accessories</h3>
									</Col>
								</Row>
								<Row>
									<Col md='12'>
										<Row>
											<Col lg='3' md='6'>
												<Card className='card-product'>
													<div className='card-image'>
														<a href='#pablo' onClick={e => e.preventDefault()}>
															<img
																alt='...'
																src={require('assets/img/hat.png')}
															/>
														</a>
													</div>
													<CardBody>
														<a href='#pablo' onClick={e => e.preventDefault()}>
															<CardTitle tag='h4'>Winter Hat</CardTitle>
														</a>
														<CardFooter>
															<div className='price-container'>
																<span className='price'>€ 99</span>
															</div>
														</CardFooter>
													</CardBody>
												</Card>
												{/* end card */}
											</Col>
											<Col lg='3' md='6'>
												<Card className='card-product'>
													<div className='card-image'>
														<a href='#pablo' onClick={e => e.preventDefault()}>
															<img
																alt='...'
																src={require('assets/img/shorts.png')}
															/>
														</a>
													</div>
													<CardBody>
														<a href='#pablo' onClick={e => e.preventDefault()}>
															<CardTitle tag='h4'>Gucci Shorts</CardTitle>
														</a>
														<CardFooter>
															<div className='price-container'>
																<span className='price-old'>€ 879</span>
																<span className='price-new ml-2'>€ 499</span>
															</div>
														</CardFooter>
													</CardBody>
												</Card>
												{/* end card */}
											</Col>
											<Col lg='3' md='6'>
												<Card className='card-product'>
													<div className='card-image'>
														<a href='#pablo' onClick={e => e.preventDefault()}>
															<img
																alt='...'
																src={require('assets/img/bracelet.png')}
															/>
														</a>
													</div>
													<CardBody>
														<a href='#pablo' onClick={e => e.preventDefault()}>
															<CardTitle tag='h4'>Diamond Bracelet</CardTitle>
														</a>
														<CardFooter>
															<div className='price-container'>
																<span className='price'>€ 19,999</span>
															</div>
														</CardFooter>
													</CardBody>
												</Card>
												{/* end card */}
											</Col>
											<Col lg='3' md='6'>
												<Card className='card-product'>
													<div className='card-image'>
														<a href='#pablo' onClick={e => e.preventDefault()}>
															<img
																alt='...'
																src={require('assets/img/bullet.png')}
															/>
														</a>
													</div>
													<CardBody>
														<a href='#pablo' onClick={e => e.preventDefault()}>
															<CardTitle tag='h4'>Necklace</CardTitle>
														</a>
														<CardFooter>
															<div className='price-container'>
																<span className='price'>€ 229</span>
															</div>
														</CardFooter>
													</CardBody>
												</Card>
												{/* end card */}
											</Col>
											<Col className='ml-auto mr-auto mt-5 text-center' md='3'>
												<Button
													className='btn-round btn-simple'
													color='primary'
													id='tooltip301174946'>
													Load more...
												</Button>
												<UncontrolledTooltip
													delay={0}
													target='tooltip301174946'
												/>
											</Col>
										</Row>
									</Col>
								</Row>
							</Container>
						</div>
						{/* section */}
						<div className='testimonials-1 section-image'>
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
					</div>
					{/* end-main-raised */}
					<DemoFooter />
				</div>
			</>
		)
	}
}

export default Ecommerce
