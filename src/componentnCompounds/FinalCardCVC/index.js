import React from 'react'
import {
	FinalCardCVC,
	FINAL_TEXT_CARD_CVC,
} from 'componentnCompounds/FinalCardCVC/FinalCardCVC'
import { cardCvcValidation } from 'utils'
import { Col } from 'reactstrap'

const FinalCardCVCPropedDefault = props => {
	return (
		<Col xs='6'>
			<FinalCardCVC validation={cardCvcValidation} {...props} />
		</Col>
	)
}

export { FinalCardCVCPropedDefault, FINAL_TEXT_CARD_CVC }
