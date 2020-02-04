import React from 'react'
import {
	FinalTextCardHolderName,
	FINAL_TEXT_CARD_HOLDER_NAME,
} from './FinalTextCardHolderName'
import { cardNameValidation } from '1_utils'
import { Row, Col } from 'reactstrap'

const FinalTextCardHolderNamePropedDefault = props => {
	return (
		<Row>
			<Col>
				<FinalTextCardHolderName validation={cardNameValidation} {...props} />
			</Col>
		</Row>
	)
}

export { FinalTextCardHolderNamePropedDefault, FINAL_TEXT_CARD_HOLDER_NAME }
