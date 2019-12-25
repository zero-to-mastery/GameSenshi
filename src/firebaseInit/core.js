import firebase from 'firebase/app'
import 'firebase/auth' // https://stackoverflow.com/questions/48592656/firebase-auth-is-not-a-function/56280110#56280110
import 'firebase/functions'
import 'firebase/storage'
import 'firebase/firestore'
import { ENV_FIREBASE_CONFIG } from 'constantValues'

firebase.initializeApp(ENV_FIREBASE_CONFIG)

const fireFunct = firebase.functions

const fireStored = firebase.firestore

const getServerTimestamp = fireStored.FieldValue.serverTimestamp

const auth = firebase.auth

const firebaseStorage = firebase.storage

// use device default language
auth().useDeviceLanguage()

export { fireFunct, fireStored, auth, firebaseStorage, getServerTimestamp }
