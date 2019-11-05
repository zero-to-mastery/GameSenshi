import React, { Fragment, useState, useCallback, useEffect } from 'react'
import { stopUndefined } from 'utils'
import { Exports } from 'componentAtoms'

const {
	CommentCommonPropedDefault,
	PaginationCommonPropedDefault,
} = stopUndefined(Exports)

const INITIAL_PAGE = 1

const CommentWithPagination = props => {
	const { comments } = props
	const [myPageOfItems, setPageOfItems] = useState([])
	const [pager, setPager] = useState({})

	// useEffect(() => {
	// 	setPage(INITIAL_PAGE)
	// }, [myPageOfItems])

	// const getPager = (totalItems, currentPage, pageSize) => {
	// 	currentPage = currentPage || 1
	// 	pageSize = pageSize || 3
	// 	const totalPages = Math.ceil(totalItems / pageSize)
	// 	let startPage, endPage
	// 	if (totalPages <= 10) {
	// 		startPage = 1
	// 		endPage = totalPages
	// 	} else {
	// 		if (currentPage <= 6) {
	// 			startPage = 1
	// 			endPage = 10
	// 		} else if (currentPage + 4 >= totalPages) {
	// 			startPage = totalPages - 9
	// 			endPage = totalPages
	// 		} else {
	// 			startPage = currentPage - 5
	// 			endPage = currentPage + 4
	// 		}
	// 	}
	// 	const startIndex = (currentPage - 1) * pageSize
	// 	const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1)
	// 	const pages = [...Array(endPage + 1 - startPage).keys()].map(
	// 		i => startPage + i
	// 	)
	// 	return {
	// 		totalItems: totalItems,
	// 		currentPage: currentPage,
	// 		pageSize: pageSize,
	// 		totalPages: totalPages,
	// 		startPage: startPage,
	// 		endPage: endPage,
	// 		startIndex: startIndex,
	// 		endIndex: endIndex,
	// 		pages: pages,
	// 	}
	// }

	// const onChangePage = useCallback(
	// 	pageOfItems => {

	// 	},
	// 	[myPageOfItems]
	// )

	// const onChangePage = pageOfItems => {
	// 	setPageOfItems(pageOfItems)
	// }
	// const setPage = page => {
	// 	const { comments, pageSize, onChangePage } = props
	// 	if (page < 1 || page > pager.totalPages) {
	// 		return
	// 	}
	// 	setPager(getPager(comments.length, page, pageSize))
	// 	const pageOfItems = comments.slice(pager.startIndex, pager.endIndex + 1)
	// 	onChangePage(pageOfItems)
	// }
	return (
		<Fragment>
			<CommentCommonPropedDefault comments={myPageOfItems} />
			<PaginationCommonPropedDefault
				// onChangePage={onChangePage}
				// comments={myPageOfItems}
				// setPage={setPage}
				pager={pager}
				initialPage={INITIAL_PAGE}
				// eslint-disable-next-line react/jsx-no-duplicate-props
			/>
		</Fragment>
	)
}

export { CommentWithPagination }
