import React, { Fragment, useState } from 'react'
import { Card, CardBody, Media, Col } from 'reactstrap'

const PRODUCT_IMAGE = 'productImage'
const PRODUCT_NAME = 'productName'
const PRODUCT_PRICE = 'productPrice'
const PRODUCT_SIZE = 'productSize'

const CheckoutCard = props => {
	const { products } = props
	const [discountFocus, setDiscountFocus] = useState(false)
	return (
		<Fragment>
			<Card>
				<CardBody>
					{products.map(product => {
						const {
							[PRODUCT_IMAGE]: src,
							[PRODUCT_NAME]: name,
							[PRODUCT_PRICE]: price,
							[PRODUCT_SIZE]: size,
						} = product
						return (
							<Media className='align-items-center mb-3'>
								<Col md='5' xs='6'>
									<img
										alt='...'
										className='img-fluid rounded shadow'
										src={src}
									/>
								</Col>
								<Media body>
									<h2 className='h6'>{name}</h2>
									<small className='d-block text-secondary'>{size}</small>
								</Media>
								<Media body className='text-right'>
									<span>{price}</span>
								</Media>
							</Media>
						)
					})}
					<hr className='line-info mb-5' />

					{/* Form */}
					<hr className='line-info mb-3' />
					<Media className='align-items-center'>
						<h3 className='h6 text-secondary mr-3'>Subtotal</h3>
						<Media body className='text-right'>
							<span>$1038</span>
						</Media>
					</Media>
					<Media className='align-items-center'>
						<h3 className='h6 text-secondary mr-3'>Shipping</h3>
						<Media body className='text-right'>
							<span>$5.8</span>
						</Media>
					</Media>
					<hr className='line-info mb-3' />
					<Media className='align-items-center'>
						<h3 className='h6'>Total</h3>
						<Media body className='text-right'>
							<span className='font-weight-semi-bold'>$1045.8</span>
						</Media>
					</Media>
				</CardBody>
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
