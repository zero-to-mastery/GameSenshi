import React from 'react'
import { CarouselCommon } from './CarouselCommon'
import { itemsProfile, itemsIndex } from './utils'

const CarouselCommonPropedProfile = props => {
	return <CarouselCommon items={itemsProfile} {...props} />
}

const CarouselCommonPropedIndex = props => {
	return (
		<CarouselCommon
			showThumbnails={false}
			showPlayButton={false}
			showIndex={false}
			autoPlay
			aspectRatio={9 / 16}
			items={itemsIndex}
			{...props}
		/>
	)
}

export { CarouselCommonPropedProfile, CarouselCommonPropedIndex }
