import React from 'react'
// react plugin used to create switch buttons
import Switch from 'react-bootstrap-switch'

// reactstrap components
import { Button, FormGroup, Form, Input, TabPane, Row, Col } from 'reactstrap'

const SecurityTabPane = props => {
	return (
		<TabPane tabId='profile3'>
			<div className='g-pos-rel h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-30--md'>
				<header>
					<h2 className='text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0'>
						Change Email
					</h2>
				</header>
				<hr className='line-info' />
				<Form>
					<Row>
						<Col className='align-self-center' md='3'>
							<label className='labels' htmlFor='#email'>
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
						<h2 className='text-uppercase'>Security Settings</h2>
					</header>
					<hr className='line-info' />
					<FormGroup className='d-flex align-items-center justify-content-between'>
						<span>Notify me via email when logging in</span>
						<Switch offColor='' onColor='' />
					</FormGroup>
					<FormGroup className='d-flex align-items-center justify-content-between'>
						<span>Send SMS confirmation for all online payments</span>
						<Switch offColor='' onColor='' />
					</FormGroup>
					<FormGroup className='d-flex align-items-center justify-content-between'>
						<span>Check which devices accessed your account</span>
						<Switch defaultValue={false} offColor='' onColor='' />
					</FormGroup>
					<FormGroup className='d-flex align-items-center justify-content-between'>
						<span>
							Find My Device, make sure your device can be found if it gets lost
						</span>
						<Switch offColor='' onColor='' />
					</FormGroup>
					<FormGroup className='d-flex align-items-center justify-content-between'>
						<span>Lock your device with a PIN, pattern, or password</span>
						<Switch offColor='' onColor='' />
					</FormGroup>
					<FormGroup className='d-flex align-items-center justify-content-between'>
						<span>
							Manage what apps have access to app-usage data on your device
						</span>
						<Switch defaultValue={false} offColor='' onColor='' />
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
							<Button color='info' size='sm' type='button'>
								Save Changes
							</Button>
						</Col>
					</Row>
				</Form>
			</div>
		</TabPane>
	)
}

export default SecurityTabPane
