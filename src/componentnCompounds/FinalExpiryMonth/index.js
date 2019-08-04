import React from 'react'
import { FinalExpiryMonth } from 'componentnCompounds/FinalExpiryMonth/FinalExpiryMonth'
import { cardExpiryValidation } from 'utils'
import { Col } from 'reactstrap'

const FinalExpiryMonthPropedDefault = props => {
	return (
		<Col xs='6'>
			<FinalExpiryMonth validation={cardExpiryValidation} {...props} />
		</Col>
	)
}

export { FinalExpiryMonth, FinalExpiryMonthPropedDefault }
