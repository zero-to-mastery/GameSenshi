import React from 'react'
import { Subscribe } from 'unstated'

const StateContainer = (Comp, store, statesToPropsMap) => {
	return props => (
		<Subscribe to={[store]}>
			{store => {
				const customProps = {}
				for (const prop in statesToPropsMap) {
					customProps[prop] = store.state[statesToPropsMap[prop]]
				}
				return <Comp {...props} {...customProps} />
			}}
		</Subscribe>
	)
}

export { StateContainer }
