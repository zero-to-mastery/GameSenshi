import React, { useCallback, useState } from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import ReactPlayer from 'react-player'

const ORIGINAL = 'original'
const THUMBNAIL = 'thumbnail'
const RENDER_ITEM = 'renderItem'

const CAROUSEL_COMMON_IMAGE = 'image'
const CAROUSEL_COMMON_YOUTUBE = 'youtube'

const getYoutubeEmbededUrl = id =>
	`https://www.youtube.com/embed/${id}?autoplay=1&showinfo=0`

const getYoutubeThumnailUrl = id => `https://img.youtube.com/vi/${id}/0.jpg`

const CarouselCommon = props => {
	const [showUI, setShowUI] = useState(true)
	const [videoPlaying, setVideoPlaying] = useState(true)
	const { items, ...otherProps } = props

	const onSlide = useCallback(() => {
		if (!showUI) {
			setShowUI(true)
			setVideoPlaying(false)
			setVideoPlaying(true)
		}
	}, [showUI])

	const items_ = () => {
		return items.map(item => {
			const {
				[CAROUSEL_COMMON_IMAGE]: image,
				[CAROUSEL_COMMON_YOUTUBE]: youtube,
			} = item
			if (image) {
				return { [ORIGINAL]: image, [THUMBNAIL]: image }
			} else if (youtube) {
				const setShowUIFalse = useCallback(() => {
					setShowUI(false)
				}, [])

				const player = () => {
					return videoPlaying ? (
						<div
							className='image-gallery-image'
							style={{
								position: 'relative',
								padding: `33.35% 0`,
								height: 0,
							}}>
							<ReactPlayer
								onReady={setShowUIFalse}
								url={getYoutubeEmbededUrl(youtube)}
								playing={true}
								controls
								light
								width='100%'
								height='100%'
								style={{
									position: 'absolute',
									top: 0,
									left: 0,
									width: '100%',
									height: '100%',
								}}
							/>
						</div>
					) : null
				}
				const image = getYoutubeThumnailUrl(youtube)
				return { [ORIGINAL]: image, [THUMBNAIL]: image, [RENDER_ITEM]: player }
			} else {
				return {}
			}
		})
	}

	return (
		<ImageGallery
			items={items_()}
			showIndex={showUI}
			showBullets={showUI}
			showPlayButton={showUI}
			showFullscreenButton={showUI}
			onSlide={onSlide}
			{...otherProps}
		/>
	)
}

export { CarouselCommon, CAROUSEL_COMMON_IMAGE, CAROUSEL_COMMON_YOUTUBE }
