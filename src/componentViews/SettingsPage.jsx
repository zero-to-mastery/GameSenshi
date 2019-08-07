import React, { useState, useEffect, useRef } from 'react'
import { stopUndefined } from 'utils'
// reactstrap components
import { Container, Row, Col } from 'reactstrap'
// route
import {
	ROUTE_PAGE_SETTINGS_PAYMENT,
	ROUTE_PAGE_SETTINGS_ACCOUNT,
	ROUTE_PAGE_SETTINGS_NOTIFICATION,
} from 'routes'
// core components
import { ExportMultiOrganisms } from 'componentpMultiOrganisms'

const {
	Footer,
	IndexNavbar,
	TabPaneAccountSettings,
	TabPaneNotificationSettings,
	TabPaneGeneralSettings,
	ImageUpload,
	TabListVerticalPropedSettingPage,
	TabPanePaymentSetting,
} = stopUndefined(ExportMultiOrganisms)

const SettingsPage = props => {
	const [tabPane, setTabPane] = useState(0) // ? unable to set component as state
	const [, forceUpdate] = useState('')

	const wrapper = useRef(null)

	const {
		location: { pathname },
	} = props
	useEffect(() => {
		switch (pathname) {
			case ROUTE_PAGE_SETTINGS_PAYMENT:
				setTabPane(1)
				break
			case ROUTE_PAGE_SETTINGS_ACCOUNT:
				setTabPane(2)
				break
			case ROUTE_PAGE_SETTINGS_NOTIFICATION:
				setTabPane(3)
				break
			default:
				setTabPane(0)
				break
		}
	}, [pathname])

	useEffect(() => {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		wrapper.current.scrollTop = 0
		document.body.classList.add('account-settings')
		return () => {
			document.body.classList.remove('account-settings')
		}
	}, [])

	return (
		<>
			<IndexNavbar />
			<div className='wrapper' ref={wrapper}>
				<div className='section'>
					<Container>
						<Row>
							<Col md='3'>
								<div className='section'>
									{/* User Information */}
									<section className='text-center'>
										<ImageUpload avatar addBtnColor='default' />
									</section>
									{/* User Information */}
									{/* Profile Sidebar */}
									<section>
										<br />
										<TabListVerticalPropedSettingPage
											activeTab={tabPane}
											onClick={() => {
												forceUpdate('')
											}}
										/>
									</section>
									{/* End Profile Sidebar */}
									{/* Profile Completion */}
									<br />
									<br />
									<br />
									{/* End Profile Completion */}
								</div>
							</Col>
							<Col className='ml-auto' md='8'>
								<div className='section'>
									{tabPane === 0 && <TabPaneGeneralSettings />}
									{tabPane === 1 && <TabPanePaymentSetting />}
									{tabPane === 2 && <TabPaneAccountSettings />}
									{tabPane === 3 && <TabPaneNotificationSettings />}
								</div>
							</Col>
						</Row>
					</Container>
				</div>
				<Footer />
			</div>
		</>
	)
}

export { SettingsPage }
