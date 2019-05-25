import React from 'react'
import { Link } from 'react-router-dom'

// reactstrap components
import { Card, Container, Row, Col } from 'reactstrap'

class Examples extends React.Component {
	render() {
		return (
			<>
				<div className='section section-examples' data-background-color='black'>
					<Container>
						<Col className='ml-auto mr-auto text-center' md='8'>
							<div className='section-description'>
								<h2 className='title'>Example Pages</h2>
								<h5 className='description'>
									Forget about building everything from scratch. From landing
									pages to e-commerce or blog pages, you will be able jump start
									your development. Show your clients a quick prototype and get
									inspired for your next project!
								</h5>
							</div>
						</Col>
						<Row>
							<Col md='4'>
								<h5 className='title'>About Us</h5>
								<Card>
									<Link to='/about-us'>
										<img
											alt='...'
											src={require('assets/img/presentation-page/pages/about-us.png')}
										/>
									</Link>
								</Card>
								<h5 className='title'>Landing Page</h5>
								<Card>
									<Link to='/landing-page'>
										<img
											alt='...'
											src={require('assets/img/presentation-page/pages/landing.png')}
										/>
									</Link>
								</Card>
								<h5 className='title'>Login Page</h5>
								<Card>
									<Link to='/login-page'>
										<img
											alt='...'
											src={require('assets/img/presentation-page/pages/login.png')}
										/>
									</Link>
								</Card>
								<h5 className='title'>Register Page</h5>
								<Card>
									<Link to='/register-page'>
										<img
											alt='...'
											src={require('assets/img/presentation-page/pages/register.png')}
										/>
									</Link>
								</Card>
								<h5 className='title'>Error 500</h5>
								<Card>
									<Link to='/500-error'>
										<img
											alt='...'
											src={require('assets/img/presentation-page/pages/500-error.png')}
										/>
									</Link>
								</Card>
								<h5 className='title'>Error 404</h5>
								<Card>
									<Link to='/404-error'>
										<img
											alt='...'
											src={require('assets/img/presentation-page/pages/404-error.png')}
										/>
									</Link>
								</Card>
								<h5 className='title'>Invoice Page</h5>
								<Card>
									<Link to='/invoice-page'>
										<img
											alt='...'
											src={require('assets/img/presentation-page/pages/invoice-page.png')}
										/>
									</Link>
								</Card>
							</Col>
							<Col md='4'>
								<h5 className='title'>Blog Post</h5>
								<Card>
									<Link to='/blog-post'>
										<img
											alt='...'
											src={require('assets/img/presentation-page/pages/blog-post.png')}
										/>
									</Link>
								</Card>
								<h5 className='title'>Product Page</h5>
								<Card>
									<Link to='/product-page'>
										<img
											alt='...'
											src={require('assets/img/presentation-page/pages/product.png')}
										/>
									</Link>
								</Card>
								<h5 className='title'>Profile Page</h5>
								<Card>
									<Link to='/profile-page'>
										<img
											alt='...'
											src={require('assets/img/presentation-page/pages/profile.png')}
										/>
									</Link>
								</Card>
								<h5 className='title'>Account Settings</h5>
								<Card>
									<Link to='/account-settings'>
										<img
											alt='...'
											src={require('assets/img/presentation-page/pages/account-settings.png')}
										/>
									</Link>
								</Card>
								<h5 className='title'>Reset Page</h5>
								<Card>
									<Link to='/reset-page'>
										<img
											alt='...'
											src={require('assets/img/presentation-page/pages/reset-page.png')}
										/>
									</Link>
								</Card>
								<h5 className='title'>Checkout Page</h5>
								<Card>
									<Link to='/checkout-page'>
										<img
											alt='...'
											src={require('assets/img/presentation-page/pages/checkout-page.png')}
										/>
									</Link>
								</Card>
								<h5 className='title'>Chat Page</h5>
								<Card>
									<Link to='/chat-page'>
										<img
											alt='...'
											src={require('assets/img/presentation-page/pages/chat-page.png')}
										/>
									</Link>
								</Card>
							</Col>
							<Col md='4'>
								<h5 className='title'>Pricing Page</h5>
								<Card>
									<Link to='/pricing'>
										<img
											alt='...'
											src={require('assets/img/presentation-page/pages/pricing.png')}
										/>
									</Link>
								</Card>
								<h5 className='title'>Ecommerce</h5>
								<Card>
									<Link to='/ecommerce'>
										<img
											alt='...'
											src={require('assets/img/presentation-page/pages/ecommerce.png')}
										/>
									</Link>
								</Card>
								<h5 className='title'>Blog Posts</h5>
								<Card>
									<Link to='/blog-posts'>
										<img
											alt='...'
											src={require('assets/img/presentation-page/pages/blog-posts.png')}
										/>
									</Link>
								</Card>
								<h5 className='title'>Contact Us</h5>
								<Card>
									<Link to='/contact-us'>
										<img
											alt='...'
											src={require('assets/img/presentation-page/pages/contact.png')}
										/>
									</Link>
								</Card>
							</Col>
						</Row>
					</Container>
				</div>
			</>
		)
	}
}

export default Examples
