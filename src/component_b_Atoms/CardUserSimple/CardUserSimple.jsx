import React from 'react'
import { Card, CardFooter } from 'reactstrap'
import Image from 'material-ui-image'
import { Exports } from 'component_a_Protons'
import { stopUndefined } from 'utils'
const { Link } = stopUndefined(Exports)

const CardUserSimple = props => {
	const { src, name } = props
	return (
		<Link
			baseClass='w-100'
			to='#pablo'
			target='_blank'
			rel='noopener noreferrer'
			className='w-100'
		>
			<Card className='card-testimonial p-2 bg-deep-blue mt-0'>
				<div className='card-avatar w-100 mt-4'>
					<Image
						alt={name}
						className='img img-raised'
						color='transparent'
						src={src}
					/>
				</div>
				<CardFooter className='mb-0'>
					<h4 className=' text-default font-weight-bold text-nowrap'>{name}</h4>
				</CardFooter>
			</Card>
		</Link>
	)
}

export { CardUserSimple }
