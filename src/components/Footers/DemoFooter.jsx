import React from 'react'
import { Link } from 'react-router-dom'

// reactstrap components
import {
	Button,
	NavItem,
	NavLink,
	Nav,
	Container,
	Row,
	Col,
	UncontrolledTooltip,
} from 'reactstrap'

class DemoFooter extends React.Component {
	render() {
		return (
			<>
				<footer className='footer'>
					<Container>
						<Row>
							<Col md='3'>
								<h1 className='title'>BLK• React</h1>
							</Col>
							<Col md='3' xs='6'>
								<Nav>
									<NavItem>
										<NavLink to={ROUTE_INDEX} tag={Link}>
											Home
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink to='/landing-page' tag={Link}>
											Landing
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink to='/register-page' tag={Link}>
											Register
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink to='/profile-page' tag={Link}>
											Profile
										</NavLink>
									</NavItem>
								</Nav>
							</Col>
							<Col md='3' xs='6'>
								<Nav>
									<NavItem>
										<NavLink
											href='https://creative-tim.com/contact-us?ref=blkdspr-footer'
											target='_blank'>
											Contact Us
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											href='https://creative-tim.com/about-us?ref=blkdspr-footer'
											target='_blank'>
											About Us
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											href='http://creative-tim.com/blog?ref=blkdspr-footer'
											target='_blank'>
											Blog
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											href='https://opensource.org/licenses/MIT?ref=blkdspr-footer'
											target='_blank'>
											License
										</NavLink>
									</NavItem>
								</Nav>
							</Col>
							<Col md='3'>
								<h3 className='title'>Follow us:</h3>
								<div className='btn-wrapper profile text-left'>
									<Button
										className='btn-icon btn-neutral btn-round btn-simple'
										color='default'
										href='https://twitter.com/creativetim'
										id='tooltip39661217'
										target='_blank'>
										<i className='fab fa-twitter' />
									</Button>
									<UncontrolledTooltip delay={0} target='tooltip39661217'>
										Follow us
									</UncontrolledTooltip>
									<Button
										className='btn-icon btn-neutral btn-round btn-simple ml-1'
										color='default'
										href='https://www.facebook.com/creativetim'
										id='tooltip206037619'
										target='_blank'>
										<i className='fab fa-facebook-square' />
									</Button>
									<UncontrolledTooltip delay={0} target='tooltip206037619'>
										Like us
									</UncontrolledTooltip>
									<Button
										className='btn-icon btn-neutral btn-round btn-simple ml-1'
										color='default'
										href='https://dribbble.com/creativetim'
										id='tooltip750293512'
										target='_blank'>
										<i className='fab fa-dribbble' />
									</Button>
									<UncontrolledTooltip delay={0} target='tooltip750293512'>
										Follow us
									</UncontrolledTooltip>
								</div>
							</Col>
						</Row>
					</Container>
				</footer>
			</>
		)
	}
}

export default DemoFooter
