import React from 'react'
import {
	FinalTextCardNumber,
	FINAL_TEXT_CARD_NUMBER,
} from './FinalTextCardNumber'
import { cardNumberValidation } from 'utils'
import { Col, Row } from 'reactstrap'

const FinalTextCardNumberPropedDefault = props => {
	return (
		<Row>
			<Col>
				<FinalTextCardNumber validation={cardNumberValidation} {...props} />
			</Col>
		</Row>
	)
}

export { FinalTextCardNumberPropedDefault, FINAL_TEXT_CARD_NUMBER }
