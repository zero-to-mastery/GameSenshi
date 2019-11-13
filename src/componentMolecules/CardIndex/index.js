import React from 'react'
import { CardIndex } from './CardIndex'
import { cardPlayers } from './utils'

const CardIndexPropedDefault = props => {
	return <CardIndex cards={cardPlayers} {...props} />
}

export { CardIndexPropedDefault }
