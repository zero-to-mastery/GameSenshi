import React from 'react'
import { CarouselCommon } from './CarouselCommon'
import { carouselItems } from './utils'

const CarouselCommonPropedIndex = props => {
	return <CarouselCommon items={carouselItems} {...props} />
}

export { CarouselCommonPropedIndex }
