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
const tempCards = [
	'Mila Skylar',
	'Mark Johnsson',
	'Dylan Wyatt',
	'Olivia Smith',
]
const ContainerSearchResults = props => {
	return (
		<Container>
			<Row>
				<PanelFilterSearch games={games} ratings={ratings} />
				<Col md={{ size: 8 }}>
					<PanelSortBy />
					<Row>
						{tempCards.map(card => {
							return (
								<Col md={{ size: 4 }}>
									<CardSearchedPropedDefault key={card} cards={tempCards} />
								</Col>
							)
						})}
					</Row>
				</Col>
			</Row>
		</Container>
	)
}

export { ContainerSearchResults }
