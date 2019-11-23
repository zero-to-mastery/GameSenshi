import React from 'react'
import { Card, CardBody, CardFooter, CardTitle } from 'reactstrap'

const CardPlayerSimple = props => {
	return (
		<Card className='card-testimonial'>
			<div className='card-avatar'>
				<a href='#pablo' onClick={e => e.preventDefault()}>
					<img
						alt='...'
						className='img img-raised'
						src={require('assets/img/michael.jpg')}
					/>
				</a>
			</div>
			<CardBody>
				<p className='card-description'>
					The networking at Web Summit is like no other European tech
					conference.
				</p>
			</CardBody>
			<div className='icon icon-primary'>
				<i className='fa fa-quote-right' />
			</div>
			<CardFooter>
				<CardTitle tag='h4'>Michael Elijah</CardTitle>
				<p className='category'>@michaelelijah</p>
			</CardFooter>
		</Card>
	)
}

export { CardPlayerSimple }
