import React, { useState, useEffect, useRef, Fragment } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
// nodejs library that concatenates classes
import classnames from 'classnames'

//state
import { Subscribe, userStore } from 'state'

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from 'reactstrap'

import {
	USER_DISPLAY_NAME,
	ROUTE_PAGE_SETTINGS,
	ROUTE_PAGE_SETTINGS_BILLING,
	ROUTE_PAGE_SETTINGS_ACCOUNT,
	ROUTE_PAGE_SETTINGS_NOTIFICATION,
} from 'constantValues'

// core components
import ImageUpload from 'components/CustomUpload/ImageUpload.jsx'
import {
	Footer,
	IndexNavbar,
	GeneralSettingsTabPane,
	BillingSettingsTabPane,
	AccountSettingsTabPane,
	NotificationSettingsTabPane,
} from 'components'

const routes = [
	{ tabPane: GeneralSettingsTabPane, path: ROUTE_PAGE_SETTINGS },
	{ tabPane: BillingSettingsTabPane, path: ROUTE_PAGE_SETTINGS_BILLING },
	{ tabPane: AccountSettingsTabPane, path: ROUTE_PAGE_SETTINGS_ACCOUNT },
	{
		tabPane: NotificationSettingsTabPane,
		path: ROUTE_PAGE_SETTINGS_NOTIFICATION,
	},
]

const navItems = [
	{
		navLink: 'General',
		icon: 'icon-single-02',
		to: ROUTE_PAGE_SETTINGS,
	},
	{
		navLink: 'Billing',
		icon: 'icon-credit-card',
		to: ROUTE_PAGE_SETTINGS_BILLING,
	},
	{
		navLink: 'Account',
		icon: 'icon-lock-circle',
		to: ROUTE_PAGE_SETTINGS_ACCOUNT,
	},
	{
		navLink: 'Notification',
		icon: 'icon-volume-98',
		to: ROUTE_PAGE_SETTINGS_NOTIFICATION,
	},
]

const SettingsPage = props => {
	const [profileTabs, setProfileTab] = useState(0)
	const [editMode, setEditMode] = useState(false)

	const wrapper = useRef(null)

	const {
		location: { pathname },
	} = props

	useEffect(() => {
		switch (pathname) {
			case ROUTE_PAGE_SETTINGS_BILLING:
				setProfileTab(1)
				break
			case ROUTE_PAGE_SETTINGS_ACCOUNT:
				setProfileTab(2)
				break
			case ROUTE_PAGE_SETTINGS_NOTIFICATION:
				setProfileTab(3)
				break
			default:
				break
		}

		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		wrapper.current.scrollTop = 0
		document.body.classList.add('account-settings')
		return () => {
			document.body.classList.remove('account-settings')
		}
	}, [])

	return (
		<>
			<IndexNavbar />
			<Subscribe to={[userStore]}>
				{userStore => {
					const {
						state: { [USER_DISPLAY_NAME]: name },
					} = userStore
					return (
						<div className='wrapper' ref={wrapper}>
							<div className='section'>
								<Container>
									<Row>
										<Col md='3'>
											<div className='section'>
												{/* User Information */}
												<section className='text-center'>
													<ImageUpload avatar addBtnColor='default' />
													{editMode ? (
														<p />
													) : (
														<h3
															className='title'
															onDoubleClick={() => {
																setEditMode(prev => !prev)
															}}>
															{name}{' '}
															<i
																className='tim-icons icon-pencil editable'
																onClick={() => {
																	setEditMode(prev => !prev)
																}}
															/>
														</h3>
													)}
												</section>
												{/* User Information */}
												{/* Profile Sidebar */}
												<section>
													<br />
													<Nav
														className='flex-column nav-tabs-info'
														role='tablist'>
														{navItems.map((navItem, i) => {
															const { navLink, icon, to } = navItem
															return (
																<Fragment key={i}>
																	<NavItem>
																		<NavLink
																			className={classnames({
																				active: profileTabs === i,
																			})}
																			onClick={e => setProfileTab(i)}
																			to={to}
																			tag={Link}>
																			<i className={`tim-icons ${icon}`} />{' '}
																			{navLink}
																		</NavLink>
																	</NavItem>
																	{i + 1 !== navItems.length && (
																		<hr className='line-info' />
																	)}
																</Fragment>
															)
														})}
													</Nav>
												</section>
												{/* End Profile Sidebar */}
												{/* Profile Completion */}
												<br />
												<br />
												<br />
												{/* End Profile Completion */}
											</div>
										</Col>
										<Col className='ml-auto' md='8'>
											<div className='section'>
												<Switch>
													{routes.map((route, i) => {
														const { tabPane: TabPane, path } = route
														return (
															<Route
																key={i}
																path={path}
																render={props => {
																	return <TabPane {...props} />
																}}
															/>
														)
													})}
												</Switch>
											</div>
										</Col>
									</Row>
								</Container>
							</div>
							<Footer />
						</div>
					)
				}}
			</Subscribe>
		</>
	)
}

export default SettingsPage
