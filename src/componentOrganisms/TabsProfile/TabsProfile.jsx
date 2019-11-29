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
	Table,
} from 'reactstrap'
import { stopUndefined } from 'utils'
import { Exports } from 'componentnCompounds'

const {
	QuantityProfile,
	IconsImagePropedTabs,
	ButtonAddToCartPropedProfile,
	ButtonSoundStoreSoundPropedCardUser,
} = stopUndefined(Exports)

const sections = ['Dota 2', 'PUBG', 'LOL', 'Apex Legends', 'Fortnite']

const TabsProfile = props => {
	const [tab, setTab] = useState('Dota 2')

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
						</CardHeader>
						<CardBody>
							<TabContent className='tab-space' activeTab={tab}>
								<TabPane tabId='Dota 2'>
									<Table>
										<Row className='py-2 d-flex align-items-center'>
											<Col>
												<IconsImagePropedTabs icons='LOL' />
											</Col>
											<Col>
												<div style={{ width: '200px' }}>
													<h4>30$ per hour</h4>
													<h4>
														<i className='tim-icons icon-check-2 text-success'></i>{' '}
														40 deals completed
													</h4>
													<ButtonSoundStoreSoundPropedCardUser gender={true} />
												</div>
											</Col>
											<Col>
												<QuantityProfile />
											</Col>
										</Row>
										<Row className='py-5 text-right'>
											<Col md={{ offset: 8, size: 4 }}>
												<ButtonAddToCartPropedProfile />
											</Col>
										</Row>
										<Row>
											<Col md='12'>
												<hr className='line-primary' />
											</Col>
										</Row>
										<Row>
											<Col>
												<h4>Description</h4>
												<p>
													A veteran in MOBA and FPS games, I can give you a
													significant boost in ranking mode.
												</p>
											</Col>
										</Row>
									</Table>
								</TabPane>
								<TabPane tabId='PUBG'>
									Efficiently unleash cross-media information without
									cross-media value. Quickly maximize timely deliverables for
									real-time schemas. <br />
									<br />
									Dramatically maintain clicks-and-mortar solutions without
									functional solutions.
								</TabPane>
								<TabPane tabId='LOL'>
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
