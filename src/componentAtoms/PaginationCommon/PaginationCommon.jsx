import React, { useState, useEffect } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const range = (from, to, step = 1) => {
	let i = from
	const range = []

	while (i <= to) {
		range.push(i)
		i += step
	}

	return range
}

const LEFT_PAGE = 'LEFT'
const RIGHT_PAGE = 'RIGHT'

const PaginationCommon = props => {
	const [totalPages, setTotalPages] = useState(0)
	const {
		totalRecords,
		pageLimit,
		pageNeighbours,
		onPageChanged,
		currentPage,
	} = props

	useEffect(() => {
		setTotalPages(Math.ceil(totalRecords / pageLimit))
	}, [currentPage])

	const fetchPageNumbers = () => {
		const totalNumbers = pageNeighbours * 2 + 3
		const totalBlocks = totalNumbers + 2

		if (totalPages > totalBlocks) {
			let pages = []

			const leftBound = currentPage - pageNeighbours
			const rightBound = currentPage + pageNeighbours
			const beforeLastPage = totalPages - 1

			const startPage = leftBound > 2 ? leftBound : 2
			const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage

			pages = range(startPage, endPage)

			const pagesCount = pages.length
			const singleSpillOffset = totalNumbers - pagesCount - 1

			const leftSpill = startPage > 2
			const rightSpill = endPage < beforeLastPage

			const leftSpillPage = LEFT_PAGE
			const rightSpillPage = RIGHT_PAGE

			if (leftSpill && !rightSpill) {
				const extraPages = range(startPage - singleSpillOffset, startPage - 1)
				pages = [leftSpillPage, ...extraPages, ...pages]
			} else if (!leftSpill && rightSpill) {
				const extraPages = range(endPage + 1, endPage + singleSpillOffset)
				pages = [...pages, ...extraPages, rightSpillPage]
			} else if (leftSpill && rightSpill) {
				pages = [leftSpillPage, ...pages, rightSpillPage]
			}
			return [1, ...pages, totalPages]
		}
		return range(1, totalPages)
	}

	const pages = fetchPageNumbers()
	return (
		<Pagination aria-label='Page navigation'>
			<PaginationItem>
				<PaginationLink first onClick={e => onPageChanged(e, 1)} />
			</PaginationItem>
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
					<PaginationItem active={currentPage === page} key={index}>
						<PaginationLink onClick={e => onPageChanged(e, page)}>
							{page}
						</PaginationLink>
					</PaginationItem>
				)
			})}
			<PaginationItem>
				<PaginationLink
					last
					onClick={e => onPageChanged(e, pages[pages.length - 1])}
				/>
			</PaginationItem>
		</Pagination>
	)
}

export { PaginationCommon }
