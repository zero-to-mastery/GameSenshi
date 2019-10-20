import React from 'react'
import { PaginationCommon } from './PaginationCommon'

const PaginationCommonPropedDefault = props => {
	const { comments, onChangePage } = props
	return (
		<PaginationCommon items={comments} onChangePage={onChangePage} {...props} />
	)
}

export { PaginationCommonPropedDefault }
