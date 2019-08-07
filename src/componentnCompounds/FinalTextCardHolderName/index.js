import React from 'react'
import {
	FinalTextCardHolderName,
	FINAL_TEXT_CARD_HOLDER_NAME,
} from 'componentnCompounds/FinalTextCardHolderName/FinalTextCardHolderName'
import { cardNameValidation } from 'utils'
import { Row, Col, FormGroup } from 'reactstrap'

const FinalTextCardHolderNamePropedDefault = props => {
	return (
		<Row>
			<Col>
				<FormGroup>
					<FinalTextCardHolderName validation={cardNameValidation} {...props} />
				</FormGroup>
			</Col>
		</Row>
	)
}

export { FinalTextCardHolderNamePropedDefault, FINAL_TEXT_CARD_HOLDER_NAME }
