import React, { useState, useCallback, useRef } from 'react'
import { Card, CardBody } from 'reactstrap'
import clsx from 'clsx'
import Image from 'material-ui-image'
import {
	DivStyledHover,
	TextStyledYellow,
	ColStyledSound,
	ColStyledPrice,
} from './styled'
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
					className={clsx('card-image')}
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
					<Row xs='1'>
						<Col align='left'>
							<h4
								className={clsx(
									'title my-0 font-weight-bold text-nowrap text-white'
								)}
								align='left'
							>
								{name}
							</h4>
						</Col>
						<Col className='mt-1 mb-1'>
							<Row className='align-items-center'>
								<ColStyledSound xs='6' sm='6' lg='7' align='left'>
									<ButtonSoundStoreSoundPropedCardUser
										gender={gender}
										url={audioSrc}
									/>
								</ColStyledSound>
								<ColStyledPrice align='right'>
									<TextStyledYellow
										align='right'
										className={clsx('title my-0 text-white text-nowrap')}
									>
										${price}/h
									</TextStyledYellow>
								</ColStyledPrice>
							</Row>
						</Col>
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
