import React from 'react'
import {
	FinalTextCardNumber,
	FINAL_TEXT_CARD_NUMBER,
} from 'componentnCompounds/FinalTextCardNumber/FinalTextCardNumber'
import { cardNumberValidation } from 'utils'
import { Col, Row, FormGroup } from 'reactstrap'

const FinalTextCardNumberPropedDefault = props => {
	return (
		<Row>
			<Col>
				<FormGroup>
					<FinalTextCardNumber validation={cardNumberValidation} {...props} />
				</FormGroup>
			</Col>
		</Row>
	)
}

export { FinalTextCardNumberPropedDefault, FINAL_TEXT_CARD_NUMBER }
