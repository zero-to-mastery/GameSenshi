import React from 'react'
import { CardUser } from './CardUser'
import { FB_FS_SENSHI_BADGES_ONLINE } from 'constantValues'

const CardProfileOptioned = props => {
	return <CardUser {...props} />
}

const CardUserPropedDiscover = props => {
	return <CardProfileOptioned badge={[FB_FS_SENSHI_BADGES_ONLINE]} {...props} />
}

const CardProfilePropedSearch = props => {
	return <CardProfileOptioned badge={[FB_FS_SENSHI_BADGES_ONLINE]} {...props} />
}

export { CardUserPropedDiscover, CardProfilePropedSearch }
