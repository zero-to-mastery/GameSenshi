import React from 'react'
import { Subscribe } from 'unstated'
import { STATE } from 'state/constants'

const StateContainer = (
	Component,
	stores = [],
	stateToPropsMaps = [],
	methodToPropsMaps = []
) => {
	return props => (
		<Subscribe to={stores}>
			{() => {
				const accProps = stores.reduce((accProps, store, i) => {
					for (const prop in stateToPropsMaps[i]) {
						const value = stateToPropsMaps[i][prop]
						if (value instanceof Function) {
							accProps[prop] = value(store[STATE])
						} else {
							accProps[prop] = store[STATE][value]
						}
					}
					for (const prop in methodToPropsMaps[i]) {
						accProps[prop] = methodToPropsMaps[i][prop]
					}
					return accProps
				}, {})
				return <Component {...accProps} {...props} />
			}}
		</Subscribe>
	)
}

export { StateContainer }
