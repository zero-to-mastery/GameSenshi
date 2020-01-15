import React from 'react'
import { ContainerSearchResults } from './ContainerSearchResults'
import { cardPlayers } from './utils'

const ContainerSearchResultsPropedDefault = props => {
	return <ContainerSearchResults cards={cardPlayers} {...props} />
}

export { ContainerSearchResultsPropedDefault }
