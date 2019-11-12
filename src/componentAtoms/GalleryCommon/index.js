import React from 'react'
import { GalleryCommon } from './GalleryCommon'
import { items } from './utils'

const GalleryCommonPropedProfile = props => {
	return <GalleryCommon items={items} {...props} />
}

const GalleryCommonPropedIndex = props => {
	return <GalleryCommon items={items} {...props} />
}

export { GalleryCommonPropedProfile, GalleryCommonPropedIndex }
