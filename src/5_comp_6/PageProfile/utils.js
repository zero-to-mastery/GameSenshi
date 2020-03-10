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
import {
	FIRESTORE_SELLER_REVIEWS_COMMENT,
	FIRESTORE_SELLER_REVIEWS_STAR,
	FIRESTORE_SELLER_REVIEWS_ORDER_ID,
	FIRESTORE_SELLER_REVIEWS_BUYER_NAME,
	CREATED_AT,
} from '0_constants'

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

const AVATAR = 'avatar'

const comments = [
	{
		[FIRESTORE_SELLER_REVIEWS_ORDER_ID]: 1,
		[FIRESTORE_SELLER_REVIEWS_BUYER_NAME]: 'Tina Andrew',
		[CREATED_AT]: '7 minutes ago',
		[AVATAR]: require('0_assets/img/james.jpg'),
		[FIRESTORE_SELLER_REVIEWS_STAR]: 1,
		[FIRESTORE_SELLER_REVIEWS_COMMENT]: '',
	},
	{
		[FIRESTORE_SELLER_REVIEWS_ORDER_ID]: 2,
		[FIRESTORE_SELLER_REVIEWS_BUYER_NAME]: 'John Camber',
		[CREATED_AT]: 'Yesterday',
		[AVATAR]: require('0_assets/img/michael.jpg'),
		[FIRESTORE_SELLER_REVIEWS_STAR]: 1,
		[FIRESTORE_SELLER_REVIEWS_COMMENT]: '',
	},
	{
		[FIRESTORE_SELLER_REVIEWS_ORDER_ID]: 3,
		[FIRESTORE_SELLER_REVIEWS_BUYER_NAME]: 'John Camber',
		[CREATED_AT]: 'Yesterday',
		[AVATAR]: require('0_assets/img/michael.jpg'),
		[FIRESTORE_SELLER_REVIEWS_STAR]: 1,
		[FIRESTORE_SELLER_REVIEWS_COMMENT]: '',
	},
	{
		[FIRESTORE_SELLER_REVIEWS_ORDER_ID]: 4,
		[FIRESTORE_SELLER_REVIEWS_BUYER_NAME]: 'John Camber',
		[CREATED_AT]: 'Yesterday',
		[AVATAR]: require('0_assets/img/michael.jpg'),
		[FIRESTORE_SELLER_REVIEWS_STAR]: 1,
		[FIRESTORE_SELLER_REVIEWS_COMMENT]: '',
	},
	{
		[FIRESTORE_SELLER_REVIEWS_ORDER_ID]: 5,
		[FIRESTORE_SELLER_REVIEWS_BUYER_NAME]: 'Tina Andrew',
		[CREATED_AT]: '7 minutes ago',
		[AVATAR]: require('0_assets/img/james.jpg'),
		[FIRESTORE_SELLER_REVIEWS_STAR]: 1,
		[FIRESTORE_SELLER_REVIEWS_COMMENT]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[FIRESTORE_SELLER_REVIEWS_ORDER_ID]: 6,
		[FIRESTORE_SELLER_REVIEWS_BUYER_NAME]: 'John Camber',
		[CREATED_AT]: 'Yesterday',
		[AVATAR]: require('0_assets/img/michael.jpg'),
		[FIRESTORE_SELLER_REVIEWS_STAR]: 1,
		[FIRESTORE_SELLER_REVIEWS_COMMENT]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[FIRESTORE_SELLER_REVIEWS_ORDER_ID]: 7,
		[FIRESTORE_SELLER_REVIEWS_BUYER_NAME]: 'John Camber',
		[CREATED_AT]: 'Yesterday',
		[AVATAR]: require('0_assets/img/michael.jpg'),
		[FIRESTORE_SELLER_REVIEWS_STAR]: 1,
		[FIRESTORE_SELLER_REVIEWS_COMMENT]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[FIRESTORE_SELLER_REVIEWS_ORDER_ID]: 8,
		[FIRESTORE_SELLER_REVIEWS_BUYER_NAME]: 'John Camber',
		[CREATED_AT]: 'Yesterday',
		[AVATAR]: require('0_assets/img/michael.jpg'),
		[FIRESTORE_SELLER_REVIEWS_STAR]: 1,
		[FIRESTORE_SELLER_REVIEWS_COMMENT]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[FIRESTORE_SELLER_REVIEWS_ORDER_ID]: 9,
		[FIRESTORE_SELLER_REVIEWS_BUYER_NAME]: 'Tina Andrew',
		[CREATED_AT]: '7 minutes ago',
		[AVATAR]: require('0_assets/img/james.jpg'),
		[FIRESTORE_SELLER_REVIEWS_STAR]: 1,
		[FIRESTORE_SELLER_REVIEWS_COMMENT]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[FIRESTORE_SELLER_REVIEWS_ORDER_ID]: 10,
		[FIRESTORE_SELLER_REVIEWS_BUYER_NAME]: 'John Camber',
		[CREATED_AT]: 'Yesterday',
		[AVATAR]: require('0_assets/img/michael.jpg'),
		[FIRESTORE_SELLER_REVIEWS_STAR]: 1,
		[FIRESTORE_SELLER_REVIEWS_COMMENT]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[FIRESTORE_SELLER_REVIEWS_ORDER_ID]: 11,
		[FIRESTORE_SELLER_REVIEWS_BUYER_NAME]: 'Tina Andrew',
		[CREATED_AT]: '7 minutes ago',
		[AVATAR]: require('0_assets/img/james.jpg'),
		[FIRESTORE_SELLER_REVIEWS_STAR]: 1,
		[FIRESTORE_SELLER_REVIEWS_COMMENT]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[FIRESTORE_SELLER_REVIEWS_ORDER_ID]: 12,
		[FIRESTORE_SELLER_REVIEWS_BUYER_NAME]: 'John Camber',
		[CREATED_AT]: 'Yesterday',
		[AVATAR]: require('0_assets/img/michael.jpg'),
		[FIRESTORE_SELLER_REVIEWS_STAR]: 1,
		[FIRESTORE_SELLER_REVIEWS_COMMENT]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[FIRESTORE_SELLER_REVIEWS_ORDER_ID]: 13,
		[FIRESTORE_SELLER_REVIEWS_BUYER_NAME]: 'John Camber',
		[CREATED_AT]: 'Yesterday',
		[AVATAR]: require('0_assets/img/michael.jpg'),
		[FIRESTORE_SELLER_REVIEWS_STAR]: 1,
		[FIRESTORE_SELLER_REVIEWS_COMMENT]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[FIRESTORE_SELLER_REVIEWS_ORDER_ID]: 14,
		[FIRESTORE_SELLER_REVIEWS_BUYER_NAME]: 'John Camber',
		[CREATED_AT]: 'Yesterday',
		[AVATAR]: require('0_assets/img/michael.jpg'),
		[FIRESTORE_SELLER_REVIEWS_STAR]: 1,
		[FIRESTORE_SELLER_REVIEWS_COMMENT]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[FIRESTORE_SELLER_REVIEWS_ORDER_ID]: 15,
		[FIRESTORE_SELLER_REVIEWS_BUYER_NAME]: 'Tina Andrew',
		[CREATED_AT]: '7 minutes ago',
		[AVATAR]: require('0_assets/img/james.jpg'),
		[FIRESTORE_SELLER_REVIEWS_STAR]: 1,
		[FIRESTORE_SELLER_REVIEWS_COMMENT]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[FIRESTORE_SELLER_REVIEWS_ORDER_ID]: 16,
		[FIRESTORE_SELLER_REVIEWS_BUYER_NAME]: 'John Camber',
		[CREATED_AT]: 'Yesterday',
		[AVATAR]: require('0_assets/img/michael.jpg'),
		[FIRESTORE_SELLER_REVIEWS_STAR]: 1,
		[FIRESTORE_SELLER_REVIEWS_COMMENT]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[FIRESTORE_SELLER_REVIEWS_ORDER_ID]: 17,
		[FIRESTORE_SELLER_REVIEWS_BUYER_NAME]: 'John Camber',
		[CREATED_AT]: 'Yesterday',
		[AVATAR]: require('0_assets/img/michael.jpg'),
		[FIRESTORE_SELLER_REVIEWS_STAR]: 1,
		[FIRESTORE_SELLER_REVIEWS_COMMENT]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[FIRESTORE_SELLER_REVIEWS_ORDER_ID]: 18,
		[FIRESTORE_SELLER_REVIEWS_BUYER_NAME]: 'John Camber',
		[CREATED_AT]: 'Yesterday',
		[AVATAR]: require('0_assets/img/michael.jpg'),
		[FIRESTORE_SELLER_REVIEWS_STAR]: 1,
		[FIRESTORE_SELLER_REVIEWS_COMMENT]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[FIRESTORE_SELLER_REVIEWS_ORDER_ID]: 19,
		[FIRESTORE_SELLER_REVIEWS_BUYER_NAME]: 'Tina Andrew',
		[CREATED_AT]: '7 minutes ago',
		[AVATAR]: require('0_assets/img/james.jpg'),
		[FIRESTORE_SELLER_REVIEWS_STAR]: 1,
		[FIRESTORE_SELLER_REVIEWS_COMMENT]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[FIRESTORE_SELLER_REVIEWS_ORDER_ID]: 20,
		[FIRESTORE_SELLER_REVIEWS_BUYER_NAME]: 'John Camber',
		[CREATED_AT]: 'Yesterday',
		[AVATAR]: require('0_assets/img/michael.jpg'),
		[FIRESTORE_SELLER_REVIEWS_STAR]: 1,
		[FIRESTORE_SELLER_REVIEWS_COMMENT]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[FIRESTORE_SELLER_REVIEWS_ORDER_ID]: 21,
		[FIRESTORE_SELLER_REVIEWS_BUYER_NAME]: 'John Camber',
		[CREATED_AT]: 'Yesterday',
		[AVATAR]: require('0_assets/img/michael.jpg'),
		[FIRESTORE_SELLER_REVIEWS_STAR]: 1,
		[FIRESTORE_SELLER_REVIEWS_COMMENT]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[FIRESTORE_SELLER_REVIEWS_ORDER_ID]: 22,
		[FIRESTORE_SELLER_REVIEWS_BUYER_NAME]: 'John Camber',
		[CREATED_AT]: 'Yesterday',
		[AVATAR]: require('0_assets/img/michael.jpg'),
		[FIRESTORE_SELLER_REVIEWS_STAR]: 1,
		[FIRESTORE_SELLER_REVIEWS_COMMENT]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[FIRESTORE_SELLER_REVIEWS_ORDER_ID]: 23,
		[FIRESTORE_SELLER_REVIEWS_BUYER_NAME]: 'Tina Andrew',
		[CREATED_AT]: '7 minutes ago',
		[AVATAR]: require('0_assets/img/james.jpg'),
		[FIRESTORE_SELLER_REVIEWS_STAR]: 1,
		[FIRESTORE_SELLER_REVIEWS_COMMENT]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
	{
		[FIRESTORE_SELLER_REVIEWS_ORDER_ID]: 24,
		[FIRESTORE_SELLER_REVIEWS_BUYER_NAME]: 'John Camber',
		[CREATED_AT]: 'Yesterday',
		[AVATAR]: require('0_assets/img/michael.jpg'),
		[FIRESTORE_SELLER_REVIEWS_STAR]: 1,
		[FIRESTORE_SELLER_REVIEWS_COMMENT]:
			"Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!",
	},
]

export { useData, comments }
