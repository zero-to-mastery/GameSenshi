import React, { useState, useEffect, useCallback, Fragment } from 'react'
import { stopUndefined } from 'utils'
import { Form, Container, Row, Col } from 'reactstrap'
import { ExportAtoms } from 'componentAtoms'

const { CheckBox, HeaderLined, TabPaneContainer } = stopUndefined(ExportAtoms)

const BODY = 'body'
const NAME = 'name'
const SECTION = 'section'
const CHECKBOXES = 'checkBoxes'
const TITLE = 'title'

const TAB_PANE_SETTING_LIST_STATE_NAME = 'name'
const TAB_PANE_SETTING_LIST_LOADING2 = 'loading2'

const TabPaneSettingList = props => {
	const {
		loadApi,
		saveApi,
		settingList,
		[TAB_PANE_SETTING_LIST_STATE_NAME]: name,
		[TAB_PANE_SETTING_LIST_LOADING2]: loading2,
	} = props
	const [value, setValue] = useState({})
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (!loading2) {
			loadApi()
				.then(data => {
					if (data) {
						setValue(data)
						localStorage.setItem(name, JSON.stringify(data || {}))
					}
					setLoading(false)
				})
				.catch(err => {
					// TODO need better error handling
					console.log(err)
					setLoading(false)
				})
		}
	}, [loadApi, loading2])

	useEffect(() => {
		let settingCached = {}
		try {
			settingCached = JSON.parse(localStorage.getItem(name))
			setValue(settingCached)
		} catch (err) {
			// TODO need better error handling
			console.log(err)
			setLoading(!settingCached)
		}
	}, [])

	return (
		<Container>
			{settingList.map(setting => {
				const {
					[SECTION]: section,
					[TITLE]: title,
					[CHECKBOXES]: checkBoxes,
				} = setting
				return (
					<Fragment key={section}>
						<Row>
							<Col xs='12'>
								<TabPaneContainer>
									<HeaderLined>{title}</HeaderLined>
									<Form>
										{checkBoxes.map(checkBox => {
											const { [BODY]: body, [NAME]: name } = checkBox

											const onChange_ = useCallback(() => {
												value[section][name] = !value[section][name]
												setValue({ ...value })
												saveApi(value)
											}, [saveApi, value])

											const getValue = useCallback(() => {
												try {
													return value[section][name]
												} catch (e) {
													// * first render result in undefined error, it is expected
													// TODO need better error handling
													return false
												}
											}, [value])

											return (
												<CheckBox
													key={name}
													name={name}
													loading={loading || loading2}
													checked={getValue()}
													onChange={onChange_}>
													{body}
												</CheckBox>
											)
										})}
									</Form>
								</TabPaneContainer>
							</Col>
						</Row>
						<hr />
						<hr />
					</Fragment>
				)
			})}
		</Container>
	)
}

export {
	TabPaneSettingList,
	BODY,
	NAME,
	SECTION,
	CHECKBOXES,
	TITLE,
	TAB_PANE_SETTING_LIST_STATE_NAME,
	TAB_PANE_SETTING_LIST_LOADING2,
}
