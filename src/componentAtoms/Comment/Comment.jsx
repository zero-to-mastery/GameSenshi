import React, { Fragment } from 'react'
import { Media, Input } from 'reactstrap'
import { Exports } from 'componentaProton'
import { stopUndefined } from 'utils'

const { Button } = stopUndefined(Exports)

const ID = 'id'
const NAME = 'name'
const POSTED_TIME = 'postedTime'
const AVATAR = 'avatar'
const BODY = 'body'
const NUM_COMMENTS = 'numComments'

const Comments = props => {
	const { comments } = props
	const comments_ = comments || []
	return comments_.map((comment, i) => {
		const {
			[ID]: id,
			[NAME]: name,
			[POSTED_TIME]: time,
			[AVATAR]: src,
			[BODY]: body,
			[NUM_COMMENTS]: commentsNumber,
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
	const { body, name, time, commentsNumber, src } = props
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
						className='btn-simple pull-right'
						color='primary'
						href='#pablo'
						id='tooltip871944617'
						onClick={e => e.preventDefault()}
						size='sm'
					>
						<i className='tim-icons icon-send' /> Reply
					</Button>
					<Button
						className='btn-simple pull-right'
						color='danger'
						href='#pablo'
						onClick={e => e.preventDefault()}
						size='sm'
					>
						<i className='tim-icons icon-heart-2' />
						{commentsNumber}
					</Button>
				</div>
			</Media>
		</Media>
	)
}

const AddCommentInput = props => {
	return (
		<Media className='media-post'>
			<a
				className='pull-left author'
				href='#pablo'
				onClick={e => e.preventDefault()}
			>
				<div className='avatar'>
					<Media
						alt='...'
						className='img-raised'
						src={require('assets/img/olivia.jpg')}
					/>
				</div>
			</a>
			<Media body>
				<Input
					placeholder='Write a nice reply or go home...'
					rows='4'
					type='textarea'
				/>
				<div className='media-footer'>
					<Button
						className='pull-right'
						color='primary'
						href='#pablo'
						onClick={e => e.preventDefault()}
					>
						Reply
					</Button>
				</div>
			</Media>
		</Media>
	)
}

const CommentsList = props => {
	const { comments } = props
	return (
		<>
			<div className='container'>
				<h3 className='title text-center'>Post your comment</h3>
				<AddCommentInput />
			</div>
			<div className='container'>
				<Comments comments={comments} />
			</div>
		</>
	)
}

export {
	Comment,
	NAME,
	POSTED_TIME,
	AVATAR,
	BODY,
	NUM_COMMENTS,
	ID,
	CommentsList,
}
