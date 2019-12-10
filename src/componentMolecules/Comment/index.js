import React from 'react'
import {
	COMMENT_ID,
	COMMENT_NAME,
	COMMENT_POSTED_TIME,
	COMMENT_AVATAR,
	COMMENT_BODY,
	COMMENT_NUM_COMMENTS,
	CommentsList,
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
