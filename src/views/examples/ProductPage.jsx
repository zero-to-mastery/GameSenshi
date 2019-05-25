import React from 'react'
// react plugin used to create DropdownMenu for selecting items
import Select from 'react-select'

// reactstrap components
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardLink,
	CardTitle,
	Input,
	InputGroup,
	Container,
	Row,
	Col,
	UncontrolledTooltip,
	Carousel,
	CarouselItem,
	CarouselIndicators,
} from 'reactstrap'

// core components
import ColorNavbar from 'components/Navbars/ColorNavbar.jsx'
import DemoFooter from 'components/Footers/DemoFooter.jsx'

const items = [
	{
		content: (
			<img
				alt='...'
				className='d-block'
				src={require('assets/img/shirt.png')}
			/>
		),
		altText: '',
		caption: '',
		src: '0',
	},
	{
		content: (
			<img
				alt='...'
				className='d-block'
				src={require('assets/img/shorts.png')}
			/>
		),
		altText: '',
		caption: '',
		src: '1',
	},
	{
		content: (
			<img
				alt='...'
				className='d-block'
				src={require('assets/img/tshirt.png')}
			/>
		),
		altText: '',
		caption: '',
		src: '2',
	},
]

class ProductPage extends React.Component {
	state = {
		activeIndex: 0,
		quantity: 1,
	}
	componentDidMount() {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		this.refs.wrapper.scrollTop = 0
		document.body.classList.add('product-page')
	}
	componentWillUnmount() {
		document.body.classList.remove('product-page')
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
	deleteQuantity = () => {
		this.setState({
			quantity: this.state.quantity === 0 ? 0 : this.state.quantity - 1,
		})
	}
	addQuantity = () => {
		this.setState({
			quantity: this.state.quantity === 100 ? 100 : this.state.quantity + 1,
		})
	}
	render() {
		return (
			<>
				<ColorNavbar />
				<div className='wrapper' ref='wrapper'>
					<div className='page-header page-header-small'>
						<img
							alt='...'
							className='path shape'
							src={require('assets/img/shape-s.png')}
						/>
						<Container>
							<h1 className='h1-seo'>Our products</h1>
							<h3>This is the best way to find your favorite stuff</h3>
						</Container>
					</div>
					<div className='section'>
						<Container>
							<Row>
								<Col lg='6' md='12'>
									<Carousel
										activeIndex={this.state.activeIndex}
										next={this.next}
										previous={this.previous}>
										<CarouselIndicators
											className='mt-5'
											items={items}
											activeIndex={this.state.activeIndex}
											onClickHandler={this.goToIndex}
										/>
										{items.map((item, key) => {
											return (
												<CarouselItem
													onExiting={this.onExiting}
													onExited={this.onExited}
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
												this.previous()
											}}
											role='button'>
											<Button
												className='btn-icon btn-round'
												color='warning'
												name='button'
												size='sm'
												type='button'>
												<i className='tim-icons icon-minimal-left' />
											</Button>
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
											<Button
												className='btn-icon btn-round'
												color='warning'
												name='button'
												size='sm'
												type='button'>
												<i className='tim-icons icon-minimal-right' />
											</Button>
										</a>
									</Carousel>
								</Col>
								<Col className='mx-auto' lg='6' md='12'>
									<h2 className='title'>Givenchy</h2>
									<div className='stats stats-right'>
										<div className='stars text-warning'>
											<i className='fas fa-star' />
											<i className='fas fa-star ml-1' />
											<i className='fas fa-star ml-1' />
											<i className='fas fa-star ml-1' />
											<i className='far fa-star ml-1' />
											<p className='d-inline ml-1'>(76 customer reviews)</p>
										</div>
									</div>
									<br />
									<h2 className='main-price'>$3,390</h2>
									<h5 className='category'>Description</h5>
									<p className='description'>
										Eres' daring 'Grigri Fortune' swimsuit has the fit and
										coverage of a bikini in a one-piece silhouette. This fuchsia
										style is crafted from the label's sculpting peau douce
										fabric and has flattering cutouts through the torso and
										back. Wear yours with mirrored sunglasses on vacation.
									</p>
									<br />
									<Row className='pick-size'>
										<Col lg='4' md='4'>
											<label>Quantity</label>
											<InputGroup>
												<div className='input-group-btn'>
													<Button
														className='btn-round btn-simple'
														color='warning'
														onClick={this.deleteQuantity}>
														<i className='tim-icons icon-simple-delete' />
													</Button>
												</div>
												<Input
													className='input-number'
													value={this.state.quantity}
													id='myNumber'
													type='text'
													onChange={e => {
														this.setState({
															quantity: parseInt(e.target.value),
														})
													}}
												/>
												<div className='input-group-btn'>
													<Button
														className='btn-round btn-simple'
														color='warning'
														onClick={this.addQuantity}>
														<i className='tim-icons icon-simple-add' />
													</Button>
												</div>
											</InputGroup>
										</Col>
										<Col lg='4' md='4' sm='6'>
											<label>Select color</label>
											<Select
												className='react-select react-select-warning'
												classNamePrefix='react-select'
												value={this.state.color}
												placeholder=''
												onChange={value => this.setState({ color: value })}
												options={[
													{
														value: '',
														label: 'Choose Color',
														isDisabled: true,
													},
													{ value: '1', label: 'Black' },
													{ value: '2', label: 'Gray' },
													{ value: '3', label: 'White' },
												]}
											/>
										</Col>
										<Col lg='4' md='4' sm='6'>
											<label>Select size</label>
											<Select
												className='react-select react-select-warning'
												classNamePrefix='react-select'
												value={this.state.size}
												placeholder=''
												onChange={value => this.setState({ size: value })}
												options={[
													{
														value: '',
														label: 'Choose size ',
														isDisabled: true,
													},
													{ value: '0', label: 'Extra Small ' },
													{ value: '1', label: 'Small ' },
													{ value: '2', label: 'Medium' },
													{ value: '3', label: 'Large' },
													{ value: '4', label: 'Extra Large' },
												]}
											/>
										</Col>
									</Row>
									<br />
									<Row className='justify-content-start'>
										<Button className='ml-3' color='warning'>
											Add to Cart  <i className='tim-icons icon-cart' />
										</Button>
									</Row>
								</Col>
							</Row>
						</Container>
					</div>
					<div className='section'>
						<div className='testimonials-1 section-image'>
							<Container>
								<Row>
									<Col className='ml-auto mr-auto text-center' md='6'>
										<h2 className='title'>Not convinced yet?</h2>
										<h4 className='description'>
											You need more information? Check what other persons are
											saying about our product. They are very happy with their
											purchase.
										</h4>
									</Col>
								</Row>
								<Row className='mt-5'>
									<Col md='4'>
										<Card className='card-testimonial'>
											<div className='card-avatar'>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<img
														alt='...'
														className='img img-raised'
														src={require('assets/img/michael.jpg')}
													/>
												</a>
											</div>
											<CardBody>
												<p className='card-description'>
													The networking at Web Summit is like no other European
													tech conference.
												</p>
											</CardBody>
											<div className='icon icon-primary'>
												<i className='fa fa-quote-right' />
											</div>
											<CardFooter>
												<CardTitle tag='h4'>Michael Elijah</CardTitle>
												<p className='category'>@michaelelijah</p>
											</CardFooter>
										</Card>
									</Col>
									<Col md='4'>
										<Card className='card-testimonial'>
											<div className='card-avatar'>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<img
														alt='...'
														className='img img-raised'
														src={require('assets/img/olivia.jpg')}
													/>
												</a>
											</div>
											<CardBody>
												<p className='card-description'>
													The connections you make at Web Summit are
													unparalleled, we met users all over the world.
												</p>
											</CardBody>
											<div className='icon icon-primary'>
												<i className='fa fa-quote-right' />
											</div>
											<CardFooter>
												<CardTitle tag='h4'>Olivia Harper</CardTitle>
												<p className='category'>@oliviaharper</p>
											</CardFooter>
										</Card>
									</Col>
									<Col md='4'>
										<Card className='card-testimonial'>
											<div className='card-avatar'>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<img
														alt='...'
														className='img img-raised'
														src={require('assets/img/james.jpg')}
													/>
												</a>
											</div>
											<CardBody>
												<p className='card-description'>
													Web Summit will increase your appetite, your
													inspiration, and your network.
												</p>
											</CardBody>
											<div className='icon icon-primary'>
												<i className='fa fa-quote-right' />
											</div>
											<CardFooter>
												<CardTitle tag='h4'>James Logan</CardTitle>
												<p className='category'>@jameslogan</p>
											</CardFooter>
										</Card>
									</Col>
								</Row>
							</Container>
						</div>
					</div>
					<div className='section related-products'>
						<Container>
							<Col md='8'>
								<h2 className='title'>You may also like</h2>
							</Col>
							<Row>
								<Col lg='3' md='6'>
									<Card className='card-product'>
										<div className='card-image'>
											<a href='#pablo' onClick={e => e.preventDefault()}>
												<img
													alt='...'
													className='img rounded'
													src={require('assets/img/bag.png')}
												/>
											</a>
										</div>
										<CardBody>
											<h6 className='category text-warning'>Trending</h6>
											<CardTitle tag='h4'>
												<CardLink
													className='text-white'
													href='#pablo'
													onClick={e => e.preventDefault()}>
													Dolce &amp; Gabbana
												</CardLink>
											</CardTitle>
											<div className='card-description'>
												Dolce &amp; Gabbana's 'Greta' tote has been crafted in
												Italy from hard-wearing red textured-leather.
											</div>
											<CardFooter>
												<div className='price-container'>
													<span className='price'>€1,459</span>
												</div>
												<Button
													className='btn-simple btn-icon btn-round pull-right'
													color='warning'
													id='tooltip320714545'>
													<i className='tim-icons icon-heart-2' />
												</Button>
												<UncontrolledTooltip
													delay={0}
													placement='left'
													target='tooltip320714545'>
													Add to wishlist
												</UncontrolledTooltip>
											</CardFooter>
										</CardBody>
									</Card>
								</Col>
								<Col lg='3' md='6'>
									<Card className='card-product'>
										<div className='card-image'>
											<a href='#pablo' onClick={e => e.preventDefault()}>
												<img
													alt='...'
													className='img rounded'
													src={require('assets/img/tshirt.png')}
												/>
											</a>
										</div>
										<CardBody>
											<h6 className='category text-warning'>Popular</h6>
											<CardTitle tag='h4'>
												<CardLink
													className='text-white'
													href='#pablo'
													onClick={e => e.preventDefault()}>
													Balmain
												</CardLink>
											</CardTitle>
											<div className='card-description'>
												Balmain's mid-rise skinny jeans are cut with stretch to
												ensure they retain their second-skin fit but move
												comfortably.
											</div>
											<CardFooter>
												<div className='price-container'>
													<span className='price'>€459</span>
												</div>
												<Button
													className='btn-simple btn-icon btn-round pull-right'
													color='warning'
													id='tooltip449471879'>
													<i className='tim-icons icon-heart-2' />
												</Button>
												<UncontrolledTooltip
													delay={0}
													placement='left'
													target='tooltip449471879'>
													Add to wishlist
												</UncontrolledTooltip>
											</CardFooter>
										</CardBody>
									</Card>
								</Col>
								<Col lg='3' md='6'>
									<Card className='card-product'>
										<div className='card-image'>
											<a href='#pablo' onClick={e => e.preventDefault()}>
												<img
													alt='...'
													className='img rounded'
													src={require('assets/img/shirt.png')}
												/>
											</a>
										</div>
										<CardBody>
											<h6 className='category text-warning'>Popular</h6>
											<CardTitle tag='h4'>
												<CardLink
													className='text-white'
													href='#pablo'
													onClick={e => e.preventDefault()}>
													Balenciaga
												</CardLink>
											</CardTitle>
											<div className='card-description'>
												Balenciaga's black textured-leather wallet is finished
												with the label's iconic 'Giant' studs. This is where you
												can...
											</div>
											<CardFooter>
												<div className='price-container'>
													<span className='price'>€559</span>
												</div>
												<Button
													className='btn-simple btn-icon btn-round pull-right'
													color='warning'
													id='tooltip300524105'>
													<i className='tim-icons icon-heart-2' />
												</Button>
												<UncontrolledTooltip
													delay={0}
													placement='left'
													target='tooltip300524105'>
													Add to wishlist
												</UncontrolledTooltip>
											</CardFooter>
										</CardBody>
									</Card>
								</Col>
								<Col lg='3' md='6'>
									<Card className='card-product'>
										<div className='card-image'>
											<a href='#pablo' onClick={e => e.preventDefault()}>
												<img
													alt='...'
													className='img rounded'
													src={require('assets/img/jeans.png')}
												/>
											</a>
										</div>
										<CardBody>
											<h6 className='category text-warning'>Trending</h6>
											<CardTitle tag='h4'>
												<CardLink
													className='text-white'
													href='#pablo'
													onClick={e => e.preventDefault()}>
													Dolce &amp; Gabbana
												</CardLink>
											</CardTitle>
											<div className='card-description'>
												Dolce &amp; Gabbana's 'Greta' tote has been crafted in
												Italy from hard-wearing red textured-leather.
											</div>
											<CardFooter>
												<div className='price-container'>
													<span className='price'>€ 1,359</span>
												</div>
												<Button
													className='btn-simple btn-icon btn-round pull-right'
													color='warning'
													id='tooltip755498009'>
													<i className='tim-icons icon-heart-2' />
												</Button>
												<UncontrolledTooltip
													delay={0}
													placement='left'
													target='tooltip755498009'>
													Add to wishlist
												</UncontrolledTooltip>
											</CardFooter>
										</CardBody>
									</Card>
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

export default ProductPage
