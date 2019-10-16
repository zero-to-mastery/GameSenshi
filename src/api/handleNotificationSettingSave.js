import { firestore, auth } from 'firebaseInit'
import { fbfsSettingsNotification } from 'constantValues'

const handleNotificationSettingSave = data => {
	return firestore
		.doc(fbfsSettingsNotification(auth().currentUser.uid))
		.set(data)
}

export { handleNotificationSettingSave }
