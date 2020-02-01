// eslint-disable-next-line
import styled from 'styled-components/macro'
import React from 'react'
import { stopUndefined } from 'utils'
import Loader from 'react-loader-spinner'
import { Exports } from 'component_f_MultiOrganisms'
import { ROUTE_PARAM_UID, useParams } from 'routes'
import { FIRESTORE_SENSHI_SETTINGS_PROFILE_CAROUSEL } from 'constantValues'
import { useSenshiProfileData } from './utils'
import classnames from 'classnames'

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
} = stopUndefined(Exports)

const games = ['Dota2', 'PUBG', 'LOL', 'Apex', 'Fortnite']

const tabs = games.map((tab, index) => {
	return {
		[TAB_NAME]: tab,
		[TAB_CONTENT]: TabProductPropedProfile[index],
	}
})

const ColStyled = props => {
	const { className, ...otherProps } = props
	return (
		<Col
			className={classnames(
				className,
				'py-4 px-3',
				'rounded-lg bg-dark-navy-gradient'
			)}
			{...otherProps}
		/>
	)
}

const PAGE_PROFILE_CURRENT_USER_UID = 'currentUserUid'

const PageProfile = props => {
	let uid = null
	const params = useParams()
	const { [PAGE_PROFILE_CURRENT_USER_UID]: currentUserUid } = props

	params && (uid = params[ROUTE_PARAM_UID])
	const uid_ = uid || currentUserUid

	const [loading, exist, data, errorCode] = useSenshiProfileData(
		uid,
		currentUserUid
	)

	return exist ? (
		<WrapperStoreWrapperPropedProfile>
			<img alt='...' className='dots' src={require('assets/img/dots.png')} />
			<img alt='...' className='path' src={require('assets/img/path4.png')} />
			{loading ? (
				<Section>
					<Container>
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
					</Container>
				</Section>
			) : (
				<>
					<Section>
						<Container>
							<Row>
								<Col xs='0' sm='12'>
									<CardUserHorizontal data={data} uid={uid_} />
								</Col>
							</Row>
						</Container>
					</Section>
					<Section>
						<Container>
							<Row>
								<Col xs='12' lg='5'>
									<Row className='pr-4' lg='1'>
										<Col className='bg-dark-navy-gradient p-0'>
											<CarouselLightBoxPropedProfile
												items={data[FIRESTORE_SENSHI_SETTINGS_PROFILE_CAROUSEL]}
											/>
										</Col>
										<Col xs='0' sm='12'>
											<Row xs='1'>
												<Col>
													<TextIconPropedProfileGift />
												</Col>
												<Col
													align='center'
													className='bg-purple-gradient-2 rounded-lg p-2'
												>
													<CardGiftPropedProfile />
												</Col>
											</Row>
										</Col>
									</Row>
								</Col>
								<Col xs='12' lg='7'>
									<Row>
										<ColStyled>
											<Tab tabs={tabs} />
										</ColStyled>
									</Row>
									<Row>
										<Col>
											<TextIconPropedProfileReviews />
										</Col>
									</Row>
									<Row>
										<ColStyled>
											<CommentWithPaginationPropedDefault />
										</ColStyled>
									</Row>
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
