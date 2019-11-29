import React from 'react'
import { Card, CardBody } from 'reactstrap'
import Image from 'material-ui-image'
const IMAGE = 'image'
require('assets/icons/gifts/castle.svg')
const CardGift = props => {
	return (
		<Card>
			<CardBody>
				<h1>hello</h1>
				<Image src={'assets/icons/gifts/castle.svg'} />
			</CardBody>
		</Card>
	)
}

export { CardGift }
