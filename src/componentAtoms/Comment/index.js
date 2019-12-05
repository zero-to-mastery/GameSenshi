import React from 'react'
import { CommentsList } from './Comment'
import {
	COMMENT_ID,
	COMMENT_NAME,
	COMMENT_POSTED_TIME,
	COMMENT_AVATAR,
	COMMENT_BODY,
	COMMENT_NUM_COMMENTS,
} from './Comment'

const CommentCommonPropedDefault = props => {
	const { comments } = props
	return <CommentsList comments={comments} {...props} />
}

export {
	CommentCommonPropedDefault,
	COMMENT_ID,
	COMMENT_NAME,
	COMMENT_POSTED_TIME,
	COMMENT_AVATAR,
	COMMENT_BODY,
	COMMENT_NUM_COMMENTS,
}
