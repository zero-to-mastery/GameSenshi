import React from 'react'
import {
	FinalCardHolderName,
	FINAL_TEXT_CARD_HOLDER_NAME,
} from 'componentnCompounds/FinalCardHolderName/FinalCardHolderName'
import { cardNameValidation } from 'utils'
import { Row, Col, FormGroup } from 'reactstrap'

const FinalCardHolderNamePropedDefault = props => {
	return (
		<Row>
			<Col>
				<FormGroup>
					<FinalCardHolderName validation={cardNameValidation} {...props} />
				</FormGroup>
			</Col>
		</Row>
	)
}

export { FinalCardHolderNamePropedDefault, FINAL_TEXT_CARD_HOLDER_NAME }
