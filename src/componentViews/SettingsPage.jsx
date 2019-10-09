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
	TabPaneGeneralSettings,
	TabPanePaymentSettings,
	TabPaneAccountSettings,
	TabPaneSettingListStoreUserPropedNotification,
	ImageUpload,
	TabListVerticalPropedSettingPage,
} = stopUndefined(ExportMultiOrganisms)

const SettingsPage = props => {
	const [TabPane, setTabPane] = useState(() => TabPaneGeneralSettings)

	const wrapper = useRef(null)

	const {
		location: { pathname },
	} = props
	useEffect(() => {
		switch (pathname) {
			case ROUTE_PAGE_SETTINGS_PAYMENT:
				setTabPane(() => TabPanePaymentSettings)
				break
			case ROUTE_PAGE_SETTINGS_ACCOUNT:
				setTabPane(() => TabPaneAccountSettings)
				break
			case ROUTE_PAGE_SETTINGS_NOTIFICATION:
				setTabPane(() => TabPaneSettingListStoreUserPropedNotification)
				break
			default:
				setTabPane(() => TabPaneGeneralSettings)
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
									<TabListVerticalPropedSettingPage />
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
								<TabPane />
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<Footer />
		</div>
	)
}

export { SettingsPage }
