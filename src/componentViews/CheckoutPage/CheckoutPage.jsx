import React from 'react'
import { stopUndefined } from 'utils'
import { Container, Row, Col } from 'reactstrap'
import { Exports } from 'componentpMultiOrganisms'

const {
	CheckoutCardPropedDefault,
	Section,
	WrapperPropedCheckout,
} = stopUndefined(Exports)

const CheckoutPage = () => {
	return (
		<WrapperPropedCheckout>
			<Section>
				<Container className='pt-5 pb-5'>
					<Row className='pt-5 pb-5'>
						<Col>
							<h2 className='title text-center'>Order summary</h2>
							<CheckoutCardPropedDefault />
						</Col>
					</Row>
				</Container>
			</Section>
		</WrapperPropedCheckout>
	)
}

export { CheckoutPage }
