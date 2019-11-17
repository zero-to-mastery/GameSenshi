import React from 'react'
import {
	Card,
	CardHeader,
	CardBody,
	Row,
	Col,
	Media,
	Button,
	UncontrolledTooltip,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownItem,
	DropdownMenu,
	Badge,
} from 'reactstrap'

const ConversationDropdown = props => {
	return (
		<UncontrolledDropdown>
			<DropdownToggle className='btn-link' color='primary'>
				<i className='tim-icons icon-settings' />
			</DropdownToggle>
			<DropdownMenu right>
				<DropdownItem href='#pablo' onClick={e => e.preventDefault()}>
					<i className='tim-icons icon-single-02' />
					Profile
				</DropdownItem>
				<DropdownItem href='#pablo' onClick={e => e.preventDefault()}>
					<i className='tim-icons icon-volume-98' />
					Mute conversation
				</DropdownItem>
				<DropdownItem href='#pablo' onClick={e => e.preventDefault()}>
					<i className='tim-icons icon-lock-circle' />
					Block
				</DropdownItem>
				<DropdownItem href='#pablo' onClick={e => e.preventDefault()}>
					<i className='tim-icons icon-chat-33' />
					Clear chat
				</DropdownItem>
				<DropdownItem divider />
				<DropdownItem href='#pablo' onClick={e => e.preventDefault()}>
					<i className='tim-icons icon-simple-remove' />
					Delete chat
				</DropdownItem>
			</DropdownMenu>
		</UncontrolledDropdown>
	)
}

const SingleMessage = props => {
	return <div></div>
}

const ChatMessageContainer = props => {
	return (
		<Card className='card-plain'>
			<CardHeader className='d-inline-block'>
				<Row>
					<Col md='10'>
						<Media className='align-items-center'>
							<img
								alt='...'
								className='avatar'
								src={require('assets/img/p10.jpg')}
							/>
							<Media body>
								<h6 className='mb-0 d-block'>Charlie Watson</h6>
								<span className='text-muted text-small'>
									last seen today at 1:53am
								</span>
							</Media>
						</Media>
					</Col>
					<Col md='1'>
						<Button
							className='btn-link'
							color='info'
							id='tooltip487083381'
							type='button'
						>
							<i className='tim-icons icon-video-66' />
						</Button>
						<UncontrolledTooltip
							delay={0}
							placement='top'
							target='tooltip487083381'
						>
							Video call
						</UncontrolledTooltip>
					</Col>
					<Col md='1'>
						<ConversationDropdown />
					</Col>
				</Row>
			</CardHeader>
			<CardBody>
				<Row className='justify-content-start'>
					<Col xs={{ size: 'auto' }}>
						<Card>
							<CardBody className='p-2'>
								<p className='mb-1'>
									It contains a lot of good lessons about effective practices
								</p>
								<div>
									<small className='opacity-60'>
										<i className='far fa-clock' /> 3:14am
									</small>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
				<Row className='justify-content-end text-right'>
					<Col xs={{ size: 'auto' }}>
						<Card className='bg-primary text-white'>
							<CardBody className='p-2'>
								<p className='mb-1'>
									Can it generate daily design links that include essays and
									data visualizations ? <br />
								</p>
								<div>
									<small className='opacity-60'>3:30am</small>{' '}
									<i className='tim-icons icon-check-2' />
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
				<Row className='mt-4'>
					<Col className='text-center' md='12'>
						<Badge className='text-white' color=''>
							Wed, 3:27pm
						</Badge>
					</Col>
				</Row>
				<Row className='justify-content-start'>
					<Col xs={{ size: 'auto' }}>
						<Card>
							<CardBody className='p-2'>
								<p className='mb-1'>
									Yeah! Responsive Design is geared towards those trying to
									build web apps
								</p>
								<div>
									<small className='opacity-60'>
										<i className='far fa-clock' /> 4:31pm
									</small>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
				<Row className='justify-content-end text-right'>
					<Col xs={{ size: 'auto' }}>
						<Card className='bg-primary text-white'>
							<CardBody className='p-2'>
								<p className='mb-1'>Excellent, I want it now !</p>
								<div>
									<small className='opacity-60'>4:40pm</small>{' '}
									<i className='tim-icons icon-check-2' />
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
				<Row className='justify-content-start'>
					<Col xs={{ size: 'auto' }}>
						<Card>
							<CardBody className='p-2'>
								<p className='mb-1'>
									You can easily get it; The content here is all free
								</p>
								<div>
									<small className='opacity-60'>
										<i className='far fa-clock' /> 4:42pm
									</small>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</CardBody>
		</Card>
	)
}

export { ChatMessageContainer }
