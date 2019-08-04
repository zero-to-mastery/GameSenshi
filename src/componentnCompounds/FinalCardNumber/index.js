import React from 'react'
import { FinalCardNumber } from 'componentnCompounds/FinalCardNumber'
import { cardNumberValidation } from 'utils/validation'
import { Col } from 'reactstrap'

const FinalCardNumberPropedDefault = props => {
	return (
		<Col>
			<FinalCardNumber validation={cardNumberValidation} {...props} />
		</Col>
	)
}

export { FinalCardNumber, FinalCardNumberPropedDefault }
