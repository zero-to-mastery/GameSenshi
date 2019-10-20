/* eslint-disable no-undef */
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const PaginationCommon = props => {
	const [pager, setPager] = useState({})
	// const items = useRef(props.items)

	useEffect(() => {
		setPage(props.initialPage)
	}, [props.items])

	const getPager = (totalItems, currentPage, pageSize) => {
		currentPage = currentPage || 1
		pageSize = pageSize || 3
		const totalPages = Math.ceil(totalItems / pageSize)
		let startPage, endPage
		if (totalPages <= 10) {
			startPage = 1
			endPage = totalPages
		} else {
			if (currentPage <= 6) {
				startPage = 1
				endPage = 10
			} else if (currentPage + 4 >= totalPages) {
				startPage = totalPages - 9
				endPage = totalPages
			} else {
				startPage = currentPage - 5
				endPage = currentPage + 4
			}
		}
		const startIndex = (currentPage - 1) * pageSize
		const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1)
		const pages = [...Array(endPage + 1 - startPage).keys()].map(
			i => startPage + i
		)
		return {
			totalItems: totalItems,
			currentPage: currentPage,
			pageSize: pageSize,
			totalPages: totalPages,
			startPage: startPage,
			endPage: endPage,
			startIndex: startIndex,
			endIndex: endIndex,
			pages: pages,
		}
	}

	const setPage = page => {
		const { items, pageSize, onChangePage } = props
		if (page < 1 || page > pager.totalPages) {
			return
		}
		setPager(getPager(items.length, page, pageSize))
		const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1)
		onChangePage(pageOfItems)
	}

	return (
		<Pagination aria-label='Page navigation example'>
			<PaginationItem disabled={pager.currentPage === 1}>
				<PaginationLink
					onClick={() => setPage(pager.currentPage - 1)}
					previous
				/>
			</PaginationItem>
			{pager &&
				pager.pages &&
				pager.pages.map((page, index) => {
					return (
						<PaginationItem active={page === pager.currentPage} key={index}>
							<PaginationLink onClick={() => setPage(page)}>
								{page}
							</PaginationLink>
						</PaginationItem>
					)
				})}
			<PaginationItem disabled={pager.currentPage === pager.totalPages}>
				<PaginationLink onClick={() => setPage(pager.currentPage + 1)} next />
			</PaginationItem>
		</Pagination>
	)
}

export { PaginationCommon }
