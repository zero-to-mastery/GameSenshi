import React, { useState, useCallback } from 'react'
import { stopUndefined } from 'utils'
import { Exports } from 'componentAtoms'

const {
	CommentCommonPropedDefault,
	PaginationCommonPropedDefault,
} = stopUndefined(Exports)

const CommentWithPagination = props => {
	const { comments } = props
	const [currentPage, setCurrentPage] = useState(1)
	const NUM_OF_RECORDS = comments.length
	const LIMIT = 3

	const onPageChanged = useCallback(
		(event, page) => {
			event.preventDefault()
			setCurrentPage(page)
		},
		[currentPage]
	)
	const currentComments = comments.slice(
		(currentPage - 1) * LIMIT,
		(currentPage - 1) * LIMIT + LIMIT
	)
	return (
		<div className='d-flex flex-column align-items-center'>
			<CommentCommonPropedDefault comments={currentComments} />
			<PaginationCommonPropedDefault
				totalRecords={NUM_OF_RECORDS}
				pageLimit={LIMIT}
				pageNeighbours={1}
				onPageChanged={onPageChanged}
				currentPage={currentPage}
			/>
		</div>
	)
}

export { CommentWithPagination }
