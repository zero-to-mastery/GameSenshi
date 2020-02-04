import React from 'react'
import {
	FinalSelectExpiryMonth,
	FINAL_SELECT_EXPIRY_MONTH,
} from './FinalSelectExpiryMonth'
import { cardExpiryValidation } from '1_utils'
import { Col } from 'reactstrap'

const FinalSelectExpiryMonthPropedDefault = props => {
	return (
		<Col xs='6'>
			<FinalSelectExpiryMonth validation={cardExpiryValidation} {...props} />
		</Col>
	)
}

export { FinalSelectExpiryMonthPropedDefault, FINAL_SELECT_EXPIRY_MONTH }
