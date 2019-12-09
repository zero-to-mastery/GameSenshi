import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import { Exports } from 'componentAtoms'
import { stopUndefined } from 'utils'
import classnames from 'classnames'
import styles from './styles.module.css'
import Image from 'material-ui-image'

const {
	BadgesPropedSenshi,
	StatusCommonPropedOnline,
	CheckBoxIconPropedFavorite,
	CheckBoxIconPropedTip,
	ButtonsCommonOptioned,
	Section,
} = stopUndefined(Exports)

const CardUserHorizontal = props => {
	const {
		badges,
		signature,
		avatar,
		username,
		channels,
		online,
		favorite,
		uid,
	} = props
	return (
		<Section className={classnames('rounded-lg', styles['border-card'])}>
			<Container>
				<Row className='mb-3'>
					<Col>
						<BadgesPropedSenshi badges={badges} />
					</Col>
				</Row>
				<Row>
					<Col xs='auto'>
						<Row>
							<Col className={styles.avatar} align='center'>
								<Image
									alt={'picture of ' + username}
									color='transparent'
									className='img-center img-fluid rounded-circle'
									src={avatar}
								/>
							</Col>
						</Row>
						<Row className='mt-2'>
							<Col>
								<StatusCommonPropedOnline on={online} />
							</Col>
						</Row>
					</Col>
					<Col xs='2'>
						<Row className='flex-column'>
							<Col>
								<p className='text-white'>{username}</p>
							</Col>
							<Col>
								<p className='text-white'>UID : {uid}</p>
							</Col>
							<Col align='left'>
								<CheckBoxIconPropedTip />
								<CheckBoxIconPropedFavorite checked={favorite} />
							</Col>
						</Row>
					</Col>

					<Col xs='2' align='center'>
						<Row>
							<p className='text-success font-weight-bold text-nowrap'>
								Subscribe to my channels:
							</p>
						</Row>
						<Row>
							<Col>
								<ButtonsCommonOptioned buttons={channels} />
							</Col>
						</Row>
					</Col>
				</Row>
				<Row className='mt-3'>
					<Col align='left'>
						<p className='font-italic'>"{signature || 'Nice to meet you!'}"</p>
					</Col>
				</Row>
			</Container>
		</Section>
	)
}

export { CardUserHorizontal }
