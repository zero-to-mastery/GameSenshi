import React from 'react'
// custom react carousel external package
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './styles.module.css'
// ja utility library
import { uniqueId } from 'lodash'
// custom react video player
import ReactPlayer from 'react-player'

const SRC = 'src'
const ALT_TEXT = 'altText'
const IS_VIDEO = 'isVideo'
const KEY = 'key'

const ReactPlayerGeneric = props => {
	const { [SRC]: src } = props
	return (
		<ReactPlayer
			url={src}
			light={false}
			width='100%'
			height='200px'
			controls={true}
			volume={1}
			config={{
				youtube: {
					playerVars: { showinfo: 1 },
				},
			}}
			{...props}
		/>
	)
}

const CarouselItem = props => {
	const {
		[SRC]: src,
		[ALT_TEXT]: altText,
		[IS_VIDEO]: isVideo,
		[KEY]: key,
	} = props
	return (
		<div key={key} className={styles.slideWrapper}>
			{!isVideo ? (
				<img
					className={styles.slideImage}
					style={{ width: 300 }}
					src={src}
					alt={altText}
				/>
			) : (
				<ReactPlayerGeneric src={src} />
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
				return (
					<CarouselItem
						key={uniqueId()}
						src={src}
						altText={altText}
						isVideo={isVideo}
					/>
				)
			})}
		</Slider>
	)
}

export { CarouselCommon, SRC, ALT_TEXT, IS_VIDEO }
