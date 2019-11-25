import React from 'react'
import { Row, Col } from 'reactstrap'

const TabPaneHorizontal = props => {
	return (
		<Row>
			<Col>
				<h1>Tab Content</h1>
				<h4>{props.name}</h4>
			</Col>
		</Row>
	)
}

export { TabPaneHorizontal }
