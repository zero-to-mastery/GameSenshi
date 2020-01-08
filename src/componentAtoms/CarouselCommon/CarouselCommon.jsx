import React, { useCallback, useState, useMemo } from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import ReactPlayer from 'react-player'
import Image from 'material-ui-image'
import {
	FIRESTORE_SENSHI_MEDIA_YOUTUBE,
	FIRESTORE_SENSHI_MEDIA_IMAGE,
} from 'constantValues'

const ORIGINAL = 'original'
const THUMBNAIL = 'thumbnail'
const RENDER_ITEM = 'renderItem'
const RENDER_THUMB_INNER = 'renderThumbInner'

const getYoutubeEmbededUrl = id =>
	`https://www.youtube.com/embed/${id}?autoplay=1&showinfo=0`

const getYoutubeThumnailUrl = id => `https://img.youtube.com/vi/${id}/0.jpg`

const CarouselCommon = props => {
	const [showUI, setShowUI] = useState(true)
	const [videoPlaying, setVideoPlaying] = useState(true)
	const { items, aspectRatio, ...otherProps } = props

	const aspectRatio_ = (aspectRatio / 2 || 1 / 3) * 100

	const onSlide = useCallback(() => {
		if (!showUI) {
			setShowUI(true)
			setVideoPlaying(false)
			setVideoPlaying(true)
		}
	}, [showUI])

	const items_ = useMemo(() => {
		return items.map(item => {
			const {
				[FIRESTORE_SENSHI_MEDIA_IMAGE]: image,
				[FIRESTORE_SENSHI_MEDIA_YOUTUBE]: youtube,
			} = item
			if (image) {
				const img = () => {
					return (
						<Image
							className='img img-raised rounded-lg'
							color='transparent'
							src={image}
							style={{ padding: `${aspectRatio_}% 0` }}
						/>
					)
				}
				return {
					[ORIGINAL]: image,
					[THUMBNAIL]: image,
					[RENDER_ITEM]: img,
					[RENDER_THUMB_INNER]: img,
				}
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
								padding: `${aspectRatio_}% 0`,
								height: 0,
							}}
						>
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
								}}
							/>
						</div>
					) : null
				}
				const image = getYoutubeThumnailUrl(youtube)
				return {
					[ORIGINAL]: image,
					[THUMBNAIL]: image,
					[RENDER_ITEM]: player,
					[RENDER_THUMB_INNER]: () => (
						<Image src={image} style={{ padding: `${aspectRatio_}% 0` }} />
					),
				}
			} else {
				return {}
			}
		})
	}, [items])

	return (
		<ImageGallery
			showFullscreenButton={false}
			items={items_()}
			showIndex={showUI}
			showBullets={showUI}
			showPlayButton={showUI}
			onSlide={onSlide}
			{...otherProps}
		/>
	)
}

export { CarouselCommon }
