import React, { useState, useEffect, useMemo, useCallback } from 'react'
import {
	Pagination as PaginationRS,
	PaginationItem,
	PaginationLink,
} from 'reactstrap'

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

const Pagination = props => {
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
	}, [totalRecords, pageLimit])

	const pages = useMemo(() => {
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
	}, [pageNeighbours, currentPage, totalPages])

	const goFirstPage = useCallback(e => onPageChanged(e, 1), [onPageChanged])

	const goPreviousPage = useCallback(e => onPageChanged(e, currentPage - 1), [
		onPageChanged,
		currentPage,
	])
	const goNextPage = useCallback(e => onPageChanged(e, currentPage + 1), [
		onPageChanged,
		currentPage,
	])
	const goLastPage = useCallback(
		e => onPageChanged(e, pages[pages.length - 1]),
		[onPageChanged, pages]
	)

	return (
		<PaginationRS aria-label='Page navigation'>
			<PaginationItem>
				<PaginationLink first onClick={goFirstPage} />
			</PaginationItem>
			{pages &&
				pages.map(page => {
					if (page === LEFT_PAGE) {
						return (
							<PaginationItem key={page} disabled={currentPage <= 0}>
								<PaginationLink
									onClick={goPreviousPage}
									aria-label='Previous'
									previous
								/>
							</PaginationItem>
						)
					} else if (page === RIGHT_PAGE) {
						return (
							<PaginationItem
								key={page}
								disabled={currentPage >= totalPages - 1}
							>
								<PaginationLink onClick={goNextPage} aria-label='Next' next />
							</PaginationItem>
						)
					} else {
						return (
							<PaginationItem key={page} active={currentPage === page}>
								<PaginationLink onClick={e => onPageChanged(e, page)}>
									{page}
								</PaginationLink>
							</PaginationItem>
						)
					}
				})}
			<PaginationItem>
				<PaginationLink last onClick={goLastPage} />
			</PaginationItem>
		</PaginationRS>
	)
}

export { Pagination }
