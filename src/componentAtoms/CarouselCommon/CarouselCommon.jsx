import React from 'react'
// custom react carousel external package
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './styles.module.css'
// custom react video player
import ReactPlayer from 'react-player'

const SRC = 'src'
const ALT_TEXT = 'altText'
const IS_VIDEO = 'isVideo'

const CarouselItem = props => {
	const { [SRC]: src, [ALT_TEXT]: altText, [IS_VIDEO]: isVideo } = props
	return (
		<div className={styles.slideWrapper}>
			{isVideo ? (
				<ReactPlayer
					url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
					playing
				/>
			) : (
				<img className={styles.slideImage} src={src} alt={altText} />
			)}
		</div>
	)
}

const CarouselCommon = props => {
	const { slides, ...otherProps } = props
	return (
		<Slider {...otherProps}>
			{slides.map(slide => {
				const { [SRC]: src, [ALT_TEXT]: altText, [IS_VIDEO]: isVideo } = slide
				return <CarouselItem src={src} altText={altText} isVideo={isVideo} />
			})}
		</Slider>
	)
}

export { CarouselCommon, SRC, ALT_TEXT, IS_VIDEO }
