import React from 'react'
// ReactJS plugin for a nice carousel
import Slick from 'react-slick'

// reactstrap components
import {
	Badge,
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	CardTitle,
	Input,
	Media,
	Container,
	Row,
	Col,
	UncontrolledTooltip,
} from 'reactstrap'

// core components
import ColorNavbar from 'componentAtoms/Navbars/ColorNavbar.jsx'
import DemoFooter from 'componentAtoms/Footers/DemoFooter.jsx'

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
	prevArrow: <PrevButton />,
	nextArrow: <NextButton />,
	className: 'slider col-md-8 ml-auto mr-auto',
	dots: false,
	infinite: true,
	centerMode: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
			},
		},
		{
			breakpoint: 786,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
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

class BlogPost extends React.Component {
	componentDidMount() {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		this.refs.wrapper.scrollTop = 0
		document.body.classList.add('blog-post')
	}
	componentWillUnmount() {
		document.body.classList.remove('blog-post')
	}
	render() {
		return (
			<>
				<ColorNavbar />
				<div className='wrapper' ref='wrapper'>
					<div className='page-header header-filter'>
						<div
							className='page-header-image'
							data-parallax={true}
							style={{
								backgroundImage:
									'url(' + require('assets/img/claudia-ramirez.jpg') + ')',
							}}
						/>
						<Container>
							<Row>
								<Col className='ml-auto mr-auto text-center' md='8'>
									<h1 className='title'>Let's Talk About Lucky Money</h1>
									<div className='author'>
										<img
											alt='...'
											className='avatar img-raised'
											src={require('assets/img/p10.jpg')}
										/>
									</div>
									<br />
									<h4 className='description'>Mark Byron</h4>
								</Col>
							</Row>
						</Container>
					</div>
					<div className='section'>
						<Container>
							<Row>
								<Col className='ml-auto mr-auto' md='8'>
									<h6 className='category'>March 1, 2019</h6>
									<h3 className='title'>
										The Castle Looks Different at Night...
									</h3>
									<p>
										This is the paragraph where you can write more details about
										your product. Keep you user engaged by providing meaningful
										information. Remember that by this time, the user is
										curious, otherwise he wouldn't scroll to get here. Add a
										button if you want the user to see more. We are here to make
										life better. <br />
										<br />
										And now I look and look around and there’s so many Kanyes
										I've been trying to figure out the bed design for the master
										bedroom at our Hidden Hills compound... and thank you for
										turning my personal jean jacket into a couture piece.
									</p>
									<br />
									<br />
									<p className='blockquote'>
										“And thank you for turning my personal jean jacket into a
										couture piece.” <br />
										<br />
										<small>Kanye West, Producer.</small>
									</p>
									<h3 className='title'>
										Using Video Games To Generate Clicks
									</h3>
									<br />
									<p>
										This is the paragraph where you can write more details about
										your product. Keep you user engaged by providing meaningful
										information. Remember that by this time, the user is
										curious, otherwise he wouldn't scroll to get here. Add a
										button if you want the user to see more. We are here to make
										life better.
									</p>
								</Col>
							</Row>
						</Container>
					</div>
					<Slick {...slickSettings}>
						<div>
							<img
								alt='...'
								height='500'
								src={require('assets/img/mark-harrison.jpg')}
								width='450'
							/>
						</div>
						<div>
							<img
								alt='...'
								height='500'
								src={require('assets/img/steven-roe.jpg')}
								width='450'
							/>
						</div>
						<div>
							<img
								alt='...'
								height='500'
								src={require('assets/img/rezaul-karim.jpg')}
								width='450'
							/>
						</div>
						<div>
							<img
								alt='...'
								height='500'
								src={require('assets/img/pawel-nolbert.jpg')}
								width='450'
							/>
						</div>
						<div>
							<img
								alt='...'
								height='500'
								src={require('assets/img/serge-kutuzov.jpg')}
								width='450'
							/>
						</div>
					</Slick>
					<div className='section'>
						<Container>
							<Row>
								<Col className='ml-auto mr-auto' md='8'>
									<h3 className='title'>Rest of the Story:</h3>
									<p>
										We are here to make life better. And now I look and look
										around and there’s so many Kanyes I've been trying to figure
										out the bed design for the master bedroom at our Hidden
										Hills compound... and thank you for turning my personal jean
										jacket into a couture piece. <br />I speak yell scream
										directly at the old guard on behalf of the future. daytime
										All respect prayers and love to Phife’s family Thank you for
										so much inspiration.
									</p>
									<br />
									<p>
										Thank you Anna for the invite thank you to the whole Vogue
										team And I love you like Kanye loves Kanye Pand Pand Panda
										I've been trying to figure out the bed design for the master
										bedroom at our Hidden Hills compound...The Pablo pop up was
										almost a pop up of influence. All respect prayers and love
										to Phife’s family Thank you for so much inspiration daytime
										I love this new Ferg album! The Life of Pablo is now
										available for purchase I have a dream. Thank you to
										everybody who made The Life of Pablo the number 1 album in
										the world! I'm so proud of the nr #1 song in the country.
										Panda! Good music 2016!
									</p>
									<br />
									<p>
										I love this new Ferg album! The Life of Pablo is now
										available for purchase I have a dream. Thank you to
										everybody who made The Life of Pablo the number 1 album in
										the world! I'm so proud of the nr #1 song in the country.
										Panda! Good music 2016!
									</p>
								</Col>
							</Row>
						</Container>
					</div>
					<div className='section section-blog-info'>
						<Container>
							<Row>
								<Col className='ml-auto mr-auto' md='8'>
									<Row>
										<Col md='10'>
											<div className='blog-tags'>
												Tags:  <Badge color='primary'>Photography</Badge>
												<Badge color='primary' className='ml-1'>
													Stories
												</Badge>
												<Badge color='primary' className='ml-1'>
													Castle
												</Badge>
											</div>
										</Col>
										<hr />
										<Col className='ml-auto mr-auto' md='8'>
											<Card className='card-profile profile-bg'>
												<CardHeader
													style={{
														backgroundImage:
															'url(' +
															require('assets/img/ruvim-noga.jpg') +
															')',
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
														reshaped the way SMBs and SMEs manage their
														workflows...
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
													<div className='d-inline float-right'>
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
								</Col>
							</Row>
						</Container>
					</div>
					<div className='section section-comments'>
						<Container>
							<Row>
								<Col className='ml-auto mr-auto' md='8'>
									<div className='media-area'>
										<h3 className='title text-center'>3 Comments</h3>
										<Media>
											<a
												className='pull-left'
												href='#pablo'
												onClick={e => e.preventDefault()}>
												<div className='avatar'>
													<Media
														alt='...'
														className='img-raised'
														src={require('assets/img/james.jpg')}
													/>
												</div>
											</a>
											<Media body>
												<Media heading tag='h5'>
													Tina Andrew{' '}
													<small className='text-muted'>· 7 minutes ago</small>
												</Media>
												<p>
													Chance too good. God level bars. I'm so proud of
													@LifeOfDesiigner #1 song in the country. Panda! Don't
													be scared of the truth because we need to restart the
													human foundation in truth I stand with the most
													humility. We are so blessed!
												</p>
												<p>
													All praises and blessings to the families of people
													who never gave up on dreams. Don't forget, You're
													Awesome!
												</p>
												<div className='media-footer'>
													<Button
														className='btn-simple pull-right'
														color='primary'
														href='#pablo'
														id='tooltip341431465'
														onClick={e => e.preventDefault()}
														size='sm'>
														<i className='tim-icons icon-send' /> Reply
													</Button>
													<UncontrolledTooltip
														delay={0}
														target='tooltip341431465'>
														Reply to Comment
													</UncontrolledTooltip>
													<Button
														className='btn-simple pull-right'
														color='danger'
														href='#pablo'
														onClick={e => e.preventDefault()}
														size='sm'>
														<i className='tim-icons icon-heart-2' /> 243
													</Button>
												</div>
											</Media>
										</Media>
										<Media>
											<a
												className='pull-left'
												href='#pablo'
												onClick={e => e.preventDefault()}>
												<div className='avatar'>
													<Media
														alt='...'
														className='img-raised'
														src={require('assets/img/michael.jpg')}
													/>
												</div>
											</a>
											<Media body>
												<Media heading tag='h5'>
													John Camber{' '}
													<small className='text-muted'>· Yesterday</small>
												</Media>
												<p>
													Hello guys, nice to have you on the platform! There
													will be a lot of great stuff coming soon. We will keep
													you posted for the latest news.
												</p>
												<p>Don't forget, You're Awesome!</p>
												<div className='media-footer'>
													<Button
														className='btn-simple pull-right'
														color='primary'
														href='#pablo'
														id='tooltip871944617'
														onClick={e => e.preventDefault()}
														size='sm'>
														<i className='tim-icons icon-send' /> Reply
													</Button>
													<UncontrolledTooltip
														delay={0}
														target='tooltip871944617'>
														Reply to Comment
													</UncontrolledTooltip>
													<Button
														className='btn-simple pull-right'
														color='danger'
														href='#pablo'
														onClick={e => e.preventDefault()}
														size='sm'>
														<i className='tim-icons icon-heart-2' /> 243
													</Button>
												</div>
												<Media>
													<a
														className='pull-left'
														href='#pablo'
														onClick={e => e.preventDefault()}>
														<div className='avatar'>
															<Media
																alt='...'
																className='img-raised'
																src={require('assets/img/julie.jpg')}
															/>
														</div>
													</a>
													<Media body>
														<Media heading tag='h5'>
															Tina Andrew{' '}
															<small className='text-muted'>· 2 Days Ago</small>
														</Media>
														<p>
															Hello guys, nice to have you on the platform!
															There will be a lot of great stuff coming soon. We
															will keep you posted for the latest news.
														</p>
														<p>Don't forget, You're Awesome!</p>
														<div className='media-footer'>
															<Button
																className='btn-simple pull-right'
																color='primary'
																href='#pablo'
																id='tooltip442113005'
																onClick={e => e.preventDefault()}
																size='sm'>
																<i className='tim-icons icon-send' /> Reply
															</Button>
															<UncontrolledTooltip
																delay={0}
																target='tooltip442113005'>
																Reply to Comment
															</UncontrolledTooltip>
															<Button
																className='btn-simple pull-right'
																color='danger'
																href='#pablo'
																onClick={e => e.preventDefault()}
																size='sm'>
																<i className='tim-icons icon-heart-2' /> 243
															</Button>
														</div>
													</Media>
												</Media>
											</Media>
										</Media>
									</div>
									<h3 className='title text-center'>Post your comment</h3>
									<Media className='media-post'>
										<a
											className='pull-left author'
											href='#pablo'
											onClick={e => e.preventDefault()}>
											<div className='avatar'>
												<Media
													alt='...'
													className='img-raised'
													src={require('assets/img/olivia.jpg')}
												/>
											</div>
										</a>
										<Media body>
											<Input
												placeholder='Write a nice reply or go home...'
												rows='4'
												type='textarea'
											/>
											<div className='media-footer'>
												<Button
													className='pull-right'
													color='primary'
													href='#pablo'
													onClick={e => e.preventDefault()}>
													Reply
												</Button>
											</div>
										</Media>
									</Media>
									{/* end media-post */}
								</Col>
							</Row>
						</Container>
					</div>
					<div className='section'>
						<Container>
							<Col md='12'>
								<h2 className='title text-center'>Related Stories</h2>
								<br />
								<div className='blogs-1'>
									<Row>
										<Col className='ml-auto mr-auto' md='12'>
											<Card className='card-blog card-plain blog-horizontal'>
												<Row>
													<Col lg='4'>
														<div className='card-image'>
															<a
																href='#pablo'
																onClick={e => e.preventDefault()}>
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
																If you’ve ever wanted to train a machine
																learning model and integrate it with IFTTT, you
																now can with a new offering from MateLabs.
																MateVerse, a platform where novices can spin out
																machine...If you’ve ever wanted to train a
																machine learning model and integrate it with
																IFTTT, you now can with a new offering from
																MateLabs. MateVerse, a platform where novices
																can spin out machine...{' '}
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
															<a
																href='#pablo'
																onClick={e => e.preventDefault()}>
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
																boosted by large, late-stage financings and a
																few outsized early-stage rounds in tech and
																healthcare..enture investment in U.S. startups
																rose sequentially in the second quarter of 2017,
																boosted by large, late-stage financings and a
																few outsized early-stage rounds in tech and
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
								</div>
							</Col>
						</Container>
					</div>
					<DemoFooter />
				</div>
			</>
		)
	}
}

export default BlogPost
