import { database, auth, getServerTimestamp } from '1_fire_init'
import {
	DATABASE_STATUS_ONLINE,
	DATABASE_STATUS_ONLINE_LAST,
	databasePathStatus,
} from '0_constants'

import { docSellerProfileOnlineSet } from './2_fire_store'

const userStatusDatabaseRef = (uid = auth().currentUser.uid) =>
	database().ref(databasePathStatus(uid))

const isOfflineForDatabase = {
	[DATABASE_STATUS_ONLINE]: false,
	[DATABASE_STATUS_ONLINE_LAST]: getServerTimestamp(),
}

const isOnlineForDatabase = {
	[DATABASE_STATUS_ONLINE]: true,
	[DATABASE_STATUS_ONLINE_LAST]: getServerTimestamp(),
}

const databaseConnectionRef = database().ref('.info/connected')

const databaseConnectionRefOn = () => {
	databaseConnectionRef.on('value', function(snapshot) {
		if (snapshot.val()) {
			userStatusDatabaseRef()
				.onDisconnect()
				.set(isOfflineForDatabase)
				.then(function() {
					docSellerProfileOnlineSet(true)
					userStatusDatabaseRef().set(isOnlineForDatabase)
				})
		}
	})
}

const databaseConnectionRefOff = () => {
	docSellerProfileOnlineSet(false)
	databaseConnectionRef.off()
}

const databaseUserPresenceSetOffline = () => {
	userStatusDatabaseRef().set(isOfflineForDatabase)
}

const databaseUserPresenceOnSnapshot = uid => callback => {
	const ref = userStatusDatabaseRef(uid)
	ref.on('value', snapshot => {
		const value = snapshot.val()
		callback(value[DATABASE_STATUS_ONLINE], value[DATABASE_STATUS_ONLINE_LAST])
	})
	return () => {
		ref.off()
	} // ! must return in arrow callback or else it will lose `this` reference
}

export {
	databaseConnectionRefOn,
	databaseConnectionRefOff,
	databaseUserPresenceSetOffline,
	databaseUserPresenceOnSnapshot,
}
