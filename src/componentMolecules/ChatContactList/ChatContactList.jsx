import React, { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {
	Row,
	Col,
	Card,
	CardHeader,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Input,
	Media,
	ListGroup,
	ListGroupItem,
	Badge,
} from 'reactstrap'
import classnames from 'classnames'

const CHAT_CONTACT_NAME = 'name'
const CHAT_CONTACT_IMAGE = 'src'
const CHAT_CONTACT_LAST_SEEN = 'lastVisit'
const CHAT_CONTACT_LABEL = 'label'

const ListItem = props => {
	const { contactList } = props
	return (
		<>
			{contactList.map(contact => {
				const {
					[CHAT_CONTACT_NAME]: name,
					[CHAT_CONTACT_IMAGE]: src,
					[CHAT_CONTACT_LABEL]: label,
					[CHAT_CONTACT_LAST_SEEN]: seen,
				} = contact
				return (
					<ListGroupItem
						className={name === 'Charlie Watson' ? 'active' : ''}
						href='#pablo'
						onClick={e => e.preventDefault()}
						tag='a'
					>
						<Media>
							<img alt='...' className='avatar' src={src} />
							<Media body className='ml-2'>
								{name === 'Charlie Watson' ? (
									<>
										<div className='justify-content-between align-items-center'>
											<h6 className='mb-0'>Jane Doe</h6>
											<div>
												<small className='text-white'>1 hour ago</small>
											</div>
										</div>
										<Col
											className='text-white text-small p-0 text-truncate d-block'
											xs='11'
										>
											Computer users and programmers
										</Col>
									</>
								) : (
									<>
										<div className='justify-content-between align-items-center'>
											<h6 className='mb-0'>Jane Doe</h6>
											<div>
												<small className='text-muted'>1 hour ago</small>
											</div>
										</div>
										<Col
											className='text-muted text-small p-0 text-truncate d-block'
											xs='11'
										>
											Computer users and programmers
										</Col>
									</>
								)}
							</Media>
						</Media>
					</ListGroupItem>
				)
			})}
		</>
	)
}

const ChatContactList = props => {
	const { contactList } = props
	const [searchContact, setSearchContact] = useState(null)
	const [isActive, setIsActive] = useState(true)
	return (
		<Row>
			<Col>
				<Card className='card-plain'>
					<CardHeader className='mb-3'>
						<InputGroup
							className={classnames('form-control-lg', {
								'input-group-focus': searchContact,
							})}
						>
							<Input
								placeholder='Search contact'
								type='text'
								onFocus={() => setSearchContact(true)}
								onBlur={() => setSearchContact(false)}
							/>
							<InputGroupAddon addonType='append'>
								<InputGroupText>
									<i className='tim-icons icon-zoom-split' />
								</InputGroupText>
							</InputGroupAddon>
						</InputGroup>
					</CardHeader>
					<PerfectScrollbar className='pr-3' style={{ height: 368 }}>
						<ListGroup className='list-group-chat' flush>
							<ListItem contactList={contactList} isActive={isActive} />
						</ListGroup>
					</PerfectScrollbar>
				</Card>
			</Col>
		</Row>
	)
}

export {
	ChatContactList,
	CHAT_CONTACT_IMAGE,
	CHAT_CONTACT_LABEL,
	CHAT_CONTACT_LAST_SEEN,
	CHAT_CONTACT_NAME,
}
