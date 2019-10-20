import React from 'react'
import { PaginationCommon } from './PaginationCommon'

const PaginationCommonPropedDefault = props => {
	const { comments, onChangePage, pageSize, initialPage } = props
	return (
		<PaginationCommon
			items={comments}
			pageSize={pageSize}
			onChangePage={onChangePage}
			initialPage={initialPage}
			{...props}
		/>
	)
}

export { PaginationCommonPropedDefault }
