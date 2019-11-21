import React from 'react'
import { Card, CardBody, Row, Col } from 'reactstrap'
import styles from './styles.module.css'
import classnames from 'classnames'
import Image from 'material-ui-image'
import { Exports } from 'componentAtoms'
import { stopUndefined } from 'utils'

const { Badges, ButtonSoundPropedGender } = stopUndefined(Exports)

const CardProfile = props => {
	const {
		name,
		src,
		badgeAs,
		badge,
		gender,
		audioSrc,
		price,
		description,
	} = props

	const BadgeAs = badgeAs || Badges
	return (
		<Col xs='6' lg='3'>
			<Card className='card-profile mt-0'>
				<div className={classnames('card-image', styles.clear)}>
					<Image
						alt={name}
						className='img img-raised rounded'
						color='transparent' //this is needed or else there is tiny white background even when OTHER image in carousel move, very weird behavior
						src={src}
					/>
				</div>
				<CardBody>
					<Row>
						<Col xs='8'>
							<h4
								className={classnames(
									'title my-0 font-weight-bold text-nowrap text-white'
								)}
								align='left'
							>
								{name}
							</h4>
						</Col>
						<Col xs='4' align='right'>
							<BadgeAs badges={badge} className='mx-0' />
						</Col>
					</Row>
					<Row className='align-items-center'>
						<Col>
							<ButtonSoundPropedGender gender={gender} url={audioSrc} />
						</Col>
						<Col>
							<h4
								align='right'
								className={classnames(
									'title my-0 text-white text-nowrap',
									styles.goldenYellow
								)}
							>
								${price}
							</h4>
						</Col>
					</Row>
					<Row>
						<Col>
							<p className='text-white text-nowrap'>{description}</p>
						</Col>
					</Row>
				</CardBody>
			</Card>
		</Col>
	)
}

export { CardProfile }
