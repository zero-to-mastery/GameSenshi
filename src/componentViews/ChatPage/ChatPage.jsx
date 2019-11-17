import React from 'react'
import { stopUndefined } from 'utils'
import { Exports } from 'componentpMultiOrganisms'
import { Container, Row, Col } from 'reactstrap'

const { Section, WrapperStoreWrapperPropedIndex } = stopUndefined(Exports)

const ChatPage = () => {
	return (
		<WrapperStoreWrapperPropedIndex>
			<Section>
				<Container>
					<Row>
						<Col>
							<h1>Chat</h1>
						</Col>
					</Row>
				</Container>
			</Section>
			<Row>
				<Col md='3'>contacts section</Col>
				<Col md='9'>conversation section</Col>
			</Row>
		</WrapperStoreWrapperPropedIndex>
	)
}

export { ChatPage }
