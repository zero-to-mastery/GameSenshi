import React from 'react'
import { stopUndefined } from 'utils'
// reactstrap components
import { Form, Container, Row, Col } from 'reactstrap'
// core components
import { ExportAtoms } from 'componentAtoms'

const { CheckBox, HeaderLined, TabPaneContainer } = stopUndefined(ExportAtoms)

const BODY = 'body'
const ON_CHANGE = 'onChange'

const mapCheckBox = checkBoxes =>
	checkBoxes.map(checkBox => {
		const { [BODY]: body, [ON_CHANGE]: onChange } = checkBox
		return (
			<CheckBox key={body} name={body.replace(/ /g, '')} onChange={onChange}>
				{body}
			</CheckBox>
		)
	})

const TabPaneNotificationSettings = props => {
	const { isDataLoaded } = props

	const checkBoxPush = () => [
		{
			[BODY]: 'Order Updates',
		},
		{
			[BODY]: 'Chats',
		},
		{
			[BODY]: 'Comments',
		},
	]

	const checkBoxEmail = () => [
		{
			[BODY]: 'Newsletter',
		},
		{
			[BODY]: 'Chats',
		},
		{
			[BODY]: 'Comments',
		},
	]

	return (
		<Container>
			<Row>
				<Col xs='12'>
					<TabPaneContainer>
						<HeaderLined>Push Notification</HeaderLined>
						<Form>{mapCheckBox(checkBoxPush())}</Form>
					</TabPaneContainer>
				</Col>
			</Row>
			<hr />
			<hr />
			<Row>
				<Col xs='12'>
					<TabPaneContainer>
						<HeaderLined>Email Notification</HeaderLined>
						<Form>{mapCheckBox(checkBoxEmail())}</Form>
					</TabPaneContainer>
				</Col>
			</Row>
		</Container>
	)
}

export { TabPaneNotificationSettings }
