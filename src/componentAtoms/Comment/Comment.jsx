import React, { Fragment } from 'react'
import { Media, Button, UncontrolledTooltip } from 'reactstrap'

const CommentHeader = props => {
	const { name, time } = props
	return (
		<Media heading tag='h5'>
			{name} <small className='text-muted'>{time}</small>
		</Media>
	)
}

const CommentAvatar = props => {
	return (
		<a className='pull-left' href='#pablo' onClick={e => e.preventDefault()}>
			<div className='avatar'>
				<Media
					alt='...'
					className='img-raised'
					src={require('assets/img/james.jpg')}
				/>
			</div>
		</a>
	)
}

const CommentBody = props => {
	const { commentText } = props
	return (
		<Media body>
			<CommentHeader />
			<p>{commentText}</p>
			<CommentFooter />
		</Media>
	)
}

const CommentFooter = props => {
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
			<UncontrolledTooltip delay={0} target='tooltip871944617'>
				Reply to Comment
			</UncontrolledTooltip>
			<Button
				className='btn-simple pull-right'
				color='danger'
				href='#pablo'
				onClick={e => e.preventDefault()}
				size='sm'>
				<i className='tim-icons icon-heart-2' /> 243
			</Button>
		</div>
	)
}
const Comment = props => {
	return (
		<Media>
			<CommentAvatar />
			<CommentBody />
		</Media>
	)
}

export { Comment }
