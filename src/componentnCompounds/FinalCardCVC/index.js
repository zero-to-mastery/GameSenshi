import React from 'react'
import { FinalCardCVC } from 'componentnCompounds/FinalCardCVC'
import { cardCvcValidation } from 'utils/validation'
import { Col } from 'reactstrap'

const FinalCardCVCPropedDefault = props => {
	return (
		<Col xs='6'>
			<FinalCardCVC validation={cardCvcValidation} {...props} />
		</Col>
	)
}

export { FinalCardCVC, FinalCardCVCPropedDefault }
