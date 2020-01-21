import React from 'react'
import { stopUndefined } from 'utils'
import Loader from 'react-loader-spinner'
import { Container, Row, Col } from 'reactstrap'
import { Exports } from 'component_f_MultiOrganisms'
import { ROUTE_PARAM_UID } from 'routes'
import { FIRESTORE_SENSHI_SETTINGS_PROFILE_CAROUSEL } from 'constantValues'
import { useData } from './utils'

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
	PageError,
} = stopUndefined(Exports)

const games = ['Dota2', 'PUBG', 'LOL', 'Apex', 'Fortnite']

const tabs = games.map((tab, index) => {
	return {
		[TAB_NAME]: tab,
		[TAB_CONTENT]: TabProductPropedProfile[index],
	}
})

const PAGE_PROFILE_CURRENT_USER_UID = 'currentUserUid'

const PageProfile = props => {
	let uid = null
	const {
		match: { params },
		[PAGE_PROFILE_CURRENT_USER_UID]: currentUserUid,
	} = props

	params && (uid = params[ROUTE_PARAM_UID])
	const uid_ = uid || currentUserUid

	const [loading, exist, data, errorCode] = useData(uid, currentUserUid)

	return exist ? (
		<WrapperStoreWrapperPropedProfile>
			{loading ? (
				<Row
					className='w-100 align-items-center'
					style={{ height: '100vh', marginTop: '-5rem' }}
				>
					<Col align='center'>
						<Loader
							type='Ball-Triangle'
							color='#FFD700'
							height='20vh'
							width='20vh'
						/>
						<br />
						<p style={{ fontSize: '180%' }}>Loading, Please Wait ...</p>
					</Col>
				</Row>
			) : (
				<>
					<Section>
						<img
							alt='...'
							className='dots'
							src={require('assets/img/dots.png')}
						/>
						<img
							alt='...'
							className='path'
							src={require('assets/img/path4.png')}
						/>
						<Container>
							<Row>
								<Col>
									<CardUserHorizontal data={data} uid={uid_} />
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
								<Col
									xs={{ size: 12, offset: 2 }}
									sm={{ size: 12, offset: 3 }}
									md={{ size: 12, offset: 4 }}
									lg={{ size: 4, offset: 0 }}
								>
									<CardGiftWithProps />
								</Col>
								<Col md={{ size: 12 }} lg={{ size: 8 }}>
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
									<CarouselLightBoxPropedProfile
										items={data[FIRESTORE_SENSHI_SETTINGS_PROFILE_CAROUSEL]}
									/>
								</Col>
							</Row>
						</Container>
					</Section>
				</>
			)}
		</WrapperStoreWrapperPropedProfile>
	) : (
		<PageError code={errorCode} />
	)
}

export { PageProfile, PAGE_PROFILE_CURRENT_USER_UID }
