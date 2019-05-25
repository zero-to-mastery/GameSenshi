import React from 'react'
import { Link, withRouter } from 'react-router-dom'

// reactstrap components
import {
	Button,
	Collapse,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
	Row,
	Col,
} from 'reactstrap'

import logo from 'assets/img/favicon-32x32.png'

const widthBreakPoint = 991

class ComponentsNavbar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			collapseOpen: false,
			color: 'navbar-transparent',
			overWidthBreakPoint: window.innerWidth > widthBreakPoint,
			collapseExited: true,
		}
	}
	componentDidMount() {
		window.addEventListener('scroll', this.changeColor)
		window.addEventListener('resize', this.onDimensionChange)
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.changeColor)
		window.removeEventListener('resize', this.onDimensionChange)
	}

	onDimensionChange = () => {
		if (
			window.innerWidth > widthBreakPoint &&
			!this.state.overWidthBreakPoint
		) {
			this.setState({ overWidthBreakPoint: true })
		} else if (
			window.innerWidth <= widthBreakPoint &&
			this.state.overWidthBreakPoint
		) {
			this.setState({ overWidthBreakPoint: false })
		}
	}

	changeColor = () => {
		if (
			document.documentElement.scrollTop > 99 ||
			document.body.scrollTop > 99
		) {
			this.setState({
				color: 'bg-purple',
			})
		} else if (
			document.documentElement.scrollTop < 100 ||
			document.body.scrollTop < 100
		) {
			this.setState({
				color: 'navbar-transparent',
			})
		}
	}
	toggleCollapse = () => {
		document.documentElement.classList.toggle('nav-open')
		this.setState({
			collapseOpen: !this.state.collapseOpen,
		})
	}
	onCollapseEntering = () => {
		this.setState({
			collapseExited: false,
		})
	}
	onCollapseExiting = () => {
		this.setState({
			collapseOut: 'collapsing-out',
		})
	}
	onCollapseExited = () => {
		this.setState({
			collapseOut: '',
			collapseExited: true,
		})
	}
	scrollToDownload = () => {
		document
			.getElementById('download-section')
			.scrollIntoView({ behavior: 'smooth' })
	}
	render() {
		const {
			props: { history },
			state: { color, collapseOpen, collapseOut, overWidthBreakPoint },
			toggleCollapse,
			onCollapseExiting,
			onCollapseExited,
			onCollapseEntering,
			collapseExited,
		} = this
		return (
			<Navbar
				className={'fixed-top ' + color}
				color-on-scroll='100'
				expand='lg'>
				<Container>
					<div className='navbar-translate'>
						<NavbarBrand
							data-placement='bottom'
							to='/'
							rel='noopener noreferrer'
							tag={Link}>
							<img src={logo} alt='Game Senshi' />
							<span>&nbsp;&nbsp;&nbsp;</span>
							GAME SENSHI
						</NavbarBrand>
						<div className='d-flex align-items-center'>
							{!overWidthBreakPoint && (
								<Button
									color='primary'
									type='button'
									onClick={() => {
										history.push('signup')
									}}>
									Sign up
								</Button>
							)}
							<button
								aria-expanded={collapseOpen}
								className='navbar-toggler navbar-toggler'
								onClick={toggleCollapse}>
								<span className='navbar-toggler-bar bar1' />
								<span className='navbar-toggler-bar bar2' />
								<span className='navbar-toggler-bar bar3' />
							</button>
						</div>
					</div>
					<Collapse
						className={'justify-content-end ' + collapseOut}
						navbar
						isOpen={collapseOpen}
						onEntering={onCollapseEntering}
						onExiting={onCollapseExiting}
						onExited={onCollapseExited}>
						<div className='navbar-collapse-header'>
							<Row>
								<Col className='collapse-brand' xs='6'>
									<a href='#pablo' onClick={e => e.preventDefault()}>
										GAME SENSHI
									</a>
								</Col>
								<Col className='collapse-close text-right' xs='6'>
									<button
										aria-expanded={collapseOpen}
										className='navbar-toggler'
										onClick={toggleCollapse}>
										<i className='tim-icons icon-simple-remove' />
									</button>
								</Col>
							</Row>
						</div>
						<Nav navbar>
							{(!collapseOpen && collapseExited) || overWidthBreakPoint ? (
								<>
									<NavItem className='p-0'>
										<Button
											className='btn-simple font-weight-bold'
											color='primary'
											type='button'
											onClick={() => {
												history.push('signin')
											}}>
											Sign in
										</Button>
									</NavItem>
									<NavItem className='p-0'>
										<Button
											color='primary'
											type='button'
											onClick={() => {
												history.push('signup')
											}}>
											Sign up
										</Button>
									</NavItem>
								</>
							) : (
								<>
									<NavItem className='p-0'>
										<NavLink
											data-placement='bottom'
											href='/signin'
											rel='noopener noreferrer'
											target='_blank'
											onClick={e => {
												e.preventDefault()
												history.push('signin')
											}}>
											<Row>
												<Col xs='2' sm='2' md='2'>
													<i className='fab fas fa-sign-in-alt' />
												</Col>
												<Col>
													<p className='d-lg-none d-xl-none'>Sign in</p>
												</Col>
											</Row>
										</NavLink>
									</NavItem>
									<NavItem className='p-0'>
										<NavLink
											data-placement='bottom'
											href='/signup'
											rel='noopener noreferrer'
											target='_blank'
											onClick={e => {
												e.preventDefault()
												history.push('signup')
											}}>
											<Row>
												<Col xs='2' sm='2' md='2'>
													<i className='fab fas fa-user-plus' />
												</Col>
												<Col>
													<p className='d-lg-none d-xl-none'>Sign up</p>
												</Col>
											</Row>
										</NavLink>
									</NavItem>
								</>
							)}
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		)
	}
}

export default withRouter(ComponentsNavbar)
