// import { getCustomToken } from 'functions/getCustomToken'
// import {
// 	FUNCTION_ID_TOKEN,
// 	FUNCTION_ACCESS_TOKEN,
// 	INTERNAL_ERROR_CODE_9,
// 	INTERNAL_ERROR_CODE_10,
// 	INTERNAL_ERROR_CODE_11,
// } from '0_constants'
// import axios from 'axios'
// import { resObj } from '1_utils'
// import { auth } from '1_fire_init'

// // not in use

// const onSignUpFacebook = async data => {
// 	const {
// 		[FUNCTION_ID_TOKEN]: idToken,
// 		[FUNCTION_ACCESS_TOKEN]: accessToken,
// 	} = data

// 	let responseData = null

// 	try {
// 		responseData = await axios.get(
// 			`https://graph.facebook.com/v5.0/me?fields=id,name,email?access_token=${accessToken}`
// 		)
// 	} catch (err) {
// 		return resObj(false, INTERNAL_ERROR_CODE_9, '')
// 	}
// 	const { email } = responseData

// 	let decodedToken = null
// 	try {
// 		decodedToken = await auth().verifyIdToken(idToken)
// 	} catch (err) {
// 		const error = resObj(false, INTERNAL_ERROR_CODE_10, '')
// 		console.log(error, err)
// 		return error
// 	}

// 	const { uid } = decodedToken
// 	let userRecord = null

// 	try {
// 		userRecord = await auth().getUser(uid)
// 	} catch (err) {
// 		const error = resObj(false, INTERNAL_ERROR_CODE_11, '')
// 		console.log(error, err)
// 		return error
// 	}

// 	const { email: userEmail } = userRecord

// 	if (userEmail === email) {
// 		return getCustomToken('', '', email)
// 	} else {
// 		const error = resObj(false, email, '')
// 		console.log(error)
// 		return error
// 	}
// }

// export { onSignUpFacebook }
