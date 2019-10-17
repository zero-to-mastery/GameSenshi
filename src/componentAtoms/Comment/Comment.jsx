/* eslint-disable prettier/prettier */
import React, { Fragment } from 'react'
import { Media, Button, UncontrolledTooltip } from 'reactstrap'

const CommentHeader = props => {
  const { name, time } = props
  return (
    <Media heading tag="h5">
      Tina Andrew{" "}
      <small className="text-muted">· 7 minutes ago</small>
    </Media>
  )
}

const CommentAvatar = props => {
  return (
    <Fragment>
      <a className='pull-left' href='#pablo' onClick={e => e.preventDefault()}>
        <div className='avatar'>
          <Media
            alt='...'
            className='img-raised'
            src={require('assets/img/james.jpg')}
          />
        </div>
      </a>
    </Fragment>
  )
}

const CommentBody = props => {
  const { commentText } = props
  return (
    <Media body>
      <CommentHeader />
      <p>
        {' '}
        Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1
				song in the country. Panda! Don't be scared of the truth because we need
				to restart the human foundation in truth I stand with the most humility.
				We are so blessed!
			</p>
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
      <CommentAvatar />c
			<CommentBody />
    </Media>
  )
}

export { Comment }
