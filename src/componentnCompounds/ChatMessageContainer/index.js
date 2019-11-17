import React from 'react'
import { ChatMessageContainer } from './ChatMessageContainer'
import { messages } from './utils'

const ChatMessageContainerWithProps = props => {
	const { otherProps } = props
	return <ChatMessageContainer messages={messages} {...otherProps} />
}

export { ChatMessageContainerWithProps }
