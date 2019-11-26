import React from 'react'
import { stopUndefined } from 'utils'
import { Exports } from 'componentpMultiOrganisms'
import { Container, Row, Col } from 'reactstrap'
import audioSample from 'assets/audio/sampleVoice.mp3'
import { SectionDiscover } from './SectionDiscover'
const {
	CardProfilePropedIndex,
	ButtonsIconImagePropedIndex,
	CarouselCommonPropedIndex,
	Section,
	WrapperStoreWrapperPropedIndex,
	TextIconPropedPopularPlayer,
	TextIconPropedNewPlayer,
	TextIconPropedRandomPlayer,
	CarouselCardSimplePropedNew,
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
		[CARD_PROFILE_IMAGE]: require('assets/img/mike-resized.jpg'),
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

const containerClass = 'bg-dark-navy-gradient pt-2 pb-3 px-4 rounded'

const IndexPage = () => {
	return (
		<WrapperStoreWrapperPropedIndex>
			<Section className='bg-dark-navy-gradient'>
				<Container className='pt-3'>
					<Row>
						<Col>
							<CarouselCommonPropedIndex />
						</Col>
					</Row>
					<Row className='mt-3'>
						<Col>
							<ButtonsIconImagePropedIndex />
						</Col>
					</Row>
				</Container>
			</Section>
			<Section>
				<Container className={containerClass}>
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
				<Container className={containerClass}>
					<TextIconPropedNewPlayer />
					<Row style={{ marginTop: '7px' }}>
						<Col>
							<CarouselCardSimplePropedNew />
						</Col>
					</Row>
				</Container>
			</Section>
			<Section>
				<Container className={containerClass}>
					<TextIconPropedRandomPlayer />
					<SectionDiscover />
				</Container>
			</Section>
		</WrapperStoreWrapperPropedIndex>
	)
}

export { IndexPage }
