import React from 'react'
import { FinalExpiryMonth } from 'componentnCompounds/FinalExpiryMonth'
import { cardExpiryValidation } from 'utils/validation'
import { Col } from 'reactstrap'

const FinalExpiryMonthPropedDefault = props => {
	return (
		<Col xs='6'>
			<FinalExpiryMonth validation={cardExpiryValidation} {...props} />
		</Col>
	)
}

export { FinalExpiryMonth, FinalExpiryMonthPropedDefault }
