import React from 'react'
import { Row, Col, Label, Input, FormGroup } from 'reactstrap'
import { Exports } from '4_comp_1_Protons'
import { stopUndefined } from '1_utils'
const { Button } = stopUndefined(Exports)

const ButtonGroup = () => {
	return (
		<Col md='10 pt-3'>
			<div className='d-flex flex-column'>
				<Button
					style={{ flex: 1 }}
					className='btn-round ml-1'
					color='danger'
					type='button'
				>
					Apply
				</Button>
				<Button
					style={{ flex: 1 }}
					className='btn-round ml-1'
					color='danger'
					type='button'
				>
					Clear All
				</Button>
			</div>
		</Col>
	)
}

const PanelFilterSearch = props => {
	const { games, ratings } = props
	return (
		<Col style={{ marginTop: '35px' }} md={{ size: 3 }}>
			<Row className='d-flex flex-row justify-content-center align-items-baseline'>
				<Col md={{ size: 2 }}>
					<i style={{ fontSize: '16px' }} class='fas fa-filter'></i>
				</Col>
				<Col md={{ size: 10 }}>
					<h4 className='text-uppercase'>Search filter</h4>
				</Col>
			</Row>
			<Row>
				<Col>
					<h5 className='text-capitalize py-3'>By game</h5>
					{games.map(game => {
						return (
							<FormGroup check>
								<Label check>
									<Input type='checkbox' />
									<span className='form-check-sign' />
									{game}
								</Label>
							</FormGroup>
						)
					})}
				</Col>
			</Row>
			<Row>
				<Col>
					<h5 className='text-capitalize py-3'>By rating</h5>
					{ratings.map(rating => {
						return (
							<FormGroup check>
								<Label check>
									<Input type='checkbox' />
									<span className='form-check-sign' />
									{rating}
								</Label>
							</FormGroup>
						)
					})}
				</Col>
			</Row>
			<ButtonGroup />
		</Col>
	)
}

export { PanelFilterSearch }
