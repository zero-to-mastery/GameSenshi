import { useEffect, useState } from 'react'
import { databaseUserPresenceOnSnapshot } from '3_onAppEvent'

const useOnline = uid => {
	const [loading, setLoading] = useState(true)
	const [online, setOnline] = useState(false)

	useEffect(() => {
		const unsubscribe = databaseUserPresenceOnSnapshot(uid)(state => {
			setLoading(false)
			setOnline(state)
		})
		return unsubscribe
	}, [uid])

	return [loading, online]
}

export { useOnline }
