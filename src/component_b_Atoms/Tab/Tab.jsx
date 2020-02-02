import React, { useState, useCallback } from 'react'
import { AppBar, Tabs, Tab as TabMU, Typography, Box } from '@material-ui/core'

const TAB_NAME = 'tabName'
const TAB_CONTENT = 'tabContent'

const Tab = props => {
	const { tabs } = props
	const [value, setValue] = useState(0)

	const onChange_ = useCallback((event, newValue) => {
		setValue(newValue)
	}, [])

	return (
		<>
			<AppBar position='static' color='default'>
				<Tabs
					classes={{
						root: 'bg-dark text-danger',
						indicator: 'bg-danger',
					}}
					value={value}
					onChange={onChange_}
					variant='scrollable'
					scrollButtons='auto'
					aria-label='scrollable tabs'
				>
					{tabs.map((tab, index) => {
						const { [TAB_NAME]: name } = tab
						return (
							<TabMU
								key={name}
								label={name}
								id={`scrollable-auto-tab-${index}`}
								aria-controls={`scrollable-auto-tabpanel-${index}`}
							/>
						)
					})}
				</Tabs>
			</AppBar>
			{tabs.map((tab, index) => {
				const { [TAB_CONTENT]: content, [TAB_NAME]: name } = tab
				return (
					<Typography
						key={name}
						component='div'
						role='tabpanel'
						hidden={value !== index}
						id={`scrollable-auto-tabpanel-${index}`}
						aria-labelledby={`scrollable-auto-tab-${index}`}
					>
						<Box p={3}>{content}</Box>
					</Typography>
				)
			})}
		</>
	)
}

export { Tab, TAB_NAME, TAB_CONTENT }
