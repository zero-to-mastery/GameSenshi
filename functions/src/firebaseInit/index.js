import * as functions from 'firebase-functions' // https://stackoverflow.com/questions/51118943/cannot-read-property-https-of-undefined-error-in-firebase-functions
import * as admin from 'firebase-admin'

import {
	ENV,
	ENV_CORS_WHITELIST,
	ENV_ENABLE_PLAYGROUND,
	ENV_APOLLO_ENGINE_API_KEY,
} from 'constantValues'

import { onUserCreate } from 'firebaseInit/onUserCreate'

admin.initializeApp(functions.config().firebase)

const env = functions.config()[ENV]
const firestore = new admin.firestore.Firestore()
const {
	[ENV_CORS_WHITELIST]: corsWhitelist,
	[ENV_ENABLE_PLAYGROUND]: playgroundEnabled,
	[ENV_APOLLO_ENGINE_API_KEY]: apolloEngineApiKey,
} = env

const onUserCreation = functions.auth
	.user()
	.onCreate((userRecord, eventContext) => {
		return onUserCreate(userRecord, eventContext, firestore)
	})

export {
	admin,
	functions,
	corsWhitelist,
	playgroundEnabled,
	apolloEngineApiKey,
	onUserCreation,
}
