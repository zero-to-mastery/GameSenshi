// temp data array
import {
	CAROUSEL_COMMON_IMAGE,
	CAROUSEL_COMMON_YOUTUBE,
} from './CarouselCommon'

const items = [
	{
		[CAROUSEL_COMMON_IMAGE]: require('assets/img/denys.jpg'),
	},
	{
		[CAROUSEL_COMMON_YOUTUBE]: 'OGKbzhME3UI',
		// [THUMBNAIL]: thumnailUrl('OGKbzhME3UI'),
		// [RENDER_ITEM]: () => (
		// 	<div
		// 		className='image-gallery-image'
		// 		style={{
		// 			position: 'relative',
		// 			padding: `33.35% 0`,
		// 			height: 0,
		// 		}}>
		// 		<ReactPlayer
		// 			url={embededUrl('OGKbzhME3UI')}
		// 			controls
		// 			light
		// 			width='100%'
		// 			height='100%'
		// 			style={{
		// 				position: 'absolute',
		// 				top: 0,
		// 				left: 0,
		// 				width: '100%',
		// 				height: '100%',
		// 			}}
		// 		/>
		// 	</div>
		// ),
	},
	{
		[CAROUSEL_COMMON_IMAGE]: require('assets/img/mark-finn.jpg'),
	},
	{
		[CAROUSEL_COMMON_YOUTUBE]: '5HeVYC42grI',
	},
	{
		[CAROUSEL_COMMON_IMAGE]: require('assets/img/fabien-bazanegue.jpg'),
	},
	{
		[CAROUSEL_COMMON_YOUTUBE]: 'vtjorh21b8Q',
	},
]
export { items }
