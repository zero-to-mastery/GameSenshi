import React, { useMemo } from 'react'
import { CardProfile } from './CardProfile'
import { cardPlayers, getCards } from './utils'

const CardIndexPropedDefault = props => {
	return <CardProfile cards={cardPlayers} {...props} />
}

const CardSearchedPropedDefault = props => {
	const { cards } = props
	const cards_ = useMemo(() => getCards(cards, cardPlayers), [cards])
	return <CardProfile cards={cards_} {...props} />
}

export { CardIndexPropedDefault, CardSearchedPropedDefault }
