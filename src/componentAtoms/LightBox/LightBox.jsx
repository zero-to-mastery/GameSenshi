import React, { useMemo } from 'react'
import FsLightbox from 'fslightbox-react'
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
		})
	}, [sources])

	return <FsLightbox toggler={toggle} sources={sources_} slide={slide} />
}

export { LightBox }
