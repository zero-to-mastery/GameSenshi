import React from 'react'

// reactstrap components
import {
	Badge,
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	CardTitle,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Pagination,
	PaginationItem,
	PaginationLink,
	TabContent,
	TabPane,
	Container,
	Row,
	Col,
	UncontrolledTooltip,
} from 'reactstrap'

class Projects extends React.Component {
	state = {
		activeTab: '1',
	}
	toggle = tab => {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab,
			})
		}
	}
	render() {
		return (
			<>
				<div className='cd-section' id='projects'>
					{/* ********* PROJECTS 1 ********* */}
					<div className='projects-1'>
						<div className='projects-1'>
							<Container>
								<Row>
									<Col className='mr-auto ml-auto text-center mb-5' lg='8'>
										<h2 className='title'>Some of Our Awesome Projects - 1</h2>
									</Col>
								</Row>
							</Container>
							<Navbar className='bg-transparent mb-5' expand='lg'>
								<Container>
									<div className='navbar-translate'>
										<p>52 projects found</p>
									</div>
									<Nav className='ml-auto' navbar>
										<UncontrolledDropdown nav>
											<DropdownToggle
												aria-expanded={false}
												caret
												color='default'
												data-toggle='dropdown'
												href='#pablo'
												onClick={e => e.preventDefault()}
												id='navbarOrder'
												nav>
												<p>A-to-Z</p>
											</DropdownToggle>
											<DropdownMenu right>
												<DropdownItem
													href='#pablo'
													onClick={e => e.preventDefault()}>
													Z-to-A
												</DropdownItem>
												<DropdownItem
													href='#pablo'
													onClick={e => e.preventDefault()}>
													Newest
												</DropdownItem>
											</DropdownMenu>
										</UncontrolledDropdown>
										<UncontrolledDropdown nav>
											<DropdownToggle
												aria-expanded={false}
												caret
												color='default'
												data-toggle='dropdown'
												href='#pablo'
												onClick={e => e.preventDefault()}
												id='navbarLatest'
												nav>
												<p>Latest</p>
											</DropdownToggle>
											<DropdownMenu right>
												<DropdownItem
													href='#pablo'
													onClick={e => e.preventDefault()}>
													Newest
												</DropdownItem>
												<DropdownItem
													href='#pablo'
													onClick={e => e.preventDefault()}>
													High interest
												</DropdownItem>
											</DropdownMenu>
										</UncontrolledDropdown>
									</Nav>
								</Container>
							</Navbar>
							<Container>
								<Row>
									<Col md='4'>
										<Card>
											<CardHeader className='mt-2'>
												<div className='float-left'>
													<i className='tim-icons icon-tag d-inline text-info' />
													<p className='d-inline ml-1'>H-23</p>
												</div>
												<div className='float-right'>
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
																Action
															</DropdownItem>
															<DropdownItem
																href='#pablo'
																onClick={e => e.preventDefault()}>
																Another action
															</DropdownItem>
															<DropdownItem
																href='#pablo'
																onClick={e => e.preventDefault()}>
																Something else
															</DropdownItem>
														</DropdownMenu>
													</UncontrolledDropdown>
												</div>
											</CardHeader>
											<CardBody className='text-center p-4'>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<img
														alt='...'
														className='img-fluid rounded-circle shadow'
														src={require('assets/img/slack.png')}
														style={{ width: '100px' }}
													/>
												</a>
												<CardTitle className='mb-0' tag='h4'>
													Slack
												</CardTitle>
												<p className='card-description'>
													We are happy to work at such a great project.
												</p>
												<CardTitle className='mt-4' tag='h5'>
													Members
												</CardTitle>
												<div className='avatar-group'>
													<a
														className='avatar avatar-sm rounded-circle mr-2'
														href='#pablo'
														onClick={e => e.preventDefault()}
														id='tooltip343637047'>
														<img
															alt='...'
															src={require('assets/img/james.jpg')}
														/>
													</a>
													<UncontrolledTooltip
														delay={0}
														target='tooltip343637047'>
														Ryan Tompson
													</UncontrolledTooltip>
													<a
														className='avatar avatar-sm rounded-circle mr-2'
														href='#pablo'
														onClick={e => e.preventDefault()}
														id='tooltip346352270'>
														<img
															alt='...'
															src={require('assets/img/ryan.jpg')}
														/>
													</a>
													<UncontrolledTooltip
														delay={0}
														target='tooltip346352270'>
														Romina Hadid
													</UncontrolledTooltip>
													<a
														className='avatar avatar-sm rounded-circle mr-2'
														href='#pablo'
														onClick={e => e.preventDefault()}
														id='tooltip532183863'>
														<img
															alt='...'
															src={require('assets/img/lora.jpg')}
														/>
													</a>
													<UncontrolledTooltip
														delay={0}
														target='tooltip532183863'>
														Alexander Smith
													</UncontrolledTooltip>
													<a
														className='avatar avatar-sm rounded-circle'
														href='#pablo'
														onClick={e => e.preventDefault()}
														id='tooltip551759668'>
														<img
															alt='...'
															src={require('assets/img/mike.jpg')}
														/>
													</a>
													<UncontrolledTooltip
														delay={0}
														target='tooltip551759668'>
														Jessica Doe
													</UncontrolledTooltip>
												</div>
											</CardBody>
										</Card>
									</Col>
									<Col md='4'>
										<Card>
											<CardHeader className='mt-2'>
												<div className='float-left'>
													<i className='tim-icons icon-tag d-inline text-success' />
													<p className='d-inline ml-1'>F-43</p>
												</div>
												<div className='float-right'>
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
																Action
															</DropdownItem>
															<DropdownItem
																href='#pablo'
																onClick={e => e.preventDefault()}>
																Another action
															</DropdownItem>
															<DropdownItem
																href='#pablo'
																onClick={e => e.preventDefault()}>
																Something else
															</DropdownItem>
														</DropdownMenu>
													</UncontrolledDropdown>
												</div>
											</CardHeader>
											<CardBody className='text-center p-4'>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<img
														alt='...'
														className='img-fluid rounded-circle shadow'
														src={require('assets/img/spotify.jpeg')}
														style={{ width: '100px' }}
													/>
												</a>
												<CardTitle className='mb-0' tag='h4'>
													Spotify
												</CardTitle>
												<p className='card-description'>
													We strive to embrace and drive change in our industry.
												</p>
												<CardTitle className='mt-4' tag='h5'>
													Members
												</CardTitle>
												<div className='avatar-group'>
													<a
														className='avatar avatar-sm rounded-circle mr-2'
														href='#pablo'
														onClick={e => e.preventDefault()}
														id='tooltip462477495'>
														<img
															alt='...'
															src={require('assets/img/james.jpg')}
														/>
													</a>
													<UncontrolledTooltip
														delay={0}
														target='tooltip462477495'>
														Ryan Tompson
													</UncontrolledTooltip>
													<a
														className='avatar avatar-sm rounded-circle mr-2'
														href='#pablo'
														onClick={e => e.preventDefault()}
														id='tooltip300140885'>
														<img
															alt='...'
															src={require('assets/img/ryan.jpg')}
														/>
													</a>
													<UncontrolledTooltip
														delay={0}
														target='tooltip300140885'>
														Romina Hadid
													</UncontrolledTooltip>
													<a
														className='avatar avatar-sm rounded-circle mr-2'
														href='#pablo'
														onClick={e => e.preventDefault()}
														id='tooltip571610782'>
														<img
															alt='...'
															src={require('assets/img/lora.jpg')}
														/>
													</a>
													<UncontrolledTooltip
														delay={0}
														target='tooltip571610782'>
														Alexander Smith
													</UncontrolledTooltip>
													<a
														className='avatar avatar-sm rounded-circle'
														href='#pablo'
														onClick={e => e.preventDefault()}
														id='tooltip273194938'>
														<img
															alt='...'
															src={require('assets/img/mike.jpg')}
														/>
													</a>
													<UncontrolledTooltip
														delay={0}
														target='tooltip273194938'>
														Jessica Doe
													</UncontrolledTooltip>
												</div>
											</CardBody>
										</Card>
									</Col>
									<Col md='4'>
										<Card>
											<CardHeader className='mt-2'>
												<div className='float-left'>
													<i className='tim-icons icon-tag d-inline text-danger' />
													<p className='d-inline ml-1'>J-11</p>
												</div>
												<div className='float-right'>
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
																Action
															</DropdownItem>
															<DropdownItem
																href='#pablo'
																onClick={e => e.preventDefault()}>
																Another action
															</DropdownItem>
															<DropdownItem
																href='#pablo'
																onClick={e => e.preventDefault()}>
																Something else
															</DropdownItem>
														</DropdownMenu>
													</UncontrolledDropdown>
												</div>
											</CardHeader>
											<CardBody className='text-center p-4'>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<img
														alt='...'
														className='img-fluid rounded-circle shadow'
														src={require('assets/img/dribbble.png')}
														style={{ width: '100px' }}
													/>
												</a>
												<CardTitle className='mb-0' tag='h4'>
													Dribbble
												</CardTitle>
												<p className='card-description'>
													The time has come to bring our plans and ideas to
													life.
												</p>
												<CardTitle className='mt-4' tag='h5'>
													Members
												</CardTitle>
												<div className='avatar-group'>
													<a
														className='avatar avatar-sm rounded-circle mr-2'
														href='#pablo'
														onClick={e => e.preventDefault()}
														id='tooltip76177270'>
														<img
															alt='...'
															src={require('assets/img/james.jpg')}
														/>
													</a>
													<UncontrolledTooltip
														delay={0}
														target='tooltip76177270'>
														Ryan Tompson
													</UncontrolledTooltip>
													<a
														className='avatar avatar-sm rounded-circle mr-2'
														href='#pablo'
														onClick={e => e.preventDefault()}
														id='tooltip784059972'>
														<img
															alt='...'
															src={require('assets/img/ryan.jpg')}
														/>
													</a>
													<UncontrolledTooltip
														delay={0}
														target='tooltip784059972'>
														Romina Hadid
													</UncontrolledTooltip>
													<a
														className='avatar avatar-sm rounded-circle mr-2'
														href='#pablo'
														onClick={e => e.preventDefault()}
														id='tooltip876709653'>
														<img
															alt='...'
															src={require('assets/img/lora.jpg')}
														/>
													</a>
													<UncontrolledTooltip
														delay={0}
														target='tooltip876709653'>
														Alexander Smith
													</UncontrolledTooltip>
													<a
														className='avatar avatar-sm rounded-circle'
														href='#pablo'
														onClick={e => e.preventDefault()}
														id='tooltip101701505'>
														<img
															alt='...'
															src={require('assets/img/mike.jpg')}
														/>
													</a>
													<UncontrolledTooltip
														delay={0}
														target='tooltip101701505'>
														Jessica Doe
													</UncontrolledTooltip>
												</div>
											</CardBody>
										</Card>
									</Col>
									<Col md='4'>
										<Card>
											<CardHeader className='mt-2'>
												<div className='float-left'>
													<i className='tim-icons icon-tag d-inline text-warning' />
													<p className='d-inline ml-1'>A-11</p>
												</div>
												<div className='float-right'>
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
																Action
															</DropdownItem>
															<DropdownItem
																href='#pablo'
																onClick={e => e.preventDefault()}>
																Another action
															</DropdownItem>
															<DropdownItem
																href='#pablo'
																onClick={e => e.preventDefault()}>
																Something else
															</DropdownItem>
														</DropdownMenu>
													</UncontrolledDropdown>
												</div>
											</CardHeader>
											<CardBody className='text-center p-4'>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<img
														alt='...'
														className='img-fluid rounded-circle shadow'
														src={require('assets/img/Tim.png')}
														style={{ width: '100px' }}
													/>
												</a>
												<CardTitle className='mb-0' tag='h4'>
													CreativeTim
												</CardTitle>
												<p className='card-description'>
													We are developing the best design projects.
												</p>
												<CardTitle className='mt-4' tag='h5'>
													Members
												</CardTitle>
												<div className='avatar-group'>
													<a
														className='avatar avatar-sm rounded-circle mr-2'
														href='#pablo'
														onClick={e => e.preventDefault()}
														id='tooltip380380732'>
														<img
															alt='...'
															src={require('assets/img/james.jpg')}
														/>
													</a>
													<UncontrolledTooltip
														delay={0}
														target='tooltip380380732'>
														Ryan Tompson
													</UncontrolledTooltip>
													<a
														className='avatar avatar-sm rounded-circle mr-2'
														href='#pablo'
														onClick={e => e.preventDefault()}
														id='tooltip383345211'>
														<img
															alt='...'
															src={require('assets/img/ryan.jpg')}
														/>
													</a>
													<UncontrolledTooltip
														delay={0}
														target='tooltip383345211'>
														Romina Hadid
													</UncontrolledTooltip>
													<a
														className='avatar avatar-sm rounded-circle mr-2'
														href='#pablo'
														onClick={e => e.preventDefault()}
														id='tooltip364077597'>
														<img
															alt='...'
															src={require('assets/img/lora.jpg')}
														/>
													</a>
													<UncontrolledTooltip
														delay={0}
														target='tooltip364077597'>
														Alexander Smith
													</UncontrolledTooltip>
													<a
														className='avatar avatar-sm rounded-circle'
														href='#pablo'
														onClick={e => e.preventDefault()}
														id='tooltip988655272'>
														<img
															alt='...'
															src={require('assets/img/mike.jpg')}
														/>
													</a>
													<UncontrolledTooltip
														delay={0}
														target='tooltip988655272'>
														Jessica Doe
													</UncontrolledTooltip>
												</div>
											</CardBody>
										</Card>
									</Col>
									<Col md='4'>
										<Card>
											<CardHeader className='mt-2'>
												<div className='float-left'>
													<i className='tim-icons icon-tag d-inline text-primary' />
													<p className='d-inline ml-1'>A-11</p>
												</div>
												<div className='float-right'>
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
																Action
															</DropdownItem>
															<DropdownItem
																href='#pablo'
																onClick={e => e.preventDefault()}>
																Another action
															</DropdownItem>
															<DropdownItem
																href='#pablo'
																onClick={e => e.preventDefault()}>
																Something else
															</DropdownItem>
														</DropdownMenu>
													</UncontrolledDropdown>
												</div>
											</CardHeader>
											<CardBody className='text-center p-4'>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<img
														alt='...'
														className='img-fluid rounded-circle shadow'
														src={require('assets/img/dropbox.png')}
														style={{ width: '100px' }}
													/>
												</a>
												<CardTitle className='mb-0' tag='h4'>
													DropBox
												</CardTitle>
												<p className='card-description'>
													It is important to save every project safely with our
													app.
												</p>
												<CardTitle className='mt-4' tag='h5'>
													Members
												</CardTitle>
												<div className='avatar-group'>
													<a
														className='avatar avatar-sm rounded-circle mr-2'
														href='#pablo'
														onClick={e => e.preventDefault()}
														id='tooltip989314295'>
														<img
															alt='...'
															src={require('assets/img/james.jpg')}
														/>
													</a>
													<UncontrolledTooltip
														delay={0}
														target='tooltip989314295'>
														Ryan Tompson
													</UncontrolledTooltip>
													<a
														className='avatar avatar-sm rounded-circle mr-2'
														href='#pablo'
														onClick={e => e.preventDefault()}
														id='tooltip230919456'>
														<img
															alt='...'
															src={require('assets/img/ryan.jpg')}
														/>
													</a>
													<UncontrolledTooltip
														delay={0}
														target='tooltip230919456'>
														Romina Hadid
													</UncontrolledTooltip>
													<a
														className='avatar avatar-sm rounded-circle mr-2'
														href='#pablo'
														onClick={e => e.preventDefault()}
														id='tooltip437311836'>
														<img
															alt='...'
															src={require('assets/img/lora.jpg')}
														/>
													</a>
													<UncontrolledTooltip
														delay={0}
														target='tooltip437311836'>
														Alexander Smith
													</UncontrolledTooltip>
													<a
														className='avatar avatar-sm rounded-circle'
														href='#pablo'
														onClick={e => e.preventDefault()}
														id='tooltip120355921'>
														<img
															alt='...'
															src={require('assets/img/mike.jpg')}
														/>
													</a>
													<UncontrolledTooltip
														delay={0}
														target='tooltip120355921'>
														Jessica Doe
													</UncontrolledTooltip>
												</div>
											</CardBody>
										</Card>
									</Col>
									<Col md='4'>
										<Card>
											<CardHeader className='mt-2'>
												<div className='float-left'>
													<i className='tim-icons icon-tag d-inline' />
													<p className='d-inline ml-1'>E-28</p>
												</div>
												<div className='float-right'>
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
																Action
															</DropdownItem>
															<DropdownItem
																href='#pablo'
																onClick={e => e.preventDefault()}>
																Another action
															</DropdownItem>
															<DropdownItem
																href='#pablo'
																onClick={e => e.preventDefault()}>
																Something else
															</DropdownItem>
														</DropdownMenu>
													</UncontrolledDropdown>
												</div>
											</CardHeader>
											<CardBody className='text-center p-4'>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<img
														alt='...'
														className='img-fluid rounded-circle shadow'
														src={require('assets/img/unass.jpg')}
														style={{ width: '100px' }}
													/>
												</a>
												<CardTitle className='mb-0' tag='h4'>
													Unassigned
												</CardTitle>
												<p className='card-description'>
													Here you can add your description and bellow add your
													members.
												</p>
												<CardTitle className='mt-4' tag='h5'>
													Members
												</CardTitle>
												<div className='avatar-group'>
													<a
														className='avatar avatar-sm rounded-circle'
														href='#pablo'
														onClick={e => e.preventDefault()}
														id='tooltip406568354'>
														<i className='tim-icons icon-lock-circle' />
													</a>
													<UncontrolledTooltip
														delay={0}
														target='tooltip406568354'>
														Add memberss
													</UncontrolledTooltip>
												</div>
											</CardBody>
										</Card>
									</Col>
								</Row>
								<footer className='mt-5'>
									<Pagination
										className='pagination float-left'
										listClassName='float-left'>
										<PaginationItem>
											<PaginationLink
												aria-label='Previous'
												href='#pablo'
												onClick={e => e.preventDefault()}>
												<span aria-hidden={true}>
													<i
														aria-hidden={true}
														className='tim-icons icon-double-left'
													/>
												</span>
											</PaginationLink>
										</PaginationItem>
										<PaginationItem className='active'>
											<PaginationLink
												href='#pablo'
												onClick={e => e.preventDefault()}>
												1
											</PaginationLink>
										</PaginationItem>
										<PaginationItem>
											<PaginationLink
												href='#pablo'
												onClick={e => e.preventDefault()}>
												2
											</PaginationLink>
										</PaginationItem>
										<PaginationItem>
											<PaginationLink
												href='#pablo'
												onClick={e => e.preventDefault()}>
												...
											</PaginationLink>
										</PaginationItem>
										<PaginationItem>
											<PaginationLink
												href='#pablo'
												onClick={e => e.preventDefault()}>
												6
											</PaginationLink>
										</PaginationItem>
										<PaginationItem>
											<PaginationLink
												aria-label='Next'
												href='#pablo'
												onClick={e => e.preventDefault()}>
												<span aria-hidden={true}>
													<i
														aria-hidden={true}
														className='tim-icons icon-double-right'
													/>
												</span>
											</PaginationLink>
										</PaginationItem>
									</Pagination>
									<div className='text-right'>
										<p>Showing 6 out of 36</p>
										<div />
									</div>
								</footer>
							</Container>
						</div>
					</div>
					{/* ********* END PROJECTS 1 ********* */}
					{/* ********* PROJECTS 2 ********* */}
					<div className='projects-2 project-raised'>
						<Container>
							<Row>
								<Col className='ml-auto mr-auto text-center mb-5' lg='8'>
									<h2 className='title'>Some of Our Awesome Products - 2</h2>
									<div className='section-space' />
								</Col>
							</Row>
							<Nav
								className='nav-pills-info nav-pills-icons nav-pills-lg'
								pills
								role='tablist'>
								<NavItem className='m-auto'>
									<NavLink
										className={this.state.activeTab === '1' ? 'active' : ''}
										onClick={() => {
											this.toggle('1')
										}}>
										<i className='tim-icons icon-spaceship' />
										Project 1
									</NavLink>
								</NavItem>
								<NavItem className='m-auto'>
									<NavLink
										className={this.state.activeTab === '2' ? 'active' : ''}
										onClick={() => {
											this.toggle('2')
										}}>
										<i className='tim-icons icon-bag-16' />
										Project 2
									</NavLink>
								</NavItem>
								<NavItem className='m-auto'>
									<NavLink
										className={this.state.activeTab === '3' ? 'active' : ''}
										onClick={() => {
											this.toggle('3')
										}}>
										<i className='tim-icons icon-light-3' />
										Project 3
									</NavLink>
								</NavItem>
								<NavItem className='m-auto'>
									<NavLink
										className={this.state.activeTab === '4' ? 'active' : ''}
										onClick={() => {
											this.toggle('4')
										}}>
										<i className='tim-icons icon-molecule-40' />
										Project 4
									</NavLink>
								</NavItem>
								<NavItem className='mx-auto'>
									<NavLink
										className={this.state.activeTab === '5' ? 'active' : ''}
										onClick={() => {
											this.toggle('5')
										}}>
										<i className='tim-icons icon-planet' />
										Project 5
									</NavLink>
								</NavItem>
							</Nav>
							<TabContent
								className='tab-space'
								activeTab={'project' + this.state.activeTab}>
								<TabPane tabId='project1'>
									<Row className='mt-5'>
										<Col md='4'>
											<Card>
												<div className='card-image h-100'>
													<img
														alt='...'
														className='img rounded'
														src='https://s3.amazonaws.com/creativetim_bucket/products/83/thumb/opt_mk_react_thumbnail.jpg?1525851474'
													/>
												</div>
												<CardBody className='text-left'>
													<CardFooter className='mt-0'>
														<div className='stats stats-right'>
															<div className='stars text-warning'>
																<i className='tim-icons icon-shape-star' />
																<i className='tim-icons icon-shape-star ml-1' />
																<i className='tim-icons icon-shape-star ml-1' />
																<i className='tim-icons icon-shape-star ml-1' />
																<i className='tim-icons icon-shape-star ml-1' />
															</div>
														</div>
														<div className='author'>
															<img
																alt='...'
																className='avatar img-raised'
																src={require('assets/img/Tim.png')}
															/>
															<span className='ml-1'>Material Kit React</span>
														</div>
													</CardFooter>
												</CardBody>
											</Card>
										</Col>
										<Col md='4'>
											<Card>
												<div className='card-image h-100'>
													<img
														alt='...'
														className='img rounded'
														src='https://s3.amazonaws.com/creativetim_bucket/products/136/thumb/opt_bd_react.jpg?1543482024'
													/>
												</div>
												<CardBody className='text-left'>
													<CardFooter className='mt-0'>
														<div className='stats stats-right'>
															<i className='tim-icons icon-heart-2 text-danger' />{' '}
															342 ·{' '}
															<i className='tim-icons icon-single-copy-04 text-info' />{' '}
															43
														</div>
														<div className='author'>
															<img
																alt='...'
																className='avatar img-raised'
																src={require('assets/img/Tim.png')}
															/>
															<span className='ml-1'>
																Black Dashboard React
															</span>
														</div>
													</CardFooter>
												</CardBody>
											</Card>
										</Col>
										<Col md='4'>
											<Card>
												<div className='card-image h-100'>
													<img
														alt='...'
														className='img rounded'
														src='https://s3.amazonaws.com/creativetim_bucket/products/155/thumb/opt_adp_react_thumbnail.jpg?1554905507'
													/>
												</div>
												<CardBody className='text-left'>
													<CardFooter className='mt-0'>
														<div className='stats stats-right'>
															<i className='tim-icons icon-heart-2 text-danger' />{' '}
															127
														</div>
														<div className='author'>
															<img
																alt='...'
																className='avatar img-raised'
																src={require('assets/img/Tim.png')}
															/>
															<span className='ml-1'>
																Argon Dashboard Pro React
															</span>
														</div>
													</CardFooter>
												</CardBody>
											</Card>
										</Col>
									</Row>
								</TabPane>
								<TabPane tabId='project2'>
									<div className='space-100' />
									<Col className='ml-auto mr-auto text-center mt-4' md='8'>
										<p className='description mb-5'>
											Add your information here for Project2.
										</p>
									</Col>
									<div className='space-100' />
								</TabPane>
								<TabPane tabId='project3'>
									<div className='space-100' />
									<Col className='ml-auto mr-auto text-center mt-4' md='8'>
										<p className='description mb-5'>
											Add your information here for Project3.
										</p>
									</Col>
									<div className='space-100' />
								</TabPane>
								<TabPane tabId='project4'>
									<div className='space-100' />
									<Col className='ml-auto mr-auto text-center mt-4' md='8'>
										<p className='description mb-5'>
											Add your information here for Project4.
										</p>
									</Col>
									<div className='space-100' />
								</TabPane>
								<TabPane tabId='project5'>
									<div className='space-100' />
									<Col className='ml-auto mr-auto text-center mt-4' md='8'>
										<p className='description mb-5'>
											Add your information here for Project5.
										</p>
									</Col>
									<div className='space-100' />
								</TabPane>
							</TabContent>
							<Row>
								<Col className='ml-auto mr-auto text-center mt-4' md='8'>
									<h3 className='title'>Interested in our projects?</h3>
									<h4 className='description mb-5'>
										This is the paragraph where you can write more details about
										your projects. Keep you user engaged by providing meaningful
										information.
									</h4>
									<Button color='primary' size='lg'>
										Contact us
									</Button>
								</Col>
							</Row>
						</Container>
					</div>
					{/* ********* END PROJECTS 2 ********* */}
					{/* ********* PROJECTS 3 ********* */}
					<div className='projects-3'>
						<Container>
							<Row>
								<Col className='ml-auto mr-auto text-center mb-5' md='8'>
									<h6 className='category text-muted'>Our work</h6>
									<h2 className='title mt-0'>
										Some of Our Awesome Projects - 3
									</h2>
								</Col>
							</Row>
							<div className='space-50' />
							<Row>
								<Col md='6'>
									<Card className='card-blog card-plain'>
										<CardHeader>
											<h2 className='title'>Passions</h2>
											<Badge color='danger' className='mr-1'>
												Methods
											</Badge>
											<Badge color='info'>Purposes</Badge>
										</CardHeader>
										<div className='card-image'>
											<a href='#pablo' onClick={e => e.preventDefault()}>
												<img
													alt='...'
													className='img rounded img-raised'
													src={require('assets/img/card-blog2.jpg')}
												/>
											</a>
										</div>
										<CardFooter className='text-left'>
											<div className='author'>
												<Button
													className='btn-round btn-simple'
													color='primary'>
													<i className='tim-icons icon-triangle-right-17' />
													View project details
												</Button>
											</div>
										</CardFooter>
									</Card>
								</Col>
								<Col md='6'>
									<Card className='card-blog card-plain'>
										<CardHeader>
											<h2 className='title'>Habits</h2>
											<Badge color='success'>Informations</Badge>
										</CardHeader>
										<div className='card-image'>
											<a href='#pablo' onClick={e => e.preventDefault()}>
												<img
													alt='...'
													className='img rounded img-raised'
													src={require('assets/img/chester-wade.jpg')}
												/>
											</a>
										</div>
										<CardFooter className='text-left'>
											<div className='author'>
												<Button
													className='btn-round btn-simple'
													color='success'>
													Find out more
												</Button>
											</div>
										</CardFooter>
									</Card>
								</Col>
							</Row>
							<div className='space-50' />
							<Row>
								<Col md='6'>
									<Card className='card-blog card-plain'>
										<CardHeader>
											<h2 className='title'>Sport</h2>
											<Badge color='warning' className='mr-1'>
												Healthy
											</Badge>
											<Badge color='primary'>Young</Badge>
										</CardHeader>
										<div className='card-image'>
											<a href='#pablo' onClick={e => e.preventDefault()}>
												<img
													alt='...'
													className='img rounded img-raised'
													src={require('assets/img/fabien-bazanegue.jpg')}
												/>
											</a>
										</div>
										<CardFooter className='text-left'>
											<div className='author'>
												<Button
													className='btn-round btn-simple'
													color='warning'>
													Read more
												</Button>
											</div>
										</CardFooter>
									</Card>
								</Col>
								<Col md='6'>
									<Card className='card-blog card-plain'>
										<CardHeader>
											<h2 className='title'>Nights</h2>
											<Badge color='success' className='mr-1'>
												City
											</Badge>
											<Badge color='info' className='mr-1'>
												Urban
											</Badge>
											<Badge color='warning'>Traffic</Badge>
										</CardHeader>
										<div className='card-image'>
											<a href='#pablo' onClick={e => e.preventDefault()}>
												<img
													alt='...'
													className='img rounded img-raised'
													src={require('assets/img/mark-finn.jpg')}
												/>
											</a>
										</div>
										<CardFooter className='text-left'>
											<div className='author'>
												<Button className='btn-round btn-simple' color='info'>
													<i className='tim-icons icon-minimal-right' />
													Go to page
												</Button>
											</div>
										</CardFooter>
									</Card>
								</Col>
							</Row>
						</Container>
					</div>
					{/* ********* END PROJECTS 3 ********* */}
					{/* ********* PROJECTS 4 ********* */}
					<div className='projects-4'>
						<Container>
							<Row>
								<Col className='mr-auto ml-auto text-center' md='8'>
									<h6 className='category text-muted'>Our work</h6>
									<h2 className='title mt-0'>
										Some of Our Awesome Projects - 4
									</h2>
								</Col>
							</Row>
							<div className='space-50' />
							<Row>
								<Col lg='4'>
									<Card
										className='card-background'
										style={{
											backgroundImage:
												'url(' + require('assets/img/bg8.jpg') + ')',
										}}>
										<CardBody className='text-left'>
											<h6 className='card-category'>
												<i className='tim-icons icon-atom' />
											</h6>
											<a href='#pablo' onClick={e => e.preventDefault()}>
												<CardTitle tag='h1'>Project Alpha</CardTitle>
											</a>
											<h6 className='desc'>Java App</h6>
											<Button
												color='info'
												href='#pablo'
												onClick={e => e.preventDefault()}>
												Watch Later
											</Button>
										</CardBody>
									</Card>
								</Col>
								<Col lg='4'>
									<Card
										className='card-background'
										style={{
											backgroundImage:
												'url(' + require('assets/img/bg7.jpg') + ')',
										}}>
										<CardBody className='text-left'>
											<h6 className='card-category'>
												<i className='tim-icons icon-camera-18' />
											</h6>
											<a href='#pablo' onClick={e => e.preventDefault()}>
												<CardTitle tag='h1'>Project Beta</CardTitle>
											</a>
											<h6 className='desc'>College project</h6>
											<Button
												color='success'
												href='#pablo'
												onClick={e => e.preventDefault()}>
												Watch Later
											</Button>
										</CardBody>
									</Card>
								</Col>
								<Col lg='4'>
									<Card
										className='card-background'
										style={{
											backgroundImage:
												'url(' + require('assets/img/bg4.jpg') + ')',
										}}>
										<CardBody className='text-left'>
											<h6 className='card-category'>
												<i className='tim-icons icon-html5' />
											</h6>
											<a href='#pablo' onClick={e => e.preventDefault()}>
												<CardTitle tag='h1'>Project Gama</CardTitle>
											</a>
											<h6 className='desc'>HTML code</h6>
											<Button
												color='warning'
												href='#pablo'
												onClick={e => e.preventDefault()}>
												Watch Later
											</Button>
										</CardBody>
									</Card>
								</Col>
							</Row>
						</Container>
					</div>
					{/* ********* END PROJECTS 4 ********* */}
				</div>{' '}
			</>
		)
	}
}

export default Projects
