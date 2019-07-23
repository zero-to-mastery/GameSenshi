import React from 'react'
import { Subscribe } from 'unstated'

const StateContainer = (
	Comp,
	stores = [],
	stateToPropsMaps = [],
	methodToPropsMaps = []
) => {
	return props => (
		<Subscribe to={stores}>
			{() => {
				const accProps = stores.reduce((accProps, store, i) => {
					for (const prop in stateToPropsMaps[i]) {
						accProps[prop] = store.state[stateToPropsMaps[i][prop]]
					}
					for (const prop in methodToPropsMaps[i]) {
						accProps[prop] = () => {
							props[prop] && props[prop]()
							methodToPropsMaps[i][prop]()
						}
					}
					return accProps
				}, {})
				return <Comp {...props} {...accProps} />
			}}
		</Subscribe>
	)
}

export { StateContainer }
