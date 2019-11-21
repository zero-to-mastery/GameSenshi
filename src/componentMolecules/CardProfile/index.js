import React from 'react'
import { CardProfile } from './CardProfile'
import { Exports } from 'componentAtoms'
import { stopUndefined } from 'utils'
import { FB_FS_SENSHI_BADGES_ONLINE } from 'constantValues'
const { BadgesOptioned } = stopUndefined(Exports)

const CardProfileOptioned = props => {
	return <CardProfile badgeAs={BadgesOptioned} {...props} />
}

const CardProfilePropedIndex = props => {
	return <CardProfileOptioned badge={[FB_FS_SENSHI_BADGES_ONLINE]} {...props} />
}

const CardProfilePropedSearch = props => {
	return <CardProfileOptioned badge={[FB_FS_SENSHI_BADGES_ONLINE]} {...props} />
}

export { CardProfilePropedIndex, CardProfilePropedSearch }
