import React from 'react'
import Slider from 'react-slick'
import { stopUndefined } from '1_utils'
import { Exports } from '5_comp_1'
const { CardUserSimple } = stopUndefined(Exports)

const CARD_SIMPLE_NAME = 'name'
const CARD_SIMPLE_IMAGE = 'image'

const settings = {
	infinite: false,
	slidesToShow: 5,
	slidesToScroll: 3,
	speed: 500,
	autoplaySpeed: 3000,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
			},
		},
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

const CarouselCardSimple = props => {
	const { cards } = props

	return (
		<Slider {...settings}>
			{cards.map(card => {
				const { [CARD_SIMPLE_IMAGE]: src, [CARD_SIMPLE_NAME]: name } = card
				return <CardUserSimple src={src} name={name} key={name} />
			})}
		</Slider>
	)
}

export { CarouselCardSimple, CARD_SIMPLE_IMAGE, CARD_SIMPLE_NAME }
