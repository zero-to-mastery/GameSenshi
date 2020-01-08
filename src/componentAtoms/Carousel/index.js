import React from 'react'
import { Carousel } from './Carousel'
import { itemsProfile, itemsIndex } from './utils'

const CarouselPropedProfile = props => {
	return <Carousel items={itemsProfile} {...props} />
}

const CarouselPropedIndex = props => {
	return (
		<Carousel
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

export { CarouselPropedProfile, CarouselPropedIndex }
