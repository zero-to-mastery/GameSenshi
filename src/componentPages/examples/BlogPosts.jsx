import React from 'react'
// nodejs library that concatenates classes
import classnames from 'classnames'
// reactstrap components
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardTitle,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Table,
	Container,
	Row,
	Col,
} from 'reactstrap'

// core components
import ColorNavbar from 'componentsAtom/Navbars/ColorNavbar.jsx'
import DemoFooter from 'componentsAtom/Footers/DemoFooter.jsx'

class BlogPosts extends React.Component {
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
		}
	}
	componentDidMount() {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		this.refs.wrapper.scrollTop = 0
		document.body.classList.add('blog-posts')
		if (window.innerWidth >= 768) {
			var windowScrollTop = window.pageYOffset / 3
			this.setState({
				transform: 'translate3d(0,' + windowScrollTop + 'px,0)',
			})
			window.addEventListener('scroll', this.resetTransform)
		}
	}
	componentWillUnmount() {
		document.body.classList.remove('blog-posts')
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
	render() {
		return (
			<>
				<ColorNavbar />
				<div className='wrapper' ref='wrapper'>
					<div className='page-header page-header-small header-filter'>
						<div
							className='page-header-image'
							style={{
								backgroundImage:
									'url(' + require('assets/img/ruvim-noga.jpg') + ')',
								transform: this.state.transform,
							}}
						/>
						<div className='content-center'>
							<Row>
								<Col className='ml-auto mr-auto text-center' md='6'>
									<h1 className='title'>
										A Place for Entrepreneurs to Share and Discover New Stories
									</h1>
									<Button
										className='btn-round btn-icon'
										color='primary'
										href='#pablo'
										onClick={e => e.preventDefault()}>
										<i className='fab fa-twitter' />
									</Button>
									<Button
										className='btn-round btn-icon ml-1'
										color='primary'
										href='#pablo'
										onClick={e => e.preventDefault()}>
										<i className='fab fa-instagram' />
									</Button>
								</Col>
							</Row>
						</div>
					</div>
					<div className='main main-raised'>
						<Container>
							<Row>
								<Col lg='4' md='6'>
									<Card className='card-blog card-plain'>
										<div className='card-image'>
											<a href='#pablo' onClick={e => e.preventDefault()}>
												<img
													alt='...'
													className='img rounded'
													src={require('assets/img/steven-roe.jpg')}
												/>
											</a>
										</div>
										<CardBody>
											<h6 className='category text-primary'>Features</h6>
											<CardTitle tag='h4'>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													That’s One Way To Ditch Your Passenger
												</a>
											</CardTitle>
											<p className='card-description'>
												As near as we can tell, this guy must have thought he
												was going over backwards and tapped the rear...
											</p>
											<CardFooter>
												<div className='author'>
													<img
														alt='...'
														className='avatar img-raised'
														src={require('assets/img/p10.jpg')}
													/>
													<span className='ml-1'>Mike John</span>
												</div>
												<div className='stats stats-right'>
													<i className='tim-icons icon-watch-time' /> 5 min read
												</div>
											</CardFooter>
										</CardBody>
									</Card>
								</Col>
								<Col lg='4' md='6'>
									<Card className='card-blog card-plain'>
										<div className='card-image'>
											<a href='#pablo' onClick={e => e.preventDefault()}>
												<img
													alt='...'
													className='img rounded'
													src={require('assets/img/noah-wetering.jpg')}
												/>
											</a>
										</div>
										<CardBody>
											<h6 className='category text-info'>Animals</h6>
											<CardTitle tag='h4'>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													Shark Week: How to Watch It Like a Scientist
												</a>
											</CardTitle>
											<p className='card-description'>
												Just when you thought it was safe to turn on your
												television, the Discovery Channel's "Shark Week"...
											</p>
											<CardFooter>
												<div className='author'>
													<img
														alt='...'
														className='avatar img-raised'
														src={require('assets/img/johana.jpg')}
													/>
													<span className='ml-1'>Johanna Zmud</span>
												</div>
												<div className='stats stats-right'>
													<i className='tim-icons icon-watch-time' /> 5 min read
												</div>
											</CardFooter>
										</CardBody>
									</Card>
								</Col>
								<Col lg='4' md='6'>
									<Card className='card-blog card-plain'>
										<div className='card-image'>
											<a href='#pablo' onClick={e => e.preventDefault()}>
												<img
													alt='...'
													className='img rounded'
													src={require('assets/img/mark-harrison.jpg')}
												/>
											</a>
										</div>
										<CardBody>
											<h6 className='category text-warning'>Cars</h6>
											<CardTitle tag='h4'>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													Who's Afraid of the Self-Driving Car?
												</a>
											</CardTitle>
											<p className='card-description'>
												It's been 60 years since the cover of Popular Mechanics
												magazine gave us the promise of flying cars...
											</p>
											<CardFooter>
												<div className='author'>
													<img
														alt='...'
														className='avatar img-raised'
														src={require('assets/img/christian.jpg')}
													/>
													<span className='ml-1'>Marc Oliver</span>
												</div>
												<div className='stats stats-right'>
													<i className='tim-icons icon-heart-2' /> 2.4K
												</div>
											</CardFooter>
										</CardBody>
									</Card>
								</Col>
								<Col lg='4' md='6'>
									<Card className='card-plain card-blog'>
										<div className='card-image'>
											<a href='#pablo' onClick={e => e.preventDefault()}>
												<img
													alt='...'
													className='img rounded img-raised'
													src={require('assets/img/pawel-nolbert.jpg')}
												/>
											</a>
										</div>
										<CardBody>
											<h6 className='category text-info'>Enterprise</h6>
											<CardTitle tag='h4'>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													Autodesk looks to future of 3D printing with Project
													Escher
												</a>
											</CardTitle>
											<p className='card-description'>
												Like so many organizations these days, Autodesk is a
												company in transition. It was until recently a
												traditional boxed software company selling licenses.{' '}
												<a href='#pablo' onClick={e => e.preventDefault()}>
													Read More
												</a>
											</p>
											<div className='author'>
												<img
													alt='...'
													className='avatar img-raised'
													src={require('assets/img/olivia.jpg')}
												/>
												<span className='ml-1'>Anna Spark</span>
											</div>
										</CardBody>
									</Card>
								</Col>
								<Col lg='4' md='6'>
									<Card className='card-plain card-blog'>
										<div className='card-image'>
											<a href='#pablo' onClick={e => e.preventDefault()}>
												<img
													alt='...'
													className='img rounded img-raised'
													src={require('assets/img/serge-kutuzov.jpg')}
												/>
											</a>
										</div>
										<CardBody>
											<h6 className='category text-success'>Startups</h6>
											<CardTitle tag='h4'>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													Lyft launching cross-platform service this week
												</a>
											</CardTitle>
											<p className='card-description'>
												Like so many organizations these days, Autodesk is a
												company in transition. It was until recently a
												traditional boxed software company selling licenses.{' '}
												<a href='#pablo' onClick={e => e.preventDefault()}>
													Read More
												</a>
											</p>
											<div className='author'>
												<img
													alt='...'
													className='avatar img-raised'
													src={require('assets/img/michael.jpg')}
												/>
												<span className='ml-1'>John Black</span>
											</div>
										</CardBody>
									</Card>
								</Col>
								<Col lg='4' md='6'>
									<Card className='card-plain card-blog'>
										<div className='card-image'>
											<a href='#pablo' onClick={e => e.preventDefault()}>
												<img
													alt='...'
													className='img rounded img-raised'
													src={require('assets/img/1234.png')}
												/>
											</a>
										</div>
										<CardBody>
											<h6 className='category text-danger'>
												<i className='now-ui-icons media-2_sound-wave' />
												Enterprise
											</h6>
											<CardTitle tag='h4'>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													6 insights into the French Fashion landscape
												</a>
											</CardTitle>
											<p className='card-description'>
												Like so many organizations these days, Autodesk is a
												company in transition. It was until recently a
												traditional boxed software company selling licenses.{' '}
												<a href='#pablo' onClick={e => e.preventDefault()}>
													Read More
												</a>
											</p>
											<div className='author'>
												<img
													alt='...'
													className='avatar img-raised'
													src={require('assets/img/james.jpg')}
												/>
												<span className='ml-1'>James Newman</span>
											</div>
										</CardBody>
									</Card>
								</Col>
							</Row>
						</Container>
						<div className='section'>
							<Container>
								<Row>
									<Col className='ml-auto mr-auto' md='12'>
										<h2 className='title ml-1'>Trending now</h2>
										<br />
										<Card className='card-blog card-plain blog-horizontal'>
											<Row>
												<Col lg='4'>
													<div className='card-image'>
														<a href='#pablo' onClick={e => e.preventDefault()}>
															<img
																alt='...'
																className='img rounded'
																src={require('assets/img/trae-gould.jpg')}
															/>
														</a>
													</div>
												</Col>
												<Col lg='8'>
													<CardBody>
														<CardTitle tag='h3'>
															<a
																href='#pablo'
																onClick={e => e.preventDefault()}>
																MateLabs mixes machine learning with IFTTT
															</a>
														</CardTitle>
														<p className='card-description'>
															If you’ve ever wanted to train a machine learning
															model and integrate it with IFTTT, you now can
															with a new offering from MateLabs. MateVerse, a
															platform where novices can spin out machine...If
															you’ve ever wanted to train a machine learning
															model and integrate it with IFTTT, you now can
															with a new offering from MateLabs. MateVerse, a
															platform where novices can spin out machine...{' '}
															<a
																href='#pablo'
																onClick={e => e.preventDefault()}>
																Read More
															</a>
														</p>
														<div className='author'>
															<img
																alt='...'
																className='avatar img-raised'
																src={require('assets/img/james.jpg')}
															/>
															<div className='text'>
																<span className='name'>Tom Hanks</span>
																<div className='meta'>Drawn on 23 Jan</div>
															</div>
														</div>
													</CardBody>
												</Col>
											</Row>
										</Card>
										<Card className='card-blog card-plain blog-horizontal'>
											<Row>
												<Col lg='4'>
													<div className='card-image'>
														<a href='#pablo' onClick={e => e.preventDefault()}>
															<img
																alt='...'
																className='img rounded'
																src={require('assets/img/mark-harrison.jpg')}
															/>
														</a>
													</div>
												</Col>
												<Col lg='8'>
													<CardBody>
														<CardTitle tag='h3'>
															<a
																href='#pablo'
																onClick={e => e.preventDefault()}>
																US venture investment ticks up in Q2 2017
															</a>
														</CardTitle>
														<p className='card-description'>
															Venture investment in U.S. startups rose
															sequentially in the second quarter of 2017,
															boosted by large, late-stage financings and a few
															outsized early-stage rounds in tech and
															healthcare..enture investment in U.S. startups
															rose sequentially in the second quarter of 2017,
															boosted by large, late-stage financings and a few
															outsized early-stage rounds in tech and
															healthcare..{' '}
															<a
																href='#pablo'
																onClick={e => e.preventDefault()}>
																Read More
															</a>
														</p>
														<div className='author'>
															<img
																alt='...'
																className='avatar img-raised'
																src={require('assets/img/michael.jpg')}
															/>
															<div className='text'>
																<span className='name'>Tom Hanks</span>
																<div className='meta'>Drawn on 23 Jan</div>
															</div>
														</div>
													</CardBody>
												</Col>
											</Row>
										</Card>
									</Col>
								</Row>
							</Container>
						</div>
						<div className='section blogs-4'>
							<Container fluid>
								<h1 className='title text-center'>
									Stay tuned with our fresh stories
								</h1>
								<br />
								<Row>
									<Col lg='3'>
										<Card
											className='card-blog card-background'
											data-animation='zooming'>
											<div
												className='full-background'
												style={{
													backgroundImage:
														'url(' +
														require('assets/img/viktor-forgacs.jpg') +
														')',
												}}
											/>
											<CardBody>
												<div className='content-bottom'>
													<h6 className='card-category'>Climate Change</h6>
													<a href='#pablo' onClick={e => e.preventDefault()}>
														<CardTitle tag='h3'>Stellar Partnership</CardTitle>
													</a>
												</div>
											</CardBody>
										</Card>
									</Col>
									<Col lg='3'>
										<Card
											className='card-blog card-background'
											data-animation='zooming'>
											<div
												className='full-background'
												style={{
													backgroundImage:
														'url(' +
														require('assets/img/rezaul-karim.jpg') +
														')',
												}}
											/>
											<CardBody>
												<div className='content-bottom'>
													<h6 className='card-category'>Save the World</h6>
													<a href='#pablo' onClick={e => e.preventDefault()}>
														<CardTitle tag='h3'>Digital Currency</CardTitle>
													</a>
												</div>
											</CardBody>
										</Card>
									</Col>
									<Col lg='3'>
										<Card
											className='card-blog card-background'
											data-animation='zooming'>
											<div
												className='full-background'
												style={{
													backgroundImage:
														'url(' +
														require('assets/img/pawel-nolbert.jpg') +
														')',
												}}
											/>
											<CardBody>
												<div className='content-bottom'>
													<h6 className='card-category'>
														Applications Companies
													</h6>
													<a href='#pablo' onClick={e => e.preventDefault()}>
														<CardTitle tag='h3'>Blockchain Explained</CardTitle>
													</a>
												</div>
											</CardBody>
										</Card>
									</Col>
									<Col lg='3'>
										<Card
											className='card-blog card-background'
											data-animation='zooming'>
											<div
												className='full-background'
												style={{
													backgroundImage:
														'url(' + require('assets/img/mark-finn.jpg') + ')',
												}}
											/>
											<CardBody>
												<div className='content-bottom'>
													<h6 className='card-category'>RFID microchips</h6>
													<a href='#pablo' onClick={e => e.preventDefault()}>
														<CardTitle tag='h3'>
															A Robot is Your Co-Worker
														</CardTitle>
													</a>
												</div>
											</CardBody>
										</Card>
									</Col>
								</Row>
							</Container>
						</div>
						<div className='section team-4'>
							<Container>
								<h2 className='title text-center'>Our authors</h2>
								<br />
								<Row>
									<Col md='4'>
										<Card className='card-profile'>
											<div className='card-image'>
												<h4 className='title'>Mark Johnson</h4>
												<UncontrolledDropdown>
													<DropdownToggle
														aria-expanded={false}
														caret
														className='btn-icon'
														color='link'
														data-toggle='dropdown'
														type='button'>
														<i className='tim-icons icon-settings-gear-63' />
													</DropdownToggle>
													<DropdownMenu right x-placement='bottom-end'>
														<DropdownItem
															href='#pablo'
															onClick={e => e.preventDefault()}>
															Edit Profile
														</DropdownItem>
														<DropdownItem
															href='#pablo'
															onClick={e => e.preventDefault()}>
															Settings
														</DropdownItem>
														<DropdownItem
															href='#pablo'
															onClick={e => e.preventDefault()}>
															Log out
														</DropdownItem>
													</DropdownMenu>
												</UncontrolledDropdown>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<img
														alt='...'
														className='img img-raised rounded'
														src={require('assets/img/mike.jpeg')}
													/>
												</a>
											</div>
											<CardBody>
												<hr className='line-primary' />
												<h3 className='job-title'>UX Designer</h3>
												<Table className='tablesorter' responsive>
													<tbody>
														<tr>
															<td className='text-left'>
																<i className='tim-icons icon-atom' /> Skills
															</td>
															<td className='text-right'>UI, UX, Creativity</td>
														</tr>
														<tr>
															<td className='text-left'>
																<i className='tim-icons icon-user-run' />{' '}
																Hobbies
															</td>
															<td className='text-right'>Photography</td>
														</tr>
														<tr>
															<td className='text-left'>
																<i className='tim-icons icon-chart-bar-32' />{' '}
																Level
															</td>
															<td className='text-right'>• • •</td>
														</tr>
													</tbody>
												</Table>
											</CardBody>
										</Card>
									</Col>
									<Col md='4'>
										<Card className='card-profile'>
											<div className='card-image'>
												<h4 className='title'>Dylan Wyatt</h4>
												<UncontrolledDropdown>
													<DropdownToggle
														aria-expanded={false}
														caret
														className='btn-icon'
														color='link'
														data-toggle='dropdown'
														type='button'>
														<i className='tim-icons icon-settings-gear-63' />
													</DropdownToggle>
													<DropdownMenu right x-placement='bottom-end'>
														<DropdownItem
															href='#pablo'
															onClick={e => e.preventDefault()}>
															Edit Profile
														</DropdownItem>
														<DropdownItem
															href='#pablo'
															onClick={e => e.preventDefault()}>
															Settings
														</DropdownItem>
														<DropdownItem
															href='#pablo'
															onClick={e => e.preventDefault()}>
															Log out
														</DropdownItem>
													</DropdownMenu>
												</UncontrolledDropdown>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<img
														alt='...'
														className='img img-raised rounded'
														src={require('assets/img/christian.jpg')}
													/>
												</a>
											</div>
											<CardBody>
												<hr className='line-primary' />
												<h3 className='job-title'>Team Lead</h3>
												<Table className='tablesorter' responsive>
													<tbody>
														<tr>
															<td className='text-left'>
																<i className='tim-icons icon-atom' /> Skills
															</td>
															<td className='text-right'>Leadership</td>
														</tr>
														<tr>
															<td className='text-left'>
																<i className='tim-icons icon-user-run' />{' '}
																Hobbies
															</td>
															<td className='text-right'>Skiing, Chess</td>
														</tr>
														<tr>
															<td className='text-left'>
																<i className='tim-icons icon-chart-bar-32' />{' '}
																Level
															</td>
															<td className='text-right'>• • • • •</td>
														</tr>
													</tbody>
												</Table>
											</CardBody>
										</Card>
									</Col>
									<Col md='4'>
										<Card className='card-profile'>
											<div className='card-image'>
												<h4 className='title'>Mila Skylar</h4>
												<UncontrolledDropdown>
													<DropdownToggle
														aria-expanded={false}
														caret
														className='btn-icon'
														color='link'
														data-toggle='dropdown'
														type='button'>
														<i className='tim-icons icon-settings-gear-63' />
													</DropdownToggle>
													<DropdownMenu right x-placement='bottom-end'>
														<DropdownItem
															href='#pablo'
															onClick={e => e.preventDefault()}>
															Edit Profile
														</DropdownItem>
														<DropdownItem
															href='#pablo'
															onClick={e => e.preventDefault()}>
															Settings
														</DropdownItem>
														<DropdownItem
															href='#pablo'
															onClick={e => e.preventDefault()}>
															Log out
														</DropdownItem>
													</DropdownMenu>
												</UncontrolledDropdown>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<img
														alt='...'
														className='img img-raised rounded'
														src={require('assets/img/johana.jpg')}
													/>
												</a>
											</div>
											<CardBody>
												<hr className='line-primary' />
												<h3 className='job-title'>Content writer</h3>
												<Table className='tablesorter' responsive>
													<tbody>
														<tr>
															<td className='text-left'>
																<i className='tim-icons icon-atom' /> Skills
															</td>
															<td className='text-right'>Communication</td>
														</tr>
														<tr>
															<td className='text-left'>
																<i className='tim-icons icon-user-run' />{' '}
																Hobbies
															</td>
															<td className='text-right'>Reading, Writing</td>
														</tr>
														<tr>
															<td className='text-left'>
																<i className='tim-icons icon-chart-bar-32' />{' '}
																Level
															</td>
															<td className='text-right'>• • • •</td>
														</tr>
													</tbody>
												</Table>
											</CardBody>
										</Card>
									</Col>
								</Row>
							</Container>
						</div>
						<div className='title text-center'>
							<h3>Show us some love</h3>
						</div>
						<div className='social-line social-line-big-icons'>
							<Container>
								<Row>
									<Col md='2'>
										<Button
											className='btn-icon btn-simple btn-footer'
											color='twitter'
											href='#pablo'
											onClick={e => e.preventDefault()}>
											<i className='fab fa-twitter' />
										</Button>
									</Col>
									<Col md='2'>
										<Button
											className='btn-icon btn-simple btn-footer'
											color='facebook'
											href='#pablo'
											onClick={e => e.preventDefault()}>
											<i className='fab fa-facebook-square' />
										</Button>
									</Col>
									<Col md='2'>
										<Button
											className='btn-icon btn-simple btn-footer'
											color='google'
											href='#pablo'
											onClick={e => e.preventDefault()}>
											<i className='fab fa-google-plus' />
										</Button>
									</Col>
									<Col md='2'>
										<Button
											className='btn-icon btn-simple btn-footer'
											color='dribbble'
											href='#pablo'
											onClick={e => e.preventDefault()}>
											<i className='fab fa-dribbble' />
										</Button>
									</Col>
									<Col md='2'>
										<Button
											className='btn-icon btn-simple btn-footer'
											color='youtube'
											href='#pablo'
											onClick={e => e.preventDefault()}>
											<i className='fab fa-youtube' />
										</Button>
									</Col>
									<Col md='2'>
										<Button
											className='btn-icon btn-simple btn-instagram btn-footer'
											color='default'
											href='#pablo'
											onClick={e => e.preventDefault()}>
											<i className='fab fa-instagram' />
										</Button>
									</Col>
								</Row>
							</Container>
						</div>
						<div className='subscribe-line'>
							<Container>
								<Row>
									<Col className='ml-auto mr-auto' lg='8' xs='10'>
										<div className='text-center'>
											<h4 className='title'>Subscribe to our Newsletter</h4>
											<p className='description'>
												Join our newsletter and get news in your inbox every
												week! We hate spam too, so no worries about this.
											</p>
										</div>
										<Card className='card-raised card-form-horizontal'>
											<CardBody>
												<Form action='' method=''>
													<Row>
														<Col sm='8'>
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
																	placeholder='Your Email...'
																	type='email'
																	onFocus={e =>
																		this.setState({ emailFocus: true })
																	}
																	onBlur={e =>
																		this.setState({ emailFocus: false })
																	}
																/>
															</InputGroup>
														</Col>
														<Col sm='4'>
															<Button block color='primary' type='button'>
																Subscribe
															</Button>
														</Col>
													</Row>
												</Form>
											</CardBody>
										</Card>
									</Col>
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

export default BlogPosts
