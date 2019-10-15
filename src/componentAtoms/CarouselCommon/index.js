import React from 'react'
import { CarouselCommon } from './CarouselCommon'
import { slides, sliderResponsive } from './utils'

const CarouselCommonPropedProfile = props => {
	return (
		<CarouselCommon
			slides={slides}
			autoplay={true}
			autoplaySpeed={2000}
			cssEase='linear'
			slidesToShow={3}
			slidesToScroll={1}
			infinite={true}
			speed={1000}
			responsive={sliderResponsive}
			{...props}
		/>
	)
}

export { CarouselCommonPropedProfile }
