import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import { Exports } from 'componentAtoms'
import { stopUndefined } from 'utils'
import classnames from 'classnames'
import Image from 'material-ui-image'
import {
	SectionStyled,
	DivStyledImage,
	RowStyledUsername,
	ColStyledBadges,
	TextStyledSubscribe,
} from './styled'

const {
	BadgesPropedSenshi,
	StatusPropedOnline,
	CheckBoxIconPropedFavorite,
	CheckBoxIconPropedTip,
	ButtonsCommonOptioned,
} = stopUndefined(Exports)

const CardUserHorizontal = props => {
	const { badges, avatar, username, channels, online, favorite, uid } = props

	return (
		<SectionStyled className={classnames('rounded-lg')}>
			<Container>
				<Row className='mb-3'>
					<ColStyledBadges>
						<BadgesPropedSenshi badges={badges} />
					</ColStyledBadges>
				</Row>
				<Row>
					<Col xs='12' lg='3'>
						<Row className='flex-column'>
							<Col align='center'>
								<DivStyledImage>
									<Image
										alt={'picture of ' + username}
										color='transparent'
										style={{ paddingTop: '0px', height: '100%' }}
										className='img-center img-fluid rounded-circle'
										src={avatar}
									/>
								</DivStyledImage>
							</Col>
							<Col>
								<StatusPropedOnline on={online} />
							</Col>
						</Row>
					</Col>
					<Col xs='12' lg='3'>
						<RowStyledUsername className='flex-column'>
							<Col>
								<p className='text-white'>{username}</p>
							</Col>
							<Col>
								<p className='text-white'>UID : {uid}</p>
							</Col>
							<Col>
								<CheckBoxIconPropedTip />
								<CheckBoxIconPropedFavorite checked={favorite} />
							</Col>
						</RowStyledUsername>
					</Col>
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
				</Row>
			</Container>
		</SectionStyled>
	)
}

export { CardUserHorizontal }
