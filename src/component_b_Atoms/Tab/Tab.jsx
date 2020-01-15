import React, { useState, useCallback, Fragment } from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import ButtonBase from '@material-ui/core/ButtonBase'
import classnames from 'classnames'

const TAB_NAME = 'tabName'
const TAB_CONTENT = 'tabContent'

const Tab = props => {
	const { tabs } = props
	const [tabName, setTabName] = useState(tabs[0][TAB_NAME])

	return (
		<Fragment>
			<Nav className='nav-pills-neutral' pills role='tablist'>
				{tabs.map(tab => {
					const { [TAB_NAME]: tabName_ } = tab
					const toggleTabs = useCallback(
						e => {
							e.preventDefault()
							setTabName(tabName_)
						},
						[tabName_]
					)

					return (
						<NavItem style={{ zIndex: 99 }} key={tabName_}>
							<NavLink
								className={classnames({
									active: tabName === tabName_,
								})}
								onClick={toggleTabs}
								tag={ButtonBase}
							>
								{tabName_}
							</NavLink>
						</NavItem>
					)
				})}
			</Nav>
			<TabContent activeTab={tabName}>
				{tabs.map(tab => {
					const { [TAB_NAME]: tabName_, [TAB_CONTENT]: tabContent } = tab
					return (
						<TabPane tabId={tabName_} key={tabName_}>
							{tabContent}
						</TabPane>
					)
				})}
			</TabContent>
		</Fragment>
	)
}

export { Tab, TAB_NAME, TAB_CONTENT }
