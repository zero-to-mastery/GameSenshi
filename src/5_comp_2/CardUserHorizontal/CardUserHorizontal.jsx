import React, { useMemo } from 'react'
import { Exports } from '5_comp_1'
import { stopUndefined } from '1_utils'
import shorthash from 'shorthash'
import {
	ContainerStyled,
	RowStyledUsername,
	ColStyledBadges,
	TextStyledSubscribe,
} from './styled'
import {
	FIRESTORE_SELLER_SETTINGS_PROFILE_GENDER,
	FIRESTORE_SELLER_SETTINGS_PROFILE_AVATAR,
	FIRESTORE_SELLER_SETTINGS_PROFILE_DISPLAY_NAME,
	FIRESTORE_SELLER_SETTINGS_PROFILE_CHANNELS,
} from '0_constants'
import { AVATAR_DEFAULT } from '0_app_flavor'
import { seedData } from './utils'

const {
	BadgesPropedSenshi,
	StatusPropedOnline,
	CheckBoxIconPropedFavouriteStoreUser,
	CheckBoxIconPropedTip,
	ButtonsCommonOptioned,
	Col,
	Row,
	Helmet,
	Image,
	Button,
} = stopUndefined(Exports)

const CardUserHorizontal = props => {
	const {
		uid,
		data: {
			[FIRESTORE_SELLER_SETTINGS_PROFILE_GENDER]: gender,
			[FIRESTORE_SELLER_SETTINGS_PROFILE_AVATAR]: avatar,
			[FIRESTORE_SELLER_SETTINGS_PROFILE_DISPLAY_NAME]: displayName,
			[FIRESTORE_SELLER_SETTINGS_PROFILE_CHANNELS]: channels,
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
								className='img-center img-fluid rounded-circle'
								src={avatar || AVATAR_DEFAULT}
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
									Subscribe And Follow Me!
								</TextStyledSubscribe>
							</Col>
							<Col align='center'>
								<ButtonsCommonOptioned buttons={channels} />
							</Col>
							{process.env.NODE_ENV === 'development' && (
								<Col align='center'>
									<Button onClick={seedData} className='btn-simple'>
										Seeding Data(dev only)
									</Button>
								</Col>
							)}
						</Row>
					</Col>
				)}
			</Row>
		</ContainerStyled>
	)
}

export { CardUserHorizontal }
