import React from 'react'

// reactstrap components
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardTitle,
	Container,
	Row,
	Col,
} from 'reactstrap'

class Blogs extends React.Component {
	render() {
		return (
			<>
				<div className='cd-section' id='blogs'>
					{/* ********* BLOGS 1 ********* */}
					<div className='section blogs-1' id='blogs-1'>
						<Container>
							<h2 className='title'>Our recent writings</h2>
							<br />
							<Row className='align-items-center'>
								<Col lg='6'>
									<Card
										className='card-blog card-background'
										data-animation={true}>
										<div
											className='full-background'
											style={{
												backgroundImage:
													'url(' +
													require('assets/img/marc-olivier-jodoin.jpg') +
													')',
											}}
										/>
										<CardBody>
											<div className='content-bottom'>
												<h6 className='card-category'>Sales Leads</h6>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<CardTitle tag='h3'>
														Configure Blockchain Technology
													</CardTitle>
												</a>
											</div>
										</CardBody>
									</Card>
								</Col>
								<Col lg='3'>
									<Card
										className='card-blog card-background'
										data-animation={true}>
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
												<h6 className='card-category'>Benchmark Report</h6>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<CardTitle tag='h3'>API Management</CardTitle>
												</a>
											</div>
										</CardBody>
									</Card>
								</Col>
								<Col lg='3'>
									<Card
										className='card-blog card-background'
										data-animation={true}>
										<div
											className='full-background'
											style={{
												backgroundImage:
													'url(' +
													require('assets/img/joshua-adam-nolette.jpg') +
													')',
											}}
										/>
										<CardBody>
											<div className='content-bottom'>
												<h6 className='card-category'>
													Capabilities and Limits
												</h6>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<CardTitle tag='h3'>Quantum Computing</CardTitle>
												</a>
											</div>
										</CardBody>
									</Card>
								</Col>
							</Row>
						</Container>
					</div>
					{/* ********* END BLOGS 1 ********* */}
					{/* ********* BLOGS 2 ********* */}
					<div className='section blogs-2' id='blogs-2'>
						<Container fluid>
							<h2 className='title'>Our recent writings 2</h2>
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
													'url(' + require('assets/img/steven-roe.jpg') + ')',
											}}
										/>
										<CardBody>
											<div className='content-bottom'>
												<h6 className='card-category'>Research Byte</h6>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<CardTitle tag='h3'>AI at the Edge</CardTitle>
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
													require('assets/img/noah-wetering.jpg') +
													')',
											}}
										/>
										<CardBody>
											<div className='content-bottom'>
												<h6 className='card-category'>Data Virtualization</h6>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<CardTitle tag='h3'>
														A Spectrum of Approaches
													</CardTitle>
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
													require('assets/img/matthew-henry.jpg') +
													')',
											}}
										/>
										<CardBody>
											<div className='content-bottom'>
												<h6 className='card-category'>New Challenges</h6>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<CardTitle tag='h3'>Touch on a trend</CardTitle>
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
													'url(' + require('assets/img/waranont.jpg') + ')',
											}}
										/>
										<CardBody>
											<div className='content-bottom'>
												<h6 className='card-category'>Driverless Future</h6>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<CardTitle tag='h3'>Self-Driving Cars</CardTitle>
												</a>
											</div>
										</CardBody>
									</Card>
								</Col>
							</Row>
						</Container>
					</div>
					{/* ********* END BLOGS 2 ********* */}
					{/* ********* BLOGS 3 ********* */}
					<div className='section blogs-3'>
						<Container>
							<Row>
								<Col className='ml-auto mr-auto' md='10'>
									<h2 className='title'>Latest Blogposts 3</h2>
									<br />
									<Card className='card-blog card-plain blog-horizontal'>
										<Row>
											<Col lg='4'>
												<div className='card-image'>
													<a href='#pablo' onClick={e => e.preventDefault()}>
														<img
															alt='...'
															className='img rounded'
															src={require('assets/img/serge-kutuzov.jpg')}
														/>
													</a>
												</div>
											</Col>
											<Col lg='8'>
												<CardBody>
													<CardTitle tag='h3'>
														<a href='#pablo' onClick={e => e.preventDefault()}>
															Rover raised $65 million for pet sitting
														</a>
													</CardTitle>
													<p className='card-description'>
														Finding temporary housing for your dog should be as
														easy as renting an Airbnb. That’s the idea behind
														Rover, which raised $65 million to expand its pet
														sitting and dog-walking businesses..Finding
														temporary housing for your dog should be as easy as
														renting an Airbnb. That’s the idea behind Rover,
														which raised $65 million to expand its pet sitting
														and dog-walking businesses..{' '}
														<a href='#pablo' onClick={e => e.preventDefault()}>
															Read More
														</a>
													</p>
													<div className='author'>
														<img
															alt='...'
															className='avatar img-raised'
															src={require('assets/img/julie.jpg')}
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
															src={require('assets/img/trae-gould.jpg')}
														/>
													</a>
												</div>
											</Col>
											<Col lg='8'>
												<CardBody>
													<CardTitle tag='h3'>
														<a href='#pablo' onClick={e => e.preventDefault()}>
															MateLabs mixes machine learning with IFTTT
														</a>
													</CardTitle>
													<p className='card-description'>
														If you’ve ever wanted to train a machine learning
														model and integrate it with IFTTT, you now can with
														a new offering from MateLabs. MateVerse, a platform
														where novices can spin out machine...If you’ve ever
														wanted to train a machine learning model and
														integrate it with IFTTT, you now can with a new
														offering from MateLabs. MateVerse, a platform where
														novices can spin out machine...{' '}
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
														<a href='#pablo' onClick={e => e.preventDefault()}>
															US venture investment ticks up in Q2 2017
														</a>
													</CardTitle>
													<p className='card-description'>
														Venture investment in U.S. startups rose
														sequentially in the second quarter of 2017, boosted
														by large, late-stage financings and a few outsized
														early-stage rounds in tech and healthcare..enture
														investment in U.S. startups rose sequentially in the
														second quarter of 2017, boosted by large, late-stage
														financings and a few outsized early-stage rounds in
														tech and healthcare..{' '}
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
					{/* ********* END BLOGS 4 ********* */}
					<div className='section blogs-4' id='blogs-4'>
						<Container fluid>
							<h2 className='title'>Latest Blogposts 4</h2>
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
													'url(' + require('assets/img/rezaul-karim.jpg') + ')',
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
					{/* ********* END BLOGS 4 ********* */}
					{/* ********* END BLOGS 5 ********* */}
					<div className='blogs-5'>
						<Container>
							<Row>
								<Col className='ml-auto mr-auto' md='10'>
									<h2 className='title'>Latest Blogposts 5</h2>
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
														As near as we can tell, this guy must have thought
														he was going over backwards and tapped the rear...
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
															<i className='tim-icons icon-watch-time' /> 5 min
															read
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
															<span className='ml-1'>Jona Zmud</span>
														</div>
														<div className='stats stats-right'>
															<i className='tim-icons icon-watch-time' /> 5 min
															read
														</div>
													</CardFooter>
												</CardBody>
											</Card>
										</Col>
										<Col lg='4' xs='12'>
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
														It's been 60 years since the cover of Popular
														Mechanics magazine gave us the promise of flying
														cars...
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
									</Row>
								</Col>
							</Row>
						</Container>
					</div>
					{/* ********* END BLOGS 5 ********* */}
					{/* ********* BLOGS 6 ********* */}
					<div className='blogs-6'>
						<Container>
							<h2 className='title'>Latest Blogposts 6</h2>
							<Row>
								<Col className='ml-auto mr-auto' lg='10'>
									<Card className='card-blog card-background card-grande'>
										<div
											className='full-background'
											style={{
												backgroundImage:
													'url(' + require('assets/img/ben-konfrst.jpg') + ')',
											}}
										/>
										<CardBody>
											<div className='author'>
												<img
													alt='...'
													className='avatar img-raised'
													src={require('assets/img/olivia.jpg')}
												/>
												<span className='text-white ml-1'>by Johanna Zmud</span>
											</div>
											<a href='#pablo' onClick={e => e.preventDefault()}>
												<CardTitle tag='h2'>Miami Vice</CardTitle>
											</a>
											<h4 className='card-description'>
												The simplest visual description uses ordinary words to
												convey what the writer sees. First he or she must look
												at the subject – slowly, carefully, and repeatedly, if
												possible – to identify the parts that make the whole
											</h4>
											<Button
												color='primary'
												href='#pablo'
												onClick={e => e.preventDefault()}>
												Read more...
											</Button>
										</CardBody>
									</Card>
								</Col>
							</Row>
						</Container>
					</div>
					{/* ********* END BLOGS 6 ********* */}
					{/* ********* BLOGS 7 ********* */}
					<div className='blogs-7'>
						<Container>
							<h2 className='title'>Latest Blogposts 7</h2>
							<Row>
								<Col md='7'>
									<Card className='card-blog card-background'>
										<div
											className='full-background'
											style={{
												backgroundImage:
													'url(' +
													require('assets/img/sendra-martorell.jpg') +
													')',
											}}
										/>
										<CardBody>
											<div className='content-center'>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<CardTitle tag='h2'>
														GigaOm Market Landscape
													</CardTitle>
												</a>
												<h3 className='card-category'>Enterprise Report</h3>
												<div className='author'>
													<img
														alt='...'
														className='avatar img-raised'
														src={require('assets/img/johana.jpg')}
													/>
												</div>
											</div>
										</CardBody>
									</Card>
								</Col>
								<Col md='5'>
									<Card className='card-blog card-background'>
										<div
											className='full-background'
											style={{
												backgroundImage:
													'url(' + require('assets/img/randy-colas.jpg') + ')',
											}}
										/>
										<CardBody>
											<div className='content-center'>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<CardTitle tag='h2'>
														Development is Not Enough
													</CardTitle>
												</a>
												<h3 className='card-category'>Best Practices</h3>
												<div className='author'>
													<img
														alt='...'
														className='avatar img-raised'
														src={require('assets/img/p10.jpg')}
													/>
												</div>
											</div>
										</CardBody>
									</Card>
								</Col>
							</Row>
							<br />
							<Row>
								<Col md='5'>
									<Card className='card-blog card-background'>
										<div
											className='full-background'
											style={{
												backgroundImage:
													'url(' +
													require('assets/img/marc-olivier-jodoin.jpg') +
													')',
											}}
										/>
										<CardBody>
											<div className='content-center'>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<CardTitle tag='h2'>Improve Cyber Security</CardTitle>
												</a>
												<h3 className='card-category'>On Demand</h3>
												<div className='author'>
													<img
														alt='...'
														className='avatar img-raised'
														src={require('assets/img/julie.jpg')}
													/>
												</div>
											</div>
										</CardBody>
									</Card>
								</Col>
								<Col md='7'>
									<Card className='card-blog card-background'>
										<div
											className='full-background'
											style={{
												backgroundImage:
													'url(' + require('assets/img/waranont.jpg') + ')',
											}}
										/>
										<CardBody>
											<div className='content-center'>
												<a href='#pablo' onClick={e => e.preventDefault()}>
													<CardTitle tag='h2'>
														How Blockchain Changes Everything
													</CardTitle>
												</a>
												<h3 className='card-category'>On Market</h3>
												<div className='author'>
													<img
														alt='...'
														className='avatar img-raised'
														src={require('assets/img/christian.jpg')}
													/>
												</div>
											</div>
										</CardBody>
									</Card>
								</Col>
							</Row>
						</Container>
					</div>
					{/* ********* END BLOGS 7 ********* */}
				</div>{' '}
			</>
		)
	}
}

export default Blogs
