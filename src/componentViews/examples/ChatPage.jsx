import React from 'react'
// nodejs library that concatenates classes
import classnames from 'classnames'
// reactstrap components
import {
	Badge,
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	DropdownMenu,
	DropdownItem,
	DropdownToggle,
	UncontrolledDropdown,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	ListGroupItem,
	ListGroup,
	Media,
	Container,
	Row,
	Col,
	UncontrolledTooltip,
} from 'reactstrap'

// core components
import ColorNavbar from 'componentAtoms/Navbars/ColorNavbar.jsx'
import DemoFooter from 'componentAtoms/Footers/DemoFooter.jsx'

class ChatPage extends React.Component {
	state = {}
	componentDidMount() {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		this.refs.wrapper.scrollTop = 0
		document.body.classList.add('chat-page')
	}
	componentWillUnmount() {
		document.body.classList.remove('chat-page')
	}
	render() {
		return (
			<>
				<ColorNavbar />
				<div className='wrapper' ref='wrapper'>
					<div className='section mt-5'>
						<Container>
							<h2 className='title'>Chat</h2>
							<Row className='flex-row'>
								<Col lg='4'>
									<Card className='card-plain'>
										<CardHeader className='mb-3'>
											<InputGroup
												className={classnames('form-control-lg', {
													'input-group-focus': this.state.searchContact,
												})}>
												<Input
													placeholder='Search contact'
													type='text'
													onFocus={e => this.setState({ searchContact: true })}
													onBlur={e => this.setState({ searchContact: false })}
												/>
												<InputGroupAddon addonType='append'>
													<InputGroupText>
														<i className='tim-icons icon-zoom-split' />
													</InputGroupText>
												</InputGroupAddon>
											</InputGroup>
										</CardHeader>
										<ListGroup className='list-group-chat' flush>
											<ListGroupItem
												className='active'
												href='#pablo'
												onClick={e => e.preventDefault()}
												tag='a'>
												<Media>
													<img
														alt='...'
														className='avatar'
														src={require('assets/img/p10.jpg')}
													/>
													<Media body className='ml-2'>
														<div className='justify-content-between align-items-center'>
															<h6 className='mb-0'>
																Charlie Watson <Badge color='success' />
															</h6>
															<div>
																<small>Typing...</small>
															</div>
														</div>
													</Media>
												</Media>
											</ListGroupItem>
											<ListGroupItem
												href='#pablo'
												onClick={e => e.preventDefault()}
												tag='a'>
												<Media>
													<img
														alt='...'
														className='avatar'
														src={require('assets/img/johana.jpg')}
													/>
													<Media body className='ml-2'>
														<div className='justify-content-between align-items-center'>
															<h6 className='mb-0'>Jane Doe</h6>
															<div>
																<small className='text-muted'>1 hour ago</small>
															</div>
														</div>
														<Col
															className='text-muted text-small p-0 text-truncate d-block'
															xs='11'>
															Computer users and programmers
														</Col>
													</Media>
												</Media>
											</ListGroupItem>
											<ListGroupItem
												href='#pablo'
												onClick={e => e.preventDefault()}
												tag='a'>
												<Media>
													<img
														alt='...'
														className='avatar'
														src={require('assets/img/ryan.png')}
													/>
													<Media body className='ml-2'>
														<div className='justify-content-between align-items-center'>
															<h6 className='mb-0'>Mila Skylar</h6>
															<div>
																<small className='text-muted'>24 min ago</small>
															</div>
														</div>
														<Col
															className='text-muted text-small p-0 text-truncate d-block'
															xs='11'>
															You can subscribe to receive weekly...
														</Col>
													</Media>
												</Media>
											</ListGroupItem>
											<ListGroupItem
												href='#pablo'
												onClick={e => e.preventDefault()}
												tag='a'>
												<Media>
													<img
														alt='...'
														className='avatar'
														src={require('assets/img/kareya-saleh.jpg')}
													/>
													<Media body className='ml-2'>
														<div className='justify-content-between align-items-center'>
															<h6 className='mb-0'>Sofia Scarlett</h6>
															<div>
																<small className='text-muted'>
																	7 hours ago
																</small>
															</div>
														</div>
														<Col
															className='text-muted text-small p-0 text-truncate d-block'
															xs='11'>
															It’s an effective resource regardless..
														</Col>
													</Media>
												</Media>
											</ListGroupItem>
											<ListGroupItem
												href='#pablo'
												onClick={e => e.preventDefault()}
												tag='a'>
												<Media>
													<img
														alt='...'
														className='avatar'
														src={require('assets/img/christian.jpg')}
													/>
													<Media body className='ml-2'>
														<div className='justify-content-between align-items-center'>
															<h6 className='mb-0'>Tom Klein</h6>
															<div>
																<small className='text-muted'>1 day ago</small>
															</div>
														</div>
														<Col
															className='text-muted text-small p-0 text-truncate d-block'
															xs='11'>
															Be sure to check it out if your dev pro...
														</Col>
													</Media>
												</Media>
											</ListGroupItem>
										</ListGroup>
									</Card>
								</Col>
								<Col lg='8'>
									<Card className='card-plain'>
										<CardHeader className='d-inline-block'>
											<Row>
												<Col md='10'>
													<Media className='align-items-center'>
														<img
															alt='...'
															className='avatar'
															src={require('assets/img/p10.jpg')}
														/>
														<Media body>
															<h6 className='mb-0 d-block'>Charlie Watson</h6>
															<span className='text-muted text-small'>
																last seen today at 1:53am
															</span>
														</Media>
													</Media>
												</Col>
												<Col md='1'>
													<Button
														className='btn-link'
														color='info'
														id='tooltip487083381'
														type='button'>
														<i className='tim-icons icon-video-66' />
													</Button>
													<UncontrolledTooltip
														delay={0}
														placement='top'
														target='tooltip487083381'>
														Video call
													</UncontrolledTooltip>
												</Col>
												<Col md='1'>
													<UncontrolledDropdown>
														<DropdownToggle
															className='btn-link'
															color='primary'>
															<i className='tim-icons icon-settings' />
														</DropdownToggle>
														<DropdownMenu right>
															<DropdownItem
																href='#pablo'
																onClick={e => e.preventDefault()}>
																<i className='tim-icons icon-single-02' />
																Profile
															</DropdownItem>
															<DropdownItem
																href='#pablo'
																onClick={e => e.preventDefault()}>
																<i className='tim-icons icon-volume-98' />
																Mute conversation
															</DropdownItem>
															<DropdownItem
																href='#pablo'
																onClick={e => e.preventDefault()}>
																<i className='tim-icons icon-lock-circle' />
																Block
															</DropdownItem>
															<DropdownItem
																href='#pablo'
																onClick={e => e.preventDefault()}>
																<i className='tim-icons icon-chat-33' />
																Clear chat
															</DropdownItem>
															<DropdownItem divider />
															<DropdownItem
																href='#pablo'
																onClick={e => e.preventDefault()}>
																<i className='tim-icons icon-simple-remove' />
																Delete chat
															</DropdownItem>
														</DropdownMenu>
													</UncontrolledDropdown>
												</Col>
											</Row>
										</CardHeader>
										<CardBody>
											<Row className='justify-content-start'>
												<Col xs={{ size: 'auto' }}>
													<Card>
														<CardBody className='p-2'>
															<p className='mb-1'>
																It contains a lot of good lessons about
																effective practices
															</p>
															<div>
																<small className='opacity-60'>
																	<i className='far fa-clock' /> 3:14am
																</small>
															</div>
														</CardBody>
													</Card>
												</Col>
											</Row>
											<Row className='justify-content-end text-right'>
												<Col xs={{ size: 'auto' }}>
													<Card className='bg-primary text-white'>
														<CardBody className='p-2'>
															<p className='mb-1'>
																Can it generate daily design links that include
																essays and data visualizations ? <br />
															</p>
															<div>
																<small className='opacity-60'>3:30am</small>{' '}
																<i className='tim-icons icon-check-2' />
															</div>
														</CardBody>
													</Card>
												</Col>
											</Row>
											<Row className='mt-4'>
												<Col className='text-center' md='12'>
													<Badge className='text-white' color=''>
														Wed, 3:27pm
													</Badge>
												</Col>
											</Row>
											<Row className='justify-content-start'>
												<Col xs={{ size: 'auto' }}>
													<Card>
														<CardBody className='p-2'>
															<p className='mb-1'>
																Yeah! Responsive Design is geared towards those
																trying to build web apps
															</p>
															<div>
																<small className='opacity-60'>
																	<i className='far fa-clock' /> 4:31pm
																</small>
															</div>
														</CardBody>
													</Card>
												</Col>
											</Row>
											<Row className='justify-content-end text-right'>
												<Col xs={{ size: 'auto' }}>
													<Card className='bg-primary text-white'>
														<CardBody className='p-2'>
															<p className='mb-1'>Excellent, I want it now !</p>
															<div>
																<small className='opacity-60'>4:40pm</small>{' '}
																<i className='tim-icons icon-check-2' />
															</div>
														</CardBody>
													</Card>
												</Col>
											</Row>
											<Row className='justify-content-start'>
												<Col xs={{ size: 'auto' }}>
													<Card>
														<CardBody className='p-2'>
															<p className='mb-1'>
																You can easily get it; The content here is all
																free
															</p>
															<div>
																<small className='opacity-60'>
																	<i className='far fa-clock' /> 4:42pm
																</small>
															</div>
														</CardBody>
													</Card>
												</Col>
											</Row>
											<Row className='justify-content-end text-right'>
												<Col xs={{ size: 'auto' }}>
													<Card className='bg-primary text-white'>
														<CardBody className='p-2'>
															<p className='mb-1'>
																Awesome, blog is important source material for
																anyone who creates apps? <br /> beacuse these
																blogs offer a lot of information about website
																development.
															</p>
															<div>
																<small className='opacity-60'>4:46pm</small>{' '}
																<i className='tim-icons icon-check-2' />
															</div>
														</CardBody>
													</Card>
												</Col>
											</Row>
											<Row className='justify-content-start'>
												<Col xs='5'>
													<Card>
														<CardBody className='p-2'>
															<Col className='p-0' xs='12'>
																<img
																	alt='...'
																	className='img-fluid rounded mb-1'
																	src={require('assets/img/luke.jpg')}
																/>
															</Col>
															<div>
																<small className='opacity-60'>
																	<i className='far fa-clock' /> 4:47pm
																</small>
															</div>
														</CardBody>
													</Card>
												</Col>
											</Row>
											<Row className='justify-content-end text-right'>
												<Col xs={{ size: 'auto' }}>
													<Card className='bg-primary text-white'>
														<CardBody className='p-2'>
															<p className='mb-0'>
																At the end of the day … the native dev apps is
																where users are
															</p>
															<div>
																<small className='opacity-60'>4:47pm</small>{' '}
																<i className='tim-icons icon-check-2' />
															</div>
														</CardBody>
													</Card>
												</Col>
											</Row>
											<Row className='justify-content-start'>
												<Col xs={{ size: 'auto' }}>
													<Card>
														<CardBody className='p-2'>
															<div className='spinner'>
																<div className='bounce1' />
																<div className='bounce2' />
																<div className='bounce3' />
															</div>
															<p className='d-inline-block mr-2'>Typing...</p>
														</CardBody>
													</Card>
												</Col>
											</Row>
										</CardBody>
										<CardFooter className='d-block'>
											<Form className='align-items-center'>
												<InputGroup
													className={classnames('d-flex', 'form-control-lg', {
														'input-group-focus': this.state.yourMessage,
													})}>
													<InputGroupAddon
														addonType='prepend'
														className='d-flex'>
														<InputGroupText>
															<i className='tim-icons icon-pencil' />
														</InputGroupText>
													</InputGroupAddon>
													<Input
														placeholder='Your message'
														type='text'
														onFocus={e => this.setState({ yourMessage: true })}
														onBlur={e => this.setState({ yourMessage: false })}
													/>
													<Button className='btn-simple ml-2' color='primary'>
														<i className='tim-icons icon-send' />
													</Button>
												</InputGroup>
											</Form>
										</CardFooter>
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

export default ChatPage
