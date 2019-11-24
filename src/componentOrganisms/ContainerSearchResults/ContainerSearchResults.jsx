import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { stopUndefined } from 'utils'
import { Exports } from 'componentMolecules'

const {
	PanelSortBy,
	PanelFilterSearch,
	CardProfilePropedSearch,
} = stopUndefined(Exports)

const games = ['Dota2', 'PUBG', 'LOL', 'Apex', 'Fortnite']
const ratings = ['5 stars', '4 stars', '3 stars', '2 stars', '1 star']

const CARD_SEARCHED_NAME = 'name'
const CARD_SEARCHED_IMAGE = 'image'
const CARD_SEARCHED_GENDER = 'gender'
const CARD_SEARCHED_AUDIO = 'audioSrc'
const CARD_SEARCHED_PRICE = 'price'
const CARD_SEARCHED_DESCRIPTION = 'description'

const Cards = props => {
	const { cards } = props
	return cards.map(card => {
		const {
			[CARD_SEARCHED_NAME]: name,
			[CARD_SEARCHED_IMAGE]: src,
			[CARD_SEARCHED_AUDIO]: audioSrc,
			[CARD_SEARCHED_DESCRIPTION]: description,
			[CARD_SEARCHED_PRICE]: price,
		} = card
		return (
			<CardProfilePropedSearch
				badge={[]}
				name={name}
				src={src}
				audioSrc={audioSrc}
				price={price}
				description={description}
			/>
		)
	})
}

const ContainerSearchResults = props => {
	const { cards } = props
	return (
		<Container>
			<Row>
				<PanelFilterSearch games={games} ratings={ratings} />
				<Col md={{ size: 8 }}>
					<PanelSortBy />
					<Row>
						<Cards cards={cards} />
					</Row>
				</Col>
			</Row>
		</Container>
	)
}

export {
	ContainerSearchResults,
	CARD_SEARCHED_NAME,
	CARD_SEARCHED_IMAGE,
	CARD_SEARCHED_GENDER,
	CARD_SEARCHED_DESCRIPTION,
	CARD_SEARCHED_AUDIO,
	CARD_SEARCHED_PRICE,
}
