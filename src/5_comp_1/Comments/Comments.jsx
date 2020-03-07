import React from 'react'
import { Media } from 'reactstrap'
import { Exports } from '5_comp_0'
import { stopUndefined } from '1_utils'
import { Rating } from '@material-ui/lab'
import {
	FIRESTORE_SELLER_REVIEWS_COMMENT,
	FIRESTORE_SELLER_REVIEWS_STAR,
	FIRESTORE_SELLER_REVIEWS_ORDER_ID,
	FIRESTORE_SELLER_REVIEWS_BUYER,
	FIRESTORE_SELLER_REVIEWS_BUYER_AVATAR,
	CREATED_AT,
} from '0_constants'
const { Row, Col } = stopUndefined(Exports)

const Comments = props => {
	const { comments } = props
	const comments_ = comments || []
	return (
		<Row>
			<Col className='ml-auto mr-auto'>
				{comments_.map(comment => {
					const {
						[FIRESTORE_SELLER_REVIEWS_ORDER_ID]: orderId,
						[FIRESTORE_SELLER_REVIEWS_BUYER]: name,
						[CREATED_AT]: time,
						[FIRESTORE_SELLER_REVIEWS_BUYER_AVATAR]: avatar,
						[FIRESTORE_SELLER_REVIEWS_COMMENT]: body,
						[FIRESTORE_SELLER_REVIEWS_STAR]: star,
					} = comment
					return (
						<Media key={orderId} className='mb-4'>
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
								<Rating name='read-only' value={star} readOnly size='small' />
								<p>{body}</p>
							</Media>
						</Media>
					)
				})}
			</Col>
		</Row>
	)
}

export { Comments }
