import React, { Fragment } from 'react'
import { Media, Button } from 'reactstrap'

const ID = 'id'
const NAME = 'name'
const POSTED_TIME = 'postedTime'
const AVATAR = 'avatar'
const BODY = 'body'
const NUM_COMMENTS = 'numComments'
const TOOLTIP = 'tooltip'
const COMMENTS = 'comments'

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
				size='sm'>
				<i className='tim-icons icon-send' /> Reply
			</Button>
			<Button
				className='btn-simple pull-right'
				color='danger'
				href='#pablo'
				onClick={e => e.preventDefault()}
				size='sm'>
				<i className='tim-icons icon-heart-2' />
				{commentsNumber}
			</Button>
		</div>
	)
}
const Comment = props => {
	const { [COMMENTS]: comments } = props
	return (
		<div className='container'>
			<div className='comment-wrapper'>
				{comments.map((comment, i) => {
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
				})}
			</div>
		</div>
	)
}

export { Comment, NAME, POSTED_TIME, AVATAR, BODY, NUM_COMMENTS, TOOLTIP, ID }
