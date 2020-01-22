import React, { useMemo } from 'react'
import { Container, Col, Row } from 'reactstrap'
import { Exports } from 'component_b_Atoms'
import { stopUndefined } from 'utils'
import classnames from 'classnames'
import Image from 'material-ui-image'
import shorthash from 'shorthash'
import {
	SectionStyled,
	DivStyledImage,
	RowStyledUsername,
	ColStyledBadges,
	TextStyledSubscribe,
} from './styled'
import {
	FIRESTORE_SENSHI_SETTINGS_PROFILE_GENDER,
	FIRESTORE_SENSHI_SETTINGS_PROFILE_AVATAR,
	FIRESTORE_SENSHI_SETTINGS_PROFILE_DISPLAY_NAME,
	FIRESTORE_SENSHI_SETTINGS_PROFILE_CHANNELS,
} from 'constantValues'
import { defaultAvatar } from 'utils'

const {
	BadgesPropedSenshi,
	StatusPropedOnline,
	CheckBoxIconPropedFavouriteStoreUser,
	CheckBoxIconPropedTip,
	ButtonsCommonOptioned,
} = stopUndefined(Exports)

const CardUserHorizontal = props => {
	const {
		uid,
		data: {
			[FIRESTORE_SENSHI_SETTINGS_PROFILE_GENDER]: gender,
			[FIRESTORE_SENSHI_SETTINGS_PROFILE_AVATAR]: avatar,
			[FIRESTORE_SENSHI_SETTINGS_PROFILE_DISPLAY_NAME]: displayName,
			[FIRESTORE_SENSHI_SETTINGS_PROFILE_CHANNELS]: channels,
		},
	} = props

	const badges = useMemo(() => [gender], [gender])
	const shortUid = useMemo(() => shorthash.unique(uid), [uid])

	return (
		<SectionStyled className={classnames('rounded-pill')}>
			<Container>
				<Row>
					<Col xs='12' lg='3'>
						{badges.length > 0 && (
							<Row className='mb-3'>
								<ColStyledBadges>
									<BadgesPropedSenshi badges={[gender]} />
								</ColStyledBadges>
							</Row>
						)}
						<Row className='flex-column'>
							<Col align='center'>
								<DivStyledImage>
									<Image
										alt={'picture of ' + displayName}
										color='transparent'
										style={{ paddingTop: '0px', height: '100%' }}
										className='img-center img-fluid rounded-circle'
										src={avatar || defaultAvatar}
									/>
								</DivStyledImage>
							</Col>
							<Col>
								<StatusPropedOnline uid={uid} />
							</Col>
						</Row>
					</Col>
					<Col xs='12' lg='3'>
						<RowStyledUsername className='flex-column'>
							<Col>
								<h3 className='text-white font-weight-bold mb-1'>
									{displayName}
								</h3>
							</Col>
							<Col className='mb-3'>
								<p className='text-muted'>UID : {shortUid}</p>
							</Col>
							<Col>
								<CheckBoxIconPropedTip />
								<CheckBoxIconPropedFavouriteStoreUser uid={uid} />
							</Col>
						</RowStyledUsername>
					</Col>
					{Object.keys(channels).length > 0 && (
						<Col xs='12' lg='3'>
							<Row>
								<Col align='center'>
									<TextStyledSubscribe className='text-success font-weight-bold text-nowrap'>
										Subscribe to my channels:
									</TextStyledSubscribe>
								</Col>
							</Row>
							<Row>
								<Col>
									<ButtonsCommonOptioned buttons={channels} />
								</Col>
							</Row>
						</Col>
					)}
				</Row>
			</Container>
		</SectionStyled>
	)
}

export { CardUserHorizontal }
