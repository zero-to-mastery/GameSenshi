import React from 'react'
// state
import { Subscribe } from 'unstated'
// constants
import {
	ALERT_STATE_BODY,
	ALERT_STATE_ICON,
	ALERT_STATE_OPEN,
	ALERT_STATE_COLOR,
} from 'state/Alert/AlertStore'

// order matters
const propNames = [
	ALERT_STATE_BODY,
	ALERT_STATE_ICON,
	ALERT_STATE_OPEN,
	ALERT_STATE_COLOR,
]

const AlertContainer = (Comp, alertStore, componentPropNames) => {
	return props => (
		<Subscribe to={[alertStore]}>
			{alertStore => {
				const customProps = componentPropNames.reduce((acc, name, i) => {
					acc[name] = alertStore.state[propNames[i]]
					return acc
				}, {})
				return <Comp {...props} {...customProps} />
			}}
		</Subscribe>
	)
}

export { AlertContainer }
