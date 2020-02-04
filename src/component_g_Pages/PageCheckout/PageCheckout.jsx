import React from 'react'
import { stopUndefined } from '1_utils'
import { Container, Row, Col } from 'reactstrap'
import { Exports } from '5_comp_5'

const {
	CheckoutCardPropedDefault,
	Section,
	WrapperStoreWrapperPropedCheckout,
} = stopUndefined(Exports)

const PageCheckout = () => {
	return (
		<WrapperStoreWrapperPropedCheckout>
			<Section>
				<Container className='py-5'>
					<Row className='py-5'>
						<Col>
							<h2 className='title text-center'>Order summary</h2>
							<CheckoutCardPropedDefault />
						</Col>
					</Row>
				</Container>
			</Section>
		</WrapperStoreWrapperPropedCheckout>
	)
}

export { PageCheckout }
