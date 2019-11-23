import React from 'react'
import { stopUndefined } from 'utils'
import { Exports } from 'componentpMultiOrganisms'
import { Container, Row, Col } from 'reactstrap'
import audioSample from 'assets/audio/sampleVoice.mp3'
const {
	CardProfilePropedIndex,
	ButtonsIconImagePropedIndex,
	CarouselCommonPropedIndex,
	Section,
	WrapperStoreWrapperPropedIndex,
	TextIconPropedPopularPlayer,
	TextIconPropedNewPlayer,
	TextIconPropedRandomPlayer,
	CarouselNewPlayer,
	CardPlayerSimple,
} = stopUndefined(Exports)

const CARD_PROFILE_NAME = 'name'
const CARD_PROFILE_IMAGE = 'image'
const CARD_PROFILE_GENDER = 'gender'
const CARD_PROFILE_AUDIO = 'audioSrc'
const CARD_PROFILE_PRICE = 'price'
const CARD_PROFILE_DESCRIPTION = 'description'

const cardPlayers = [
	{
		[CARD_PROFILE_NAME]: 'Dylan Wyatt',
		[CARD_PROFILE_IMAGE]: require('assets/img/christian.jpg'),
		[CARD_PROFILE_GENDER]: false,
		[CARD_PROFILE_AUDIO]: audioSample,
		[CARD_PROFILE_PRICE]: '30',
		[CARD_PROFILE_DESCRIPTION]: 'hello',
	},
	{
		[CARD_PROFILE_NAME]: 'Mila Skylar',
		[CARD_PROFILE_IMAGE]: require('assets/img/johana.jpg'),
		[CARD_PROFILE_GENDER]: true,
		[CARD_PROFILE_AUDIO]: audioSample,
		[CARD_PROFILE_PRICE]: '40',
		[CARD_PROFILE_DESCRIPTION]: 'hello',
	},
	{
		[CARD_PROFILE_NAME]: 'Mark Johnsson',
		[CARD_PROFILE_IMAGE]: require('assets/img/mike.jpeg'),
		[CARD_PROFILE_GENDER]: false,
		[CARD_PROFILE_AUDIO]: audioSample,
		[CARD_PROFILE_PRICE]: '50',
		[CARD_PROFILE_DESCRIPTION]: 'hello',
	},
	{
		[CARD_PROFILE_NAME]: 'Olivia Smith',
		[CARD_PROFILE_IMAGE]: require('assets/img/olivia.jpg'),
		[CARD_PROFILE_GENDER]: true,
		[CARD_PROFILE_AUDIO]: audioSample,
		[CARD_PROFILE_PRICE]: '60',
		[CARD_PROFILE_DESCRIPTION]: 'hello',
	},
]

const Cards = () => {
	return cardPlayers.map(card => {
		const {
			[CARD_PROFILE_NAME]: name,
			[CARD_PROFILE_IMAGE]: src,
			[CARD_PROFILE_GENDER]: gender,
			[CARD_PROFILE_PRICE]: price,
			[CARD_PROFILE_AUDIO]: audioSrc,
			[CARD_PROFILE_DESCRIPTION]: description,
		} = card
		return (
			<CardProfilePropedIndex
				key={name}
				audioSrc={audioSrc}
				name={name}
				src={src}
				gender={gender}
				price={price}
				description={description}
			/>
		)
	})
}

const CardSimple = () => {
	return cardPlayers.map(card => {
		const { [CARD_PROFILE_NAME]: name, [CARD_PROFILE_IMAGE]: src } = card
		return <CardPlayerSimple name={name} src={src} />
	})
}

const IndexPage = () => {
	return (
		<WrapperStoreWrapperPropedIndex>
			<Section className='bg-dark-navy'>
				<Container className='pt-3'>
					<Row>
						<Col>
							<CarouselCommonPropedIndex />
						</Col>
					</Row>
				</Container>
			</Section>
			<Section className='bg-dark-navy mb-4'>
				<Container>
					<ButtonsIconImagePropedIndex />
				</Container>
			</Section>
			<Section>
				<Container className='bg-dark-navy'>
					<TextIconPropedPopularPlayer />
					<Row>
						<Cards />
					</Row>
					<Row>
						<Cards />
					</Row>
				</Container>
			</Section>
			<Section>
				<Container className='bg-dark-navy'>
					<TextIconPropedNewPlayer />
					<Row>
						<CardSimple />
					</Row>
					<Row>
						<CardSimple />
					</Row>
				</Container>
			</Section>
			<Section>
				<Container className='bg-dark-navy'>
					<TextIconPropedRandomPlayer />
					<Row>
						<Cards />
					</Row>
					<Row>
						<Cards />
					</Row>
				</Container>
			</Section>
		</WrapperStoreWrapperPropedIndex>
	)
}

export { IndexPage }
