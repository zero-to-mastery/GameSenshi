import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import {
	ROUTE_PAGE_SETTINGS_GENERAL,
	ROUTE_PAGE_SETTINGS_PAYMENT,
	ROUTE_PAGE_SETTINGS_ACCOUNT,
	ROUTE_PAGE_SETTINGS_NOTIFICATION,
} from 'routes'
import { stopUndefined } from 'utils'
import { Exports } from 'componentpMultiOrganisms'
import { Route, Switch } from 'react-router-dom'

const GENERAL = 'General'
const PAYMENT = 'Payment'
const ACCOUNT = 'Account'
const NOTIFICATION = 'Notifications'
const SETTING = 'setting'

const {
	TabPaneGeneralSettings,
	TabPanePaymentSettings,
	TabPaneAccountSettings,
	TabPaneSettingListStoreUserPropedNotification,
	TabListVerticalPropedWithRouter,
	UploaderUserAvatar,
	TAB_LIST_VERTICAL_NAME,
	TAB_LIST_VERTICAL_TO,
	TAB_LIST_VERTICAL_ICON,
	Section,
	WrapperStoreWrapperPropedAccount,
} = stopUndefined(Exports)

const settingTabs = [
	{
		[TAB_LIST_VERTICAL_NAME]: GENERAL,
		[TAB_LIST_VERTICAL_ICON]: 'icon-single-02',
		[TAB_LIST_VERTICAL_TO]: ROUTE_PAGE_SETTINGS_GENERAL,
		[SETTING]: TabPaneGeneralSettings,
	},
	{
		[TAB_LIST_VERTICAL_NAME]: PAYMENT,
		[TAB_LIST_VERTICAL_ICON]: 'icon-credit-card',
		[TAB_LIST_VERTICAL_TO]: ROUTE_PAGE_SETTINGS_PAYMENT,
		[SETTING]: TabPanePaymentSettings,
	},
	{
		[TAB_LIST_VERTICAL_NAME]: ACCOUNT,
		[TAB_LIST_VERTICAL_ICON]: 'icon-lock-circle',
		[TAB_LIST_VERTICAL_TO]: ROUTE_PAGE_SETTINGS_ACCOUNT,
		[SETTING]: TabPaneAccountSettings,
	},
	{
		[TAB_LIST_VERTICAL_NAME]: NOTIFICATION,
		[TAB_LIST_VERTICAL_ICON]: 'icon-volume-98',
		[TAB_LIST_VERTICAL_TO]: ROUTE_PAGE_SETTINGS_NOTIFICATION,
		[SETTING]: TabPaneSettingListStoreUserPropedNotification,
	},
]

const PageSettings = () => {
	return (
		<WrapperStoreWrapperPropedAccount>
			<Section>
				<Container>
					<Row>
						<Col md='3'>
							<Section>
								{/* User Information */}
								<section className='text-center'>
									<UploaderUserAvatar />
								</section>
								{/* User Information */}
								{/* Profile Sidebar */}
								<section>
									<br />
									<TabListVerticalPropedWithRouter tablist={settingTabs} />
								</section>
								{/* End Profile Sidebar */}
								{/* Profile Completion */}
								<br />
								<br />
								<br />
								{/* End Profile Completion */}
							</Section>
						</Col>
						<Col className='ml-auto' md='8'>
							<Section>
								<Switch>
									{settingTabs.map(policy => {
										const {
											[TAB_LIST_VERTICAL_NAME]: name,
											[SETTING]: Setting,
											[TAB_LIST_VERTICAL_TO]: to,
										} = policy
										return (
											<Route
												key={name}
												path={to}
												render={prop => <Setting {...prop} />}
											/>
										)
									})}
								</Switch>
							</Section>
						</Col>
					</Row>
				</Container>
			</Section>
		</WrapperStoreWrapperPropedAccount>
	)
}

export { PageSettings }
