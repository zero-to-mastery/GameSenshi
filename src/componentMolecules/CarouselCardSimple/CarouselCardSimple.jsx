import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { stopUndefined } from 'utils'
import { Exports } from 'componentAtoms'
import { Col } from 'reactstrap'
const { CardProfileSimple } = stopUndefined(Exports)

const CARD_SIMPLE_NAME = 'name'
const CARD_SIMPLE_IMAGE = 'image'

const CarouselCardSimple = props => {
	const { cards } = props
	const settings = {
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		className: 'slider',
		autoplay: false,
		speed: 500,
		autoplaySpeed: 3000,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}
	return (
		<Col md='12' style={{ marginTop: '-100px' }}>
			<Slider {...settings}>
				{cards.map(card => {
					const { [CARD_SIMPLE_IMAGE]: src, [CARD_SIMPLE_NAME]: name } = card
					return (
						<div>
							<CardProfileSimple src={src} name={name} />
						</div>
					)
				})}
			</Slider>
		</Col>
	)
}

export { CarouselCardSimple, CARD_SIMPLE_IMAGE, CARD_SIMPLE_NAME }
