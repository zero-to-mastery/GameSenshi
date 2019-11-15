import React, { useEffect, useRef } from 'react'
import { stopUndefined } from 'utils'
import { Exports } from 'componentpMultiOrganisms'
import { Container, Row, Col } from 'reactstrap'

const {
	Footer,
	CardIndexPropedDefault,
	ButtonsIconImagePropedIndex,
	CarouselCommonPropedIndex,
} = stopUndefined(Exports)

const CARD_INDEX_NAME = 'name'
const CARD_INDEX_IMAGE = 'image'
const CARD_INDEX_SKILLS = 'skills'
const CARD_INDEX_HOBBIES = 'hobbies'
const CARD_INDEX_LEVEL = 'level'

const cardPlayers = [
	{
		[CARD_INDEX_NAME]: 'Dylan Wyatt',
		[CARD_INDEX_IMAGE]: require('assets/img/christian.jpg'),
		[CARD_INDEX_HOBBIES]: 'Skiing, Chess',
		[CARD_INDEX_SKILLS]: 'Dota2, LOL',
		[CARD_INDEX_LEVEL]: 'Rising star',
	},
	{
		[CARD_INDEX_NAME]: 'Mila Skylar',
		[CARD_INDEX_IMAGE]: require('assets/img/johana.jpg'),
		[CARD_INDEX_HOBBIES]: 'Yoga, tennis',
		[CARD_INDEX_SKILLS]: 'Dota2, LOL',
		[CARD_INDEX_LEVEL]: 'Rising star',
	},
	{
		[CARD_INDEX_NAME]: 'Mark Johnsson',
		[CARD_INDEX_IMAGE]: require('assets/img/mike.jpeg'),
		[CARD_INDEX_HOBBIES]: 'Football, gym',
		[CARD_INDEX_SKILLS]: 'Dota2, LOL',
		[CARD_INDEX_LEVEL]: 'Rising star',
	},
	{
		[CARD_INDEX_NAME]: 'Olivia Smith',
		[CARD_INDEX_IMAGE]: require('assets/img/olivia.jpg'),
		[CARD_INDEX_HOBBIES]: 'Football, gym',
		[CARD_INDEX_SKILLS]: 'Dota2, LOL',
		[CARD_INDEX_LEVEL]: 'Rising star',
	},
]

const Cards = () => {
	return (
		<>
			{cardPlayers.map(card => {
				const {
					[CARD_INDEX_NAME]: name,
					[CARD_INDEX_IMAGE]: src,
					[CARD_INDEX_LEVEL]: level,
					[CARD_INDEX_HOBBIES]: hobbies,
					[CARD_INDEX_SKILLS]: skills,
				} = card
				return (
					<Col xs={{ size: 10, offset: 1 }} md={{ size: 3 }}>
						<CardIndexPropedDefault
							name={name}
							src={src}
							level={level}
							hobbies={hobbies}
							skills={skills}
						/>
					</Col>
				)
			})}
		</>
	)
}

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
						<Col
							xs={{ size: 12 }}
							sm={{ size: 12 }}
							md={{ size: 12 }}
							lg={{ size: 12 }}
						>
							<CarouselCommonPropedIndex indexGallery />
						</Col>
					</Row>
					<Row>
						<Col className='py-5'>
							<h1 className='text-center'>Catalogue</h1>
						</Col>
					</Row>
					<Row>
						<Col
							xs={{ size: 1, offset: 2 }}
							sm={{ size: 2, offset: 2 }}
							md={{ size: 6, offset: 2 }}
						>
							<ButtonsIconImagePropedIndex />
						</Col>
					</Row>
					<Row>
						<Col className='py-5'>
							<h1 className='text-center'>Recommendations</h1>
						</Col>
					</Row>
					<Row className='pb-5'>
						<Cards />
					</Row>
					<Row>
						<Col className='py-5'>
							<h1 className='text-center'>Signed up recently</h1>
						</Col>
					</Row>
					<Row className='pb-5'>
						<Cards />
					</Row>
					<Row>
						{' '}
						<Col className='pb-5'>
							<h1 className='text-center'>Random</h1>
						</Col>
					</Row>
					<Row className='pb-5'>
						<Cards />
					</Row>
				</Container>
			</div>
			<Footer />
		</div>
	)
}

export { IndexPage }
