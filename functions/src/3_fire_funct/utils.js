//https://stackoverflow.com/questions/36661795/how-to-upload-an-image-to-google-cloud-storage-from-an-image-url-in-node
//https://stackoverflow.com/questions/42956250/get-download-url-from-file-uploaded-with-cloud-functions-for-firebase
import { docUserSettingGeneralAvatarSet } from '2_fire_store'
import {
	storageUserAvatarWriteStream,
	storageUserAvatarFile,
} from '2_fire_storage'
import {
	INTERNAL_ERROR_CODE_7,
	INTERNAL_ERROR_CODE_12,
	INTERNAL_ERROR_CODE_13,
} from '0_constants'
import { resObj } from '1_utils'
import axios from 'axios'
import { v4 } from 'uuid'

const downloadAndStoreUserAvatar = async (uid, avatarUrl) => {
	const uuid = v4()
	if (avatarUrl) {
		axios({
			method: 'get',
			url: avatarUrl,
			responseType: 'stream',
		})
			.then(response => {
				const writeStream = storageUserAvatarWriteStream(uid)({
					metadata: {
						contentType: response.headers['content-type'],
						firebaseStorageDownloadTokens: uuid,
					},
				})
				response.data
					.pipe(writeStream)
					.on('error', err => {
						writeStream.end()
						console.log(resObj(false, INTERNAL_ERROR_CODE_13, err))
					})
					.on('finish', () => {
						storageUserAvatarFile(uid).getSignedUrl(
							{
								action: 'read',
								expires: '01-01-3000',
							},
							async (err, url) => {
								if (err) {
									console.log(resObj(false, INTERNAL_ERROR_CODE_7, err))
								} else {
									try {
										await docUserSettingGeneralAvatarSet(uid)(url)
									} catch (err) {
										console.log(resObj(false, INTERNAL_ERROR_CODE_7, err))
									}
								}
							}
						)
					})
			})
			.catch(err => {
				console.log(resObj(false, INTERNAL_ERROR_CODE_12, err))
			})
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
//      req.resume()
// 		try {
// 			await docUserSettingGeneralAvatarSet(uid)(avatarUrl)
// 		} catch (err) {
// 			console.log(resObj(false, INTERNAL_ERROR_CODE_7, err))
// 		}
// 	}
// }

// export { downloadAndStoreUserAvatar }
