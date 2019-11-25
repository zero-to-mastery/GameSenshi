import React, { useState, useCallback } from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane, Row } from 'reactstrap'
import audioSample from 'assets/audio/sampleVoice.mp3'
import classnames from 'classnames'
import { stopUndefined } from 'utils'
import { Exports } from 'componentpMultiOrganisms'

const { TabPaneHorizontal, CardProfilePropedIndex } = stopUndefined(Exports)

const CARD_DISCOVER_NAME = 'name'
const CARD_DISCOVER_IMAGE = 'image'
const CARD_DISCOVER_GENDER = 'gender'
const CARD_DISCOVER_AUDIO = 'audio'
const CARD_DISCOVER_PRICE = 'price'
const CARD_DISCOVER_DESCRIPTION = 'description'

const discoverSections = [
	{
		[CARD_DISCOVER_NAME]: 'Dylan Wyatt',
		[CARD_DISCOVER_IMAGE]: require('assets/img/christian.jpg'),
		[CARD_DISCOVER_GENDER]: false,
		[CARD_DISCOVER_AUDIO]: audioSample,
		[CARD_DISCOVER_PRICE]: '30',
		[CARD_DISCOVER_DESCRIPTION]: 'hello',
	},
	{
		[CARD_DISCOVER_NAME]: 'Mila Skylar',
		[CARD_DISCOVER_IMAGE]: require('assets/img/johana.jpg'),
		[CARD_DISCOVER_GENDER]: true,
		[CARD_DISCOVER_AUDIO]: audioSample,
		[CARD_DISCOVER_PRICE]: '40',
		[CARD_DISCOVER_DESCRIPTION]: 'hello',
	},
	{
		[CARD_DISCOVER_NAME]: 'Mark Johnsson',
		[CARD_DISCOVER_IMAGE]: require('assets/img/mike-resized.jpg'),
		[CARD_DISCOVER_GENDER]: false,
		[CARD_DISCOVER_AUDIO]: audioSample,
		[CARD_DISCOVER_PRICE]: '50',
		[CARD_DISCOVER_DESCRIPTION]: 'hello',
	},
	{
		[CARD_DISCOVER_NAME]: 'Olivia Smith',
		[CARD_DISCOVER_IMAGE]: require('assets/img/olivia.jpg'),
		[CARD_DISCOVER_GENDER]: true,
		[CARD_DISCOVER_AUDIO]: audioSample,
		[CARD_DISCOVER_PRICE]: '60',
		[CARD_DISCOVER_DESCRIPTION]: 'hello',
	},
]

const Cards = () => {
	return discoverSections.map(card => {
		const {
			[CARD_DISCOVER_NAME]: name,
			[CARD_DISCOVER_IMAGE]: src,
			[CARD_DISCOVER_GENDER]: gender,
			[CARD_DISCOVER_PRICE]: price,
			[CARD_DISCOVER_AUDIO]: audioSrc,
			[CARD_DISCOVER_DESCRIPTION]: description,
		} = card
		return (
			<CardProfilePropedIndex
				key={name}
				audioSrc={audioSrc}
				name={name}
				src={src}
				gender={gender}
				price={price}
				description={description}
			/>
		)
	})
}

const sections = ['Dota 2', 'PUBG', 'LOL', 'Apex Legends', 'Fortnite']

const SectionDiscover = () => {
	const [tab, setTab] = useState('Dota 2')

	const toggleTabs = useCallback(
		(e, index) => {
			e.preventDefault()
			setTab(index)
		},
		[tab]
	)
	return (
		<div>
			<Nav className='nav-pills-primary' pills role='tablist'>
				{sections.map(section => {
					return (
						<NavItem>
							<NavLink
								className={classnames({
									active: tab === section,
								})}
								onClick={e => toggleTabs(e, section)}
								href='#pablo'
							>
								{section}
							</NavLink>
						</NavItem>
					)
				})}
			</Nav>
			<TabContent className='tab-space' activeTab={tab}>
				<TabPane tabId='Dota 2'>
					<TabPaneHorizontal>
						<Row>
							<Cards />
						</Row>
						<Row>
							<Cards />
						</Row>
					</TabPaneHorizontal>
				</TabPane>
				<TabPane tabId='PUBG'>
					<TabPaneHorizontal>
						<Row>
							<Cards />
						</Row>
						<Row>
							<Cards />
						</Row>
					</TabPaneHorizontal>
				</TabPane>
				<TabPane tabId='LOL'>
					<TabPaneHorizontal>
						<Row>
							<Cards />
						</Row>
						<Row>
							<Cards />
						</Row>
					</TabPaneHorizontal>
				</TabPane>
				<TabPane tabId='Apex Legends'>
					<TabPaneHorizontal>
						<Row>
							<Cards />
						</Row>
						<Row>
							<Cards />
						</Row>{' '}
					</TabPaneHorizontal>
				</TabPane>
				<TabPane tabId='Fortnite'>
					<TabPaneHorizontal>
						<Row>
							<Cards />
						</Row>
						<Row>
							<Cards />
						</Row>
					</TabPaneHorizontal>
				</TabPane>
			</TabContent>
		</div>
	)
}

export { SectionDiscover }
