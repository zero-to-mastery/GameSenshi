import { useState, useEffect, useCallback } from 'react'
import { docUserSenshiGet, docUserSenshiSetFavourite } from '2_fireStored'
import { storeModalSimpleError } from '2_state'
import {
	FIRESTORE_USER_SENSHI_FAVOURITE,
	UNEXPECTED_ERROR_CODE_19,
} from '0_constantValues'
import { needLoginToClick } from '4_comp_0_Utils'

const useFavourite = (uid, signingIn, signedIn) => {
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
			}
			if (doc && doc.exists) {
				setLoading(false)
				setChecked(doc.data()[FIRESTORE_USER_SENSHI_FAVOURITE])
			} else {
				setLoading(false)
			}
		}

		if (signedIn) {
			getUserSenshi()
		} else if (signingIn) {
			setLoading(true)
		} else {
			setLoading(false)
			setChecked(false)
		}
	}, [uid, signingIn, signedIn])

	const onClick = useCallback((e, ref, setChecked, checked) => {
		needLoginToClick(
			() => {
				ref.current.onClick()
			},
			async () => {
				setLoading(true)
				docUserSenshiSetFavourite(uid)(!checked)
					.then(() => {
						setLoading(false)
						setChecked(!checked)
					})
					.catch(err => {
						setLoading(false)
						return storeModalSimpleError(err, UNEXPECTED_ERROR_CODE_19)
					})
			}
		)
	}, [])

	return [loading, checked, onClick]
}

export { useFavourite }
