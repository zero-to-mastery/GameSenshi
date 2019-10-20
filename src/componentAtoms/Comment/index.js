import React from 'react'
import { Comment } from './Comment'
import { ID, NAME, POSTED_TIME, AVATAR, BODY, NUM_COMMENTS } from './Comment'

const CommentCommonPropedDefault = props => {
	const { comments } = props
	return <Comment comments={comments} />
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
