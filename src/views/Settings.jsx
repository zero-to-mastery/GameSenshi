import React from 'react'
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
	NotificationSettingTabPane,
} from 'components'

class Settings extends React.Component {
	state = {
		profileTabs: 1,
		tags: ['HTML5', 'CSS3', 'JavaScript', 'React'],
		birthDateOpen: false,
		country: '',
	}

	wrapper // wrapper ref

	componentDidMount() {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		this.wrapper.scrollTop = 0
		document.body.classList.add('account-settings')
	}
	componentWillUnmount() {
		document.body.classList.remove('account-settings')
	}
	toggleTabs = (e, stateName, index) => {
		e.preventDefault()
		this.setState({
			[stateName]: index,
		})
	}
	handleTags = regularTags => {
		this.setState({ tags: regularTags })
	}
	render() {
		return (
			<>
				<IndexNavbar />
				<Subscribe to={[userStore]}>
					{userStore => {
						const {
							state: { [USER_DISPLAY_NAME]: name },
						} = userStore

						return (
							<div
								className='wrapper'
								ref={ref => {
									this.wrapper = ref
								}}>
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
																		active: this.state.profileTabs === 1,
																	})}
																	onClick={e =>
																		this.toggleTabs(e, 'profileTabs', 1)
																	}
																	href='#pablo'>
																	<i className='tim-icons icon-single-02' />{' '}
																	General
																</NavLink>
															</NavItem>
															<hr className='line-info' />
															<NavItem>
																<NavLink
																	className={classnames({
																		active: this.state.profileTabs === 2,
																	})}
																	onClick={e =>
																		this.toggleTabs(e, 'profileTabs', 2)
																	}
																	href='#pablo'>
																	<i className='tim-icons icon-credit-card' />{' '}
																	Billing
																</NavLink>
															</NavItem>
															<hr className='line-info' />
															<NavItem>
																<NavLink
																	className={classnames({
																		active: this.state.profileTabs === 3,
																	})}
																	onClick={e =>
																		this.toggleTabs(e, 'profileTabs', 3)
																	}
																	href='#pablo'>
																	<i className='tim-icons icon-lock-circle' />{' '}
																	Account
																</NavLink>
															</NavItem>
															<hr className='line-info' />
															<NavItem>
																<NavLink
																	className={classnames({
																		active: this.state.profileTabs === 4,
																	})}
																	onClick={e =>
																		this.toggleTabs(e, 'profileTabs', 4)
																	}
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
													<TabContent
														activeTab={'profile' + this.state.profileTabs}>
														<GeneralSettingsTabPane />
														<BillingSettingsTabPane />
														<AccountSettingsTabPane />
														<NotificationSettingTabPane />
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
}

export default Settings
