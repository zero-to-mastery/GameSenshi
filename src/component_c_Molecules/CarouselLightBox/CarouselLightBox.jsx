import React, { useState, useCallback } from 'react'
import { stopUndefined } from '1_utils'
import { Exports } from 'component_b_Atoms'
const { Carousel, LightBox } = stopUndefined(Exports)

const CarouselLightBox = props => {
	const [slide, setSlide] = useState(0)
	const [toggle, setToggle] = useState(false)
	const { items } = props

	const onSlide = useCallback(currentIndex => {
		setSlide(currentIndex)
	}, [])

	const onImageClick = useCallback(() => {
		setToggle(state => !state)
	}, [])
	return (
		<>
			<LightBox sources={items} slide={slide + 1} toggle={toggle} />
			<Carousel items={items} onSlide={onSlide} onImageClick={onImageClick} />
		</>
	)
}

export { CarouselLightBox }
