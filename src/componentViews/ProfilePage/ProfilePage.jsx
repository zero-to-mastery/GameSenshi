import React, { useState } from 'react'
import { stopUndefined } from 'utils'
import { Container, Row, Col } from 'reactstrap'
import { Exports } from 'componentpMultiOrganisms'
import audioSample from 'assets/audio/sampleVoice.mp3'

const {
	CarouselCommonPropedProfile,
	CardGift,
	ContainerTitledPropedDefault,
	CardUserComplete,
	CommentWithPaginationPropedDefault,
	Section,
	WrapperStoreWrapperPropedProfile,
	TabsProfile,
} = stopUndefined(Exports)

// fake data
const channels = {
	facebook: 'https://facebook.com',
	twitch: 'https://twitch.com',
	youtube: 'https://youtube.com',
}
const badges = ['female', 'verified', 'risingStar']
const games = ['Dota2', 'PUBG', 'LOL', 'Apex', 'Fortnite']

const ProfilePage = () => {
	return (
		<WrapperStoreWrapperPropedProfile>
			<Section>
				<img alt='...' className='dots' src={require('assets/img/dots.png')} />
				<img alt='...' className='path' src={require('assets/img/path4.png')} />
				<Container>
					<Row>
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
						<Col lg='8' md='6'>
							<ContainerTitledPropedDefault>
								<TabsProfile />
							</ContainerTitledPropedDefault>
						</Col>
					</Row>
					<Row>
						<Col>
							<CardGift />
						</Col>
					</Row>
				</Container>
			</Section>
			<Section>
				<Container>
					<Row>
						<Col>
							<h1>Images</h1>
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
							<h1>Comments</h1>
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
