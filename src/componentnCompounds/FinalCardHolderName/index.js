import React from 'react'
import { FinalCardHolderName } from 'componentnCompounds/FinalCardHolderName/FinalCardHolderName'
import { cardNameValidation } from 'utils'
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
