import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const IMAGE = 'image'
const TEXT = 'text'

const CarouselCommon = props => {
	const { items } = props
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1500,
		autoplaySpeed: 1500,
		cssEase: 'linear',
	}
	return (
		<div>
			<Slider {...settings}>
				{items.map(item => {
					const { [IMAGE]: src, [TEXT]: text } = item
					return (
						<div className='carousel-item'>
							<div className='img-wrapper'>
								<img src={src} alt='Slide' className='carousel-image' />
							</div>
							<div className='text-overlay'>
								<p className='carousel-text'>{text}</p>
							</div>
						</div>
					)
				})}
			</Slider>
		</div>
	)
}

export { CarouselCommon, IMAGE, TEXT }
