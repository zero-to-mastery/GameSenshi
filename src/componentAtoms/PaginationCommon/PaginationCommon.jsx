/* eslint-disable no-undef */
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const PaginationCommon = props => {
	// const { setPage, initialPage, items, pager } = props
	// useEffect(() => {
	// 	setPage(initialPage)
	// }, [items])

	return (
		<Pagination aria-label='Page navigation example'>
			{/* <PaginationItem disabled={pager.currentPage === 1}>
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
			</PaginationItem> */}
		</Pagination>
	)
}

export { PaginationCommon }
