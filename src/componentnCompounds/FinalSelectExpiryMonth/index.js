import React from 'react'
import { FinalSelectExpiryMonth } from 'componentnCompounds/FinalSelectExpiryMonth/FinalSelectExpiryMonth'
import { cardExpiryValidation } from 'utils'
import { Col } from 'reactstrap'

const FinalSelectExpiryMonthPropedDefault = props => {
	return (
		<Col xs='6'>
			<FinalSelectExpiryMonth validation={cardExpiryValidation} {...props} />
		</Col>
	)
}

export { FinalSelectExpiryMonthPropedDefault }
