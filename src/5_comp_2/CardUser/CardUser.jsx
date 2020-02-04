import React, { useState, useCallback, useRef } from 'react'
import { Card, CardBody } from 'reactstrap'
import classnames from 'classnames'
import Image from 'material-ui-image'
import { DivStyledHover, TextStyledYellow } from './styled'
import { Exports } from '5_comp_1'
import { stopUndefined } from '1_utils'

const {
	ButtonSoundStoreSoundPropedCardUser,
	BadgesOptioned,
	Link,
	Row,
	Col,
} = stopUndefined(Exports)

const CardUser = props => {
	const [hover, setHover] = useState(false)
	const [leave, setLeave] = useState(false)
	const timeId = useRef(0)
	const { name, src, badge, gender, audioSrc, price, description } = props

	const setHoverTrue = useCallback(() => {
		clearTimeout(timeId.current)
		setHover(true)
		setLeave(false)
	}, [])

	const setHoverFalse = useCallback(() => {
		setLeave(true)
		timeId.current = setTimeout(() => {
			setHover(false)
			setLeave(false)
		}, 500)
	}, [])

	return (
		<Link
			onMouseEnter={setHoverTrue}
			onMouseLeave={setHoverFalse}
			onMouseMove={setHoverTrue}
			baseClass='w-100'
			to='#pablo'
			target='_blank'
			rel='noopener noreferrer'
			className='w-100'
		>
			<Card className='card-profile bg-blue-gradient mt-0'>
				<DivStyledHover
					styledHover={hover}
					styledLeave={leave}
					className={classnames('card-image')}
				>
					<Row className='w-100 position-absolute mt-3' style={{ zIndex: 2 }}>
						<Col className='px-0' align='right'>
							<BadgesOptioned badges={badge} className='m-0' />
						</Col>
					</Row>
					<Image
						alt={name}
						className='img img-raised rounded-lg position-absolute'
						color='transparent' //this is needed or else there is tiny white background even when OTHER image in carousel move, very weird behavior
						src={src}
					/>
				</DivStyledHover>
				<CardBody>
					<Row className='align-items-center'>
						<Col align='left'>
							<h4
								className={classnames(
									'title my-0 font-weight-bold text-nowrap text-white'
								)}
								align='left'
							>
								{name}
							</h4>
						</Col>
					</Row>
					<Row className='align-items-center my-1'>
						<Col sm='8' className={classnames('pr-0')} align='left'>
							<ButtonSoundStoreSoundPropedCardUser
								gender={gender}
								url={audioSrc}
							/>
						</Col>
						<Col sm='4' className='pl-0'>
							<TextStyledYellow
								align='right'
								className={classnames('title my-0 text-white text-nowrap')}
							>
								${price}/h
							</TextStyledYellow>
						</Col>
					</Row>
					<Row>
						<Col>
							<p align='left' className='text-white m-0 text-nowrap'>
								{description}
							</p>
						</Col>
					</Row>
				</CardBody>
			</Card>
		</Link>
	)
}

export { CardUser }
