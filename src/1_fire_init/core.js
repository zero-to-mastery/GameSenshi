import firebase from 'firebase/app'
import 'firebase/auth' // https://stackoverflow.com/questions/48592656/firebase-auth-is-not-a-function/56280110#56280110
import 'firebase/functions'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/database'
import { ENV_VALUE_FIREBASE_CONFIG } from '0_constants'

firebase.initializeApp(ENV_VALUE_FIREBASE_CONFIG)

const fireFunct = firebase.functions

const fireStored = firebase.firestore

const fireStoreBatch = fireStored().batch()

const getServerTimestamp = fireStored.FieldValue.serverTimestamp

const auth = firebase.auth

const firebaseStorage = firebase.storage

const database = firebase.database

// use device default language
auth().useDeviceLanguage()

export {
	fireFunct,
	fireStored,
	auth,
	fireStoreBatch,
	firebaseStorage,
	getServerTimestamp,
	database,
}
