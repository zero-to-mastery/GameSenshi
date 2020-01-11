import { docUserSettingNotificationGet } from 'fireStored'

const handleNotificationSettingLoad = () => {
	return docUserSettingNotificationGet().then(doc => doc.data())
}

export { handleNotificationSettingLoad }
