import React from 'react'
import { FinalCardCVC } from 'componentnCompounds/FinalCardCVC/FinalCardCVC'
import { cardCvcValidation } from 'utils'
import { Col } from 'reactstrap'

const FinalCardCVCPropedDefault = props => {
	return (
		<Col xs='6'>
			<FinalCardCVC validation={cardCvcValidation} {...props} />
		</Col>
	)
}

export { FinalCardCVC, FinalCardCVCPropedDefault }
