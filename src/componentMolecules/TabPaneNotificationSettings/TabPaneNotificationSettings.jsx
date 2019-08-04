import React, { useState } from 'react'
import { stopUndefined } from 'utils'
// reactstrap components
import { Form, Container, Row, Col } from 'reactstrap'
// core components
import { ExportAtoms } from 'componentAtoms'

const { CheckBox, Header } = stopUndefined(ExportAtoms)

const toggleCheckBox = setState => {
	setState(state => !state)
}

const TabPaneNotificationSettings = props => {
	const [orderUpdatesPush, setOrderUpdatesPush] = useState(true)
	const [chatsPush, setChatsPush] = useState(true)
	const [commentsPush, setCommentsPush] = useState(true)
	const [orderUpdatesEmail, setOrderUpdatesEmail] = useState(true)
	const [newsletterEmail, setNewsletterEmail] = useState(true)

	return (
		<>
			<Container>
				<Row>
					<Col xs='12'>
						<div className='g-pos-rel h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-30--md'>
							<Header>Push Notification</Header>
							<Form>
								<CheckBox
									checked={orderUpdatesPush}
									onClick={() => toggleCheckBox(setOrderUpdatesPush)}>
									Order Updates
								</CheckBox>
								<CheckBox
									checked={chatsPush}
									onClick={() => toggleCheckBox(setChatsPush)}>
									Chats
								</CheckBox>
								<CheckBox
									checked={commentsPush}
									onClick={() => toggleCheckBox(setCommentsPush)}>
									Comments
								</CheckBox>
							</Form>
						</div>
					</Col>
				</Row>
				<hr />
				<hr />
				<Row>
					<Col xs='12'>
						<div className='g-pos-rel h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-30--md'>
							<Header>Email Notification</Header>
							<Form>
								<CheckBox
									checked={orderUpdatesEmail}
									onClick={() => toggleCheckBox(setOrderUpdatesEmail)}>
									Order Updates
								</CheckBox>
								<CheckBox
									checked={newsletterEmail}
									onClick={() => toggleCheckBox(setNewsletterEmail)}>
									Newsletter
								</CheckBox>
							</Form>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export { TabPaneNotificationSettings }
