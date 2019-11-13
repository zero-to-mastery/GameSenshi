import React from 'react'
// reactstrap components
import { Container, Row, Col } from 'reactstrap'
const ContainerSearchResults = props => {
	return (
		<Container>
			<Row>
				<Col md={{ size: 4 }}>
					<h4>filters</h4>
				</Col>
				<Col md={{ size: 8 }}>
					<h4>search result</h4>
				</Col>
			</Row>
		</Container>
	)
}

export { ContainerSearchResults }
