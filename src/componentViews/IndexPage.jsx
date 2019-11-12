import React, { useEffect, useRef } from 'react'
import { stopUndefined } from 'utils'
// core components
import { Exports } from 'componentpMultiOrganisms'
// layout library
import { Container, Row, Col } from 'reactstrap'

const {
	Footer,
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
			{/* <IndexHeader /> */}
			<div className='main'>
				<Container>
					<Row>
						<Col
							xs={{ size: 12 }}
							sm={{ size: 12 }}
							md={{ size: 12 }}
							lg={{ size: 12 }}></Col>
					</Row>
					<Row>
						<Col className='py-5'>
							{' '}
							<h1 className='text-center'>Catalogue</h1>
						</Col>
					</Row>
					<Row>
						<Col
							xs={{ size: 1, offset: 2 }}
							sm={{ size: 2, offset: 2 }}
							md={{ size: 6, offset: 2 }}
							lg={{ size: 8, offset: 2 }}>
							<ButtonsIconImagePropedIndex />
						</Col>
					</Row>
					<Row>
						<Col className='py-5'>
							{' '}
							<h1 className='text-center'>Recommendations</h1>
						</Col>
					</Row>
					<Row className='pb-5'>
						<CardIndexPropedDefault />
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
					<Row>
						{' '}
						<Col className='pb-5'>
							<h1 className='text-center'>Random</h1>
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
