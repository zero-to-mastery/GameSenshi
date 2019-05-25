import React from 'react'
// ReactJS plugin for a nice carousel
import Slick from 'react-slick'
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
} from 'reactstrap'

// core components

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

class Cards extends React.Component {
	render() {
		return (
			<>
				<div className='section section-cards'>
					<div className='content-center'>
						<Container fluid>
							<Row>
								<Col
									className='ml-auto mr-auto text-center'
									lg='5'
									md='8'
									xs='12'>
									<h1 className='title'>Unconventional cards</h1>
									<h3 className='category text-info'>
										<strong>One card for every problem</strong>
									</h3>
									<p className='description'>
										We love cards and everybody on the web seems to. We have
										gone above and beyond with options for you to organise your
										information. From cards designed for blog posts, to product
										cards or user profiles, you will have many options to choose
										from. All the cards follow the material principles and have
										a design that stands out.
									</p>
								</Col>
								<Col md={12}>
									<Slick {...slickSettings}>
										<div>
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
																className='avatar img-raised d-inline'
																src={require('assets/img/johana.jpg')}
															/>
															<span>Jona Zmud</span>
														</div>
														<div className='stats stats-right'>
															<i className='tim-icons icon-watch-time' />5 min
															read
														</div>
													</CardFooter>
												</CardBody>
											</Card>
										</div>
										<div>
											<Card className='card-blog card-background'>
												<div
													className='full-background'
													style={{
														backgroundImage:
															'url(' +
															require('assets/img/randy-colas.jpg') +
															')',
													}}
												/>
												<CardBody>
													<div className='content-center'>
														<a href='#pablo' onClick={e => e.preventDefault()}>
															<CardTitle tag='h2'>Dream Big</CardTitle>
														</a>
														<h3 className='card-category'>Best Practices</h3>
														<div className='author'>
															<img
																alt='...'
																className='avatar img-raised mx-auto'
																src={require('assets/img/p10.jpg')}
															/>
														</div>
													</div>
												</CardBody>
											</Card>
										</div>
										<div>
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
															className='img img-raised rounded w-100'
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
																<td className='text-right'>Skiing, Chess</td>
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
										</div>
										<div>
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
													<h6 className='category text-primary'>
														Data Specialist
													</h6>
													<p className='card-description'>
														Scaling DevOps: Strategy &amp; Technical
														Considerations for Successful Enterprise DevOps
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
															<i className='tim-icons icon-check-2' />
															Following
														</Button>
													</div>
													<div className='d-inline float-right'>
														<Button
															className='btn-icon btn-round'
															color='dribbble'
															href='#pablo'
															onClick={e => e.preventDefault()}>
															<i className='fab fa-dribbble' />
														</Button>
														<Button
															className='btn-icon btn-round'
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
										</div>
										<div>
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
																<td className='text-right'>Graffiti Skiing</td>
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
										</div>
									</Slick>
								</Col>
							</Row>
						</Container>
					</div>
				</div>
			</>
		)
	}
}

export default Cards
