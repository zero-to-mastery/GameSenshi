import React, { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {
	Card,
	CardHeader,
	CardBody,
	Row,
	Col,
	Media,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownItem,
	DropdownMenu,
	Badge,
	CardFooter,
	Input,
	Form,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
} from 'reactstrap'

import classnames from 'classnames'

import { Exports } from 'component_a_Protons'
import { stopUndefined } from '1_utils'
const { Button, UncontrolledTooltip } = stopUndefined(Exports)

const CHAT_MESSAGE_BODY = 'body'
const CHAT_MESSAGE_SENT_DATE = 'date'

const ConversationDropdown = () => {
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
	const { body, date, index } = props
	return (
		<Row
			className={
				index % 2 === 0
					? 'justify-content-start'
					: 'justify-content-end text-right'
			}
		>
			<Col xs={{ size: 'auto' }}>
				<Card className={index % 2 === 0 ? null : 'bg-primary text-white'}>
					<CardBody className='p-2'>
						<p className='mb-1'>{body}</p>
						<div>
							<small className='opacity-60'>
								<i
									className={
										index % 2 === 0 ? 'far fa-clock' : 'tim-icons icon-check-2'
									}
								/>{' '}
								{date}
							</small>
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>
	)
}

const ChatMessageContainer = props => {
	const [yourMessage, setYourMessage] = useState(false)
	const { messages } = props
	return (
		<Card className='card-plain'>
			<PerfectScrollbar className='pr-3' style={{ height: 768 }}>
				<CardHeader className='d-block'>
					<Row>
						<Col md='10'>
							<Media className='align-items-center'>
								<img
									alt='...'
									className='avatar'
									src={require('0_assets/img/p10.jpg')}
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
					{messages.map((message, index) => {
						const {
							[CHAT_MESSAGE_BODY]: body,
							[CHAT_MESSAGE_SENT_DATE]: date,
						} = message
						return <SingleMessage index={index} body={body} date={date} />
					})}
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
									<div className='spinner'>
										<div className='bounce1' />
										<div className='bounce2' />
										<div className='bounce3' />
									</div>
									<p className='d-inline-block mr-2'>Typing...</p>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</CardBody>
				<CardFooter className='d-block'>
					<Form className='align-items-center'>
						<InputGroup
							className={classnames('d-flex', 'form-control-lg', {
								'input-group-focus': yourMessage,
							})}
						>
							<InputGroupAddon addonType='prepend' className='d-flex'>
								<InputGroupText>
									<i className='tim-icons icon-pencil' />
								</InputGroupText>
							</InputGroupAddon>
							<Input
								placeholder='Your message'
								type='text'
								onFocus={() => setYourMessage(true)}
								onBlur={() => setYourMessage(false)}
							/>
							<Button className='btn-simple ml-2' color='primary'>
								<i className='tim-icons icon-send' />
							</Button>
						</InputGroup>
					</Form>
				</CardFooter>
			</PerfectScrollbar>
		</Card>
	)
}

export { ChatMessageContainer, CHAT_MESSAGE_BODY, CHAT_MESSAGE_SENT_DATE }
