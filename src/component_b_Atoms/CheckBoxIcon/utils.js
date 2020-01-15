import { useState, useEffect } from 'react'
import { docUserSenshiGet } from 'fireStored'
//import { storeModalSimpleError } from 'state'
import {
	//UNEXPECTED_ERROR_CODE_18,
	FIRESTORE_USER_SENSHI_FAVOURITE,
} from 'constantValues'

const useFavourite = uid => {
	const [loading, setLoading] = useState(true)
	const [checked, setChecked] = useState(false)

	useEffect(() => {
		const getUserSenshi = async () => {
			let doc = null
			try {
				doc = await docUserSenshiGet(undefined, uid)
			} catch (err) {
				setLoading(false)
				return
				//storeModalSimpleError(err, UNEXPECTED_ERROR_CODE_18)
			}
			if (doc && doc.exists) {
				setLoading(false)
				setChecked(doc.data()[FIRESTORE_USER_SENSHI_FAVOURITE])
			} else {
				setLoading(false)
			}
		}
		getUserSenshi()
	}, [uid])
	return { loading, checked }
}

export { useFavourite }
