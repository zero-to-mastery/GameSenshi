import React, { useState, useEffect, useRef } from 'react'
import { stopUndefined } from 'utils'
import Loader from 'react-loader-spinner'
import { Container, Row, Col } from 'reactstrap'
import { Exports } from 'component_f_MultiOrganisms'
import { ROUTE_PARAM_UID } from 'routes'
import { docSenshiProfileOnSnapshot } from 'fireStored'
import {
	UNEXPECTED_ERROR_CODE_16,
	UNEXPECTED_ERROR_CODE_17,
} from 'constantValues'
import { storeModalSimpleError } from 'state'

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
	PAGE_ERROR_CODE_NOT_FOUND,
	PAGE_ERROR_CODE_NOT_A_SENSHI,
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

	const [loading, setLoading] = useState(true)
	const [exist, setExist] = useState(true)
	const [data, setData] = useState(null)
	const [errorCode, setErrorCode] = useState(null)
	const observer = useRef(() => {})

	useEffect(() => {
		return observer.current
	}, [])

	useEffect(() => {
		const attachListener = async () => {
			observer.current = docSenshiProfileOnSnapshot(uid || currentUserUid)(
				async docSnapshot => {
					try {
						const data = await docSnapshot.data()
						if (data) {
							setData(data)
							setLoading(false)
							setExist(true)
						} else {
							setExist(false)
							setLoading(false)
							if (uid) {
								setErrorCode(PAGE_ERROR_CODE_NOT_FOUND)
							} else if (currentUserUid) {
								setErrorCode(PAGE_ERROR_CODE_NOT_A_SENSHI)
							}
							return
						}
					} catch (err) {
						setExist(false)
						setErrorCode(null)
						storeModalSimpleError(err, UNEXPECTED_ERROR_CODE_17)
					}
				},
				err => {
					setExist(false)
					setErrorCode(null)
					storeModalSimpleError(err, UNEXPECTED_ERROR_CODE_16)
				}
			)
		}
		attachListener()
	}, [uid, currentUserUid])

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
									<CarouselLightBoxPropedProfile items={data.carousel} />
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
