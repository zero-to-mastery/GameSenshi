import React from 'react'
import { Comment } from './Comment'
import { comments } from './utils'
const CommentCommonPropedProfile = props => {
	return <Comment comments={comments} {...props} />
}

export { CommentCommonPropedProfile }
