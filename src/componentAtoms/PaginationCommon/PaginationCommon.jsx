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
	const { handleClick, currentPage } = props
	const [pageCount, setPageCount] = useState(0)

	useEffect(() => {
		const { limit, comments } = props
		setPageCount(Math.ceil(comments.length / limit))
	}, [currentPage])

	return (
		<Pagination aria-label='Page navigation example'>
			<PaginationItem disabled={currentPage <= 0}>
				<PaginationLink
					onClick={e => handleClick(e, currentPage - 1)}
					previous
				/>
			</PaginationItem>
			{[...Array(pageCount)].map((page, i) => (
				<PaginationItem active={i === currentPage} key={i}>
					<PaginationLink onClick={e => handleClick(e, i)}>
						{i + 1}
					</PaginationLink>
				</PaginationItem>
			))}
			<PaginationItem disabled={currentPage >= pageCount - 1}>
				<PaginationLink onClick={e => handleClick(e, currentPage + 1)} next />
			</PaginationItem>
		</Pagination>
	)
}

export { PaginationCommon }
