import React, { Fragment, useEffect } from 'react'
import { Media, Button, Input } from 'reactstrap'

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
				<Media>
					<CommentAvatar src={src} />
					<CommentBody
						id={id}
						name={name}
						time={time}
						body={body}
						commentsNumber={commentsNumber}
					/>
				</Media>
			</Fragment>
		)
	})
}

const CommentHeader = props => {
	const { name, time } = props
	return (
		<Media heading tag='h5'>
			{name}
			<small className='text-muted'>· {time}</small>
		</Media>
	)
}

const CommentAvatar = props => {
	const { src } = props
	return (
		<Fragment>
			<a className='pull-left' href='#pablo' onClick={e => e.preventDefault()}>
				<div className='avatar'>
					<Media alt='Avatar Comment' className='img-raised' src={src} />
				</div>
			</a>
		</Fragment>
	)
}

const CommentBody = props => {
	const { body, name, time, commentsNumber } = props
	return (
		<Media body>
			<CommentHeader name={name} time={time} />
			<p>{body}</p>
			<CommentFooter commentsNumber={commentsNumber} />
		</Media>
	)
}

const CommentFooter = props => {
	const { commentsNumber } = props
	return (
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
	)
}
const Comment = props => {
	const { comments } = props
	return (
		<div className='container'>
			<h3 className='title text-center'>Post your comment</h3>
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
			<div className='container'>
				<div className='comment-wrapper'>
					<Comments comments={comments} />
				</div>
			</div>
		</div>
	)
}

export { Comment, NAME, POSTED_TIME, AVATAR, BODY, NUM_COMMENTS, ID }
