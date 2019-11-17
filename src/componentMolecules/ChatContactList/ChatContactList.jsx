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

export { ChatContactList }
