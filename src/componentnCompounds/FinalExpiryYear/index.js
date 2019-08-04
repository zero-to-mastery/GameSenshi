import React from 'react'
import { FinalExpiryYear } from 'componentnCompounds/FinalExpiryYear'
import { cardExpiryValidation } from 'utils/validation'
import { Row, Col } from 'reactstrap'

const FinalExpiryYearPropedDefault = props => {
	return (
		<Row>
			<Col xs='6'>
				<FinalExpiryYear validation={cardExpiryValidation} {...props} />
			</Col>
		</Row>
	)
}

export { FinalExpiryYear, FinalExpiryYearPropedDefault }
