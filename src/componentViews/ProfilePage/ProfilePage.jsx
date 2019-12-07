import React from 'react'
import { stopUndefined } from 'utils'
import { Container, Row, Col } from 'reactstrap'
import { Exports } from 'componentpMultiOrganisms'
import audioSample from 'assets/audio/sampleVoice.mp3'

const {
	CarouselCommonPropedProfile,
	CardGiftWithProps,
	TextIconPropedProfileGift,
	TextIconPropedProfileGallery,
	TextIconPropedProfileComments,
	CardUserComplete,
	CommentWithPaginationPropedDefault,
	Section,
	WrapperStoreWrapperPropedProfile,
	TabCommon,
	TAB_COMMON_TAB_NAME,
	TAB_COMMON_TAB_CONTENT,
	ImagesTooltipPropedTabs,
	ButtonSoundStoreSoundPropedCardUser,
	QuantityProfile,
	ButtonsCommonChatAndCheckout,
} = stopUndefined(Exports)

const TAB_PANE_PRICE = 'price'
const TAB_PANE_NUM_ORDERS = 'orders'
const TAB_PANE_ICON = 'icon'
const TAB_PANE_DESCRIPTION = 'description'

const profileTabs = [
	{
		[TAB_PANE_PRICE]: '25',
		[TAB_PANE_NUM_ORDERS]: '12',
		[TAB_PANE_ICON]: 'Dota2',
		[TAB_PANE_DESCRIPTION]:
			'	A veteran in MOBA and FPS games, I can give you a significant boost in ranking mode.',
	},
	{
		[TAB_PANE_PRICE]: '35',
		[TAB_PANE_NUM_ORDERS]: '25',
		[TAB_PANE_ICON]: 'PUBG',
		[TAB_PANE_DESCRIPTION]:
			'	A veteran in MOBA and FPS games, I can give you a significant boost in ranking mode.',
	},
	{
		[TAB_PANE_PRICE]: '45',
		[TAB_PANE_NUM_ORDERS]: '11',
		[TAB_PANE_ICON]: 'LOL',
		[TAB_PANE_DESCRIPTION]:
			'	A veteran in MOBA and FPS games, I can give you a significant boost in ranking mode.',
	},
	{
		[TAB_PANE_PRICE]: '50',
		[TAB_PANE_NUM_ORDERS]: '12',
		[TAB_PANE_ICON]: 'Apex',
		[TAB_PANE_DESCRIPTION]:
			'	A veteran in MOBA and FPS games, I can give you a significant boost in ranking mode.',
	},
	{
		[TAB_PANE_PRICE]: '60',
		[TAB_PANE_NUM_ORDERS]: '23',
		[TAB_PANE_ICON]: 'Fortnite',
		[TAB_PANE_DESCRIPTION]:
			'	A veteran in MOBA and FPS games, I can give you a significant boost in ranking mode.',
	},
]

const TabsContent = profileTabs.map(tab => {
	const {
		[TAB_PANE_PRICE]: price,
		[TAB_PANE_NUM_ORDERS]: orders,
		[TAB_PANE_ICON]: icon,
		[TAB_PANE_DESCRIPTION]: description,
	} = tab
	return (
		<Container>
			<Row className='py-2 d-flex align-items-center'>
				<Col>
					<ImagesTooltipPropedTabs icons={icon} />
				</Col>
				<Col>
					<div style={{ width: '200px' }}>
						<h4>{price}$ per hour</h4>
						<h4>
							<i className='tim-icons icon-check-2 text-success'></i> {orders}{' '}
							orders completed
						</h4>
						<ButtonSoundStoreSoundPropedCardUser gender={true} />
					</div>
				</Col>
				<Col>
					<QuantityProfile />
				</Col>
			</Row>
			<Row className='pt-3'>
				<Col md='12'>
					<hr className='line-primary' />
				</Col>
			</Row>
			<Row>
				<Col>
					<p>{description}</p>
				</Col>
			</Row>
			<Row className='pt-5 text-right'>
				<Col md={{ offset: 8, size: 4 }}>
					<ButtonsCommonChatAndCheckout />
				</Col>
			</Row>
		</Container>
	)
})

// fake data
const channels = {
	facebook: 'https://facebook.com',
	twitch: 'https://twitch.com',
	youtube: 'https://youtube.com',
}
const badges = ['female', 'verified', 'risingStar']
const games = ['Dota2', 'PUBG', 'LOL', 'Apex', 'Fortnite']

const tabs = games.map((tab, index) => {
	return {
		[TAB_COMMON_TAB_NAME]: tab,
		[TAB_COMMON_TAB_CONTENT]: TabsContent[index],
	}
})

const ProfilePage = () => {
	return (
		<WrapperStoreWrapperPropedProfile>
			<Section>
				<img alt='...' className='dots' src={require('assets/img/dots.png')} />
				<img alt='...' className='path' src={require('assets/img/path4.png')} />
				<Container>
					<Row>
						<Col>
							<CardUserComplete
								nickname='Mike Scheinder'
								username='mighty_mike'
								avatar={require('assets/img/mike.jpg')}
								channels={channels}
								signature='Nice to meet you!'
								badges={badges}
								games={games}
								online
								audio={audioSample}
								favorite
							/>
						</Col>
						<Col lg='8' md='6'>
							<TabCommon tabs={tabs} />
						</Col>
					</Row>
					<Row>
						<Col>
							<TextIconPropedProfileGift />
						</Col>
					</Row>
					<Row>
						<Col>
							<CardGiftWithProps />
						</Col>
					</Row>
				</Container>
			</Section>
			<Section>
				<Container>
					<Row>
						<Col>
							<TextIconPropedProfileGallery />
						</Col>
					</Row>
					<Row>
						<Col md='12'>
							<CarouselCommonPropedProfile />
						</Col>
					</Row>
				</Container>
			</Section>
			<Section>
				<Container>
					<Row>
						<Col>
							<TextIconPropedProfileComments />
						</Col>
					</Row>
					<Row>
						<Col>
							<CommentWithPaginationPropedDefault />
						</Col>
					</Row>
				</Container>
			</Section>
		</WrapperStoreWrapperPropedProfile>
	)
}

export { ProfilePage }
