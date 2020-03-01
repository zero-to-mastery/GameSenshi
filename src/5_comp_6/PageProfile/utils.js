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
	PAGE_PROFILE_STATE_DATA_USER,
	PAGE_PROFILE_STATE_DATA_CAROUSEL,
	PAGE_PROFILE_STATE_EXIST,
	PAGE_PROFILE_STATE_ERROR_CODE,
	PAGE_PROFILE_STATE_SERVICES,
} from './PageProfile'
import { storeModalSimpleError } from '2_state'

const {
	PAGE_ERROR_CODE_NOT_FOUND,
	PAGE_ERROR_CODE_NOT_A_SENSHI,
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
								setErrorCode(PAGE_ERROR_CODE_NOT_A_SENSHI)
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
		[PAGE_PROFILE_STATE_DATA_USER]: data,
		[PAGE_PROFILE_STATE_DATA_CAROUSEL]: carousel,
		[PAGE_PROFILE_STATE_ERROR_CODE]: errorCode,
		[PAGE_PROFILE_STATE_SERVICES]: services,
	}
}

export { useData }
