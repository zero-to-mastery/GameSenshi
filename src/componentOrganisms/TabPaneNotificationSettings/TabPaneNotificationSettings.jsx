import React, { useState, useEffect, useCallback } from 'react'
import { stopUndefined } from 'utils'
import { Form, Container, Row, Col } from 'reactstrap'
import { ExportMolecules } from 'componentMolecules'

const {
	CheckBoxListInstantFeedbackPropedPush,
	CheckBoxListInstantFeedbackPropedEmail,
	HeaderLined,
	TabPaneContainer,
} = stopUndefined(ExportMolecules)

const TabPaneNotificationSettings = props => {
	const { loadApi, saveApi, initialPushSetting, initialEmailSetting } = props
	const [pushSetting, setPushSetting] = useState(initialPushSetting)
	const [emailSetting, setEmailSetting] = useState(initialEmailSetting)
	const [loading, setLoading] = useState(initialPushSetting)

	useEffect(() => {
		loadApi(setLoading)
	}, [loadApi])

	const setPushSetting_ = useCallback(
		e => {
			saveApi(e, setPushSetting)
		},
		[saveApi, setPushSetting]
	)

	const setEmailSetting_ = useCallback(
		e => {
			saveApi(e, setEmailSetting)
		},
		[saveApi, setEmailSetting]
	)

	return (
		<Container>
			<Row>
				<Col xs='12'>
					<TabPaneContainer>
						<HeaderLined>Push Notification</HeaderLined>
						<Form>
							<CheckBoxListInstantFeedbackPropedPush
								loading={loading}
								value={pushSetting}
								onChange={setPushSetting_}
							/>
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
							<CheckBoxListInstantFeedbackPropedEmail
								loading={loading}
								value={emailSetting}
								onChange={setEmailSetting_}
							/>
						</Form>
					</TabPaneContainer>
				</Col>
			</Row>
		</Container>
	)
}

export { TabPaneNotificationSettings }
