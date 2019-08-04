import React, { useState, useEffect, useRef } from 'react'

// react libraries components
import { Container, Row, Col } from 'reactstrap'

// core components
import { Footer, IndexNavbar } from 'componentAtoms'
import { FormSignUpPropedDefault } from 'componentOrganisms'

const SignUpPage = props => {
	const [squares1to6, setSquares1to6] = useState('')
	const [squares7and8, setSquares7and8] = useState('')
	const [maxHeight] = useState(1075)

	const wrapper = useRef(null)

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
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		wrapper.current.scrollTop = 0
		document.body.classList.add('register-page')
		// stop this listener in dev mode to ease development
		// in dev mode, it setState a LOT! and causing lag (but not lag in class component
		if (process.env.REACT_APP_FOLLOW_CURSOR) {
			document.documentElement.addEventListener('mousemove', followCursor)
		}
		return () => {
			document.body.classList.remove('register-page')
			document.documentElement.removeEventListener('mousemove', followCursor)
		}
	}, [])

	return (
		<>
			<IndexNavbar />
			<div className='wrapper' ref={wrapper}>
				<div
					className='page-header'
					style={{
						marginBottom: 75,
						display: 'block',
						maxHeight: maxHeight + 'px',
					}}>
					<div className='page-header-image' />
					<div className='content' style={{ marginTop: '5%' }}>
						<Container className='container-fluid'>
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
				</div>
				<Footer />
			</div>
		</>
	)
}

export default SignUpPage
