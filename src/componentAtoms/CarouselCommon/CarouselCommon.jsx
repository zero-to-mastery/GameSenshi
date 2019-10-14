import React from 'react'
// custom react carousel external package
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './styles.module.css'
import { slides } from './utils'

const CarouselCommon = props => {
	const settings = {
		autoplay: true,
		autoplaySpeed: 2000,
		cssEase: 'linear',
		slidesToShow: 3,
		slidesToScroll: 3,
		infinite: true,
		speed: 1000,
	}
	const CarouselItem = props => {
		const { src, altText } = props
		return (
			<div className={styles.slideWrapper}>
				<img className={styles.slideImage} src={src} alt={altText} />
			</div>
		)
	}
	return (
		<Slider {...settings}>
			{slides.map(({ src, altText }) => {
				return <CarouselItem src={src} altText={altText} />
			})}
		</Slider>
	)
}

export { CarouselCommon }
