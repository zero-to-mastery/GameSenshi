import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './styles.module.css'
const IMAGE = 'image'
const TEXT = 'text'

const CarouselCommon = props => {
	const { items } = props
	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 3500,
		cssEase: 'linear',
	}
	return (
		<div>
			<Slider {...settings}>
				{items.map(item => {
					const { [IMAGE]: src, [TEXT]: text } = item
					return (
						<div className={styles.carouselItem}>
							<div className={styles.imgWrapper}>
								<img src={src} alt='Slide' className={styles.carouselImage} />
							</div>
							<div className={styles.carouselText}>
								<p className={styles.text}>{text}</p>
							</div>
						</div>
					)
				})}
			</Slider>
		</div>
	)
}

export { CarouselCommon, IMAGE, TEXT }
