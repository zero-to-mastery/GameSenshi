// firebase
import firebase from 'firebase/app'
import 'firebase/auth' // https://stackoverflow.com/questions/48592656/firebase-auth-is-not-a-function/56280110#56280110
import 'firebase/functions'
import 'firebase/storage'
import 'firebase/firestore'

import { onAuthChanged } from './onAuthChanged'
import { getRedirectResult } from './getRedirectResult'

import {
	fbfsSettingsGeneralPath,
	fbfsSettingsNotificationPath,
	UPDATED_AT,
	fbStorageUserAvatarPath,
} from 'constantValues'

const env = process.env

const firebaseConfig = {
	apiKey: env.REACT_APP_API_KEY,
	authDomain: env.REACT_APP_AUTH_DOMAIN,
	databaseURL: env.REACT_APP_DATABASE_URL,
	projectId: env.REACT_APP_PROJECT_ID,
	storageBucket: env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: env.REACT_APP_MESSAGING_SENDER_ID,
	appId: env.REACT_APP_APP_ID,
}

firebase.initializeApp(firebaseConfig)

const functions = firebase.functions()

const firestore = firebase.firestore()

const auth = firebase.auth

const docGetSetGenerator = path => {
	const ref = () => firestore.doc(path(auth().currentUser.uid))
	const get = () => ref().get()
	const set = (data, options = { merge: true }) =>
		ref().set({ [UPDATED_AT]: new Date(), ...data }, options)
	const onSanpshot = (...args) => ref().onSnapshot(...args)
	return [get, set, onSanpshot]
}

const [
	docGeneralSettingGet,
	docGeneralSettingSet,
	docGeneralSettingOnSnapshot,
] = docGetSetGenerator(fbfsSettingsGeneralPath)
const [
	docNotificationSettingGet,
	docNotificationSettingSet,
] = docGetSetGenerator(fbfsSettingsNotificationPath)

// load default storage bucket
const firebaseStorage = firebase.storage()

const storageSetGenerator = path => {
	const ref = () => firebaseStorage.ref(path(auth().currentUser.uid))
	const get = () => ref().getDownloadURL()
	const set = dataUrl => ref().putString(dataUrl, 'data_url')
	const remove = () => ref().delete
	return [get, set, remove]
}

const [
	storageUserAvatarGet,
	storageUserAvatarSet,
	storageUserAvatarRemove,
] = storageSetGenerator(fbStorageUserAvatarPath)

// use device default language
auth().useDeviceLanguage()

// user auth listener
auth().onAuthStateChanged(userAuth => {
	onAuthChanged(userAuth, (next, error) =>
		docGeneralSettingOnSnapshot(
			{ includeMetadataChanges: true },
			{ next, error }
		)
	)
})

// listener to get back sign in token from federated identity provider
getRedirectResult(auth().getRedirectResult(), auth)

export {
	functions,
	firebase,
	auth,
	firebaseStorage,
	docGeneralSettingGet,
	docGeneralSettingSet,
	docNotificationSettingGet,
	docNotificationSettingSet,
	storageUserAvatarGet,
	storageUserAvatarSet,
	storageUserAvatarRemove,
}
