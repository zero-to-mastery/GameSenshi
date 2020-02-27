import React from 'react'
import { CarouselLightBox } from './CarouselLightBox'
import { itemsProfile } from './utils'

const CarouselLightBoxPropedProfile = props => {
	return <CarouselLightBox items={itemsProfile} {...props} aspectRatio={1} />
}

export { CarouselLightBoxPropedProfile }
