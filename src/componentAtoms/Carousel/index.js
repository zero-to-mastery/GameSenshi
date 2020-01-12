import React from 'react'
import { Carousel } from './Carousel'
import { itemsIndex } from './utils'

const CarouselPropedIndex = props => {
	return (
		<Carousel
			showThumbnails={false}
			autoPlay
			aspectRatio={9 / 16}
			items={itemsIndex}
			{...props}
		/>
	)
}

export { Carousel, CarouselPropedIndex }
