import React from 'react'
import { Card, CardHeader, CardBody, Col, Row, Button } from 'reactstrap'
import { Exports } from './node_modules/componentAtoms'
import { stopUndefined } from './node_modules/utils'
const {
	ButtonSocials,
	BadgesPropedSenshi,
	IconGames,
	StatusCommonPropedOnline,
	ButtonSound,
	ButtonIconPropedFavorite,
	ButtonIconPropedTip,
} = stopUndefined(Exports)

const onClicks = socials => []

const CardSenshi = props => {
	const {
		badges,
		signature,
		avatar,
		games,
		nickname,
		username,
		socials,
		online,
		audio,
		favorite,
	} = props
	return (
		<Col className='ml-auto mr-auto' lg='4' md='6'>
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
						<IconGames games={games} />
					</Row>
					<Row className='justify-content-center'>
						{/* Social icons */}
						<ButtonSocials
							buttons={socials}
							onClicks={onClicks}
							className='pt-2'
						/>
					</Row>
				</CardHeader>
				<CardBody>
					<Row className='justify-content-center'>
						{/* Signature */}
						<p className='pl-2 font-italic'>
							"{signature || 'Nice to meet you!'}"
						</p>
					</Row>
					<Row className='justify-content-center'>
						<ButtonSound url={audio} />
					</Row>
					<Row className='justify-content-center'>
						<ButtonIconPropedFavorite fill={favorite} />
						<ButtonIconPropedTip />
					</Row>
				</CardBody>
			</Card>
		</Col>
	)
}

export { CardSenshi }
