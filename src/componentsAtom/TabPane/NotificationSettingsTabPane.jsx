import React from 'react'

// reactstrap components
import { Label, FormGroup, Form, Input, Container, Row, Col } from 'reactstrap'

const NotificationSettingsTabPane = props => {
	return (
		<>
			<Container>
				<Row>
					<Col xs='12'>
						<div className='g-pos-rel h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-30--md'>
							<header>
								<h2 className='text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0'>
									Push Notification
								</h2>
							</header>
							<hr className='line-info' />
							<Form>
								<FormGroup check>
									<Label check>
										<Input defaultChecked type='checkbox' />
										<span className='form-check-sign' />
										Order Updates
									</Label>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input defaultChecked type='checkbox' />
										<span className='form-check-sign' />
										Chats
									</Label>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input defaultChecked type='checkbox' />
										<span className='form-check-sign' />
										Comments
									</Label>
								</FormGroup>
							</Form>
						</div>
					</Col>
				</Row>
				<hr />
				<hr />
				<Row>
					<Col xs='12'>
						<div className='g-pos-rel h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-30--md'>
							<header>
								<h2 className='text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0'>
									Email Notification
								</h2>
							</header>
							<hr className='line-info' />
							<Form>
								<FormGroup check>
									<Label check>
										<Input defaultChecked type='checkbox' />
										<span className='form-check-sign' />
										Order Updates
									</Label>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input defaultChecked type='checkbox' />
										<span className='form-check-sign' />
										Newsletter
									</Label>
								</FormGroup>
							</Form>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default NotificationSettingsTabPane
