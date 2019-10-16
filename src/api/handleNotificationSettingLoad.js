import { docNotificationSettingGet } from 'firebaseInit'

const handleNotificationSettingLoad = () => {
	return docNotificationSettingGet().then(doc => doc.data())
}

export { handleNotificationSettingLoad }
