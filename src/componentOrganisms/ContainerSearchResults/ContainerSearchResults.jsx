import React from 'react'
// reactstrap components
import { Container, Row, Col } from 'reactstrap'

import { stopUndefined } from 'utils'
import { Exports } from 'componentMolecules'

const {
	PanelSortBy,
	PanelFilterSearch,
	CardSearchedPropedDefault,
} = stopUndefined(Exports)

const games = ['Dota2', 'PUBG', 'LOL', 'Apex', 'Fortnite']
const ratings = ['5 stars', '4 stars', '3 stars', '2 stars', '1 star']

const CARD_SEARCHED_NAME = 'name'
const CARD_SEARCHED_IMAGE = 'image'
const CARD_SEARCHED_SKILLS = 'skills'
const CARD_SEARCHED_HOBBIES = 'hobbies'
const CARD_SEARCHED_LEVEL = 'level'

const ContainerSearchResults = props => {
	const { cards } = props
	return (
		<Container>
			<Row>
				<PanelFilterSearch games={games} ratings={ratings} />
				<Col md={{ size: 8 }}>
					<PanelSortBy />
					<Row>
						{cards.map(card => {
							const {
								[CARD_SEARCHED_NAME]: name,
								[CARD_SEARCHED_IMAGE]: src,
								[CARD_SEARCHED_HOBBIES]: hobbies,
								[CARD_SEARCHED_LEVEL]: level,
								[CARD_SEARCHED_SKILLS]: skills,
							} = card
							return (
								<Col md={{ size: 4 }}>
									<CardSearchedPropedDefault
										name={name}
										src={src}
										hobbies={hobbies}
										level={level}
										skills={skills}
									/>
								</Col>
							)
						})}
					</Row>
				</Col>
			</Row>
		</Container>
	)
}

export {
	ContainerSearchResults,
	CARD_SEARCHED_NAME,
	CARD_SEARCHED_SKILLS,
	CARD_SEARCHED_HOBBIES,
	CARD_SEARCHED_IMAGE,
	CARD_SEARCHED_LEVEL,
}
