import React from 'react'
import { CarouselNewPlayer } from './CarouselNewPlayer'
import { cardPlayers } from './utils'

const CarouselNewPlayerWithProps = props => {
	const { ...otherProps } = props
	return <CarouselNewPlayer cards={cardPlayers} {...otherProps} />
}
export { CarouselNewPlayerWithProps }
