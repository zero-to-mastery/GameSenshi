import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/functions'

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth

// use device default language
auth().useDeviceLanguage()

// user auth listener
auth().onAuthStateChanged(function(user) {
	console.log(user, 'Signed In!')
	if (user) {
		// User is signed in.
		// var displayName = user.displayName;
		// var email = user.email;
		// var emailVerified = user.emailVerified;
		// var photoURL = user.photoURL;
		// var isAnonymous = user.isAnonymous;
		// var uid = user.uid;
		// var providerData = user.providerData;
	} else {
		// User is signed out.
	}
})

// listener to get back sign in token from federated identity provider
auth()
	.getRedirectResult()
	.then(result => {
		// Remember that the user may have signed in with an account that has a different email
		// address than the first one. This can happen as Firebase doesn't control the provider's
		// sign in flow and the user is free to login using whichever account he owns.
		// Step 4b.
		// Link to Google credential.
		// As we have access to the pending credential, we can directly call the link method.
		// ! google unlink facebook: https://github.com/firebase/firebase-js-sdk/issues/569
		const provider2 = JSON.parse(sessionStorage.getItem('provider2'))
		if (provider2) {
			result.user
				.linkWithRedirect(new auth[provider2]())
				.then(function(usercred) {
					// Google account successfully linked to the existing Firebase user.
					//goToApp()
				})
		}
	})
	.catch(err => {
		console.log('failed auth', err)
		// An error happened.
		// need to save this credential before hand in cache, remember delete it later.
		const { code, credential, email } = err
		console.log(credential)
		if (code === 'auth/account-exists-with-different-credential') {
			// Step 2.
			// User's email already exists.
			// The pending Google credential.
			// need to save this credential before hand in cache, remember delete it later.
			// The provider account's email address.
			// Get sign-in methods for this email.
			auth()
				.fetchSignInMethodsForEmail(email)
				.then(methods => {
					// Step 3.
					// If the user has several sign-in methods,
					// the first method in the list will be the "recommended" method to use.
					// if (methods[0] === 'password') {
					// 	// Asks the user their password.
					// 	// In real scenario, you should handle this asynchronously.
					// 	var password = promptUserForPassword() // TODO: implement promptUserForPassword.
					// 	auth
					// 		.signInWithEmailAndPassword(email, password)
					// 		.then(function(user) {
					// 			// Step 4a.
					// 			return user.linkWithCredential(pendingCred)
					// 		})
					// 		.then(function() {
					// 			// Google account successfully linked to the existing Firebase user.
					// 			//goToApp()
					// 		})
					// 	return
					// }
					// All the other cases are external providers.
					// Construct provider object for that provider.
					// TODO: implement getProviderForProviderId.

					const getProvider = method => {
						return method === 'google.com'
							? 'GoogleAuthProvider'
							: method === 'facebook.com'
							? 'FacebookAuthProvider'
							: method === 'twitter.com'
							? 'TwitterAuthProvider'
							: undefined
					}

					const provider = getProvider(methods[0])
					const provider2 = getProvider(credential.signInMethod)
					sessionStorage.setItem('provider2', JSON.stringify(provider2))

					// At this point, you should let the user know that he already has an account
					// but with a different provider, and let him validate the fact he wants to
					// sign in with this provider.
					// Sign in to provider. Note: browsers usually block popup triggered asynchronously,
					// so in real scenario you should ask the user to click on a "continue" button
					// that will trigger the signInWithPopup.
					auth().signInWithRedirect(new auth[provider]())
					//continue on getRedirectResult .then
				})
		}
	})
	.then(() => {
		sessionStorage.removeItem('provider2')
	})

const functions = firebase.functions()

export { functions, firebase, auth }
