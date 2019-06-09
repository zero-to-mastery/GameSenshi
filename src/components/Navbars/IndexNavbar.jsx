import React from 'react'
import { Link, withRouter } from 'react-router-dom'

// state
import { userStore, alertStore, Subscribe } from 'state'

// reactstrap components
import {
	Button,
	Collapse,
	Media,
	DropdownMenu,
	UncontrolledDropdown,
	DropdownItem,
	DropdownToggle,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
	Row,
	Col,
	Alert,
} from 'reactstrap'

import ReactResizeDetector from 'react-resize-detector'

// constants
import {
	USER_SIGNED_IN,
	USER_DISPLAY_NAME,
	ALERT_BODY,
	ALERT_OPEN,
	ALERT_COLOR,
} from 'constantValues'

import { SocialAuthModal } from 'components'

import logo from 'assets/img/favicon-32x32.png'

const widthBreakPoint = 991

const bgPurple = 'bg-purple'

class ComponentsNavbar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			collapseOpen: false,
			color: 'navbar-transparent',
			overWidthBreakPoint: window.innerWidth > widthBreakPoint,
			collapseExited: true,
			navbarHeight: 0,
		}
		this.setState = this.setState.bind(this)
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
			document.documentElement.scrollTop > 299 ||
			document.body.scrollTop > 299
		) {
			this.setState({
				color: bgPurple,
			})
		} else if (
			document.documentElement.scrollTop < 300 ||
			document.body.scrollTop < 300
		) {
			this.setState({
				color:
					(alertStore.state[ALERT_OPEN] && bgPurple) || 'navbar-transparent',
			})
		}
	}

	onResize = (width, height) => {
		this.setState({
			navbarHeight: height,
		})
	}

	toggleCollapse = () => {
		document.documentElement.classList.toggle('nav-open')
		this.setState(state => {
			state.collapseOpen = !state.collapseOpen
			return state
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
			state: {
				color,
				collapseOpen,
				collapseOut,
				overWidthBreakPoint,
				navbarHeight,
			},
			setState,
			onResize,
			toggleCollapse,
			onCollapseExiting,
			onCollapseExited,
			onCollapseEntering,
			collapseExited,
		} = this
		return (
			<Subscribe to={[userStore, alertStore]}>
				{(userStore, alertStore) => {
					const {
						[USER_DISPLAY_NAME]: username,
						[USER_SIGNED_IN]: signedIn,
					} = userStore.state
					const {
						[ALERT_BODY]: alertBody,
						[ALERT_OPEN]: alertOpen,
						[ALERT_COLOR]: alertColor,
					} = alertStore.state
					return (
						<>
							<SocialAuthModal />
							<div className='fixed-top'>
								<Navbar
									style={{
										zIndex: 2147483647,
									}}
									className={(alertOpen && bgPurple) || color}
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
												<div className='d-none d-sm-inline'>
													&nbsp;&nbsp;&nbsp;GAME SENSHI
												</div>
											</NavbarBrand>
											<Nav className='ml-auto flex-row' navbar>
												{//small screen size
												!overWidthBreakPoint &&
													(signedIn ? (
														<>
															<NavItem className='active'>
																<NavLink
																	href='notification'
																	onClick={e => e.preventDefault()}>
																	<i
																		aria-hidden={true}
																		className='tim-icons icon-bell-55'
																	/>
																</NavLink>
															</NavItem>
															{/* <NavItem className='active'>
																<div className='avatar'>
																	<Media
																		alt='...'
																		className='img-raised'
																		src={require('assets/img/james.jpg')}
																	/>
																</div>
															</NavItem> */}
														</>
													) : (
														<>
															<NavItem className='active'>
																<Button
																	color='primary'
																	type='button'
																	onClick={() => {
																		history.push('signUp')
																	}}>
																	Sign up
																</Button>
															</NavItem>
															<NavItem className='active'>
																<button
																	aria-expanded={collapseOpen}
																	className='navbar-toggler navbar-toggler'
																	onClick={toggleCollapse}>
																	<span className='navbar-toggler-bar bar1 mt-1' />
																	<span className='navbar-toggler-bar bar2' />
																	<span className='navbar-toggler-bar bar3' />
																</button>
															</NavItem>
														</>
													))}
											</Nav>
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
												{(!collapseOpen && collapseExited) ||
												overWidthBreakPoint ? ( // big screen size or not collapsed
													signedIn ? (
														<>
															<NavItem className='active'>
																<NavLink
																	href='joinSenshi'
																	onClick={e => e.preventDefault()}>
																	Become A SenShi
																</NavLink>
															</NavItem>
															<NavItem className='active'>
																<NavLink
																	href='notification'
																	onClick={e => e.preventDefault()}>
																	<i
																		aria-hidden={true}
																		className='tim-icons icon-bell-55'
																	/>
																</NavLink>
															</NavItem>
														</>
													) : (
														<>
															<NavItem className='p-0'>
																<Button
																	className='btn-simple font-weight-bold'
																	color='primary'
																	type='button'
																	onClick={() => {
																		history.push('signIn')
																	}}>
																	Sign in
																</Button>
															</NavItem>
															<NavItem className='p-0'>
																<Button
																	color='primary'
																	type='button'
																	onClick={() => {
																		history.push('signUp')
																	}}>
																	Sign up
																</Button>
															</NavItem>
														</>
													)
												) : // small screen size and collapsed

												signedIn ? null : (
													<>
														<NavItem className='p-0'>
															<NavLink
																data-placement='bottom'
																href='/signIn'
																rel='noopener noreferrer'
																target='_blank'
																onClick={e => {
																	e.preventDefault()
																	history.push('signIn')
																}}>
																<Row>
																	<Col xs='2' sm='2' md='2'>
																		<i className='fab fas fa-sign-in-alt' />
																	</Col>
																	<Col>
																		<p className='d-lg-none d-xl-none'>
																			Sign in
																		</p>
																	</Col>
																</Row>
															</NavLink>
														</NavItem>
														<NavItem className='p-0'>
															<NavLink
																data-placement='bottom'
																href='/signUp'
																rel='noopener noreferrer'
																target='_blank'
																onClick={e => {
																	e.preventDefault()
																	history.push('signUp')
																}}>
																<Row>
																	<Col xs='2' sm='2' md='2'>
																		<i className='fab fas fa-user-plus' />
																	</Col>
																	<Col>
																		<p className='d-lg-none d-xl-none'>
																			Sign up
																		</p>
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
								<ReactResizeDetector handleHeight onResize={onResize} />
							</div>
							<Alert
								style={{ zIndex: 2147483647, marginTop: navbarHeight }}
								isOpen={alertOpen}
								toggle={() => {
									alertStore.setState({ [ALERT_OPEN]: false })
								}}
								color={alertColor}
								className='d-flex align-items-center fixed-top'>
								<Container>{alertBody}</Container>
							</Alert>
						</>
					)
				}}
			</Subscribe>
		)
	}
}

export default withRouter(ComponentsNavbar)
