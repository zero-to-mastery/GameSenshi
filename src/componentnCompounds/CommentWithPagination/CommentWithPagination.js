import React, { Fragment, useState, useCallback } from 'react'
import { stopUndefined } from 'utils'
import { Exports } from 'componentAtoms'

const {
	CommentCommonPropedDefault,
	PaginationCommonPropedDefault,
} = stopUndefined(Exports)

const CommentWithPagination = props => {
	const { comments } = props
	const [pageOfItems, setPageOfItems] = useState([])
	const onChangePage = useCallback(
		pageOfItems => {
			setPageOfItems(pageOfItems)
		},
		[pageOfItems]
	)
	return (
		<Fragment>
			<CommentCommonPropedDefault comments={comments} />
			<PaginationCommonPropedDefault
				onChangePage={onChangePage}
				comments={comments}
			/>
		</Fragment>
	)
}

export { CommentWithPagination }
