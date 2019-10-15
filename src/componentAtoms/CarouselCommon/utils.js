// temp data array
import { SRC, ALT_TEXT, IS_VIDEO } from './CarouselCommon'

const slides = [
	{
		[SRC]: require('assets/img/denys.jpg'),
		[ALT_TEXT]: 'Slide 1',
		[IS_VIDEO]: false,
	},
	{
		[SRC]: require('assets/img/fabien-bazanegue.jpg'),
		[ALT_TEXT]: 'Slide 2',
		[IS_VIDEO]: true,
	},
	{
		[SRC]: require('assets/img/mark-finn.jpg'),
		[ALT_TEXT]: 'Slide 3',
		[IS_VIDEO]: false,
	},
	{
		[SRC]: require('assets/img/denys.jpg'),
		[ALT_TEXT]: 'Slide 4',
		[IS_VIDEO]: true,
	},
	{
		[SRC]: require('assets/img/fabien-bazanegue.jpg'),
		[ALT_TEXT]: 'Slide 5',
		[IS_VIDEO]: false,
	},
	{
		[SRC]: require('assets/img/mark-finn.jpg'),
		[ALT_TEXT]: 'Slide 6',
		[IS_VIDEO]: true,
	},
]

const sliderResponsive = [
	{
		breakpoint: 1024,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: true,
		},
	},
	{
		breakpoint: 772,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		},
	},
]

export { slides, sliderResponsive }
