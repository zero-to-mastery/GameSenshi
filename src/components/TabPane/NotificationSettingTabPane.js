import React from 'react'

// reactstrap components
import {
	Button,
	Label,
	FormGroup,
	Form,
	Input,
	TabPane,
	Container,
	Row,
	Col,
} from 'reactstrap'

const NotificationSettingTabPane = props => {
	return (
		<TabPane tabId='profile4'>
			<Container>
				<hr />
				<Row>
					<Col xs='12'>
						<Form>
							<h5 className='mb-4'>Notification Preferences</h5>
							<FormGroup check>
								<Label check>
									<Input defaultChecked type='checkbox' />
									<span className='form-check-sign' />
									Someone mentions me
								</Label>
							</FormGroup>
							<FormGroup check>
								<Label check>
									<Input defaultChecked type='checkbox' />
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
							<Button className='mt-4' color='info' size='sm' type='button'>
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
							<h5>Email Notification</h5>
							<FormGroup check className='form-check-radio'>
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
							<FormGroup check className='form-check-radio'>
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
							<FormGroup check className='form-check-radio'>
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
							<FormGroup check className='form-check-radio'>
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
							<Button className='mt-4' color='info' size='sm' type='button'>
								Update
							</Button>
						</Form>
					</Col>
					{/*end of col*/}
				</Row>
				{/*end of row*/}
			</Container>
		</TabPane>
	)
}

export default NotificationSettingTabPane
