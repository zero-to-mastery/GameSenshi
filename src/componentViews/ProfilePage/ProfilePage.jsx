import React from 'react'
import { stopUndefined } from 'utils'
// reactstrap components
import { Container, Row, Col } from 'reactstrap'
// core components
import { Exports } from 'componentpMultiOrganisms'
import audioSample from 'assets/audio/sampleVoice.mp3'

const {
	Footer,
	CarouselCommonPropedProfile,
	FormProfile,
	RatingProfile,
	ButtonAddToCartPropedProfile,
	QuantityProfile,
	ContainerTitledPropedDefault,
	CardSenshi,
	CommentWithPaginationPropedDefault,
	WrapperPropedProfile,
	Section,
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
		<WrapperPropedProfile>
			<Section>
				<img alt='...' className='dots' src={require('assets/img/dots.png')} />
				<img alt='...' className='path' src={require('assets/img/path4.png')} />
				<Container>
					<Row>
						<CardSenshi
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
								<Row>
									<Col md={{ size: 6, offset: 1 }} className='py-2'>
										<RatingProfile />
									</Col>
								</Row>
								<Row>
									<Col md={{ size: 6, offset: 1 }} className='pt-2'>
										<h2>$30/h</h2>
									</Col>
								</Row>
								<Row>
									<Col md={{ size: 11, offset: 1 }} className='pb-2'>
										<h4>Description</h4>
										<p>
											A veteran in MOBA and FPS games, I can give you a
											significant boost in ranking mode.
										</p>
									</Col>
								</Row>
								<Row>
									<Col md={{ size: 5, offset: 1 }} className='py-2'>
										<QuantityProfile />
									</Col>
									<Col md={{ size: 6 }} className='py-2'>
										<FormProfile />
									</Col>
								</Row>
								<Row>
									<Col md={{ size: 5, offset: 1 }} className='py-2'>
										<ButtonAddToCartPropedProfile />
									</Col>
								</Row>
							</ContainerTitledPropedDefault>
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
			<Footer />
		</WrapperPropedProfile>
	)
}

export { ProfilePage }
