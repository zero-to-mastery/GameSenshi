import { docSettingNotificationGet } from 'fireStored'

const handleNotificationSettingLoad = () => {
	return docSettingNotificationGet().then(doc => doc.data())
}

export { handleNotificationSettingLoad }
