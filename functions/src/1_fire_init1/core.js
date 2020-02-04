import * as functions from 'firebase-functions' // https://stackoverflow.com/questions/51118943/cannot-read-property-https-of-undefined-error-in-firebase-functions
import * as admin from 'firebase-admin'

import {
	ENV,
	ENV_CORS_WHITELIST,
	ENV_ENABLE_PLAYGROUND,
	ENV_APOLLO_ENGINE_API_KEY,
	ENV_TWITCH_ID,
	ENV_TWITCH_SECRET,
} from '0_constants'

admin.initializeApp()

const env = functions.config()[ENV]
const firestoreF = functions.firestore
const auth = admin.auth
const fireStored = new admin.firestore.Firestore()
const onCall = functions.https.onCall
const getServerTimestamp = admin.firestore.FieldValue.serverTimestamp

const {
	[ENV_CORS_WHITELIST]: CORS_WHITE_LIST,
	[ENV_ENABLE_PLAYGROUND]: PLAYGROUND_ENABLED,
	[ENV_APOLLO_ENGINE_API_KEY]: APOLLO_ENGINE_API_KEY,
	[ENV_TWITCH_ID]: TWITCH_ID,
	[ENV_TWITCH_SECRET]: TWITCH_SECRET,
} = env

export {
	auth,
	onCall,
	functions,
	firestoreF,
	CORS_WHITE_LIST,
	PLAYGROUND_ENABLED,
	APOLLO_ENGINE_API_KEY,
	getServerTimestamp,
	fireStored,
	TWITCH_ID,
	TWITCH_SECRET,
}
