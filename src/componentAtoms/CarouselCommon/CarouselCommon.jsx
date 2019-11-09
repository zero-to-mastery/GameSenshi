import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CarouselCommon = props => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}
	return (
		<div>
			<Slider {...settings}>
				<div>
					<h1>1</h1>
				</div>
				<div>
					<h1>2</h1>
				</div>
				<div>
					<h1>3</h1>
				</div>
			</Slider>
		</div>
	)
}

export { CarouselCommon }
