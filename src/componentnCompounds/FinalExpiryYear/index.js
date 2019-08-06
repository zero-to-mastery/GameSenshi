import React from 'react'
import { FinalExpiryYear } from 'componentnCompounds/FinalExpiryYear/FinalExpiryYear'
import { cardExpiryValidation } from 'utils'
import { Col } from 'reactstrap'

const FinalExpiryYearPropedDefault = props => {
	return (
		<Col xs='6'>
			<FinalExpiryYear validation={cardExpiryValidation} {...props} />
		</Col>
	)
}

export { FinalExpiryYearPropedDefault }
