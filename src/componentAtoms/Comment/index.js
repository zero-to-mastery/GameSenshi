import React from 'react'
import { Comment } from './Comment'

const CommentCommonPropedDefault = props => {
	const { comments } = props
	return <Comment comments={comments} />
}

export { CommentCommonPropedDefault }
