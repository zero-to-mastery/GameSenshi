import React, { useCallback, useState, useMemo, useEffect } from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import ReactPlayer from 'react-player'
import { ImageStyled } from './styled'
import Image from 'material-ui-image'
import styles from './styles.module.css'

import {
	FIRESTORE_SENSHI_SETTINGS_PROFILE_CAROUSEL_YOUTUBE,
	FIRESTORE_SENSHI_SETTINGS_PROFILE_CAROUSEL_IMAGE,
} from '0_constants'

const RENDER_ITEM = 'renderItem'
const RENDER_THUMB_INNER = 'renderThumbInner'

const getYoutubeEmbededUrl = id =>
	`https://www.youtube.com/embed/${id}?autoplay=1&showinfo=0`

const getYoutubeThumnailUrl = id => `https://img.youtube.com/vi/${id}/0.jpg`

const ImgThumb = props => {
	const { onClick, src, aspectRatio } = props
	return (
		<ImageStyled
			className='rounded-0'
			color='transparent'
			src={src}
			style={{ padding: `${aspectRatio}% 0` }}
			onClick={onClick}
		/>
	)
}

const Img = props => {
	const { src, aspectRatio, onClick } = props
	return <ImgThumb src={src} aspectRatio={aspectRatio} onClick={onClick} />
}

const Player = props => {
	const { src, onReady, playing, onClick, aspectRatio } = props
	return (
		<div
			className='image-gallery-image'
			style={{
				position: 'relative',
				padding: `${aspectRatio}% 0`,
				height: 0,
			}}
		>
			<ReactPlayer
				onReady={onReady}
				url={getYoutubeEmbededUrl(src)}
				playing={playing}
				controls
				light
				onClick={onClick}
				width='100%'
				height='100%'
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
				}}
			/>
		</div>
	)
}

const PlayerThumb = props => {
	const { src, aspectRatio } = props
	return (
		<Image
			className='rounded-0'
			src={getYoutubeThumnailUrl(src)}
			style={{ padding: `${aspectRatio}% 0` }}
		/>
	)
}

const Carousel = props => {
	const [showUI, setShowUI] = useState(true)
	const [videoPlaying, setVideoPlaying] = useState(false)
	const { items, aspectRatio, onImageClick, onSlide, ...otherProps } = props

	const aspectRatio_ = useMemo(() => (aspectRatio / 2 || 1 / 3) * 100, [
		aspectRatio,
	])

	const setShowUI_ = useCallback(
		index => {
			setShowUI(
				!!items[index][FIRESTORE_SENSHI_SETTINGS_PROFILE_CAROUSEL_IMAGE]
			)
		},
		[items]
	)

	useEffect(() => {
		setShowUI_(0)
	}, [])

	const onSlide_ = useCallback(
		currentIndex => {
			setVideoPlaying(false)
			onSlide && onSlide(currentIndex)
			setShowUI_(currentIndex)
		},
		[onSlide, setShowUI_]
	)

	const videoOnClick = useCallback(() => {
		setVideoPlaying(state => !state)
	}, [])

	const items_ = useMemo(() => {
		return items.map(item => {
			const {
				[FIRESTORE_SENSHI_SETTINGS_PROFILE_CAROUSEL_IMAGE]: image,
				[FIRESTORE_SENSHI_SETTINGS_PROFILE_CAROUSEL_YOUTUBE]: youTube,
			} = item

			if (image) {
				return {
					originalClass: styles['bg-transparent'],
					[RENDER_ITEM]: () => {
						return (
							<Img
								src={image}
								aspectRatio={aspectRatio_}
								onClick={onImageClick}
							/>
						)
					},
					[RENDER_THUMB_INNER]: () => (
						<ImgThumb src={image} aspectRatio={aspectRatio_} />
					),
				}
			} else if (youTube) {
				return {
					[RENDER_ITEM]: () => {
						return (
							<Player
								src={youTube}
								playing={videoPlaying}
								onClick={videoOnClick}
								aspectRatio={aspectRatio_}
							/>
						)
					},
					[RENDER_THUMB_INNER]: () => (
						<PlayerThumb src={youTube} aspectRatio={aspectRatio_} />
					),
				}
			} else {
				return {}
			}
		})
	}, [items, videoPlaying, videoOnClick, aspectRatio_, onImageClick])

	return (
		<ImageGallery
			showFullscreenButton={false}
			slideInterval={4000}
			slideDuration={1000}
			items={items_}
			showIndex={showUI}
			showBullets={showUI}
			showPlayButton={showUI}
			onSlide={onSlide_}
			{...otherProps}
		/>
	)
}

export { Carousel }
