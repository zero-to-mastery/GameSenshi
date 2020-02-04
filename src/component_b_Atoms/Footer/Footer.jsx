import React from 'react'
import { NavItem, NavLink, Nav } from 'reactstrap'
import { ROUTE_PAGE_PROFILE } from '2_routes'
import { Exports } from '4_comp_1_Protons'
import { stopUndefined } from '1_utils'
import { H1Styled, H3Styled } from './styled'

const {
	Link,
	Button,
	UncontrolledTooltip,
	Container,
	Row,
	Col,
} = stopUndefined(Exports)

const Footer = () => {
	return (
		<footer className='footer'>
			<Container>
				<Row xs='1'>
					<Col lg='2'>
						<H1Styled className='title'>GAME SENSHI</H1Styled>
					</Col>
					<Col lg='3'>
						<Nav className='w-100'>
							<NavItem>
								<NavLink to='/' tag={Link}>
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
								<NavLink to={ROUTE_PAGE_PROFILE} tag={Link}>
									Profile
								</NavLink>
							</NavItem>
						</Nav>
					</Col>
					<Col lg='3'>
						<Nav className='w-100'>
							<NavItem>
								<NavLink
									href='https://creative-tim.com/contact-us?ref=blkdsr-footer'
									tag={Link}
								>
									Contact Us
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									tag={Link}
									href='https://creative-tim.com/about-us?ref=blkdsr-footer'
								>
									About Us
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									tag={Link}
									href='https://creative-tim.com/blog?ref=blkdsr-footer'
								>
									Blog
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink tag={Link} href='https://opensource.org/licenses/MIT'>
									License
								</NavLink>
							</NavItem>
						</Nav>
					</Col>
					<Col lg='4'>
						<H3Styled className='title'>Follow us:</H3Styled>
						<div className='btn-wrapper profile'>
							<Button
								className='btn-icon btn-neutral btn-round btn-simple'
								color='default'
								href='https://twitter.com/creativetim'
								id='tooltip622135962'
								target='_blank'
							>
								<i className='fab fa-twitter' />
							</Button>
							<UncontrolledTooltip delay={0} target='tooltip622135962'>
								Follow us
							</UncontrolledTooltip>
							<Button
								className='btn-icon btn-neutral btn-round btn-simple'
								color='default'
								href='https://www.facebook.com/creativetim'
								id='tooltip230450801'
								target='_blank'
							>
								<i className='fab fa-facebook-square' />
							</Button>
							<UncontrolledTooltip delay={0} target='tooltip230450801'>
								Like us
							</UncontrolledTooltip>
							<Button
								className='btn-icon btn-neutral btn-round btn-simple'
								color='default'
								href='https://dribbble.com/creativetim'
								id='tooltip318450378'
								target='_blank'
							>
								<i className='fab fa-dribbble' />
							</Button>
							<UncontrolledTooltip delay={0} target='tooltip318450378'>
								Follow us
							</UncontrolledTooltip>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export { Footer }
