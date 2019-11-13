import React, { useState } from 'react'
// reactstrap components
import { Container, Row, Col } from 'reactstrap'

import { stopUndefined } from 'utils'
import { Exports } from 'componentMolecules'

const {
	PanelSortBy,
	PanelSearchFilter,
	CardIndexPropedDefault,
} = stopUndefined(Exports)

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
				<PanelSearchFilter games={games} ratings={ratings} />
				<Col md={{ size: 8 }}>
					<PanelSortBy />
					<Row>
						<CardIndexPropedDefault />
					</Row>
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
