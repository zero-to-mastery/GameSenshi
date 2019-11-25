import React, { useState, useEffect } from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import classnames from 'classnames'
import { stopUndefined } from 'utils'
import { Exports } from 'componentpMultiOrganisms'

const {
	TabPaneHorizontalPropedApex,
	TabPaneHorizontalPropedDota2,
	TabPaneHorizontalPropedFortnite,
	TabPaneHorizontalPropedLOL,
	TabPaneHorizontalPropedPUBG,
} = stopUndefined(Exports)

const TAB_NAME = 'name'
const TAB_CONTENT = 'content'

const sections = ['Dota 2', 'PUBG', 'LOL', 'Apex Legends', 'Fortnite']
const SectionDiscover = () => {
	const [tab, setTab] = useState('Fortnite')

	const toggleTabs = (e, index) => {
		e.preventDefault()
		setTab(index)
	}
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
					<TabPaneHorizontalPropedDota2 />
				</TabPane>
				<TabPane tabId='PUBG'>
					<TabPaneHorizontalPropedPUBG />
				</TabPane>
				<TabPane tabId='LOL'>
					<TabPaneHorizontalPropedLOL />
				</TabPane>
				<TabPane tabId='Apex Legends'>
					<TabPaneHorizontalPropedApex />
				</TabPane>
				<TabPane tabId='Fortnite'>
					<TabPaneHorizontalPropedFortnite />
				</TabPane>
			</TabContent>
		</div>
	)
}

export { SectionDiscover }
