import * as functions from 'firebase-functions' // https://stackoverflow.com/questions/51118943/cannot-read-property-https-of-undefined-error-in-firebase-functions
import * as admin from 'firebase-admin'

import {
	ENV,
	ENV_CORS_WHITELIST,
	ENV_ENABLE_PLAYGROUND,
	ENV_APOLLO_ENGINE_API_KEY,
	ENV_TWITCH_ID,
	ENV_TWITCH_SECRET,
	ENV_PROJECT_ID,
} from '0_constants'

admin.initializeApp()

const env = functions.config()[ENV]
const auth = admin.auth
const firestore = admin.firestore
const onCall = functions.https.onCall
const pubSub = (topic, callback) =>
	functions.pubsub.topic(topic).onPublish(callback)
const fbStorage = admin.storage().bucket()

const {
	[ENV_CORS_WHITELIST]: CORS_WHITE_LIST,
	[ENV_ENABLE_PLAYGROUND]: PLAYGROUND_ENABLED,
	[ENV_APOLLO_ENGINE_API_KEY]: APOLLO_ENGINE_API_KEY,
	[ENV_TWITCH_ID]: TWITCH_ID,
	[ENV_TWITCH_SECRET]: TWITCH_SECRET,
	[ENV_PROJECT_ID]: PROJECT_ID,
} = env

export {
	fbStorage,
	firestore,
	auth,
	onCall,
	functions,
	pubSub,
	CORS_WHITE_LIST,
	PLAYGROUND_ENABLED,
	APOLLO_ENGINE_API_KEY,
	TWITCH_ID,
	TWITCH_SECRET,
	PROJECT_ID,
}
