import React from 'react'
import { stopUndefined } from 'utils'
import { Container, Row, Col } from 'reactstrap'
import { Exports } from 'componentpMultiOrganisms'

const { CheckoutCardPropedDefault } = stopUndefined(Exports)

const CheckoutPage = () => {
	return (
		<div classname='wrapper'>
			<Container className='pt-5 pb-5'>
				<Row className='pt-5 pb-5'>
					<Col
						xs={{ size: 12 }}
						sm={{ size: 12 }}
						md={{ size: 8, offset: 2 }}
						lg={{ size: 4, offset: 4 }}
					>
						<h2 className='title text-center'>Order summary</h2>
						<CheckoutCardPropedDefault />
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export { CheckoutPage }
