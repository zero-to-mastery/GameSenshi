import React from 'react'
import {
	FinalSelectExpiryYear,
	FINAL_SELECT_EXPIRY_YEAR,
} from './FinalSelectExpiryYear'
import { cardExpiryValidation } from 'utils'
import { Col } from 'reactstrap'

const FinalSelectExpiryYearPropedDefault = props => {
	return (
		<Col xs='6'>
			<FinalSelectExpiryYear validation={cardExpiryValidation} {...props} />
		</Col>
	)
}

export { FinalSelectExpiryYearPropedDefault, FINAL_SELECT_EXPIRY_YEAR }
