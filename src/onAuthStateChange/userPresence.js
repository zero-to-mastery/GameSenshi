import { database, auth, getServerTimestamp } from 'firebaseInit'
import {
	DATABASE_STATUS_ONLINE,
	DATABASE_STATUS_ONLINE_LAST,
	databasePathStatus,
} from 'constantValues'

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
					userStatusDatabaseRef().set(isOnlineForDatabase)
				})
		}
	})
}

const databaseConnectionRefOff = () => {
	databaseConnectionRef.off()
}

const databaseUserPresenceSetOffline = () => {
	userStatusDatabaseRef().set(isOfflineForDatabase)
}

const databaseUserPresenceOnSnapshot = (...args) =>
	userStatusDatabaseRef.on('value', ...args)

export {
	databaseConnectionRefOn,
	databaseConnectionRefOff,
	databaseUserPresenceSetOffline,
	databaseUserPresenceOnSnapshot,
}
