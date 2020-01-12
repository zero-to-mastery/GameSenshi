import React, { useCallback, useState, useMemo } from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import ReactPlayer from 'react-player'
import { ImageStyled } from './styled'
import Image from 'material-ui-image'

import {
	FIRESTORE_SENSHI_PROFILE_CAROUSEL_YOUTUBE,
	FIRESTORE_SENSHI_PROFILE_CAROUSEL_IMAGE,
} from 'constantValues'

const RENDER_ITEM = 'renderItem'
const RENDER_THUMB_INNER = 'renderThumbInner'

const getYoutubeEmbededUrl = id =>
	`https://www.youtube.com/embed/${id}?autoplay=1&showinfo=0`

const getYoutubeThumnailUrl = id => `https://img.youtube.com/vi/${id}/0.jpg`

const Carousel = props => {
	const [showUI, setShowUI] = useState(true)
	const [videoPlaying, setVideoPlaying] = useState(false)
	const { items, aspectRatio, onImageClick, onSlide, ...otherProps } = props
	const setShowUIFalse = useCallback(() => {
		setShowUI(false)
	}, [])
	const aspectRatio_ = (aspectRatio / 2 || 1 / 3) * 100

	const onSlide_ = useCallback(
		currentIndex => {
			setVideoPlaying(false)
			onSlide && onSlide(currentIndex)
			if (!showUI) {
				setShowUI(true)
			}
		},
		[showUI]
	)

	const videoOnClick = useCallback(() => {
		setVideoPlaying(state => !state)
	}, [])

	const items_ = useMemo(() => {
		return items.map(item => {
			const {
				[FIRESTORE_SENSHI_PROFILE_CAROUSEL_IMAGE]: image,
				[FIRESTORE_SENSHI_PROFILE_CAROUSEL_YOUTUBE]: youTube,
			} = item
			if (image) {
				const ImgThumb = props => {
					const { onClick } = props
					return (
						<ImageStyled
							className='img img-raised rounded-lg'
							color='transparent'
							src={image}
							style={{ padding: `${aspectRatio_}% 0` }}
							onClick={onClick}
						/>
					)
				}
				const Img = () => {
					return <ImgThumb onClick={onImageClick} />
				}
				return {
					[RENDER_ITEM]: Img,
					[RENDER_THUMB_INNER]: ImgThumb,
				}
			} else if (youTube) {
				const player = () => {
					return (
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
								url={getYoutubeEmbededUrl(youTube)}
								playing={videoPlaying}
								controls
								light
								onClick={videoOnClick}
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
				const image = getYoutubeThumnailUrl(youTube)
				return {
					[RENDER_ITEM]: player,
					[RENDER_THUMB_INNER]: () => (
						<Image src={image} style={{ padding: `${aspectRatio_}% 0` }} />
					),
				}
			} else {
				return {}
			}
		})
	}, [items, videoPlaying])

	return (
		<ImageGallery
			showFullscreenButton={false}
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
