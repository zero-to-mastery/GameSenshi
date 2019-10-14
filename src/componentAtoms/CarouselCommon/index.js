import React from 'react'
import { CarouselCommon } from './CarouselCommon'
import { slides } from './utils'

const CarouselCommonPropedProfile = props => {
	return (
		<CarouselCommon
			slides={slides}
			autoplay={true}
			autoplaySpeed={2000}
			cssEase='linear'
			slidesToShow={3}
			slidesToScroll={3}
			infinite={true}
			speed={1000}
			{...props}
		/>
	)
}

export { CarouselCommonPropedProfile }
