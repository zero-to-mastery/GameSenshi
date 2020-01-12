import { docUserSettingNotificationSet } from 'fireStored'

const handleNotificationSettingSave = data => {
	return docUserSettingNotificationSet(data)
}

export { handleNotificationSettingSave }
