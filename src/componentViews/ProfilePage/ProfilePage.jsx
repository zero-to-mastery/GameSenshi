import React from 'react'
import { stopUndefined } from 'utils'
import { Container, Row, Col } from 'reactstrap'
import { Exports } from 'componentpMultiOrganisms'

const {
	CarouselLightBoxPropedProfile,
	CardGiftWithProps,
	TextIconPropedProfileGift,
	TextIconPropedProfileGallery,
	CardUserHorizontal,
	CommentWithPaginationPropedDefault,
	Section,
	WrapperStoreWrapperPropedProfile,
	Tab,
	TAB_NAME,
	TAB_CONTENT,
	TabProductPropedProfile,
} = stopUndefined(Exports)

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
		[TAB_NAME]: tab,
		[TAB_CONTENT]: TabProductPropedProfile[index],
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
							<CardUserHorizontal
								username='Mike Scheinder'
								avatar={require('assets/img/mike.jpg')}
								channels={channels}
								signature='Nice to meet you!'
								badges={badges}
								games={games}
								online
								uid={'123456'}
								favorite
							/>
						</Col>
					</Row>
					<Row className='pt-5'>
						<Col>
							<Tab tabs={tabs} />
						</Col>
					</Row>
					<Row>
						<Col>
							<TextIconPropedProfileGift />
						</Col>
					</Row>
					<Row>
						<Col md='6'>
							<CardGiftWithProps />
						</Col>
						<Col md='6'>
							<CommentWithPaginationPropedDefault />
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
							<CarouselLightBoxPropedProfile />
						</Col>
					</Row>
				</Container>
			</Section>
		</WrapperStoreWrapperPropedProfile>
	)
}

export { ProfilePage }
