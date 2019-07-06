import React, { useState, useEffect, useRef } from 'react'
// nodejs library that concatenates classes
import classnames from 'classnames'

//state
import { Subscribe, userStore } from 'state'

// reactstrap components
import {
	NavItem,
	NavLink,
	Nav,
	TabContent,
	Container,
	Row,
	Col,
} from 'reactstrap'

import { USER_DISPLAY_NAME } from 'constantValues'

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

const SettingsPage = props => {
	const [profileTabs, setProfileTab] = useState(1)

	const toggleTabs = (e, index) => {
		e.preventDefault()
		setProfileTab(index)
	}

	const wrapper = useRef(null)

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
													<h3 className='title'>{name}</h3>
												</section>
												{/* User Information */}
												{/* Profile Sidebar */}
												<section>
													<br />
													<Nav
														className='flex-column nav-tabs-info'
														role='tablist'>
														<NavItem>
															<NavLink
																className={classnames({
																	active: profileTabs === 1,
																})}
																onClick={e => toggleTabs(e, 1)}
																href='#pablo'>
																<i className='tim-icons icon-single-02' />{' '}
																General
															</NavLink>
														</NavItem>
														<hr className='line-info' />
														<NavItem>
															<NavLink
																className={classnames({
																	active: profileTabs === 2,
																})}
																onClick={e => toggleTabs(e, 2)}
																href='#pablo'>
																<i className='tim-icons icon-credit-card' />{' '}
																Billing
															</NavLink>
														</NavItem>
														<hr className='line-info' />
														<NavItem>
															<NavLink
																className={classnames({
																	active: profileTabs === 3,
																})}
																onClick={e => toggleTabs(e, 3)}
																href='#pablo'>
																<i className='tim-icons icon-lock-circle' />{' '}
																Account
															</NavLink>
														</NavItem>
														<hr className='line-info' />
														<NavItem>
															<NavLink
																className={classnames({
																	active: profileTabs === 4,
																})}
																onClick={e => toggleTabs(e, 4)}
																href='#pablo'>
																<i className='tim-icons icon-volume-98' />{' '}
																Notifications
															</NavLink>
														</NavItem>
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
												<TabContent activeTab={'profile' + profileTabs}>
													<GeneralSettingsTabPane />
													<BillingSettingsTabPane />
													<AccountSettingsTabPane />
													<NotificationSettingsTabPane />
												</TabContent>
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
