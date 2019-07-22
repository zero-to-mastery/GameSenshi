import React from 'react'
// nodejs library that concatenates classes
import classnames from 'classnames'
// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	Label,
	FormGroup,
	Form,
	Input,
	FormText,
	NavItem,
	NavLink,
	Nav,
	Table,
	TabContent,
	TabPane,
	Container,
	Row,
	Col,
	UncontrolledTooltip,
	Carousel,
	CarouselItem,
	CarouselIndicators,
} from 'reactstrap'

// core components
import ColorNavbar from 'componentsAtom/Navbars/ColorNavbar.jsx'
import DemoFooter from 'componentsAtom/Footers/DemoFooter.jsx'

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
				<ColorNavbar />
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
								<Col lg='6' md='6'>
									<h1 className='profile-title text-left'>Mike Scheinder</h1>
									<h5 className='text-on-back'>01</h5>
									<p className='profile-description'>
										Offices parties lasting outward nothing age few resolve.
										Impression to discretion understood to we interested he
										excellence. Him remarkably use projection collecting. Going
										about eat forty world has round miles.
									</p>
									<div className='btn-wrapper profile pt-3'>
										<Button
											className='btn-icon btn-round'
											color='twitter'
											href='https://twitter.com/creativetim'
											id='tooltip337991226'
											target='_blank'>
											<i className='fab fa-twitter' />
										</Button>
										<UncontrolledTooltip delay={0} target='tooltip337991226'>
											Follow us
										</UncontrolledTooltip>
										<Button
											className='btn-icon btn-round'
											color='facebook'
											href='https://www.facebook.com/creativetim'
											id='tooltip304767046'
											target='_blank'>
											<i className='fab fa-facebook-square' />
										</Button>
										<UncontrolledTooltip delay={0} target='tooltip304767046'>
											Like us
										</UncontrolledTooltip>
										<Button
											className='btn-icon btn-round'
											color='dribbble'
											href='https://dribbble.com/creativetim'
											id='tooltip615365713'
											target='_blank'>
											<i className='fab fa-dribbble' />
										</Button>
										<UncontrolledTooltip delay={0} target='tooltip615365713'>
											Follow us
										</UncontrolledTooltip>
									</div>
								</Col>
								<Col className='ml-auto mr-auto' lg='4' md='6'>
									<Card className='card-coin card-plain'>
										<CardHeader>
											<img
												alt='...'
												className='img-center img-fluid rounded-circle'
												src={require('assets/img/mike.jpg')}
											/>
											<h4 className='title'>Transactions</h4>
										</CardHeader>
										<CardBody>
											<Nav
												className='nav-tabs-primary justify-content-center'
												tabs>
												<NavItem>
													<NavLink
														className={classnames({
															active: this.state.tabs === 1,
														})}
														onClick={e => this.toggleTabs(e, 'tabs', 1)}
														href='#pablo'>
														Wallet
													</NavLink>
												</NavItem>
												<NavItem>
													<NavLink
														className={classnames({
															active: this.state.tabs === 2,
														})}
														onClick={e => this.toggleTabs(e, 'tabs', 2)}
														href='#pablo'>
														Send
													</NavLink>
												</NavItem>
												<NavItem>
													<NavLink
														className={classnames({
															active: this.state.tabs === 3,
														})}
														onClick={e => this.toggleTabs(e, 'tabs', 3)}
														href='#pablo'>
														News
													</NavLink>
												</NavItem>
											</Nav>
											<TabContent
												className='tab-subcategories'
												activeTab={'tab' + this.state.tabs}>
												<TabPane tabId='tab1'>
													<Table className='tablesorter' responsive>
														<thead className='text-primary'>
															<tr>
																<th className='header'>COIN</th>
																<th className='header'>AMOUNT</th>
																<th className='header'>VALUE</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>BTC</td>
																<td>7.342</td>
																<td>48,870.75 USD</td>
															</tr>
															<tr>
																<td>ETH</td>
																<td>30.737</td>
																<td>64,53.30 USD</td>
															</tr>
															<tr>
																<td>XRP</td>
																<td>19.242</td>
																<td>18,354.96 USD</td>
															</tr>
														</tbody>
													</Table>
												</TabPane>
												<TabPane tabId='tab2'>
													<Row>
														<Label sm='3'>Pay to</Label>
														<Col sm='9'>
															<FormGroup>
																<Input
																	placeholder='e.g. 1Nasd92348hU984353hfid'
																	type='text'
																/>
																<FormText color='default' tag='span'>
																	Please enter a valid address.
																</FormText>
															</FormGroup>
														</Col>
													</Row>
													<Row>
														<Label sm='3'>Amount</Label>
														<Col sm='9'>
															<FormGroup>
																<Input placeholder='1.587' type='text' />
															</FormGroup>
														</Col>
													</Row>
													<Button
														className='btn-simple btn-icon btn-round float-right'
														color='primary'>
														<i className='tim-icons icon-send' />
													</Button>
												</TabPane>
												<TabPane tabId='tab3'>
													<Table className='tablesorter' responsive>
														<thead className='text-primary'>
															<tr>
																<th className='header'>Latest Crypto News</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>The Daily: Nexo to Pay on Stable...</td>
															</tr>
															<tr>
																<td>Venezuela Begins Public of Nation...</td>
															</tr>
															<tr>
																<td>PR: BitCanna – Dutch Blockchain...</td>
															</tr>
														</tbody>
													</Table>
												</TabPane>
											</TabContent>
										</CardBody>
									</Card>
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
					<DemoFooter />
				</div>
			</>
		)
	}
}

export default ProfilePage
