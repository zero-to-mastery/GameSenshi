import React from 'react'

// reactstrap components
import {
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
	Table,
	Container,
	Row,
	Col,
	UncontrolledTooltip,
	Carousel,
	CarouselItem,
} from 'reactstrap'

// core components
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
									className='btn-icon btn-round'
									color='twitter'
									href='#pablo'
									onClick={e => e.preventDefault()}>
									<i className='fab fa-twitter' />
								</Button>
								<Button
									className='btn-icon btn-round'
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
									className='btn-icon btn-round'
									color='twitter'
									href='#pablo'
									onClick={e => e.preventDefault()}>
									<i className='fab fa-twitter' />
								</Button>
								<Button
									className='btn-icon btn-round'
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
									className='btn-icon btn-round'
									color='twitter'
									href='#pablo'
									onClick={e => e.preventDefault()}>
									<i className='fab fa-twitter' />
								</Button>
								<Button
									className='btn-icon btn-round ml-1'
									color='facebook'
									href='#pablo'
									onClick={e => e.preventDefault()}>
									<i className='fab fa-facebook-square' />
								</Button>
								<Button
									className='btn-icon btn-round ml-1'
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

class Teams extends React.Component {
	state = {
		activeIndex: 0,
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
				<div className='cd-section' id='teams'>
					{/* ********* TEAM 1 ********* */}
					<div className='team-1'>
						<Container>
							<Row>
								<Col className='ml-auto mr-auto text-center' md='8'>
									<h2 className='title'>Our Awesome Team 1</h2>
									<h4 className='description'>
										This is the paragraph where you can write more details about
										your team. Keep you user engaged by providing meaningful
										information.
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
					{/* ********* END TEAM 1 ********* */}
					{/* ********* TEAM 2 ********* */}
					<div className='team-2'>
						<Container>
							<Row>
								<Col className='ml-auto mr-auto text-center' md='8'>
									<h2 className='title'>The Executive Team 2</h2>
									<h4 className='description'>
										This is the paragraph where you can write more details about
										your team. Keep you user engaged by providing meaningful
										information.
									</h4>
								</Col>
							</Row>
							<Row>
								<Col md='4'>
									<Card className='card-profile'>
										<div className='card-image'>
											<h4 className='title'>Sofia Scarlett</h4>
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
													src={require('assets/img/emily.jpg')}
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
															<i className='tim-icons icon-atom' />
															Skills
														</td>
														<td className='text-right'>UI, UX</td>
													</tr>
													<tr>
														<td className='text-left'>
															<i className='tim-icons icon-user-run' />
															Hobbies
														</td>
														<td className='text-right'>Cookery</td>
													</tr>
													<tr>
														<td className='text-left'>
															<i className='tim-icons icon-chart-bar-32' />
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
													src={require('assets/img/michael.jpg')}
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
															<i className='tim-icons icon-atom' />
															Skills
														</td>
														<td className='text-right'>Leadership</td>
													</tr>
													<tr>
														<td className='text-left'>
															<i className='tim-icons icon-user-run' />
															Hobbies
														</td>
														<td className='text-right'>Skiing</td>
													</tr>
													<tr>
														<td className='text-left'>
															<i className='tim-icons icon-chart-bar-32' />
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
													src={require('assets/img/julie.jpg')}
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
															<i className='tim-icons icon-atom' />
															Skills
														</td>
														<td className='text-right'>Artistry</td>
													</tr>
													<tr>
														<td className='text-left'>
															<i className='tim-icons icon-user-run' />
															Hobbies
														</td>
														<td className='text-right'>Reading</td>
													</tr>
													<tr>
														<td className='text-left'>
															<i className='tim-icons icon-chart-bar-32' />
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
					{/* ********* END TEAM 2 ********* */}
					{/* ********* TEAM 3 ********* */}
					<div className='team-3'>
						<Container>
							<Row>
								<Col className='ml-auto mr-auto text-center' md='8'>
									<h2 className='title'>The Executive Team 3</h2>
									<h4 className='description'>
										This is the paragraph where you can write more details about
										your team. Keep you user engaged by providing meaningful
										information.
									</h4>
								</Col>
							</Row>
							<Row>
								<Col className='ml-auto mr-auto' lg='4' md='5'>
									<Card className='card-profile' data-background='full'>
										<a href='#pablo' onClick={e => e.preventDefault()}>
											<img
												alt='...'
												className='img img-raised rounded'
												src={require('assets/img/willy-dade.jpg')}
											/>
										</a>
										<div className='card-image'>
											<h4 className='title'>Jane Doe</h4>
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
										</div>
										<CardBody>
											<hr className='line-primary' />
											<h3 className='job-title'>Scrum Master</h3>
											<Table className='tablesorter' responsive>
												<tbody>
													<tr>
														<td className='text-left'>
															<i className='tim-icons icon-atom' />
															Skills
														</td>
														<td className='text-right'>Organization</td>
													</tr>
													<tr>
														<td className='text-left'>
															<i className='tim-icons icon-user-run' />
															Hobbies
														</td>
														<td className='text-right'>Jogging</td>
													</tr>
													<tr>
														<td className='text-left'>
															<i className='tim-icons icon-chart-bar-32' />
															Level
														</td>
														<td className='text-right'>• • • • •</td>
													</tr>
												</tbody>
											</Table>
										</CardBody>
									</Card>
								</Col>
								<Col className='ml-auto mr-auto' lg='4' md='5'>
									<Card className='card-profile' data-background='full'>
										<a href='#pablo' onClick={e => e.preventDefault()}>
											<img
												alt='...'
												className='img img-raised rounded'
												src={require('assets/img/tom-klein.jpg')}
											/>
										</a>
										<div className='card-image'>
											<h4 className='title'>Tom Klein</h4>
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
										</div>
										<CardBody>
											<hr className='line-primary' />
											<h3 className='job-title'>CTO</h3>
											<Table className='tablesorter' responsive>
												<tbody>
													<tr>
														<td className='text-left'>
															<i className='tim-icons icon-atom' />
															Skills
														</td>
														<td className='text-right'>Negotiation</td>
													</tr>
													<tr>
														<td className='text-left'>
															<i className='tim-icons icon-user-run' />
															Hobbies
														</td>
														<td className='text-right'>Graffiti</td>
													</tr>
													<tr>
														<td className='text-left'>
															<i className='tim-icons icon-chart-bar-32' />
															Level
														</td>
														<td className='text-right'>• • • •</td>
													</tr>
												</tbody>
											</Table>
										</CardBody>
									</Card>
								</Col>
								<Col className='ml-auto mr-auto' lg='4' md='5'>
									<Card className='card-profile' data-background='full'>
										<a href='#pablo' onClick={e => e.preventDefault()}>
											<img
												alt='...'
												className='img img-raised rounded'
												src={require('assets/img/kareya-saleh.jpg')}
											/>
										</a>
										<div className='card-image'>
											<h4 className='title'>Hannah Khan</h4>
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
										</div>
										<CardBody>
											<hr className='line-primary' />
											<h3 className='job-title'>Brand Strategist</h3>
											<Table className='tablesorter' responsive>
												<tbody>
													<tr>
														<td className='text-left'>
															<i className='tim-icons icon-atom' />
															Skills
														</td>
														<td className='text-right'>Decision Making</td>
													</tr>
													<tr>
														<td className='text-left'>
															<i className='tim-icons icon-user-run' />
															Hobbies
														</td>
														<td className='text-right'>Martial arts</td>
													</tr>
													<tr>
														<td className='text-left'>
															<i className='tim-icons icon-chart-bar-32' />
															Level
														</td>
														<td className='text-right'>• • •</td>
													</tr>
												</tbody>
											</Table>
										</CardBody>
									</Card>
								</Col>
							</Row>
						</Container>
					</div>
					{/* ********* END TEAM 3 ********* */}
					{/* ********* TEAM 4 ********* */}
					<div className='team-4'>
						<Container>
							<Row>
								<Col className='ml-auto mr-auto text-center' md='8'>
									<h2 className='title'>The Executive Team 4</h2>
									<h4 className='description'>
										This is the paragraph where you can write more details about
										your team. Keep you user engaged by providing meaningful
										information.
									</h4>
								</Col>
							</Row>
							<Row>
								<Col className='ml-auto mr-auto' lg='10'>
									<Card className='card-profile card-horizontal'>
										<Row>
											<Col xl='7'>
												<div className='card-image no-mask'>
													<a href='#pablo' onClick={e => e.preventDefault()}>
														<img
															alt='...'
															className='img'
															src={require('assets/img/comete-coco.jpg')}
														/>
													</a>
												</div>
											</Col>
											<Col xl='5'>
												<CardBody className='mt-3'>
													<h6 className='card-category'>Name</h6>
													<CardTitle tag='h4'>Willian Pearce</CardTitle>
													<br />
													<h6 className='card-category'>Position</h6>
													<CardTitle tag='h4'>Project Manager</CardTitle>
													<br />
													<Row>
														<Col lg='4'>
															<h6 className='card-category'>Followers</h6>
															<CardTitle tag='h4'>367</CardTitle>
														</Col>
														<Col lg='4'>
															<h6 className='card-category'>Projects</h6>
															<CardTitle tag='h4'>31</CardTitle>
														</Col>
													</Row>
												</CardBody>
												<CardFooter>
													<h6 className='card-category'>Team</h6>
													<a
														className='avatar rounded-circle'
														href='#pablo'
														onClick={e => e.preventDefault()}
														id='tooltip147210950'>
														<img
															alt='...'
															src={require('assets/img/james.jpg')}
														/>
													</a>
													<UncontrolledTooltip
														delay={0}
														target='tooltip147210950'>
														Ryan Tompson
													</UncontrolledTooltip>
													<a
														className='avatar rounded-circle ml-1'
														href='#pablo'
														onClick={e => e.preventDefault()}
														id='tooltip908194662'>
														<img
															alt='...'
															src={require('assets/img/ryan.jpg')}
														/>
													</a>
													<UncontrolledTooltip
														delay={0}
														target='tooltip908194662'>
														Romina Hadid
													</UncontrolledTooltip>
													<a
														className='avatar rounded-circle ml-1'
														href='#pablo'
														onClick={e => e.preventDefault()}
														id='tooltip337528324'>
														<img
															alt='...'
															src={require('assets/img/lora.jpg')}
														/>
													</a>
													<UncontrolledTooltip
														delay={0}
														target='tooltip337528324'>
														Alexander Smith
													</UncontrolledTooltip>
													<a
														className='avatar rounded-circle ml-1'
														href='#pablo'
														onClick={e => e.preventDefault()}
														id='tooltip403139101'>
														<img
															alt='...'
															src={require('assets/img/mike.jpg')}
														/>
													</a>
													<UncontrolledTooltip
														delay={0}
														target='tooltip403139101'>
														Jessica Doe
													</UncontrolledTooltip>
												</CardFooter>
											</Col>
										</Row>
									</Card>
								</Col>
							</Row>
						</Container>
					</div>
					{/* ********* END TEAM 4 ********* */}
					{/* ********* TEAM 5 ********* */}
					<div className='team-5'>
						<Container>
							<Row>
								<Col className='ml-auto mr-auto text-center' md='8'>
									<h2 className='title'>The Executive Team 5</h2>
									<h4 className='description'>
										This is the paragraph where you can write more details about
										your team. Keep you user engaged by providing meaningful
										information.
									</h4>
								</Col>
							</Row>
							<Row>
								<Col md='4'>
									<Card className='card-profile profile-bg'>
										<CardHeader
											style={{
												backgroundImage:
													'url(' + require('assets/img/ben-konfrst.jpg') + ')',
											}}>
											<div className='card-avatar'>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<img
														alt='...'
														className='img img-raised'
														src={require('assets/img/ryan.jpg')}
													/>
												</a>
											</div>
										</CardHeader>
										<CardBody>
											<CardTitle tag='h3'>Byron Reese</CardTitle>
											<h6 className='category text-primary'>Credit Analyst</h6>
											<p className='card-description'>
												Multi-Cloud Object Storage and Data Mobility: A GigaOm
												Market Landscape Report has been announced...
											</p>
										</CardBody>
										<CardFooter>
											<div className='follow float-left'>
												<Button
													className='btn-simple'
													color='primary'
													href='#pablo'
													onClick={e => e.preventDefault()}
													size='sm'>
													<i className='tim-icons icon-check-2 mr-1' />
													Following
												</Button>
											</div>
											<div className='d-inline float-right d-md-block'>
												<Button
													className='btn-icon btn-round mr-1'
													color='dribbble'
													href='#pablo'
													onClick={e => e.preventDefault()}>
													<i className='fab fa-dribbble' />
												</Button>
												<Button
													className='btn-icon btn-round mr-1'
													color='linkedin'
													href='#pablo'
													onClick={e => e.preventDefault()}>
													<i className='fab fa-linkedin' />
												</Button>
												<Button
													className='btn-icon btn-round'
													color='behance'
													href='#pablo'
													onClick={e => e.preventDefault()}>
													<i className='fab fa-behance' />
												</Button>
											</div>
										</CardFooter>
									</Card>
								</Col>
								<Col md='4'>
									<Card className='card-profile profile-bg'>
										<CardHeader
											style={{
												backgroundImage:
													'url(' + require('assets/img/ruvim-noga.jpg') + ')',
											}}>
											<div className='card-avatar'>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<img
														alt='...'
														className='img img-raised'
														src={require('assets/img/lora.jpg')}
													/>
												</a>
											</div>
										</CardHeader>
										<CardBody>
											<CardTitle tag='h3'>Melanie Paisley</CardTitle>
											<h6 className='category text-primary'>Writer</h6>
											<p className='card-description'>
												Over the years, advancement in CRM technology has
												reshaped the way SMBs and SMEs manage their workflows...
											</p>
										</CardBody>
										<CardFooter>
											<div className='follow float-left'>
												<Button
													color='primary'
													href='#pablo'
													onClick={e => e.preventDefault()}
													size='sm'>
													Follow
												</Button>
											</div>
											<div className='d-inline float-right d-md-block'>
												<Button
													className='btn-icon btn-round mr-1'
													color='dribbble'
													href='#pablo'
													onClick={e => e.preventDefault()}>
													<i className='fab fa-dribbble' />
												</Button>
												<Button
													className='btn-icon btn-round mr-1'
													color='linkedin'
													href='#pablo'
													onClick={e => e.preventDefault()}>
													<i className='fab fa-linkedin' />
												</Button>
												<Button
													className='btn-icon btn-round'
													color='behance'
													href='#pablo'
													onClick={e => e.preventDefault()}>
													<i className='fab fa-behance' />
												</Button>
											</div>
										</CardFooter>
									</Card>
								</Col>
								<Col md='4'>
									<Card className='card-profile profile-bg'>
										<CardHeader
											style={{
												backgroundImage:
													'url(' +
													require('assets/img/sendra-martorell.jpg') +
													')',
											}}>
											<div className='card-avatar'>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<img
														alt='...'
														className='img img-raised'
														src={require('assets/img/ryan.png')}
													/>
												</a>
											</div>
										</CardHeader>
										<CardBody>
											<CardTitle tag='h3'>Jon Collins</CardTitle>
											<h6 className='category text-primary'>Data Specialist</h6>
											<p className='card-description'>
												Scaling DevOps: Strategy &amp; Technical Considerations
												for Successful Enterprise DevOps
											</p>
										</CardBody>
										<CardFooter>
											<div className='follow float-left'>
												<Button
													className='btn-simple'
													color='primary'
													href='#pablo'
													onClick={e => e.preventDefault()}
													size='sm'>
													<i className='tim-icons icon-check-2 mr-1' />
													Following
												</Button>
											</div>
											<div className='d-inline float-right d-md-block'>
												<Button
													className='btn-icon btn-round mr-1'
													color='dribbble'
													href='#pablo'
													onClick={e => e.preventDefault()}>
													<i className='fab fa-dribbble' />
												</Button>
												<Button
													className='btn-icon btn-round mr-1'
													color='linkedin'
													href='#pablo'
													onClick={e => e.preventDefault()}>
													<i className='fab fa-linkedin' />
												</Button>
												<Button
													className='btn-icon btn-round'
													color='behance'
													href='#pablo'
													onClick={e => e.preventDefault()}>
													<i className='fab fa-behance' />
												</Button>
											</div>
										</CardFooter>
									</Card>
								</Col>
							</Row>
						</Container>
					</div>
					{/* ********* END TEAM 5 ********* */}
				</div>{' '}
			</>
		)
	}
}

export default Teams
