import React from 'react'
import { stopUndefined } from 'utils'
import { Exports } from 'componentpMultiOrganisms'
import { Container, Row, Col } from 'reactstrap'

const {
	Section,
	WrapperStoreWrapperPropedIndex,
	ChatContactList,
} = stopUndefined(Exports)

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
					<Row>
						<Col md='4'>
							<ChatContactList />
						</Col>
						<Col md='8'>conversation section</Col>
					</Row>
				</Container>
			</Section>
		</WrapperStoreWrapperPropedIndex>
	)
}

export { ChatPage }
