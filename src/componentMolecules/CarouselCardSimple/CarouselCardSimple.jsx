import React from 'react'
import Slider from 'react-slick'
import { stopUndefined } from 'utils'
import { Exports } from 'componentAtoms'
const { CardProfileSimple } = stopUndefined(Exports)

const CARD_SIMPLE_NAME = 'name'
const CARD_SIMPLE_IMAGE = 'image'

const CarouselCardSimple = props => {
	const { cards } = props
	const settings = {
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 2,
		speed: 500,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	}
	return (
		<Slider {...settings}>
			{cards.map(card => {
				const { [CARD_SIMPLE_IMAGE]: src, [CARD_SIMPLE_NAME]: name } = card
				return <CardProfileSimple src={src} name={name} />
			})}
		</Slider>
	)
}

export { CarouselCardSimple, CARD_SIMPLE_IMAGE, CARD_SIMPLE_NAME }
