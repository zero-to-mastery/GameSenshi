import React, { useState, useEffect } from 'react'
import { stopUndefined } from '1_utils'
import { Container, Row, Col } from 'reactstrap'
import { Exports } from '5_comp_5'

const {
	FormSignUpPropedDefault,
	Section,
	WrapperStoreWrapperPropedRegister,
} = stopUndefined(Exports)

const PageSignUp = () => {
	const [squares1to6, setSquares1to6] = useState('')
	const [squares7and8, setSquares7and8] = useState('')

	const followCursor = event => {
		let posX = event.clientX - window.innerWidth / 2
		let posY = event.clientY - window.innerWidth / 6
		setSquares1to6(
			'perspective(500px) rotateY(' +
				posX * 0.05 +
				'deg) rotateX(' +
				posY * -0.05 +
				'deg)'
		)
		setSquares7and8(
			'perspective(500px) rotateY(' +
				posX * 0.02 +
				'deg) rotateX(' +
				posY * -0.02 +
				'deg)'
		)
	}

	useEffect(() => {
		// stop this listener in dev mode to ease development
		// in dev mode, it setState a LOT! and causing lag
		if (process.env.REACT_APP_FOLLOW_CURSOR) {
			document.documentElement.addEventListener('mousemove', followCursor)
		}
		return () => {
			document.documentElement.removeEventListener('mousemove', followCursor)
		}
	}, [])

	return (
		<WrapperStoreWrapperPropedRegister>
			<Section>
				<Container>
					<Row>
						<Col className='mx-auto' lg='5' md='8'>
							<div
								className='square square-7'
								id='square7'
								style={{ transform: squares7and8 }}
							/>
							<div
								className='square square-8'
								id='square8'
								style={{ transform: squares7and8 }}
							/>
							<FormSignUpPropedDefault />
						</Col>
					</Row>
				</Container>
				<div style={{ height: 0 }} className='mt-5'>
					<div className='register-bg' />
					<div
						className='square square-1'
						id='square1'
						style={{ transform: squares1to6 }}
					/>
					<div
						className='square square-2'
						id='square2'
						style={{ transform: squares1to6 }}
					/>
					<div
						className='square square-3'
						id='square3'
						style={{ transform: squares1to6 }}
					/>
					<div
						className='square square-4'
						id='square4'
						style={{ transform: squares1to6 }}
					/>
					<div
						className='square square-5'
						id='square5'
						style={{ transform: squares1to6 }}
					/>
					<div
						className='square square-6'
						id='square6'
						style={{ transform: squares1to6 }}
					/>
				</div>
			</Section>
		</WrapperStoreWrapperPropedRegister>
	)
}

export { PageSignUp }
