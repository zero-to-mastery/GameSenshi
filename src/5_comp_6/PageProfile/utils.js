import { useState, useEffect } from 'react'
import { stopUndefined } from '1_utils'
import { Exports } from '5_comp_5'
import { docSellerProfileOnSnapshot } from '2_fire_store'
import {
	UNEXPECTED_ERROR_CODE_16,
	UNEXPECTED_ERROR_CODE_17,
	FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL,
	FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES,
} from '0_constants'
import {
	PAGE_PROFILE_STATE_LOADING,
	PAGE_PROFILE_STATE_DATA_SELLER,
	PAGE_PROFILE_STATE_DATA_CAROUSEL,
	PAGE_PROFILE_STATE_EXIST,
	PAGE_PROFILE_STATE_ERROR_CODE,
	PAGE_PROFILE_STATE_SERVICES,
} from './PageProfile'
import { storeModalSimpleError } from '2_state'

const {
	PAGE_ERROR_CODE_NOT_FOUND,
	PAGE_ERROR_CODE_NOT_A_SELLER,
} = stopUndefined(Exports)

const useData = (uid, currentUserUid) => {
	const [loading, setLoading] = useState(true)
	const [exist, setExist] = useState(true)
	const [data, setData] = useState({})
	const [errorCode, setErrorCode] = useState(null)

	useEffect(() => {
		let listener = null
		const attachListener = async () => {
			listener = docSellerProfileOnSnapshot(uid || currentUserUid)(
				async docSnapshot => {
					try {
						const data = await docSnapshot.data()
						if (data) {
							setData(data)
							setExist(true)
							setLoading(false)
						} else {
							setExist(false)
							if (uid) {
								setErrorCode(PAGE_ERROR_CODE_NOT_FOUND)
							} else if (currentUserUid) {
								setErrorCode(PAGE_ERROR_CODE_NOT_A_SELLER)
							}
							setLoading(false)
							return
						}
					} catch (err) {
						setExist(false)
						setErrorCode(null)
						setLoading(false)
						storeModalSimpleError(err, UNEXPECTED_ERROR_CODE_17)
					}
				},
				err => {
					setExist(false)
					setErrorCode(null)
					setLoading(false)
					storeModalSimpleError(err, UNEXPECTED_ERROR_CODE_16)
				}
			)
		}
		attachListener()
		return listener
	}, [uid, currentUserUid])

	const {
		[FIRESTORE_SELLER_SETTINGS_PROFILE_SERVICES]: services,
		[FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL]: carousel,
	} = data

	return {
		[PAGE_PROFILE_STATE_LOADING]: loading,
		[PAGE_PROFILE_STATE_EXIST]: exist,
		[PAGE_PROFILE_STATE_DATA_SELLER]: data,
		[PAGE_PROFILE_STATE_DATA_CAROUSEL]: carousel,
		[PAGE_PROFILE_STATE_ERROR_CODE]: errorCode,
		[PAGE_PROFILE_STATE_SERVICES]: services,
	}
}

const COMMENT_ID = 'id'
const COMMENT_NAME = 'name'
const COMMENT_POSTED_TIME = 'postedTime'
const COMMENT_AVATAR = 'avatar'
const COMMENT_BODY = 'body'

const comments = [
	{
		[COMMENT_ID]: 1,
		[COMMENT_NAME]: 'Tina Andrew',
		[COMMENT_POSTED_TIME]: '7 minutes ago',
		[COMMENT_AVATAR]: require('0_assets/img/james.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[COMMENT_ID]: 2,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[COMMENT_ID]: 3,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[COMMENT_ID]: 4,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[COMMENT_ID]: 5,
		[COMMENT_NAME]: 'Tina Andrew',
		[COMMENT_POSTED_TIME]: '7 minutes ago',
		[COMMENT_AVATAR]: require('0_assets/img/james.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[COMMENT_ID]: 6,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[COMMENT_ID]: 7,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[COMMENT_ID]: 8,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[COMMENT_ID]: 9,
		[COMMENT_NAME]: 'Tina Andrew',
		[COMMENT_POSTED_TIME]: '7 minutes ago',
		[COMMENT_AVATAR]: require('0_assets/img/james.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[COMMENT_ID]: 10,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[COMMENT_ID]: 11,
		[COMMENT_NAME]: 'Tina Andrew',
		[COMMENT_POSTED_TIME]: '7 minutes ago',
		[COMMENT_AVATAR]: require('0_assets/img/james.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[COMMENT_ID]: 12,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[COMMENT_ID]: 13,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[COMMENT_ID]: 14,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[COMMENT_ID]: 15,
		[COMMENT_NAME]: 'Tina Andrew',
		[COMMENT_POSTED_TIME]: '7 minutes ago',
		[COMMENT_AVATAR]: require('0_assets/img/james.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[COMMENT_ID]: 16,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[COMMENT_ID]: 17,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[COMMENT_ID]: 18,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[COMMENT_ID]: 19,
		[COMMENT_NAME]: 'Tina Andrew',
		[COMMENT_POSTED_TIME]: '7 minutes ago',
		[COMMENT_AVATAR]: require('0_assets/img/james.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[COMMENT_ID]: 20,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[COMMENT_ID]: 21,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[COMMENT_ID]: 22,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[COMMENT_ID]: 23,
		[COMMENT_NAME]: 'Tina Andrew',
		[COMMENT_POSTED_TIME]: '7 minutes ago',
		[COMMENT_AVATAR]: require('0_assets/img/james.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[COMMENT_ID]: 24,
		[COMMENT_NAME]: 'John Camber',
		[COMMENT_POSTED_TIME]: 'Yesterday',
		[COMMENT_AVATAR]: require('0_assets/img/michael.jpg'),
		[COMMENT_BODY]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
]

export { useData, comments }
