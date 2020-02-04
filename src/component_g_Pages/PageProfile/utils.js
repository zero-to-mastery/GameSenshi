import { useState, useEffect, useRef } from 'react'
import { stopUndefined } from 'utils'
import { Exports } from 'component_f_MultiOrganisms'
import { docSenshiProfileOnSnapshot } from 'fireStored'
import {
	UNEXPECTED_ERROR_CODE_16,
	UNEXPECTED_ERROR_CODE_17,
	FIRESTORE_SENSHI_SETTINGS_PROFILE_CAROUSEL,
} from '0_constantValues'
import {
	PAGE_PROFILE_STATE_LOADING,
	PAGE_PROFILE_STATE_DATA_USER,
	PAGE_PROFILE_STATE_DATA_CAROUSEL,
	PAGE_PROFILE_STATE_EXIST,
	PAGE_PROFILE_STATE_ERROR_CODE,
} from './PageProfile'
import { storeModalSimpleError } from 'state'

const {
	PAGE_ERROR_CODE_NOT_FOUND,
	PAGE_ERROR_CODE_NOT_A_SENSHI,
} = stopUndefined(Exports)

const useData = (uid, currentUserUid) => {
	const [loading, setLoading] = useState(true)
	const [exist, setExist] = useState(true)
	const [data, setData] = useState(null)
	const [errorCode, setErrorCode] = useState(null)
	const observer = useRef(() => {})

	useEffect(() => {
		const attachListener = async () => {
			observer.current = docSenshiProfileOnSnapshot(uid || currentUserUid)(
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
		return observer.current
	}, [uid, currentUserUid])

	return {
		[PAGE_PROFILE_STATE_LOADING]: loading,
		[PAGE_PROFILE_STATE_EXIST]: exist,
		[PAGE_PROFILE_STATE_DATA_USER]: data,
		[PAGE_PROFILE_STATE_DATA_CAROUSEL]:
			data && data[FIRESTORE_SENSHI_SETTINGS_PROFILE_CAROUSEL],
		[PAGE_PROFILE_STATE_ERROR_CODE]: errorCode,
	}
}

export { useData }
