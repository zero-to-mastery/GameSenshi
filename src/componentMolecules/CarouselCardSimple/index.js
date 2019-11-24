import React from 'react'
import { CarouselCardSimple } from './CarouselCardSimple'
import { cardPlayers } from './utils'

const CarouselCardSimplePropedNew = props => {
	const { ...otherProps } = props
	return <CarouselCardSimple cards={cardPlayers} {...otherProps} />
}
export { CarouselCardSimplePropedNew }
