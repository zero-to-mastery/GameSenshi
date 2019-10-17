import React, { useState } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
// JS utility library
import { uniqueId, range } from 'lodash'

const PaginationCommon = props => {
	const [currentPage, setCurrentPage] = useState(0)
	const [pageCount, setPageCount] = useState(0)

	const handlePageChange = page => {
		const { onPageChange } = this.props
		const currentPage = Math.max(0, Math.min(page, this.state.pageCount))
		const paginationData = {
			currentPage,
			totalPages: this.state.pageCount,
			pageLimit: this.props.pageSize,
			totalRecords: this.props.totalRecords,
		}
		setCurrentPage()
	}
	const renderControls = () => {
		const pageCount = this.state.pageCount
		const numberOfPages = range(1, pageCount + 1)
		return numberOfPages.map(pageNumber => {
			const baseClassName = 'pagination-controls__button'
			const activeClassName =
				pageNumber === this.state.currentPage ? `${baseClassName}--active` : ''
			return (
				<div
					key={uniqueId()}
					className={`${baseClassName} ${activeClassName}`}
					onClick={() => handlePageChange(pageNumber)}>
					{pageNumber}
				</div>
			)
		})
	}
	return (
		<div className='pagination'>
			<Pagination
				className='pagination pagination-primary'
				listClassName='pagination-primary'>
				<PaginationItem>
					<PaginationLink
						aria-label='Previous'
						href='#pablo'
						onClick={e => e.preventDefault()}>
						<span aria-hidden={true}>
							<i aria-hidden={true} className='fa fa-angle-double-left' />
						</span>
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href='#pablo' onClick={e => e.preventDefault()}>
						{renderControls}
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink
						aria-label='Next'
						href='#pablo'
						onClick={e => e.preventDefault()}>
						<span aria-hidden={true}>
							<i aria-hidden={true} className='fa fa-angle-double-right' />
						</span>
					</PaginationLink>
				</PaginationItem>
			</Pagination>
		</div>
	)
}

export { PaginationCommon }
