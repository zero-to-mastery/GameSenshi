import React from 'react'
import { Media } from 'reactstrap'
import { Exports } from '5_comp_0'
import { stopUndefined } from '1_utils'

const { Row, Col } = stopUndefined(Exports)

const COMMENT_ID = 'id'
const COMMENT_NAME = 'name'
const COMMENT_POSTED_TIME = 'postedTime'
const COMMENT_AVATAR = 'avatar'
const COMMENT_BODY = 'body'

const Comments = props => {
	const { comments } = props
	const comments_ = comments || []
	return (
		<div id='comments'>
			<Row>
				<Col className='ml-auto mr-auto'>
					{comments_.map(comment => {
						const {
							[COMMENT_ID]: id,
							[COMMENT_NAME]: name,
							[COMMENT_POSTED_TIME]: time,
							[COMMENT_AVATAR]: avatar,
							[COMMENT_BODY]: body,
						} = comment
						return (
							<Media key={id} className='mb-3'>
								<a
									className='pull-left'
									href='#pablo'
									onClick={e => e.preventDefault()}
								>
									<div className='avatar'>
										<Media alt='...' className='img-raised' src={avatar} />
									</div>
								</a>
								<Media body>
									<Media heading tag='h5' className='my-1'>
										{name} <small className='text-muted'>· {time} ago</small>
									</Media>
									<p>{body}</p>
								</Media>
							</Media>
						)
					})}
				</Col>
			</Row>
		</div>
	)
}

export { Comments }
