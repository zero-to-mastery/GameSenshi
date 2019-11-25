import React, { useState } from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import classnames from 'classnames'

const SectionDiscover = () => {
	const [tab, setTab] = useState(1)
	const toggleTabs = (e, index) => {
		e.preventDefault()
		setTab(index)
	}
	console.log(tab)
	return (
		<div>
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
			<TabContent className='tab-space' activeTab={'tab' + tab}>
				<TabPane tabId='tab1'>
					Collaboratively administrate empowered markets via plug-and-play
					networks. Dynamically procrastinate B2C users after installed base
					benefits. <br />
					<br />
					Dramatically visualize customer directed convergence without
					revolutionary ROI.
				</TabPane>
				<TabPane tabId='tab2'>
					Efficiently unleash cross-media information without cross-media value.
					Quickly maximize timely deliverables for real-time schemas. <br />
					<br />
					Dramatically maintain clicks-and-mortar solutions without functional
					solutions.
				</TabPane>
				<TabPane tabId='tab3'>
					Completely synergize resource taxing relationships via premier niche
					markets. Professionally cultivate one-to-one customer service with
					robust ideas. <br />
					<br />
					Dynamically innovate resource-leveling customer service for state of
					the art customer service.
				</TabPane>
			</TabContent>
		</div>
	)
}

export { SectionDiscover }
