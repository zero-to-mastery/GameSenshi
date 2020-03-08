import { docUserSettingGeneralAvatarSet } from '2_fire_store'
import { storageUserAvatarWriteStream } from '2_fire_storage'
import { INTERNAL_ERROR_CODE_7, INTERNAL_ERROR_CODE_12 } from '0_constants'
import { resObj } from '1_utils'
import axios from 'axios'

const downloadAndStoreUserAvatar = async (uid, avatarUrl) => {
	if (avatarUrl) {
		axios
			.get(avatarUrl, {
				responseType: 'stream',
			})
			.then(response => {
				response.data.pipe()
				const writeStream = storageUserAvatarWriteStream(uid)({
					gzip: true,
					public: true,
					metadata: {
						contentType: response.headers['content-type'],
					},
				})
				response.data.pipe(writeStream)
				// .on('error', err => {
				// 	writeStream.end()
				// 	console.log(resObj(false, INTERNAL_ERROR_CODE_13, err))
				// })
			})
			.catch(err => {
				console.log(resObj(false, INTERNAL_ERROR_CODE_12, err))
			})
		try {
			await docUserSettingGeneralAvatarSet(uid)(avatarUrl)
		} catch (err) {
			console.log(resObj(false, INTERNAL_ERROR_CODE_7, err))
		}
	}
}

export { downloadAndStoreUserAvatar }

// import { docUserSettingGeneralAvatarSet } from '2_fire_store'
// import { storageUserAvatarWriteStream } from '2_fire_storage'
// import {
// 	INTERNAL_ERROR_CODE_7,
// 	INTERNAL_ERROR_CODE_12,
// 	INTERNAL_ERROR_CODE_13,
// } from '0_constants'
// import { resObj } from '1_utils'
// import request from 'request'

// const downloadAndStoreUserAvatar = async (uid, avatarUrl) => {
// 	if (avatarUrl) {
// 		const req = request(avatarUrl)
// 		req.pause()
// 		req
// 			.on('response', response => {
// 				response.data.pipe()
// 				const writeStream = storageUserAvatarWriteStream(uid)({
// 					gzip: true,
// 					public: true,
// 					metadata: {
// 						contentType: response.headers['content-type'],
// 					},
// 				})
// 				req.pipe(writeStream).on('error', err => {
// 					writeStream.end()
// 					console.log(resObj(false, INTERNAL_ERROR_CODE_13, err))
// 				})
// 			})
// 			.on('error', err => {
// 				console.log(resObj(false, INTERNAL_ERROR_CODE_12, err))
// 			})
// 		try {
// 			await docUserSettingGeneralAvatarSet(uid)(avatarUrl)
// 		} catch (err) {
// 			console.log(resObj(false, INTERNAL_ERROR_CODE_7, err))
// 		}
// 	}
// }

// export { downloadAndStoreUserAvatar }
