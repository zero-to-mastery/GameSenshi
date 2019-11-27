/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const LEFT_PAGE = 'LEFT'
const RIGHT_PAGE = 'RIGHT'

const range = (from, to, step = 1) => {
	let i = from
	const range = []

	while (i <= to) {
		range.push(i)
		i += step
	}

	return range
}

const PaginationCommon = props => {
	const {
		totalRecords,
		pageLimit,
		pageNeighbours,
		onPageChanged,
		currentPage,
	} = props
	const [totalPages, setTotalPages] = useState(0)

	useEffect(() => {
		setTotalPages(Math.ceil(totalRecords / pageLimit))
	}, [currentPage])

	const fetchPageNumbers = () => {
		const totalNumbers = pageNeighbours * 2 + 3
		const totalBlocks = totalNumbers + 2

		if (totalPages > totalBlocks) {
			const startPage = Math.max(2, currentPage - pageNeighbours)
			const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours)

			let pages = range(startPage, endPage)

			const hasLeftSpill = startPage > 2
			const hasRightSpill = totalPages - endPage > 1
			const spillOffset = totalNumbers - (pages.length + 1)

			switch (true) {
				// handle: (1) < {5 6} [7] {8 9} (10)
				case hasLeftSpill && !hasRightSpill: {
					const extraPages = range(startPage - spillOffset, startPage - 1)
					pages = [LEFT_PAGE, ...extraPages, ...pages]
					break
				}
				// handle: (1) < {4 5} [6] {7 8} > (10)
				case hasLeftSpill && hasRightSpill:
				default: {
					pages = [LEFT_PAGE, ...pages, RIGHT_PAGE]
					break
				}
			}
			return [1, ...pages, totalPages]
		}
		return range(1, totalPages)
	}

	const pages = fetchPageNumbers()

	return (
		<Pagination aria-label='Page navigation'>
			{pages.map((page, index) => {
				if (page === LEFT_PAGE)
					return (
						<PaginationItem disabled={currentPage <= 0}>
							<PaginationLink
								onClick={e => onPageChanged(e, currentPage - 1)}
								aria-label='Previous'
								previous
							/>
						</PaginationItem>
					)

				if (page === RIGHT_PAGE)
					return (
						<PaginationItem disabled={currentPage >= totalPages - 1}>
							<PaginationLink
								onClick={e => onPageChanged(e, currentPage + 1)}
								aria-label='Next'
								next
							/>
						</PaginationItem>
					)

				return (
					<PaginationItem active={currentPage === index} key={index}>
						<PaginationLink onClick={e => onPageChanged(e, page)}>
							{page}
						</PaginationLink>
					</PaginationItem>
				)
			})}
		</Pagination>
	)
}

export { PaginationCommon }
