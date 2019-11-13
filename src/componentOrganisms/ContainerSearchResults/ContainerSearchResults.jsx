import React from 'react'
// reactstrap components
import { Container, Row, Col, Label, Input, FormGroup } from 'reactstrap'

import { stopUndefined } from 'utils'
import { Exports } from 'componentpMultiOrganisms'

// const { CardIndexPropedDefault } = stopUndefined(Exports)

const SEARCH_RESULT_CARD_NAME = 'name'
const SEARCH_RESULT_CARD_IMAGE = 'image'
const SEARCH_RESULT_CARD_SKILLS = 'skills'
const SEARCH_RESULT_CARD_HOBBIES = 'hobbies'
const SEARCH_RESULT_CARD_LEVEL = 'level'

const games = ['Dota2', 'PUBG', 'LOL', 'Apex', 'Fortnite']
const ratings = ['5 stars', '4 stars', '3 stars', '2 stars', '1 star']

const ContainerSearchResults = props => {
	const { results } = props
	return (
		<Container>
			<Row>
				<Col md={{ size: 4 }}>
					<Row className='d-flex flex-row justify-content-center align-items-baseline'>
						<Col md={{ size: 1 }}>
							<i style={{ fontSize: '16px' }} class='fas fa-filter'></i>
						</Col>
						<Col md={{ size: 11 }}>
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
				</Col>
				<Col md={{ size: 8 }}>
					{/* {results.map(result => {
						return <CardIndexPropedDefault cards={result} />
					})} */}
				</Col>
			</Row>
		</Container>
	)
}

export {
	ContainerSearchResults,
	SEARCH_RESULT_CARD_NAME,
	SEARCH_RESULT_CARD_IMAGE,
	SEARCH_RESULT_CARD_SKILLS,
	SEARCH_RESULT_CARD_HOBBIES,
	SEARCH_RESULT_CARD_LEVEL,
}
