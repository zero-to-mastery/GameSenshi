import React from 'react'
import { CommentsList } from './Comment'
import { ID, NAME, POSTED_TIME, AVATAR, BODY, NUM_COMMENTS } from './Comment'

const CommentCommonPropedDefault = props => {
	const { comments } = props
	return <CommentsList comments={comments} {...props} />
}

export {
	CommentCommonPropedDefault,
	ID,
	NAME,
	POSTED_TIME,
	AVATAR,
	BODY,
	NUM_COMMENTS,
}
