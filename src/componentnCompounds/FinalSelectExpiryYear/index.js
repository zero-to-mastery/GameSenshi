import React from 'react'
import { FinalSelectExpiryYear } from 'componentnCompounds/FinalSelectExpiryYear/FinalSelectExpiryYear'
import { cardExpiryValidation } from 'utils'
import { Col } from 'reactstrap'

const FinalSelectExpiryYearPropedDefault = props => {
	return (
		<Col xs='6'>
			<FinalSelectExpiryYear validation={cardExpiryValidation} {...props} />
		</Col>
	)
}

export { FinalSelectExpiryYearPropedDefault }
