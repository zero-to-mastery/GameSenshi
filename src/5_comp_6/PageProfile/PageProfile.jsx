import React from 'react'
import { stopUndefined } from '1_utils'
import Loader from 'react-loader-spinner'
import { Exports } from '5_comp_5'
import { ROUTE_PARAM_UID, useParams } from '2_routes'
import {
	ColStyledSection,
	ColStyledGiftCard,
	RowStyledCarousel,
	ColStyledTitle,
} from './styled'

const {
	CarouselLightBoxPropedProfile,
	CardGiftPropedProfile,
	TextIconPropedProfileGift,
	TextIconPropedProfileReviews,
	CardUserHorizontal,
	CommentWithPaginationPropedDefault,
	Section,
	WrapperStoreWrapperPropedProfile,
	Tab,
	TAB_NAME,
	TAB_CONTENT,
	TabProductPropedProfile,
	PageError,
	Row,
	Col,
	Container,
	TextIconPropedAppointments,
} = stopUndefined(Exports)

const games = ['Dota2', 'PUBG', 'LOL', 'Apex', 'Fortnite']

const tabs = games.map((tab, index) => {
	return {
		[TAB_NAME]: tab,
		[TAB_CONTENT]: TabProductPropedProfile[index],
	}
})

const PAGE_PROFILE_STATE_CURRENT_USER_UID = 'currentUserUid'
const PAGE_PROFILE_STATE_LOADING = 'loading'
const PAGE_PROFILE_STATE_DATA_USER = 'dataUser'
const PAGE_PROFILE_STATE_DATA_CAROUSEL = 'dataCarousel'
const PAGE_PROFILE_STATE_EXIST = 'exist'
const PAGE_PROFILE_STATE_ERROR_CODE = 'errorCode'

const PageProfile = props => {
	let uid = null
	const params = useParams()
	const {
		[PAGE_PROFILE_STATE_CURRENT_USER_UID]: currentUserUid,
		useData,
	} = props

	params && (uid = params[ROUTE_PARAM_UID])
	const uid_ = uid || currentUserUid

	const {
		[PAGE_PROFILE_STATE_LOADING]: loading,
		[PAGE_PROFILE_STATE_EXIST]: exist,
		[PAGE_PROFILE_STATE_DATA_USER]: dataUser,
		[PAGE_PROFILE_STATE_DATA_CAROUSEL]: dataCarousel,
		[PAGE_PROFILE_STATE_ERROR_CODE]: errorCode,
	} = useData(uid, currentUserUid)

	return loading || exist ? (
		<WrapperStoreWrapperPropedProfile>
			<img
				alt='...'
				className='dots'
				src={require('0_assets/img/dots.png')}
				style={{ zIndex: 0 }}
			/>
			<img
				alt='...'
				className='path'
				src={require('0_assets/img/path4.png')}
				style={{ zIndex: 0 }}
			/>
			<Container>
				{loading ? (
					<Section>
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
					</Section>
				) : (
					<>
						<Section>
							<Row>
								<Col>
									<CardUserHorizontal data={dataUser} uid={uid_} />
								</Col>
							</Row>
						</Section>
						<Section>
							<Row>
								<Col lg='5'>
									<RowStyledCarousel xs='1'>
										<Col className='bg-dark-navy-gradient p-0'>
											<CarouselLightBoxPropedProfile items={dataCarousel} />
										</Col>
										<Col xs='0' lg='12'>
											<Row xs='1'>
												<ColStyledTitle>
													<TextIconPropedProfileGift />
												</ColStyledTitle>
												<ColStyledGiftCard>
													<CardGiftPropedProfile />
												</ColStyledGiftCard>
											</Row>
										</Col>
									</RowStyledCarousel>
								</Col>
								<Col lg='7'>
									<Row xs='1'>
										<Col>
											<Row xs='1'>
												<ColStyledTitle lg='0'>
													<TextIconPropedAppointments />
												</ColStyledTitle>
												<ColStyledSection className='p-0'>
													<Tab tabs={tabs} />
												</ColStyledSection>
											</Row>
										</Col>
										<Col lg='0'>
											<Row xs='1'>
												<ColStyledTitle>
													<TextIconPropedProfileGift />
												</ColStyledTitle>
												<ColStyledGiftCard>
													<CardGiftPropedProfile />
												</ColStyledGiftCard>
											</Row>
										</Col>
										<Col>
											<Row xs='1'>
												<ColStyledTitle>
													<TextIconPropedProfileReviews />
												</ColStyledTitle>
												<ColStyledSection className='pt-5'>
													<CommentWithPaginationPropedDefault />
												</ColStyledSection>
											</Row>
										</Col>
									</Row>
								</Col>
							</Row>
						</Section>
					</>
				)}
			</Container>
		</WrapperStoreWrapperPropedProfile>
	) : (
		<PageError code={errorCode} />
	)
}

export {
	PageProfile,
	PAGE_PROFILE_STATE_CURRENT_USER_UID,
	PAGE_PROFILE_STATE_LOADING,
	PAGE_PROFILE_STATE_DATA_USER,
	PAGE_PROFILE_STATE_DATA_CAROUSEL,
	PAGE_PROFILE_STATE_EXIST,
	PAGE_PROFILE_STATE_ERROR_CODE,
}
