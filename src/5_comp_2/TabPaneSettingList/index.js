import React, { useCallback } from 'react'
import {
	TabPaneSettingList,
	TAB_PANE_SETTING_LIST_STATE_NAME,
	TAB_PANE_SETTING_LIST_LOADING2,
} from './TabPaneSettingList'
import { settingListNotification } from './utils'
import {
	docUserSettingNotificationSet,
	docUserSettingNotificationGet,
} from '2_fire_store'
import {
	storeUser,
	StateContainer,
	STORE_USER_STATE_UID,
	STORE_USER_STATE_SIGNING_IN,
} from '2_state'

const mapStoreUserStateToProps = {
	[TAB_PANE_SETTING_LIST_STATE_NAME]: state =>
		state[STORE_USER_STATE_UID] + 'NotificationSetting_',
	[TAB_PANE_SETTING_LIST_LOADING2]: STORE_USER_STATE_SIGNING_IN,
}

const TabPaneSettingListStoreUser = StateContainer(
	TabPaneSettingList,
	[storeUser],
	[mapStoreUserStateToProps],
	[]
)

const TabPaneSettingListStoreUserPropedNotification = props => {
	const loadApi = useCallback(
		() => docUserSettingNotificationGet().then(doc => doc.data()),
		[]
	)
	const saveApi = useCallback(data => docUserSettingNotificationSet()(data), [])
	return (
		<TabPaneSettingListStoreUser
			settingList={settingListNotification()}
			saveApi={saveApi}
			loadApi={loadApi}
			{...props}
		/>
	)
}

export { TabPaneSettingListStoreUserPropedNotification }
