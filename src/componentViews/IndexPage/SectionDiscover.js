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

const sections = [
	{
		[TAB_NAME]: 'Dota 2',
		[TAB_CONTENT]: 'content dota',
	},
	{
		[TAB_NAME]: 'PUBG',
		[TAB_CONTENT]: 'content PUBG',
	},
	{
		[TAB_NAME]: 'LOL',
		[TAB_CONTENT]: 'content LOL',
	},
	{
		[TAB_NAME]: 'Apex Legends',
		[TAB_CONTENT]: 'content apes legends',
	},
	{
		[TAB_NAME]: 'Fortnite',
		[TAB_CONTENT]: 'content fortnite',
	},
]

const SectionDiscover = () => {
	const [tab, setTab] = useState('Dota 2')
	const [TabPaneContent, setTabContent] = useState(TabPaneHorizontalPropedDota2)

	useEffect(() => {
		switch (tab) {
			case tab === 'LOL':
				setTabContent(TabPaneHorizontalPropedLOL)
				break
			case tab === 'Fortnite':
				setTabContent(TabPaneHorizontalPropedFortnite)
				break
			case tab === 'Apex Legends':
				setTabContent(TabPaneHorizontalPropedApex)
				break
			case tab === 'PUBG':
				setTabContent(TabPaneHorizontalPropedPUBG)
				break
			default:
				setTabContent(TabPaneHorizontalPropedDota2)
		}
	}, [tab])

	const toggleTabs = (e, index) => {
		e.preventDefault()
		setTab(index)
	}

	return (
		<div>
			<Nav className='nav-pills-primary' pills role='tablist'>
				{sections.map(section => {
					const { [TAB_NAME]: name, [TAB_CONTENT]: content } = section
					return (
						<NavItem>
							<NavLink
								className={classnames({
									active: tab === name,
								})}
								onClick={e => toggleTabs(e, name)}
								href='#pablo'
							>
								{name}
							</NavLink>
						</NavItem>
					)
				})}
			</Nav>
			<TabContent className='tab-space' activeTab={tab}>
				{/* <TabPaneContent /> */}
			</TabContent>
		</div>
	)
}

export { SectionDiscover }
