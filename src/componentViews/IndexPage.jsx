import React, { useEffect, useRef } from 'react'
import { stopUndefined } from 'utils'
import { Exports } from 'componentpMultiOrganisms'
import { Container, Row, Col } from 'reactstrap'

const {
	Footer,
	CardIndexPropedDefault,
	ButtonsIconImagePropedIndex,
	GalleryCommonPropedIndex,
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
<<<<<<< HEAD
						<Col
							style={{ marginTop: '80px' }}
							xs={{ size: 12 }}
							sm={{ size: 12 }}
							md={{ size: 12 }}
							lg={{ size: 12 }}
						>
							<GalleryCommonPropedIndex indexGallery />
=======
						<Col>
							<CarouselCommonPropedIndex />
>>>>>>> 3cc7e1d60c8c893a28ac8b89a2e95d893bd8e6bd
						</Col>
					</Row>
					<Row>
						<Col className='py-5'>
							<h1 className='text-center'>Catalogue</h1>
						</Col>
					</Row>
					<Row>
<<<<<<< HEAD
						<Col
							xs={{ size: 8, offset: 2 }}
							sm={{ size: 8, offset: 2 }}
							md={{ size: 8, offset: 2 }}
							lg={{ size: 8, offset: 2 }}
						>
=======
						<Col>
>>>>>>> 3cc7e1d60c8c893a28ac8b89a2e95d893bd8e6bd
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
<<<<<<< HEAD
					<Row>
						{' '}
						<Col className='pb-5'>
							<h1 className='text-center'>Random</h1>
						</Col>
					</Row>
					<Row className='pb-5'>
						<CardIndexPropedDefault />
=======
					<Row className='pb-5'>
						<h1 className='text-center'>Random</h1>
>>>>>>> 3cc7e1d60c8c893a28ac8b89a2e95d893bd8e6bd
					</Row>
				</Container>
			</div>

			<Footer />
		</div>
	)
}

export { IndexPage }
