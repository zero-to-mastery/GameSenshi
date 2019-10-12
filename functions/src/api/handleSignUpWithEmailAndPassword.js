// import req from 'request-promise'
// import { auth, verifyEmailURL } from 'firebaseInit'
// import {
// 	signUpResObj,
// 	signUpEmailValidation,
// 	signUpPasswordValidation,
// 	signUpUsernameValidation,
// } from 'utils'

// import { handleIsEmailNotExist } from 'api'

// import {
// 	API_DATA,
// 	API_STATUS,
// 	API_SIGN_UP_EMAIL,
// 	API_SIGN_UP_PASSWORD,
// 	API_SIGN_UP_DISPLAY_NAME,
// 	USER_DISPLAY_NAME,
// 	STORE_USER_STATE_AVATAR,
// 	INTERNAL_ERROR_CODE_2,
// 	INTERNAL_ERROR_CODE_3,
// 	INTERNAL_ERROR_CODE_4,
// 	INTERNAL_ERROR_CODE_5,
// 	INTERNAL_ERROR_CODE_6,
// } from 'constantValues'

// // if user is smart, they can bypass this because they have the public api key
// // however majority is normal user
// // this issue need to be tackled in future, largely depend on firebase sdk limitation

// const handleSignUpWithEmailAndPassword = async (_, args) => {
// 	const {
// 		[API_DATA]: {
// 			[API_SIGN_UP_EMAIL]: email,
// 			[API_SIGN_UP_PASSWORD]: password,
// 			[API_SIGN_UP_DISPLAY_NAME]: username,
// 		},
// 		[API_DATA]: data,
// 	} = args
// 	try {
// 		const usernameInvalid = await signUpUsernameValidation(username)
// 			.then(() => null)
// 			.catch(result => result.errors)
// 		const emailInvalid = await signUpEmailValidation(email)
// 			.then(() => null)
// 			.catch(result => result.errors)
// 		const passwordInvalid = await signUpPasswordValidation(password)
// 			.then(() => null)
// 			.catch(result => result.errors)

// 		if (usernameInvalid || emailInvalid || passwordInvalid) {
// 			return signUpResObj(false, INTERNAL_ERROR_CODE_2, 2, {
// 				[API_SIGN_UP_DISPLAY_NAME]: usernameInvalid,
// 				[API_SIGN_UP_EMAIL]: emailInvalid,
// 				[API_SIGN_UP_PASSWORD]: passwordInvalid,
// 			})
// 		}
// 		const isEmailNew = await handleIsEmailNotExist(data)

// 		if (!isEmailNew[API_STATUS]) {
// 			return isEmailNew
// 		}

// 		const isEmailReal = await req(`${verifyEmailURL}${email}`)
// 			.then(res => {
// 				const data = JSON.parse(res)
// 				if (data[API_STATUS] === 1) {
// 					return signUpResObj(true)
// 				} else {
// 					return signUpResObj(false, INTERNAL_ERROR_CODE_3, 3, {
// 						[API_SIGN_UP_EMAIL]: 'Invalid Email',
// 					})
// 				}
// 			})
// 			.catch(err => {
// 				console.log('email verifying error', err)
// 				return signUpResObj(false, INTERNAL_ERROR_CODE_4, 4, {
// 					[API_SIGN_UP_EMAIL]: INTERNAL_ERROR_CODE_4,
// 				})
// 			})

// 		if (!isEmailReal[API_STATUS]) {
// 			return isEmailReal
// 		}

// 		const isUerCreated = await auth()
// 			.createUserWithEmailAndPassword(email, password)
// 			.then(credential => ({ status: true, credential }))
// 			.catch(err => ({ status: false, err }))

// 		if (isUerCreated.status) {
// 			const {
// 				credential: { user },
// 			} = isUerCreated
// 			if (user && user.emailVerified === false) {
// 				user.sendEmailVerification().catch(err => {
// 					console.log('email user failed', err)
// 				})
// 				user
// 					.updateProfile({
// 						[USER_DISPLAY_NAME]: username,
// 						[STORE_USER_STATE_AVATAR]: '',
// 					})
// 					.catch(err => {
// 						console.log('update username failed', err)
// 					})
// 			}
// 			return signUpResObj(true)
// 		} else {
// 			console.log('submit error', isUerCreated.err)
// 			return signUpResObj(false, INTERNAL_ERROR_CODE_5, 5)
// 		}
// 	} catch (err) {
// 		console.log(err)
// 		return signUpResObj(false, INTERNAL_ERROR_CODE_6, 6)
// 	}
// }

// export default handleSignUpWithEmailAndPassword
