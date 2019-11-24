import React from 'react'
import { Card, CardFooter } from 'reactstrap'

const CardPlayerSimple = props => {
	const { src, name } = props
	return (
		<Card className='card-testimonial'>
			<div className='card-avatar'>
				<a href='#pablo' onClick={e => e.preventDefault()}>
					<img alt='...' className='img img-raised' src={src} />
				</a>
			</div>
			<CardFooter>
				<h4 className='text-white font-weight-bold'>{name}</h4>
			</CardFooter>
		</Card>
	)
}

export { CardPlayerSimple }
