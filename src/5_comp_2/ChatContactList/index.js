import React from 'react'

import { ChatContactList } from './ChatContactList'
import { contactList } from './utils'

const ChatContactListWithProps = props => {
	const { otherProps } = props
	return <ChatContactList contactList={contactList} {...otherProps} />
}
export { ChatContactListWithProps }
