import React from 'react'
import Slider from 'react-slick'

const CarouselCommon = props => {
	// temp data array
	const slides = [
		{
			src: require('assets/img/denys.jpg'),
			altText: 'Slide 1',
		},
		{
			src: require('assets/img/fabien-bazanegue.jpg'),
			altText: 'Slide 2',
		},
		{
			src: require('assets/img/mark-finn.jpg'),
			altText: 'Slide 3',
		},
		{
			src: require('assets/img/denys.jpg'),
			altText: 'Slide 4',
		},
		{
			src: require('assets/img/fabien-bazanegue.jpg'),
			altText: 'Slide 5',
		},
		{
			src: require('assets/img/mark-finn.jpg'),
			altText: 'Slide 6',
		},
	]
	const settings = {
		infinite: true,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 2000,
		cssEase: 'linear',
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: false,
	}
	const CarouselItem = props => {
		const { src, altText } = props
		return (
			<div>
				<img src={src} alt={altText} />
			</div>
		)
	}
	return (
		<Slider {...settings}>
			{slides.map(slide => {
				return <CarouselItem src={slide.src} altText={slide.altText} />
			})}
		</Slider>
	)
}

export { CarouselCommon }
