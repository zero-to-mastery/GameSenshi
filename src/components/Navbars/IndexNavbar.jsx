import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { auth } from 'utils/firebaseFrontEnd'
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
	USER_PHOTO_URL,
} from 'constantValues'

import AuthModal from 'components/Modals/AuthModal'
import SingInModal from 'components/Modals/SignInModal'

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
						[USER_PHOTO_URL]: avatarURL,
					} = userStore.state
					const {
						[ALERT_BODY]: alertBody,
						[ALERT_OPEN]: alertOpen,
						[ALERT_COLOR]: alertColor,
					} = alertStore.state
					return (
						<>
							<SingInModal />
							<AuthModal />
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
											<Nav className='flex-row' navbar>
												{//small screen size
												signedIn ? (
													<NavItem className='active navbar-toggler'>
														<NavLink
															href='notification'
															onClick={e => e.preventDefault()}>
															<i
																aria-hidden={true}
																className='tim-icons icon-bell-55'
															/>
														</NavLink>
													</NavItem>
												) : (
													<NavItem className='active navbar-toggler'>
														<Button
															color='primary'
															type='button'
															onClick={() => {
																history.push('signUp')
															}}>
															Sign up
														</Button>
													</NavItem>
												)}
												<NavItem className='active'>
													<button // button to activate collapsed
														aria-expanded={collapseOpen}
														className='navbar-toggler'
														onClick={toggleCollapse}>
														<span className='navbar-toggler-bar bar1 mt-1' />
														<span className='navbar-toggler-bar bar2' />
														<span className='navbar-toggler-bar bar3' />
													</button>
												</NavItem>
											</Nav>
										</div>
										<Collapse
											className={'justify-content-end ' + collapseOut}
											style={
												(collapseOpen || onCollapseExiting) && {
													overflow: 'hidden',
												}
											}
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
															<NavItem className='active d-none d-lg-inline-flex'>
																<NavLink
																	href='/joinSenshi'
																	onClick={e => e.preventDefault()}>
																	Senshi Portal
																</NavLink>
															</NavItem>
															<NavItem className='active d-none d-lg-inline-flex'>
																<NavLink
																	href='/notification'
																	onClick={e => e.preventDefault()}>
																	<i
																		aria-hidden={true}
																		className='tim-icons icon-bell-55'
																	/>
																</NavLink>
															</NavItem>
															<UncontrolledDropdown // user menu bar
																nav
																className='d-none d-lg-inline-flex'>
																<DropdownToggle
																	caret
																	color='default'
																	data-toggle='dropdown'
																	href='#pablo'
																	id='navbarDropdownMenuLink'
																	nav
																	onClick={e => e.preventDefault()}
																	className='d-flex align-items-center pt-0 pb-0'>
																	<div
																		className='avatar'
																		style={{ height: 36, width: 36 }}>
																		<Media
																			alt='...'
																			className='img-raised'
																			style={{ height: 36, width: 36 }}
																			src={avatarURL}
																		/>
																	</div>
																</DropdownToggle>
																<DropdownMenu
																	aria-labelledby='navbarDropdownMenuLink'
																	right>
																	<DropdownItem
																		href='#pablo'
																		className='text-dark mt-0 py-1 px-4'
																		style={{ fontSize: '1rem' }}
																		onClick={e => e.preventDefault()}>
																		<strong>{username}</strong>
																	</DropdownItem>
																	<DropdownItem divider />
																	<DropdownItem
																		href='#pablo'
																		className='text-dark mt-0 py-1 px-4'
																		style={{ fontSize: '1rem' }}
																		onClick={e => e.preventDefault()}>
																		My Senshi
																	</DropdownItem>
																	<DropdownItem
																		className='text-dark mt-0 py-1 px-4'
																		style={{ fontSize: '1rem' }}
																		onClick={e => e.preventDefault()}>
																		My Account
																	</DropdownItem>
																	<DropdownItem divider />
																	<DropdownItem
																		className='text-dark mt-0 py-1 px-4'
																		style={{ fontSize: '1rem' }}
																		onClick={e => e.preventDefault()}>
																		Help
																	</DropdownItem>
																	<DropdownItem
																		className='text-dark mt-0 py-1 px-4'
																		style={{ fontSize: '1rem' }}
																		href='#pablo'
																		onClick={() => {
																			auth().signOut()
																		}}>
																		Sign Out
																	</DropdownItem>
																</DropdownMenu>
															</UncontrolledDropdown>
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
												signedIn ? (
													<>
														<NavItem className='p-0'>
															<NavLink data-placement='bottom' href='#pablo'>
																<Row>
																	<Col
																		xs='2'
																		style={{
																			paddingLeft: 12,
																			paddingRight: 18,
																		}}>
																		<div
																			className='avatar'
																			style={{ height: 24, width: 24 }}>
																			<Media
																				alt='...'
																				className='img-raised'
																				style={{ height: 24, width: 24 }}
																				src={avatarURL}
																			/>
																		</div>
																	</Col>
																	<Col>
																		<p>{username}</p>
																	</Col>
																</Row>
															</NavLink>
														</NavItem>
														<NavItem className='p-0'>
															<NavLink data-placement='bottom' href='#pablo'>
																<Row>
																	<Col xs='2'>
																		<i className='fab fas fa-user-plus' />
																	</Col>
																	<Col>
																		<p>My Senshi</p>
																	</Col>
																</Row>
															</NavLink>
														</NavItem>
														<NavItem className='p-0'>
															<NavLink data-placement='bottom' href='#pablo'>
																<Row>
																	<Col xs='2'>
																		<i className='fab fas fa-question' />
																	</Col>
																	<Col>
																		<p>Help</p>
																	</Col>
																</Row>
															</NavLink>
														</NavItem>
														<NavItem className='p-0'>
															<NavLink
																data-placement='bottom'
																href='#pablo'
																onClick={() => {
																	auth().signOut()
																	toggleCollapse()
																}}>
																<Row>
																	<Col xs='2'>
																		<i className='fab fas fa-sign-out-alt' />
																	</Col>
																	<Col>
																		<p>Sign out</p>
																	</Col>
																</Row>
															</NavLink>
														</NavItem>
														<NavItem className='p-0'>
															<NavLink data-placement='bottom' href='#pablo'>
																<Row>
																	<Col xs='2'>
																		<i className='tim-icons icon-key-25' />
																	</Col>
																	<Col>
																		<p>Senshi Portal</p>
																	</Col>
																</Row>
															</NavLink>
														</NavItem>
													</>
												) : (
													<>
														<NavItem className='p-0'>
															<NavLink data-placement='bottom' href='/signIn'>
																<Row>
																	<Col xs='2'>
																		<i className='fab fas fa-sign-in-alt' />
																	</Col>
																	<Col>
																		<p>Sign in</p>
																	</Col>
																</Row>
															</NavLink>
														</NavItem>
														<NavItem className='p-0'>
															<NavLink data-placement='bottom' href='/signUp'>
																<Row>
																	<Col xs='2'>
																		<i className='fab fas fa-user-plus' />
																	</Col>
																	<Col>
																		<p>Sign up</p>
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
								style={{ zIndex: 1000, marginTop: navbarHeight }}
								isOpen={alertOpen}
								toggle={() => {
									alertStore.setState(state => {
										state[ALERT_OPEN] = !state[ALERT_OPEN]
										return state
									})
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
