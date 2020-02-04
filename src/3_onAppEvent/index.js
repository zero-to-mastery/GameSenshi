import {
	databaseUserPresenceSetOffline,
	databaseUserPresenceOnSnapshot,
} from './userPresence'

import { getRedirectResult } from './getRedirectResult'

import {
	onAuthStateChange,
	setNonLoginUserLastIntendedAction,
} from './onAuthStateChange'

export {
	databaseUserPresenceSetOffline,
	onAuthStateChange,
	setNonLoginUserLastIntendedAction,
	databaseUserPresenceOnSnapshot,
	getRedirectResult,
}
