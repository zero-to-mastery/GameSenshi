import * as functions from 'firebase-functions' // https://stackoverflow.com/questions/51118943/cannot-read-property-https-of-undefined-error-in-firebase-functions
import * as admin from 'firebase-admin'

import {
	ENV,
	ENV_CORS_WHITELIST,
	ENV_ENABLE_PLAYGROUND,
	ENV_VERIFY_EMAIL_API_KEY,
	ENV_APOLLO_ENGINE_API_KEY,
} from 'constantValues'

const env = functions.config()[ENV]

const {
	[ENV_CORS_WHITELIST]: corsWhitelist,
	[ENV_ENABLE_PLAYGROUND]: playgroundEnabled,
	[ENV_VERIFY_EMAIL_API_KEY]: verifyEmailURL,
	[ENV_APOLLO_ENGINE_API_KEY]: apolloEngineApiKey,
} = env

admin.initializeApp()

export {
	functions,
	corsWhitelist,
	playgroundEnabled,
	verifyEmailURL,
	apolloEngineApiKey,
}
