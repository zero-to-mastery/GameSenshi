import { database, auth } from 'firebaseInit'
import { docdocSenshiProfileOnlineSet } from 'fireStored'

const userStatusDatabaseRef = (uid = auth().currentUser.uid) =>
	database().ref('/status/' + uid)

const isOfflineForDatabase = {
	state: 'offline',
	last_changed: database.ServerValue.TIMESTAMP,
}

const isOnlineForDatabase = {
	state: 'online',
	last_changed: database.ServerValue.TIMESTAMP,
}

const databaseConnectionRef = database().ref('.info/connected')

const databaseConnectionRefOn = () => {
	databaseConnectionRef.on('value', function(snapshot) {
		if (snapshot.val()) {
			userStatusDatabaseRef()
				.onDisconnect()
				.set(isOfflineForDatabase)
				.then(function() {
					docdocSenshiProfileOnlineSet(true)
					userStatusDatabaseRef().set(isOnlineForDatabase)
				})
		} else {
			docdocSenshiProfileOnlineSet(false)
		}
	})
}

const databaseConnectionRefOff = () => {
	databaseConnectionRef.off()
}

const setUserPresenceOffline = () => {
	docdocSenshiProfileOnlineSet(false)
	userStatusDatabaseRef().set(isOfflineForDatabase)
}

export {
	databaseConnectionRefOn,
	databaseConnectionRefOff,
	setUserPresenceOffline,
}
