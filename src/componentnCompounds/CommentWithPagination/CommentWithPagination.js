import React, { Fragment, useState } from 'react'
import { stopUndefined } from 'utils'
import { ExportAtoms } from 'componentAtoms'

const {
	CommentCommonPropedDefault,
	PaginationCommonPropedDefault,
} = stopUndefined(ExportAtoms)

const CommentWithPagination = props => {
	const { comments } = props
	const [pageOfItems, setPageOfItems] = useState([])
	const onChangePage = pageOfItems => {
		setPageOfItems(pageOfItems)
	}
	return (
		<Fragment>
			<CommentCommonPropedDefault comments={pageOfItems} />
			<PaginationCommonPropedDefault
				onChangePage={onChangePage}
				comments={comments}
			/>
		</Fragment>
	)
}

export { CommentWithPagination }
