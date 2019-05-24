// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
import * as functions from 'firebase-functions' // https://stackoverflow.com/questions/51118943/cannot-read-property-https-of-undefined-error-in-firebase-functions
import admin from 'firebase-admin'
import '@babel/polyfill' // https://stackoverflow.com/questions/49253746/error-regeneratorruntime-is-not-defined-with-babel-7
import { handleSignUp, handleVerifyEmail } from 'api'

admin.initializeApp()

const signUp = functions.https.onCall(handleSignUp)

export { signUp }
