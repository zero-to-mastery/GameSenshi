import React, { Fragment, useState, useCallback, useEffect } from 'react'
import { stopUndefined } from 'utils'
import { Exports } from 'componentAtoms'

const {
	CommentCommonPropedDefault,
	PaginationCommonPropedDefault,
} = stopUndefined(Exports)

const PAGE_SIZE = 2
const INITIAL_PAGE = 1

const CommentWithPagination = props => {
	const { comments } = props
	const [myPageOfItems, setPageOfItems] = useState([])

	useEffect(() => {}, [comments])

	const onChangePage = useCallback(
		pageOfItems => {
			setPageOfItems(pageOfItems)
		},
		[myPageOfItems]
	)
	return (
		<Fragment>
			<CommentCommonPropedDefault comments={myPageOfItems} />
			<PaginationCommonPropedDefault
				onChangePage={onChangePage}
				comments={comments}
				pageSize={PAGE_SIZE}
				initialPage={INITIAL_PAGE}
			/>
		</Fragment>
	)
}

export { CommentWithPagination }
