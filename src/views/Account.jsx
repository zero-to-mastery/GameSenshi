import React from 'react'
// nodejs library that concatenates classes
import classnames from 'classnames'
// react plugin used to create DropdownMenu for selecting items
import Select from 'react-select'
// react plugin used to create switch buttons
import Switch from 'react-bootstrap-switch'
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
	Table,
	TabContent,
	TabPane,
	Container,
	Row,
	Col,
} from 'reactstrap'

import { USER_DISPLAY_NAME } from 'constantValues'

// core components
import ImageUpload from 'components/CustomUpload/ImageUpload.jsx'
import { Footer, IndexNavbar, GeneralTabPane } from 'components'

class AccountSettings extends React.Component {
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
																	Security
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
														<GeneralTabPane />
														<TabPane tabId='profile2'>
															<header>
																<h2 className='text-uppercase'>
																	Billing method
																</h2>
															</header>
															<hr className='line-info' />
															<br />
															<Table className='align-items-center'>
																<thead>
																	<tr>
																		<th scope='col'>Card Type</th>
																		<th scope='col'>Card Number</th>
																		<th scope='col'>Payment Method</th>
																		<th scope='col'>Action</th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<th scope='row'>
																			<img
																				alt='...'
																				className='avatar'
																				src={require('assets/img/visas.png')}
																			/>
																		</th>
																		<td>
																			<span className='d-block'>
																				•••• •••• •••• 8372
																			</span>
																			<small className='text-muted'>
																				Exp: 06/22
																			</small>
																		</td>
																		<td className='text-center'>
																			<FormGroup
																				check
																				className='form-check-radio'>
																				<Label check>
																					<Input
																						defaultChecked
																						defaultValue='option2'
																						id='Radios'
																						name='exampleRadios'
																						type='radio'
																					/>
																					<span className='form-check-sign' />
																				</Label>
																			</FormGroup>
																		</td>
																		<td>
																			<Button
																				className='btn-simple'
																				color='danger'
																				size='sm'
																				type='button'>
																				<i className='tim-icons icon-simple-remove' />{' '}
																				Remove card
																			</Button>
																		</td>
																	</tr>
																	<tr>
																		<th scope='row'>
																			<img
																				alt='...'
																				className='avatar'
																				src={require('assets/img/mastercard.png')}
																			/>
																		</th>
																		<td>
																			<span className='d-block'>
																				•••• •••• •••• 1225
																			</span>
																			<small className='text-muted'>
																				Exp: 07/21
																			</small>
																		</td>
																		<td className='text-center'>
																			<FormGroup
																				check
																				className='form-check-radio'>
																				<Label check>
																					<Input
																						defaultValue='option1'
																						id='Radios'
																						name='exampleRadios'
																						type='radio'
																					/>
																					<span className='form-check-sign' />
																				</Label>
																			</FormGroup>
																		</td>
																		<td>
																			<Button
																				className='btn-simple'
																				color='danger'
																				size='sm'
																				type='button'>
																				<i className='tim-icons icon-simple-remove' />{' '}
																				Remove card
																			</Button>
																		</td>
																	</tr>
																</tbody>
															</Table>
															<Button color='info' size='sm' type='button'>
																<i className='tim-icons icon-simple-add' /> Add
																card
															</Button>
														</TabPane>
														<TabPane tabId='profile3'>
															<div className='g-pos-rel h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-30--md'>
																<header>
																	<h2 className='text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0'>
																		Security Questions
																	</h2>
																</header>
																<hr className='line-info' />
																<Form>
																	<Row>
																		<Col md='6'>
																			<label>Security Question</label>
																			<FormGroup>
																				<Select
																					className='react-select react-select-info'
																					classNamePrefix='react-select'
																					placeholder='Question'
																					value={this.state.question}
																					onChange={value =>
																						this.setState({ question: value })
																					}
																					options={[
																						{
																							value: '',
																							label: 'Your Question',
																							isDisabled: true,
																						},
																						{ value: '2', label: 'Question 1' },
																						{ value: '3', label: 'Question 2' },
																						{ value: '4', label: 'Question 3' },
																					]}
																				/>
																			</FormGroup>
																		</Col>
																		<Col md='6'>
																			<label>Your Answer</label>
																			<FormGroup>
																				<Input
																					placeholder='Enter your answer'
																					type='text'
																				/>
																			</FormGroup>
																		</Col>
																	</Row>
																	<Row>
																		<Col className='align-self-center' md='3'>
																			<label
																				className='labels'
																				htmlFor='#email'>
																				Email
																			</label>
																		</Col>
																		<Col className='align-self-center' md='9'>
																			<FormGroup>
																				<Input
																					defaultValue='charlie.bailey@example.com'
																					id='email'
																					name='email'
																					required='required'
																					type='email'
																				/>
																			</FormGroup>
																		</Col>
																	</Row>
																	<br />
																	<br />
																	<header>
																		<h2 className='text-uppercase'>
																			Security Settings
																		</h2>
																	</header>
																	<hr className='line-info' />
																	<FormGroup className='d-flex align-items-center justify-content-between'>
																		<span>
																			Notify me via email when logging in
																		</span>
																		<Switch offColor='' onColor='' />
																	</FormGroup>
																	<FormGroup className='d-flex align-items-center justify-content-between'>
																		<span>
																			Send SMS confirmation for all online
																			payments
																		</span>
																		<Switch offColor='' onColor='' />
																	</FormGroup>
																	<FormGroup className='d-flex align-items-center justify-content-between'>
																		<span>
																			Check which devices accessed your account
																		</span>
																		<Switch
																			defaultValue={false}
																			offColor=''
																			onColor=''
																		/>
																	</FormGroup>
																	<FormGroup className='d-flex align-items-center justify-content-between'>
																		<span>
																			Find My Device, make sure your device can
																			be found if it gets lost
																		</span>
																		<Switch offColor='' onColor='' />
																	</FormGroup>
																	<FormGroup className='d-flex align-items-center justify-content-between'>
																		<span>
																			Lock your device with a PIN, pattern, or
																			password
																		</span>
																		<Switch offColor='' onColor='' />
																	</FormGroup>
																	<FormGroup className='d-flex align-items-center justify-content-between'>
																		<span>
																			Manage what apps have access to app-usage
																			data on your device
																		</span>
																		<Switch
																			defaultValue={false}
																			offColor=''
																			onColor=''
																		/>
																	</FormGroup>
																	<Row className='mt-5 justify-content-end'>
																		<Col className='ml-auto' md='4'>
																			<Button
																				className='btn-simple mr-1'
																				color='info'
																				size='sm'
																				type='button'>
																				Cancel
																			</Button>
																			<Button
																				color='info'
																				size='sm'
																				type='button'>
																				Save Changes
																			</Button>
																		</Col>
																	</Row>
																</Form>
															</div>
														</TabPane>
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

export default AccountSettings
