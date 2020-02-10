import React from 'react'
import { Card, CardFooter } from 'reactstrap'
import { Exports } from '5_comp_0'
import { stopUndefined } from '1_utils'
const { Link, Image } = stopUndefined(Exports)

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
			<Card className='card-testimonial p-2 bg-deep-blue mt-0 align-items-center'>
				<Image
					alt={name}
					imageStyle={{
						width: '150px',
						height: '150px',
					}}
					className='img img-raised mt-4 rounded-circle'
					src={src}
				/>
				<CardFooter className='mb-0'>
					<h4 className=' text-default font-weight-bold text-nowrap'>{name}</h4>
				</CardFooter>
			</Card>
		</Link>
	)
}

export { CardUserSimple }
