import React, { useEffect, useRef } from 'react'
import { stopUndefined } from 'utils'
// reactstrap components
import { Container, Row, Col } from 'reactstrap'

// utility library
import classNames from 'classnames'
// core components
import { Exports } from 'componentpMultiOrganisms'

const { Footer, CheckoutCardpropedDefault } = stopUndefined(Exports)

const CheckoutPage = () => {
	return (
		<div classname='wrapper'>
			<Container className='pt-5 pb-5'>
				<Row className='pt-5 pb-5'>
					<Col
						xs={{ size: 12 }}
						sm={{ size: 12 }}
						md={{ size: 8, offset: 2 }}
						lg={{ size: 4, offset: 4 }}>
						<h2 className='title text-center'>Order summary</h2>
						<CheckoutCardpropedDefault />
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	)
}

export { CheckoutPage }
