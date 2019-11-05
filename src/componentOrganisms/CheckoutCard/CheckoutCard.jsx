import React, { Fragment } from 'react'

import {
	Card,
	CardBody,
	Media,
	Col,
	Form,
	Input,
	InputGroup,
	InputGroupAddon,
	Button,
} from 'reactstrap'

const PRODUCT_IMAGE = 'productImage'
const PRODUCT_NAME = 'productName'
const PRODUCT_PRICE = 'productPrice'
const PRODUCT_SIZE = 'productSize'

const CheckoutCard = props => {
	const {
		[PRODUCT_IMAGE]: src,
		[PRODUCT_NAME]: name,
		[PRODUCT_PRICE]: price,
		[PRODUCT_SIZE]: size,
	} = props
	return (
		<Fragment>
			<Card>
				<CardBody></CardBody>
			</Card>
		</Fragment>
	)
}

export {
	CheckoutCard,
	PRODUCT_IMAGE,
	PRODUCT_NAME,
	PRODUCT_SIZE,
	PRODUCT_PRICE,
}
