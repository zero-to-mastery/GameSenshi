/* eslint-disable no-undef */
import React, { useState, useEffect, useRef } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const PaginationCommon = props => {
	const [pager, setPager] = useState({})
	const items = useRef(props.items)

	useEffect(() => {
		if (props.items !== items.current) {
			setPage(props.initialPage)
		}
		items.current = props.items
	})

	const setPage = page => {
		const { items, pageSize, onChangePage } = props
		let pager_ = pager

		if (page < 1 || page > pager.totalPages) {
			return
		}
		pager_ = getPager(items.length, page, pageSize)
		const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1)
		setPager({ pager_ })
		onChangePage(pageOfItems)
	}
	const getPager = (totalItems, currentPage, pageSize) => {
		currentPage = currentPage || 1
		pageSize = pageSize || 10
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

	// if (!pager.pages || pager.pages.length <= 1) {
	// 	// don't display pager if there is only 1 page
	// 	return null
	// }
	return (
		<ul className='pagination'>
			<li className={pager.currentPage === 1 ? 'disabled' : ''}>
				<a onClick={() => setPage(1)}>First</a>
			</li>
			<li className={pager.currentPage === 1 ? 'disabled' : ''}>
				<a onClick={() => setPage(pager.currentPage - 1)}>Previous</a>
			</li>
			{/* {pager.pages.map((page, index) => (
				<li key={index} className={pager.currentPage === page ? 'active' : ''}>
					<a onClick={() => setPage(page)}>{page}</a>
				</li>
			))} */}
			<li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
				<a onClick={() => setPage(pager.currentPage + 1)}>Next</a>
			</li>
			<li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
				<a onClick={() => setPage(pager.totalPages)}>Last</a>
			</li>
		</ul>
	)
}

export { PaginationCommon }
