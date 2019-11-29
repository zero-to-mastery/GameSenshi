import React from 'react'
import { Card, CardBody } from 'reactstrap'
import Image from 'material-ui-image'
const IMAGE = 'image'

const CardGift = props => {
	return (
		<Card>
			<CardBody>
				<h1>hello</h1>
				<div style={{ width: '64px', height: '64px' }} className='img-wrapper'>
					<Image src={require('assets/icons/gifts/building.png')} />
				</div>
			</CardBody>
		</Card>
	)
}

export { CardGift, IMAGE }
