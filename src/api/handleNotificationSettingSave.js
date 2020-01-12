import { docSettingNotificationSet } from 'fireStored'

const handleNotificationSettingSave = data => {
	return docSettingNotificationSet(data)
}

export { handleNotificationSettingSave }
