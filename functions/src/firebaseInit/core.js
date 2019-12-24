import * as functions from 'firebase-functions' // https://stackoverflow.com/questions/51118943/cannot-read-property-https-of-undefined-error-in-firebase-functions
import * as admin from 'firebase-admin'

import {
	ENV,
	ENV_CORS_WHITELIST,
	ENV_ENABLE_PLAYGROUND,
	ENV_APOLLO_ENGINE_API_KEY,
	ENV_TWITCH_ID,
	ENV_TWITCH_SECRET,
} from 'constantValues'

admin.initializeApp(functions.config().firebase)

const env = functions.config()[ENV]
const fireStored = new admin.firestore.Firestore()
let getServerTimestamp = admin.firestore.FieldValue.serverTimestamp
const {
	[ENV_CORS_WHITELIST]: corsWhitelist,
	[ENV_ENABLE_PLAYGROUND]: playgroundEnabled,
	[ENV_APOLLO_ENGINE_API_KEY]: apolloEngineApiKey,
	[ENV_TWITCH_ID]: twitchID,
	[ENV_TWITCH_SECRET]: twitchSecret,
} = env

export {
	admin,
	functions,
	corsWhitelist,
	playgroundEnabled,
	apolloEngineApiKey,
	getServerTimestamp,
	fireStored,
	twitchID,
	twitchSecret,
}
