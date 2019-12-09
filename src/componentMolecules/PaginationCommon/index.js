import React from 'react'
import { PaginationCommon } from './PaginationCommon'

const PaginationCommonPropedDefault = props => {
	const { comments } = props
	return <PaginationCommon items={comments} {...props} />
}

export { PaginationCommonPropedDefault }
