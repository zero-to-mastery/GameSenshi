import React, { useMemo } from 'react'
import { Exports } from 'component_b_Atoms'
import { stopUndefined } from 'utils'
import Image from 'material-ui-image'
import shorthash from 'shorthash'
import {
	ContainerStyled,
	RowStyledUsername,
	ColStyledBadges,
	TextStyledSubscribe,
} from './styled'
import {
	FIRESTORE_SENSHI_SETTINGS_PROFILE_GENDER,
	FIRESTORE_SENSHI_SETTINGS_PROFILE_AVATAR,
	FIRESTORE_SENSHI_SETTINGS_PROFILE_DISPLAY_NAME,
	FIRESTORE_SENSHI_SETTINGS_PROFILE_CHANNELS,
} from '0_constantValues'
import { defaultAvatar } from 'utils'

const {
	BadgesPropedSenshi,
	StatusPropedOnline,
	CheckBoxIconPropedFavouriteStoreUser,
	CheckBoxIconPropedTip,
	ButtonsCommonOptioned,
	Col,
	Row,
	Helmet,
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
		...otherProps
	} = props

	const badges = useMemo(() => [gender], [gender])
	const shortUid = useMemo(() => shorthash.unique(uid), [uid])

	return (
		<ContainerStyled className='border border-success' {...otherProps}>
			<Helmet title={displayName} />
			<Row className='my-3'>
				<Col xs='12' lg='3'>
					<Row xs='1'>
						{badges.length > 0 && (
							<ColStyledBadges className='mb-1'>
								<BadgesPropedSenshi badges={[gender]} />
							</ColStyledBadges>
						)}
						<Col align='center'>
							<Image
								imageStyle={{ width: '120px', height: '120px' }}
								alt={'picture of ' + displayName}
								color='transparent'
								style={{ paddingTop: '0px' }}
								className='img-center img-fluid rounded-circle position-static'
								src={avatar || defaultAvatar}
							/>
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
						<Row xs='1'>
							<Col align='center'>
								<TextStyledSubscribe className='text-success font-weight-bold text-nowrap'>
									Subscribe to my channels:
								</TextStyledSubscribe>
							</Col>
							<Col>
								<ButtonsCommonOptioned buttons={channels} />
							</Col>
						</Row>
					</Col>
				)}
			</Row>
		</ContainerStyled>
	)
}

export { CardUserHorizontal }
