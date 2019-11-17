import React, { useEffect } from 'react'
import { stopUndefined } from 'utils'
import { Exports } from 'componentpMultiOrganisms'
import { Container, Row, Col } from 'reactstrap'

const {
	Section,
	WrapperStoreWrapperPropedIndex,
	ChatContactListWithProps,
	ChatMessageContainerWithProps,
} = stopUndefined(Exports)

const ChatPage = () => {
	useEffect(() => {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		document.body.classList.add('chat-page')
		return () => {
			document.body.classList.remove('chat-page')
		}
	}, [])
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
							<ChatContactListWithProps />
						</Col>
						<Col md='8'>
							<ChatMessageContainerWithProps />
						</Col>
					</Row>
				</Container>
			</Section>
		</WrapperStoreWrapperPropedIndex>
	)
}

export { ChatPage }
