import React, { Fragment, useState } from 'react'
import { stopUndefined } from 'utils'
import { Exports } from 'componentAtoms'

const {
	CommentCommonPropedDefault,
	PaginationCommonPropedDefault,
} = stopUndefined(Exports)

const LIMIT = 2
const NUM_OF_RECORDS = 4

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
		<Fragment>
			<CommentCommonPropedDefault comments={paginatedComments} />
			<PaginationCommonPropedDefault
				limit={LIMIT}
				numOfRecords={NUM_OF_RECORDS}
				handleClick={handleClick}
				currentPage={currentPage}
			/>
		</Fragment>
	)
}

export { CommentWithPagination }
