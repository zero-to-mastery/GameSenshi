import React from 'react'
import {
	Card,
	CardBody,
	Media,
	Col,
	Form,
	Input,
	InputGroup,
	InputGroupAddon,
} from 'reactstrap'
import { Exports } from 'component_a_Protons'
import { stopUndefined } from '1_utils'
const { Button } = stopUndefined(Exports)

const PRODUCT_IMAGE = 'productImage'
const PRODUCT_NAME = 'productName'
const PRODUCT_PRICE = 'productPrice'
const PRODUCT_SIZE = 'productSize'

const CheckoutCard = props => {
	const { products } = props

	return (
		<>
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
					<Form className='code-validate'>
						<label>Discount</label>
						<InputGroup className='d-flex flex-row align-items-center'>
							<Input
								aria-label='Discount'
								name='name'
								placeholder='Discount Code'
								type='text'
							/>
							<InputGroupAddon addonType='append'>
								<Button color='info' type='button'>
									Apply
								</Button>
							</InputGroupAddon>
						</InputGroup>
					</Form>
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
		</>
	)
}

export {
	CheckoutCard,
	PRODUCT_IMAGE,
	PRODUCT_NAME,
	PRODUCT_SIZE,
	PRODUCT_PRICE,
}
