import React, { useState, useCallback } from 'react'
import classnames from 'classnames'
import {
	Nav,
	NavItem,
	NavLink,
	Row,
	TabContent,
	TabPane,
	Container,
	Col,
} from 'reactstrap'
import { stopUndefined } from 'utils'
import { Exports } from 'componentnCompounds'

const {
	QuantityProfile,
	IconsImagePropedTabs,
	ButtonAddToCartPropedProfile,
	ButtonSoundStoreSoundPropedCardUser,
} = stopUndefined(Exports)

const PRICE = 'price'
const NUM_ORDERS = 'orders'
const ICON = 'icon'
const DESCRIPTION = 'description'

const SingleTabContent = props => {
	const {
		[PRICE]: price,
		[NUM_ORDERS]: orders,
		[ICON]: icon,
		[DESCRIPTION]: description,
	} = props
	return (
		<Container>
			<Row className='py-2 d-flex align-items-center'>
				<Col>
					<IconsImagePropedTabs icons={icon} />
				</Col>
				<Col>
					<div style={{ width: '200px' }}>
						<h4>{price}$ per hour</h4>
						<h4>
							<i className='tim-icons icon-check-2 text-success'></i> {orders}{' '}
							orders completed
						</h4>
						<ButtonSoundStoreSoundPropedCardUser gender={true} />
					</div>
				</Col>
				<Col>
					<QuantityProfile />
				</Col>
			</Row>
			<Row className='pt-3'>
				<Col md='12'>
					<hr className='line-primary' />
				</Col>
			</Row>
			<Row>
				<Col>
					<p>{description}</p>
				</Col>
			</Row>
			<Row className='py-5 text-right'>
				<Col md={{ offset: 8, size: 4 }}>
					<ButtonAddToCartPropedProfile />
				</Col>
			</Row>
		</Container>
	)
}

const sections = ['Dota 2', 'PUBG', 'LOL', 'Apex Legends', 'Fortnite']

const TabsProfile = props => {
	const [tab, setTab] = useState('Fortnite')

	return (
		<div>
			<Nav className='nav-pills-neutral' pills>
				{sections.map(section => {
					return (
						<NavItem>
							<NavLink
								className={classnames({
									active: tab === section,
								})}
								onClick={() => setTab(section)}
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
					<SingleTabContent
						icon='Dota2'
						price='30'
						orders='25'
						description='	A veteran in MOBA and FPS games, I can give you a significant boost
						in ranking mode.'
					/>
				</TabPane>
				<TabPane tabId='PUBG'>
					<SingleTabContent
						icon='PUBG'
						price='25'
						orders='15'
						description='	A veteran in MOBA and FPS games, I can give you a significant boost
						in ranking mode.'
					/>
				</TabPane>
				<TabPane tabId='LOL'>
					<SingleTabContent
						icon='LOL'
						price='15'
						orders='33'
						description='	A veteran in MOBA and FPS games, I can give you a significant boost
						in ranking mode.'
					/>
				</TabPane>
				<TabPane tabId='Apex Legends'>
					<SingleTabContent
						icon='Apex'
						price='20'
						orders='40'
						description='	A veteran in MOBA and FPS games, I can give you a significant boost
						in ranking mode.'
					/>
				</TabPane>
				<TabPane tabId='Fortnite'>
					<SingleTabContent
						icon='Fortnite'
						price='10'
						orders='18'
						description='	A veteran in MOBA and FPS games, I can give you a significant boost
						in ranking mode.'
					/>
				</TabPane>
			</TabContent>
		</div>
	)
}

export { TabsProfile }
