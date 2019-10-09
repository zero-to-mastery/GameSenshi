import { firestore, auth } from 'firebaseInit'
import { fbfsSettingsNotification } from 'constantValues'

const handleNotificationSettingLoad = () => {
	return firestore
		.doc(fbfsSettingsNotification(auth().currentUser))
		.get()
		.then(doc => doc.data())
}

export { handleNotificationSettingLoad }
