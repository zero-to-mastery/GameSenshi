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
										Profile
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className={classnames({
											active: tab === 2,
										})}
										onClick={e => this.toggleTabs(e, 2)}
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
									Collaboratively administrate empowered markets via
									plug-and-play networks. Dynamically procrastinate B2C users
									after installed base benefits. <br />
									<br />
									Dramatically visualize customer directed convergence without
									revolutionary ROI.
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
