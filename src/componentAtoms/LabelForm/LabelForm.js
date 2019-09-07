import React from 'react'
import { Col, Row } from 'reactstrap'

const LabelForm = props => {
	const { htmlFor, label, children, childrenMD } = props
	return (
		<Row>
			<Col className='align-self-center' md='3'>
				<label className='labels' htmlFor={htmlFor}>
					{label}
				</label>
			</Col>
			<Col className='align-self-center' md={childrenMD}>
				{children}
			</Col>
		</Row>
	)
}

export { LabelForm }
