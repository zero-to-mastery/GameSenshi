import React, { Fragment, useState } from 'react'
import { stopUndefined } from 'utils'
import { Exports } from 'componentAtoms'

const {
	CommentCommonPropedDefault,
	PaginationCommonPropedDefault,
} = stopUndefined(Exports)

const LIMIT = 2

const CommentWithPagination = props => {
	const { comments } = props
	const [currentPage, setCurrentPage] = useState(0)

	const handleClick = (event, index) => {
		event.preventDefault()
		setCurrentPage(index)
	}
	const paginatedComments = comments.slice(
		currentPage * LIMIT,
		(currentPage + 1) * LIMIT
	)
	return (
		<div className='d-flex flex-column align-items-center'>
			<CommentCommonPropedDefault comments={paginatedComments} />
			<PaginationCommonPropedDefault
				limit={LIMIT}
				comments={comments}
				handleClick={handleClick}
				currentPage={currentPage}
			/>
		</div>
	)
}

export { CommentWithPagination }
