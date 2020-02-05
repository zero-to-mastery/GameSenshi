import React from 'react'
import { stopUndefined } from '1_utils'
import { Exports } from '5_comp_5'
import audioSample from '0_assets/audio/sampleVoice.mp3'
import { TabDiscover } from './TabDiscover'
const {
	CardUserPropedDiscover,
	ButtonsImagePropedIndex,
	CarouselPropedIndex,
	Section,
	WrapperStoreWrapperPropedIndex,
	TextIconPropedPopularPlayer,
	TextIconPropedNewPlayer,
	TextIconPropedRandomPlayer,
	CarouselCardSimplePropedNew,
	Row,
	Col,
	Container,
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
		[CARD_PROFILE_IMAGE]: require('0_assets/img/christian.jpg'),
		[CARD_PROFILE_GENDER]: false,
		[CARD_PROFILE_AUDIO]: audioSample,
		[CARD_PROFILE_PRICE]: '30',
		[CARD_PROFILE_DESCRIPTION]: 'hello',
	},
	{
		[CARD_PROFILE_NAME]: 'Mila Skylar',
		[CARD_PROFILE_IMAGE]: require('0_assets/img/johana.jpg'),
		[CARD_PROFILE_GENDER]: true,
		[CARD_PROFILE_AUDIO]: audioSample,
		[CARD_PROFILE_PRICE]: '40',
		[CARD_PROFILE_DESCRIPTION]: 'hello',
	},
	{
		[CARD_PROFILE_NAME]: 'Mark Johnsson',
		[CARD_PROFILE_IMAGE]: require('0_assets/img/mike.jpeg'),
		[CARD_PROFILE_GENDER]: false,
		[CARD_PROFILE_AUDIO]: audioSample,
		[CARD_PROFILE_PRICE]: '50',
		[CARD_PROFILE_DESCRIPTION]: 'hello',
	},
	{
		[CARD_PROFILE_NAME]: 'Olivia Smith',
		[CARD_PROFILE_IMAGE]: require('0_assets/img/olivia.jpg'),
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
			<Col xs='6' lg='3' className='p-2' key={name}>
				<CardUserPropedDiscover
					audioSrc={audioSrc}
					name={name}
					src={src}
					gender={gender}
					price={price}
					description={description}
				/>
			</Col>
		)
	})
}

const PageIndex = () => {
	return (
		<WrapperStoreWrapperPropedIndex>
			<Container>
				<Section>
					<Row className='pt-3' xs='1'>
						<Col>
							<CarouselPropedIndex />
						</Col>
						<Col className='mt-4'>
							<ButtonsImagePropedIndex />
						</Col>
					</Row>
				</Section>
				<Section>
					<Row xs='1'>
						<Col>
							<TextIconPropedPopularPlayer />
						</Col>
						<Cards />
						<Cards />
					</Row>
				</Section>
				<Section>
					<Row xs='1'>
						<Col>
							<TextIconPropedNewPlayer />
						</Col>
						<Col>
							<CarouselCardSimplePropedNew />
						</Col>
					</Row>
				</Section>
				<Section>
					<Row xs='1'>
						<Col>
							<TextIconPropedRandomPlayer />
						</Col>
						<Col className='bg-dark-navy-gradient p-0'>
							<TabDiscover />
						</Col>
					</Row>
				</Section>
			</Container>
		</WrapperStoreWrapperPropedIndex>
	)
}

export { PageIndex }
