import React from 'react'
import { FinalCardNumber } from 'componentnCompounds/FinalCardNumber/FinalCardNumber'
import { cardNumberValidation } from 'utils'
import { Col, Row, FormGroup } from 'reactstrap'

const FinalCardNumberPropedDefault = props => {
	return (
		<Row>
			<Col>
				<FormGroup>
					<FinalCardNumber validation={cardNumberValidation} {...props} />
				</FormGroup>
			</Col>
		</Row>
	)
}

export { FinalCardNumberPropedDefault }
