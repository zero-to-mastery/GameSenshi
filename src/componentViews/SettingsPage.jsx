import React, { useState, useEffect, useRef, Fragment } from 'react'
//routing
import { Link } from 'react-router-dom'
// nodejs library that concatenates classes
import classnames from 'classnames'
// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from 'reactstrap'
// constants
import {
	ROUTE_PAGE_SETTINGS_GENERAL,
	ROUTE_PAGE_SETTINGS_BILLING,
	ROUTE_PAGE_SETTINGS_ACCOUNT,
	ROUTE_PAGE_SETTINGS_NOTIFICATION,
} from 'routes'
// core components
import { ExportMultiOrganisms } from 'componentpMultiOrganisms'

const {
	Footer,
	IndexNavbar,
	GeneralSettingsTabPane,
	BillingSettingsTabPane,
	AccountSettingsTabPane,
	NotificationSettingsTabPane,
	ImageUpload,
} = ExportMultiOrganisms

const navItems = [
	{
		navLink: 'General',
		icon: 'icon-single-02',
		to: ROUTE_PAGE_SETTINGS_GENERAL,
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

	const wrapper = useRef(null)

	const {
		location: { pathname },
	} = props

	useEffect(() => {
		switch (pathname) {
			case ROUTE_PAGE_SETTINGS_GENERAL:
				setProfileTab(0)
				break
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
	}, [pathname])

	useEffect(() => {
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
			<div className='wrapper' ref={wrapper}>
				<div className='section'>
					<Container>
						<Row>
							<Col md='3'>
								<div className='section'>
									{/* User Information */}
									<section className='text-center'>
										<ImageUpload avatar addBtnColor='default' />
									</section>
									{/* User Information */}
									{/* Profile Sidebar */}
									<section>
										<br />
										<Nav className='flex-column nav-tabs-info' role='tablist'>
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
																<i className={`tim-icons ${icon}`} /> {navLink}
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
									{profileTabs === 0 && <GeneralSettingsTabPane />}
									{profileTabs === 1 && <BillingSettingsTabPane />}
									{profileTabs === 2 && <AccountSettingsTabPane />}
									{profileTabs === 3 && <NotificationSettingsTabPane />}
								</div>
							</Col>
						</Row>
					</Container>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default SettingsPage
