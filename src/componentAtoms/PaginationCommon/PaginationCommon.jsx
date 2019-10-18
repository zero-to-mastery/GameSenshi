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
		const { items, pageSize } = this.props
		const pager_ = pager

		if (page < 1 || page > pager.totalPages) {
			return
		}

		// get new pager object for specified page
		// eslint-disable-next-line no-const-assign
		pager_ = getPager(items.length, page, pageSize)

		// get new page of items from items array
		const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1)

		// update state
		setPager({ pager_ })
		// call change page function in parent component
		this.props.onChangePage(pageOfItems)
	}
	const getPager = (totalItems, currentPage, pageSize) => {
		// default to first page
		currentPage = currentPage || 1

		// default page size is 10
		pageSize = pageSize || 10

		// calculate total pages
		const totalPages = Math.ceil(totalItems / pageSize)

		let startPage, endPage
		if (totalPages <= 10) {
			// less than 10 total pages so show all
			startPage = 1
			endPage = totalPages
		} else {
			// more than 10 total pages so calculate start and end pages
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

		// calculate start and end item indexes
		const startIndex = (currentPage - 1) * pageSize
		const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1)

		// create an array of pages to ng-repeat in the pager control
		const pages = [...Array(endPage + 1 - startPage).keys()].map(
			i => startPage + i
		)

		// return object with all pager properties required by the view
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

		// <Pagination
		// 	className='pagination pagination-primary'
		// 	listClassName='pagination-primary'>
		// 	<PaginationItem>
		// 		<PaginationLink aria-label='Previous' previous onClick={() => {}}>
		// 			<span aria-hidden={true}>
		// 				<i aria-hidden={true} className='fa fa-angle-double-left' />
		// 			</span>
		// 		</PaginationLink>
		// 	</PaginationItem>

		// 	<PaginationItem>
		// 		<PaginationLink aria-label='Next' next onClick={() => {}}>
		// 			<span aria-hidden={true}>
		// 				<i aria-hidden={true} className='fa fa-angle-double-right' />
		// 			</span>
		// 		</PaginationLink>
		// 	</PaginationItem>
		// </Pagination>
	)
}

export { PaginationCommon }
