import React from 'react'
// reactstrap components
import { Row, Col, Label, Input, FormGroup, Button } from 'reactstrap'

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
			<Row className='py-3 d-flex flex-row justify-content-center'>
				<Col>
					<Button className='btn-round ml-2' color='danger' type='button'>
						Apply
					</Button>
				</Col>
			</Row>
			<Row className='d-flex flex-row justify-content-center'>
				<Col>
					<Button className='btn-round ml-1' color='danger' type='button'>
						Clear All
					</Button>
				</Col>
			</Row>
		</Col>
	)
}

export { PanelFilterSearch }
