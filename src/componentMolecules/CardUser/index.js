import React from 'react'
import { CardUser } from './CardUser'

const CardProfileOptioned = props => {
	return <CardUser {...props} />
}

const CardUserPropedDiscover = props => {
	return <CardProfileOptioned badge={['online']} {...props} />
}

const CardProfilePropedSearch = props => {
	return <CardProfileOptioned badge={['online']} {...props} />
}

export { CardUserPropedDiscover, CardProfilePropedSearch }
