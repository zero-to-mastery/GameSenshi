import React, { Fragment, useState, useCallback } from 'react'
import { stopUndefined } from 'utils'
import { Exports } from 'componentAtoms'

const {
	CommentCommonPropedDefault,
	PaginationCommonPropedDefault,
} = stopUndefined(Exports)
const PAGE_SIZE = 2
const CommentWithPagination = props => {
	const { comments } = props
	const [pageOfItems, setPageOfItems] = useState(comments)
	const onChangePage = useCallback(
		pageOfItems => {
			setPageOfItems(pageOfItems)
		},
		[pageOfItems]
	)
	return (
		<Fragment>
			<CommentCommonPropedDefault comments={pageOfItems} />
			<PaginationCommonPropedDefault
				onChangePage={onChangePage}
				comments={comments}
				pageSize={PAGE_SIZE}
			/>
		</Fragment>
	)
}

export { CommentWithPagination }
