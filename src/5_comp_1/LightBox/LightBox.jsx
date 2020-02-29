import React, { useMemo } from 'react'
import FsLightBox from 'fslightbox-react'
import {
	FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_YOUTUBE,
	FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_IMAGE,
} from '0_constants'

const LightBox = props => {
	const { toggle, sources, ...otherProps } = props
	// whether the toggle is true or false really matter, as long as it change, it will toggle the lightbox
	const sources_ = useMemo(() => {
		return sources.map(source => {
			const {
				[FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_YOUTUBE]: youTube,
				[FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_IMAGE]: image,
			} = source
			if (youTube) {
				return `https://www.youtube.com/watch?v=${youTube}`
			} else if (image) {
				return image
			}
			return ''
		})
	}, [sources])

	const key = useMemo(() => {
		// rerender wont rerender the new source
		// need key to unmount and mount it
		return Math.floor(Math.random() * Math.floor(1000))
	}, [sources])

	return (
		<FsLightBox toggler={toggle} sources={sources_} key={key} {...otherProps} />
	)
}

export { LightBox }
