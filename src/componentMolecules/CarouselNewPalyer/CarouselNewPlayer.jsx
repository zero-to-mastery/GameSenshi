import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
//reactstrap components
import { Col, Button } from 'reactstrap'
// import from atoms
import { stopUndefined } from 'utils'
import { Exports } from 'componentAtoms'

const { CardPlayerSimple } = stopUndefined(Exports)

const CARD_SIMPLE_NAME = 'name'
const CARD_SIMPLE_IMAGE = 'image'

const PrevButton = props => {
	return (
		<Button
			className='btn-round btn-icon btn-simple slick-prev slick-arrow'
			color='primary'
			aria-label='Previous'
			type='button'
			onClick={props.onClick}
			style={{
				...props.style,
				display: 'block',
			}}
		>
			<i className='tim-icons icon-minimal-left' />
		</Button>
	)
}

const NextButton = props => {
	return (
		<div className={props.className} onClick={props.onClick}>
			<i className='tim-icons icon-minimal-right' />
		</div>
	)
}
const CarouselNewPlayer = props => {
	const { cards } = props
	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
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
					return <CardPlayerSimple src={src} name={name} />
				})}
			</Slider>
		</Col>
	)
}

export { CarouselNewPlayer, CARD_SIMPLE_IMAGE, CARD_SIMPLE_NAME }
