import React, { useState } from 'react'
import {
	Row,
	Col,
	Card,
	CardHeader,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Input,
} from 'reactstrap'
import classnames from 'classnames'

const CHAT_CONTACT_NAME = 'name'
const CHAT_CONTACT_IMAGE = 'image'
const CHAT_CONTACT_LAST_SEEN = 'lastVisit'
const CHAT_CONTACT_LABEL = 'label'

const ChatContactList = props => {
	const [searchContact, setSearchContact] = useState(null)
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
