import React, { useEffect, useRef } from 'react'
import { stopUndefined } from 'utils'
import { Exports } from 'componentpMultiOrganisms'
import { Container, Row, Col } from 'reactstrap'

const {
	Footer,
	CarouselCommonPropedIndex,
	CardIndexPropedDefault,
	ButtonsIconImagePropedIndex,
} = stopUndefined(Exports)

const IndexPage = () => {
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
			<div className='main'>
				<Container style={{ marginTop: 100 }}>
					<Row>
						<Col>
							<CarouselCommonPropedIndex />
						</Col>
					</Row>
					<Row>
						<Col className='py-5'>
							<h1 className='text-center'>Catalogue</h1>
						</Col>
					</Row>
					<Row>
						<Col>
							<ButtonsIconImagePropedIndex />
						</Col>
					</Row>
					<Row>
						<Col className='py-5'>
							<h1 className='text-center'>Recommendations</h1>
						</Col>
					</Row>
					<Row className='pb-5'>
						<CardIndexPropedDefault />
					</Row>
					<Row>
						<Col className='py-5'>
							<h1 className='text-center'>Signed up recently</h1>
						</Col>
					</Row>
					<Row className='pb-5'>
						<CardIndexPropedDefault />
					</Row>
					<Row className='pb-5'>
						<h1 className='text-center'>Random</h1>
					</Row>
				</Container>
			</div>

			<Footer />
		</div>
	)
}

export { IndexPage }
