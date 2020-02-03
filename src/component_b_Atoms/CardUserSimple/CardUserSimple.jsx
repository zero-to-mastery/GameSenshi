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
			<Card className='card-testimonial p-2 bg-deep-blue mt-0 align-items-center'>
				<Image
					alt={name}
					imageStyle={{
						width: '150px',
						height: '150px',
					}}
					className='img img-raised position-static mt-4 rounded-circle'
					color='transparent'
					src={src}
					style={{ paddingTop: '0px' }}
				/>
				<CardFooter className='mb-0'>
					<h4 className=' text-default font-weight-bold text-nowrap'>{name}</h4>
				</CardFooter>
			</Card>
		</Link>
	)
}

export { CardUserSimple }
