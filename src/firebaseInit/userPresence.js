import { database, auth } from 'firebaseInit/core'

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
					userStatusDatabaseRef().set(isOnlineForDatabase)
				})
		}
	})
}

const databaseConnectionRefOff = () => {
	databaseConnectionRef.off()
}

const uerPresenceOffline = () => {
	userStatusDatabaseRef().set(isOfflineForDatabase)
}

export { databaseConnectionRefOn, databaseConnectionRefOff, uerPresenceOffline }
