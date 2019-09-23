import * as functions from 'firebase-functions' // https://stackoverflow.com/questions/51118943/cannot-read-property-https-of-undefined-error-in-firebase-functions
import * as admin from 'firebase-admin'
import { onUserCreate } from 'firebaseInit/onUserCreate'

import {
	ENV,
	ENV_CORS_WHITELIST,
	ENV_ENABLE_PLAYGROUND,
	ENV_APOLLO_ENGINE_API_KEY,
} from 'constantValues'

admin.initializeApp()

const env = functions.config()[ENV]

const {
	[ENV_CORS_WHITELIST]: corsWhitelist,
	[ENV_ENABLE_PLAYGROUND]: playgroundEnabled,
	[ENV_APOLLO_ENGINE_API_KEY]: apolloEngineApiKey,
} = env

const firestore = new Firestore()

functions.auth.user().onCreate(user => {
	onUserCreate(user, firestore)
})

export {
	admin,
	functions,
	corsWhitelist,
	playgroundEnabled,
	apolloEngineApiKey,
}
