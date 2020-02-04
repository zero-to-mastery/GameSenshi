import React from 'react'
import { FinalTextCardCVC, FINAL_TEXT_CARD_CVC } from './FinalTextCardCVC'
import { cardCvcValidation } from '1_utils'
import { Col } from 'reactstrap'

const FinalTextCardCVCPropedDefault = props => {
	return (
		<Col xs='6'>
			<FinalTextCardCVC validation={cardCvcValidation} {...props} />
		</Col>
	)
}

export { FinalTextCardCVCPropedDefault, FINAL_TEXT_CARD_CVC }
