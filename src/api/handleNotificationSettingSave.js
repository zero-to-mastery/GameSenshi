import { docNotificationSettingSet } from 'firebaseInit'

const handleNotificationSettingSave = data => {
	return docNotificationSettingSet(data)
}

export { handleNotificationSettingSave }
