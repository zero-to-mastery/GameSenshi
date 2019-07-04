import React from 'react'
// nodejs library that concatenates classes
import classnames from 'classnames'

//state
import { Subscribe, userStore } from 'state'

// reactstrap components
import {
	Alert,
	Button,
	Label,
	FormGroup,
	Form,
	Input,
	NavItem,
	NavLink,
	Nav,
	TabContent,
	TabPane,
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
														<TabPane tabId='profile4'>
															<Container>
																<Row>
																	<Col xs='12'>
																		<Alert className='text-small' color='info'>
																			<i className='icon-shield' />
																			<span>
																				We will never distribute your email
																				address to third parties. Read about
																				email communication in our privacy
																				policy.
																			</span>
																		</Alert>
																	</Col>
																	{/*end of col*/}
																</Row>
																<hr />
																<Row>
																	<Col xs='12'>
																		<Form>
																			<h5 className='mb-4'>
																				Notification Preferences
																			</h5>
																			<FormGroup check>
																				<Label check>
																					<Input
																						defaultChecked
																						type='checkbox'
																					/>
																					<span className='form-check-sign' />
																					Someone mentions me
																				</Label>
																			</FormGroup>
																			<FormGroup check>
																				<Label check>
																					<Input
																						defaultChecked
																						type='checkbox'
																					/>
																					<span className='form-check-sign' />
																					Someone follows me
																				</Label>
																			</FormGroup>
																			<FormGroup check>
																				<Label check>
																					<Input type='checkbox' />
																					<span className='form-check-sign' />
																					Someone shares my activty
																				</Label>
																			</FormGroup>
																			<FormGroup check>
																				<Label check>
																					<Input type='checkbox' />
																					<span className='form-check-sign' />
																					Someone messages me
																				</Label>
																			</FormGroup>
																			<FormGroup check>
																				<Label check>
																					<Input type='checkbox' />
																					<span className='form-check-sign' />
																					Someone adds me to a project
																				</Label>
																			</FormGroup>
																			<FormGroup check>
																				<Label check>
																					<Input type='checkbox' />
																					<span className='form-check-sign' />
																					Sales and promotions
																				</Label>
																			</FormGroup>
																			<Button
																				className='mt-4'
																				color='info'
																				size='sm'
																				type='button'>
																				Update preferences
																			</Button>
																		</Form>
																	</Col>
																	{/*end of col*/}
																</Row>
																{/*end of row*/}
																<hr />
																<Row>
																	<Col xs='12'>
																		<Form>
																			<h5>Notification Frequency</h5>
																			<FormGroup
																				check
																				className='form-check-radio'>
																				<Label check>
																					<Input
																						defaultValue='option1'
																						id='exampleF'
																						name='exampleRadios'
																						type='radio'
																					/>
																					<span className='form-check-sign' />
																					Daily
																				</Label>
																			</FormGroup>
																			<FormGroup
																				check
																				className='form-check-radio'>
																				<Label check>
																					<Input
																						defaultChecked
																						defaultValue='option2'
																						id='exampleF'
																						name='exampleRadios'
																						type='radio'
																					/>
																					<span className='form-check-sign' />
																					Weekly
																				</Label>
																			</FormGroup>
																			<FormGroup
																				check
																				className='form-check-radio'>
																				<Label check>
																					<Input
																						defaultValue='option3'
																						id='exampleF'
																						name='exampleRadios'
																						type='radio'
																					/>
																					<span className='form-check-sign' />
																					Monthly
																				</Label>
																			</FormGroup>
																			<FormGroup
																				check
																				className='form-check-radio'>
																				<Label check>
																					<Input
																						defaultValue='option4'
																						id='exampleF'
																						name='exampleRadios'
																						type='radio'
																					/>
																					<span className='form-check-sign' />
																					Never
																				</Label>
																			</FormGroup>
																			<Button
																				className='mt-4'
																				color='info'
																				size='sm'
																				type='button'>
																				Update
																			</Button>
																		</Form>
																	</Col>
																	{/*end of col*/}
																</Row>
																{/*end of row*/}
															</Container>
														</TabPane>
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
