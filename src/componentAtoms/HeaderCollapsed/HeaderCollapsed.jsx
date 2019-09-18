import React from 'react'
import { Row, Col } from 'reactstrap'

import { ExportProton } from 'componentaProton'
import { stopUndefined } from 'utils'

const { Link } = stopUndefined(ExportProton)

const HeaderCollapsed = props => {
	const { isOpen, toggle, children, to } = props
	return (
		<div className='navbar-collapse-header'>
			<Row>
				<Col className='collapse-brand' xs='6'>
					<Link to={to}>{children}</Link>
				</Col>
				<Col className='collapse-close text-right' xs='6'>
					<button
						aria-expanded={isOpen}
						className='navbar-toggler'
						onClick={toggle}>
						<i className='tim-icons icon-simple-remove' />
					</button>
				</Col>
			</Row>
		</div>
	)
}

export { HeaderCollapsed }
