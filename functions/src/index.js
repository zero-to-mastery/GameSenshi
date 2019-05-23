// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
import * as functions from 'firebase-functions' // https://stackoverflow.com/questions/51118943/cannot-read-property-https-of-undefined-error-in-firebase-functions
import admin from 'firebase-admin'
import { firebase } from 'utils/firebase'
import { EMAIL, PASSWORD } from 'utils/signUpConstants'

admin.initializeApp()

exports.signUp = functions.https.onCall((data, context) => {
	const { [EMAIL]: email, [PASSWORD]: password } = data
	firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(credential => {
			if (credential.user && credential.user.emailVerified === false) {
				credential.user
					.sendEmailVerification()
					.then(() => {
						console.log('email verification sent to user')
					})
					.catch(error => {
						console.log('email user failed', error)
					})
			}
		})
		.catch(error => {
			console.log('submit failed', error)
		})
	return { data: EMAIL }
})
