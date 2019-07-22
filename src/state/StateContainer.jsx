import React from 'react'
import { Subscribe } from 'unstated'

const StateContainer = (Comp, store, stateToPropsMap, methodToPropsMap) => {
	return props => (
		<Subscribe to={[store]}>
			{store => {
				const customProps = {}
				for (const prop in stateToPropsMap) {
					customProps[prop] = store.state[stateToPropsMap[prop]]
				}
				for (const prop in methodToPropsMap) {
					customProps[prop] = () => {
						props[prop] && props[prop]()
						methodToPropsMap[prop]()
					}
				}
				return <Comp {...props} {...customProps} />
			}}
		</Subscribe>
	)
}

export { StateContainer }
