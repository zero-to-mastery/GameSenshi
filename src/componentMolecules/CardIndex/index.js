import React, { useMemo } from 'react'
import { CardIndex } from './CardIndex'
import { cardPlayers, getCards } from './utils'

const CardIndexPropedDefault = props => {
	return <CardIndex cards={cardPlayers} {...props} />
}

const CardSearchedPropedDefault = props => {
	const { cards } = props
	const cards_ = useMemo(() => getCards(cards, cardPlayers), [cards])
	return <CardIndex cards={cards_} {...props} />
}

export { CardIndexPropedDefault, CardSearchedPropedDefault }
