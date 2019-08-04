import React from 'react'
import { FinalCardHolderName } from 'componentnCompounds/FinalCardHolderName'
import { cardNameValidation } from 'utils/validation'
import { Row, Col } from 'reactstrap'

const FinalCardHolderNamePropedDefault = props => {
	return (
		<Row>
			<Col>
				<FinalCardHolderName validation={cardNameValidation} {...props} />
			</Col>
		</Row>
	)
}

export { FinalCardHolderName, FinalCardHolderNamePropedDefault }
