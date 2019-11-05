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

const CheckoutCard = props => {
	return (
		<Fragment>
			<Card>
				<CardBody>
					<Media className='align-items-center mb-3'>
						<Col md='5' xs='6'>
							<img
								alt='...'
								className='img-fluid rounded shadow'
								src={require('assets/img/gucci.png')}
							/>
						</Col>
						<Media body>
							<h2 className='h6'>Shorts</h2>
							<small className='d-block text-secondary'>Small</small>
						</Media>
						<Media body className='text-right'>
							<span>$29</span>
						</Media>
					</Media>
					<Media className='align-items-center'>
						<Col md='5' xs='6'>
							<img
								alt='...'
								className='img-fluid rounded shadow'
								src={require('assets/img/jacket.png')}
							/>
						</Col>
						<Media body>
							<h2 className='h6 mb-0'>Jacket</h2>
						</Media>
						<Media body className='text-right'>
							<span>$999</span>
						</Media>
					</Media>
					<hr className='line-info mb-5' />
					<Form className='code-validate'>
						<label>Discount</label>
						<InputGroup>
							<Input
								aria-label='Discount'
								name='name'
								placeholder='Discount Code'
								type='text'
								onFocus={e => this.setState({ discountFocus: true })}
								onBlur={e => this.setState({ discountFocus: false })}
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
		</Fragment>
	)
}

export { CheckoutCard }
