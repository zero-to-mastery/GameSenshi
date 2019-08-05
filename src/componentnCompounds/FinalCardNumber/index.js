import React from 'react'
import { FinalCardNumber } from 'componentnCompounds/FinalCardNumber/FinalCardNumber'
import { cardNumberValidation } from 'utils'
import { Col } from 'reactstrap'

const FinalCardNumberPropedDefault = props => {
	return (
		<Col>
			<FinalCardNumber validation={cardNumberValidation} {...props} />
		</Col>
	)
}

export { FinalCardNumberPropedDefault }
