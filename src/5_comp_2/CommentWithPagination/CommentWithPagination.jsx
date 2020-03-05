import React, { useState, useCallback, useMemo } from 'react'
import { stopUndefined } from '1_utils'
import { Exports } from '5_comp_1'

const { Comments, Pagination } = stopUndefined(Exports)

const CommentWithPagination = props => {
	const {
		comments,
		comments: { length },
		pageNeighbours,
		limit,
	} = props
	const [currentPage, setCurrentPage] = useState(1)

	const pageNeighbours_ = pageNeighbours || 1
	const limit_ = limit || 3

	const onPageChanged = useCallback((event, page) => {
		setCurrentPage(page)
	}, [])
	const currentComments = useMemo(
		() =>
			comments.slice(
				(currentPage - 1) * limit_,
				(currentPage - 1) * limit_ + limit_
			),
		[currentPage, limit_, comments]
	)
	return (
		<div className='d-flex flex-column align-items-center'>
			<Comments comments={currentComments} />
			<Pagination
				totalRecords={length}
				pageLimit={limit_}
				pageNeighbours={pageNeighbours_}
				onPageChanged={onPageChanged}
				currentPage={currentPage}
			/>
		</div>
	)
}

export { CommentWithPagination }
