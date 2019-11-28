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
	Card,
	CardBody,
	CardHeader,
} from 'reactstrap'
import { stopUndefined } from 'utils'
import { Exports } from 'componentnCompounds'

const {
	QuantityProfile,
	IconsImagePropedTabs,
	ButtonAddToCartPropedProfile,
} = stopUndefined(Exports)

const sections = ['Dota 2', 'PUBG', 'LOL', 'Apex Legends', 'Fortnite']

const TabsProfile = props => {
	const [tab, setTab] = useState(1)

	const toggleTabs = (e, index) => {
		e.preventDefault()
		setTab(index)
	}
	return (
		<Container>
			<Row>
				<Col>
					<Card>
						<CardHeader>
							<Nav className='nav-pills-primary' pills role='tablist'>
								<NavItem>
									<NavLink
										className={classnames({
											active: tab === 1,
										})}
										onClick={e => toggleTabs(e, 1)}
										href='#pablo'
									>
										League of Legends
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className={classnames({
											active: tab === 2,
										})}
										onClick={e => toggleTabs(e, 2)}
										href='#pablo'
									>
										Settings
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className={classnames({
											active: tab === 3,
										})}
										onClick={e => toggleTabs(e, 3)}
										href='#pablo'
									>
										Options
									</NavLink>
								</NavItem>
							</Nav>
						</CardHeader>
						<CardBody>
							<TabContent className='tab-space' activeTab={'hTabs' + tab}>
								<TabPane tabId='hTabs1'>
									<Row className='py-2'>
										<Col md='4'>
											<IconsImagePropedTabs icons='LOL' />
										</Col>
										<Col md='2'>
											<h2>$30/h</h2>
										</Col>
										<Col md='6'>
											<QuantityProfile />
										</Col>
									</Row>
									<Row className='py-2'>
										<Col>
											<h4>Description</h4>
											<p>
												A veteran in MOBA and FPS games, I can give you a
												significant boost in ranking mode.
											</p>
										</Col>
									</Row>
									<Row className='py-2'>
										<Col>
											<ButtonAddToCartPropedProfile />
										</Col>
									</Row>
								</TabPane>
								<TabPane tabId='hTabs2'>
									Efficiently unleash cross-media information without
									cross-media value. Quickly maximize timely deliverables for
									real-time schemas. <br />
									<br />
									Dramatically maintain clicks-and-mortar solutions without
									functional solutions.
								</TabPane>
								<TabPane tabId='hTabs3'>
									Completely synergize resource taxing relationships via premier
									niche markets. Professionally cultivate one-to-one customer
									service with robust ideas. <br />
									<br />
									Dynamically innovate resource-leveling customer service for
									state of the art customer service.
								</TabPane>
							</TabContent>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

export { TabsProfile }
