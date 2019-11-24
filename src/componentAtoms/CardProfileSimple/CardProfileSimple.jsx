import React from 'react'
import { Card, CardFooter } from 'reactstrap'
import Image from 'material-ui-image'
import { Exports } from 'componentaProton'
import { stopUndefined } from 'utils'
const { Link } = stopUndefined(Exports)

const CardProfileSimple = props => {
	const { src, name } = props
	return (
		<Card className='card-testimonial'>
			<div className='card-avatar w-100'>
				<Link
					baseClass='w-100'
					to='#pablo'
					target='_blank'
					rel='noopener noreferrer'
					className='w-100'
				>
					<Image
						alt={name}
						className='img img-raised'
						color='transparent'
						src={src}
					/>
				</Link>
			</div>
			<CardFooter>
				<h4 className='text-white font-weight-bold'>{name}</h4>
			</CardFooter>
		</Card>
	)
}

export { CardProfileSimple }
