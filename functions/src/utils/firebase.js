// in future this should turn into npm library so that backend can use the same code
import * as firebase from 'firebase/app' // https://stackoverflow.com/questions/48592656/firebase-auth-is-not-a-function/56280110#56280110
import 'firebase/auth'
import * as functions from 'firebase-functions'

import {
	ENV,
	REACT_APP_API_KEY,
	REACT_APP_AUTH_DOMAIN,
	REACT_APP_DATABASE_URL,
	REACT_APP_PROJECT_ID,
	REACT_APP_STORAGE_BUCKET,
	REACT_APP_MESSAGING_SENDER_ID,
	REACT_APP_APP_ID,
} from 'utils/envKeyConstants'

const {
	[ENV]: {
		[REACT_APP_API_KEY]: react_app_api_key,
		[REACT_APP_AUTH_DOMAIN]: react_app_auth_domain,
		[REACT_APP_DATABASE_URL]: react_app_database_url,
		[REACT_APP_PROJECT_ID]: react_app_project_id,
		[REACT_APP_STORAGE_BUCKET]: react_app_storage_bucket,
		[REACT_APP_MESSAGING_SENDER_ID]: react_app_messaging_sender_id,
		[REACT_APP_APP_ID]: react_app_app_id,
	},
} = functions.config()

const firebaseConfig = {
	apiKey: react_app_api_key,
	authDomain: react_app_auth_domain,
	databaseURL: react_app_database_url,
	projectId: react_app_project_id,
	storageBucket: react_app_storage_bucket,
	messagingSenderId: react_app_messaging_sender_id,
	appId: react_app_app_id,
}

firebase.initializeApp(firebaseConfig)

export { firebase, functions }
