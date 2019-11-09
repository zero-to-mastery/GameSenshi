import React, { useEffect, useRef } from 'react'
import { stopUndefined } from 'utils'
// core components
import { Exports } from 'componentpMultiOrganisms'
// layout library
import { Container, Row, Col } from 'reactstrap'
import { ButtonOutlineCommon } from '../componentAtoms/ButtonOutlineCommon/ButtonOutlineCommon'

const {
	Footer,
	IndexHeader,
	CarouselCommonPropedIndex,
	CardIndexPropedDefault,
	ButtonOutlineCommonPropedIndex,
} = stopUndefined(Exports)

const games = ['Dota2', 'PUBG', 'LOL', 'Apex', 'Fortnite']

const IndexPage = props => {
	const wrapper = useRef(null)

	useEffect(() => {
		document.body.classList.add('index-page')
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		wrapper.current.scrollTop = 0
		return () => {
			document.body.classList.remove('index-page')
		}
	}, [])

	return (
		<div className='wrapper' ref={wrapper}>
			{/* <IndexHeader /> */}
			<div className='main'>
				<Container>
					<Row>
						<Col
							xs={{ size: 12 }}
							sm={{ size: 12 }}
							md={{ size: 12 }}
							lg={{ size: 12 }}>
							<CarouselCommonPropedIndex />
						</Col>
					</Row>
					<Row>
						<Col className='py-5'>
							{' '}
							<h1 className='text-center'>Catalogue</h1>
						</Col>
					</Row>
					<Row>
						<Col>
							<ButtonOutlineCommonPropedIndex />
						</Col>
					</Row>
					<Row>
						<Col className='py-5'>
							{' '}
							<h1 className='text-center'>Signed up recently</h1>
						</Col>
					</Row>
					<Row className='pb-5'>
						<CardIndexPropedDefault />
					</Row>
				</Container>
			</div>

			<Footer />
		</div>
	)
}

export { IndexPage }
