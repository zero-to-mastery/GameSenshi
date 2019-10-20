import React from 'react'
import { PaginationCommon } from './PaginationCommon'

const PaginationCommonPropedDefault = props => {
	const { comments, onChangePage, pageSize } = props
	return (
		<PaginationCommon
			items={comments}
			pageSize={pageSize}
			onChangePage={onChangePage}
			{...props}
		/>
	)
}

export { PaginationCommonPropedDefault }
