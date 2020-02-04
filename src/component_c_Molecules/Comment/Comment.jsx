import React, { Fragment } from 'react'
import { Media } from 'reactstrap'
import { Exports } from 'component_b_Atoms'
import { stopUndefined } from '1_utils'

const { Button } = stopUndefined(Exports)

const COMMENT_ID = 'id'
const COMMENT_NAME = 'name'
const COMMENT_POSTED_TIME = 'postedTime'
const COMMENT_AVATAR = 'avatar'
const COMMENT_BODY = 'body'
const COMMENT_NUM_COMMENTS = 'numComments'

const Comments = props => {
	const { comments } = props
	const comments_ = comments || []
	return comments_.map(comment => {
		const {
			[COMMENT_ID]: id,
			[COMMENT_NAME]: name,
			[COMMENT_POSTED_TIME]: time,
			[COMMENT_AVATAR]: src,
			[COMMENT_BODY]: body,
			[COMMENT_NUM_COMMENTS]: commentsNumber,
		} = comment
		return (
			<Fragment key={id}>
				<Comment
					name={name}
					time={time}
					src={src}
					body={body}
					commentsNumber={commentsNumber}
				/>
			</Fragment>
		)
	})
}

const Comment = props => {
	const { body, name, time, src } = props
	return (
		<Media>
			<div className='pull-left'>
				<div className='avatar'>
					<Media alt='Avatar Comment' className='img-raised' src={src} />
				</div>
			</div>
			<Media body>
				<Media heading tag='h5'>
					{name}
					<small className='text-muted'>· {time}</small>
				</Media>
				<p>{body}</p>
				<div className='media-footer'>
					<Button
						className='btn-simple pull-right no-border'
						color='primary'
						href='#pablo'
						id='tooltip871944617'
						onClick={e => e.preventDefault()}
						size='sm'
					>
						<i className='tim-icons icon-send' /> Reply
					</Button>
				</div>
			</Media>
		</Media>
	)
}

const CommentsList = props => {
	const { comments } = props
	return (
		<Fragment>
			<div className='container'>
				<Comments comments={comments} />
			</div>
		</Fragment>
	)
}

export {
	Comment,
	COMMENT_NAME,
	COMMENT_POSTED_TIME,
	COMMENT_AVATAR,
	COMMENT_BODY,
	COMMENT_NUM_COMMENTS,
	COMMENT_ID,
	CommentsList,
}
