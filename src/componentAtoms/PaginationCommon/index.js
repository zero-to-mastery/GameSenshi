import React from 'react'
import { PaginationCommon } from './PaginationCommon'

const dataSet = [...Array(10)].map((a, i) => 'Record ' + (i + 1))

const PaginationCommonPropedDefault = props => {
	const { data } = props
	return <PaginationCommon items={dataSet} {...props} />
}

export { PaginationCommonPropedDefault }
