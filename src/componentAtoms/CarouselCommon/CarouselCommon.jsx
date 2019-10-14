import React from 'react'
// custom react carousel external package
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './styles.module.css'

const SRC = 'src'
const ALT_TEXT = 'altText'

const CarouselItem = props => {
	const { [SRC]: src, [ALT_TEXT]: altText } = props
	return (
		<div className={styles.slideWrapper}>
			<img className={styles.slideImage} src={src} alt={altText} />
		</div>
	)
}

const CarouselCommon = props => {
	const { slides, ...otherProps } = props
	return (
		<Slider {...otherProps}>
			{slides.map(slide => {
				const { [SRC]: src, [ALT_TEXT]: altText } = slide
				return <CarouselItem src={src} altText={altText} />
			})}
		</Slider>
	)
}

export { CarouselCommon, SRC, ALT_TEXT }
