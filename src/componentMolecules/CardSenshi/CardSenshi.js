import React from 'react'
import { Card, CardHeader, CardBody, Col, Row } from 'reactstrap'
import { Exports } from 'componentAtoms'
import { stopUndefined } from 'utils'
const {
	BadgesPropedSenshi,
	IconsImagePropedGameIcons,
	StatusCommonPropedOnline,
	ButtonSound,
	CheckBoxIconPropedFavorite,
	CheckBoxIconPropedTip,
	ButtonsIconOptioned,
} = stopUndefined(Exports)

const CardSenshi = props => {
	const {
		badges,
		signature,
		avatar,
		games,
		nickname,
		username,
		channels,
		online,
		audio,
		favorite,
	} = props
	return (
		<Col className='ml-auto mr-auto'>
			<Card className='card-coin card-plain'>
				<CardHeader>
					<img
						alt='...'
						className='img-center img-fluid rounded-circle'
						src={avatar}
					/>
					<Row className='justify-content-center mt-2'>
						<StatusCommonPropedOnline on={online} />
					</Row>
					<Row className='justify-content-center mt-3'>
						{/*badges like female,verified,pro,highest rating,new member,highest rating*/}
						<BadgesPropedSenshi badges={badges} />
					</Row>
					<h3 className='title mt-3 mb-1'>{nickname}</h3>
					<p className='text-muted text-center mb-3'>@{username}</p>
					<Row className='justify-content-center'>
						{/*Game icons*/}
						<IconsImagePropedGameIcons icons={games} />
					</Row>
					<Row className='justify-content-center'>
						{/* Channels icons */}
						<ButtonsIconOptioned buttons={channels} />
					</Row>
				</CardHeader>
				<CardBody>
					<Row className='justify-content-center'>
						{/* Signature */}
						<p className='font-italic'>"{signature || 'Nice to meet you!'}"</p>
					</Row>
					<Row className='justify-content-center'>
						<Col xs='3' sm='4' md='5'>
							<ButtonSound color='warning' url={audio} />
						</Col>
					</Row>
					<Row className='justify-content-center'>
						<CheckBoxIconPropedFavorite checked={favorite} />
						<CheckBoxIconPropedTip />
					</Row>
				</CardBody>
			</Card>
		</Col>
	)
}

export { CardSenshi }
