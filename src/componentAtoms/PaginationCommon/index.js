import React from 'react'
import { PaginationCommon } from './PaginationCommon'

const PaginationCommonPropedDefault = props => {
	const { comments, initialPage, pager } = props
	return (
		<PaginationCommon
			items={comments}
			initialPage={initialPage}
			pager={pager}
			{...props}
		/>
	)
}

export { PaginationCommonPropedDefault }
