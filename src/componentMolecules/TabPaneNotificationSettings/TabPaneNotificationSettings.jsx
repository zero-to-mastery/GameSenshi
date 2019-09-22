import React, { useState } from 'react'
import { stopUndefined } from 'utils'
// reactstrap components
import { Form, Container, Row, Col } from 'reactstrap'
// core components
import { ExportAtoms } from 'componentAtoms'

const { CheckBox, HeaderLined, TabPaneContainer } = stopUndefined(ExportAtoms)

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
		<Container>
			<Row>
				<Col xs='12'>
					<TabPaneContainer>
						<HeaderLined>Push Notification</HeaderLined>
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
					</TabPaneContainer>
				</Col>
			</Row>
			<hr />
			<hr />
			<Row>
				<Col xs='12'>
					<TabPaneContainer>
						<HeaderLined>Email Notification</HeaderLined>
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
					</TabPaneContainer>
				</Col>
			</Row>
		</Container>
	)
}

export { TabPaneNotificationSettings }
