import React, { useMemo } from 'react'
import FsLightBox from 'fslightbox-react'
import {
	FIRESTORE_SENSHI_MEDIA_YOUTUBE,
	FIRESTORE_SENSHI_MEDIA_IMAGE,
} from 'constantValues'

const LightBox = props => {
	const { toggle, sources, slide } = props

	const sources_ = useMemo(() => {
		return sources.map(source => {
			const {
				[FIRESTORE_SENSHI_MEDIA_YOUTUBE]: youtube,
				[FIRESTORE_SENSHI_MEDIA_IMAGE]: image,
			} = source
			if (youtube) {
				return `https://www.youtube.com/watch?v=${youtube}`
			} else if (image) {
				return image
			}
			return ''
		})
	}, [sources])

	const key = useMemo(() => {
		return Math.floor(Math.random() * Math.floor(1000))
	}, [sources])

	return (
		<FsLightBox toggler={toggle} sources={sources_} slide={slide} key={key} />
	)
}

export { LightBox }
