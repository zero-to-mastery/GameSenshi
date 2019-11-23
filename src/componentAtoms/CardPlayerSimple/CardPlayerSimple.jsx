import React from 'react'
import { Card, CardBody, CardFooter, CardTitle, Col } from 'reactstrap'

const CardPlayerSimple = props => {
	return (
		<Col>
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
				<CardFooter>
					<h4 className='text-white font-weight-bold'>Michael Elijah</h4>
				</CardFooter>
			</Card>
		</Col>
	)
}

export { CardPlayerSimple }
