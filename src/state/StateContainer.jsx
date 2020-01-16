import React from 'react'
import { Subscribe } from 'unstated'
import { STATE } from 'state/constants'
import { convertToArrayIfNotArray } from 'utils'

const StateContainer = (
	Component,
	stores = [],
	stateToPropsMaps = [],
	methodToPropsMaps = []
) => {
	const stores_ = convertToArrayIfNotArray(stores)
	const stateToPropsMaps_ = convertToArrayIfNotArray(stateToPropsMaps)
	const methodToPropsMaps_ = convertToArrayIfNotArray(methodToPropsMaps)

	return props => (
		<Subscribe to={stores_}>
			{() => {
				const accProps = stores_.reduce((accProps, store, i) => {
					for (const prop in stateToPropsMaps_[i]) {
						const value = stateToPropsMaps_[i][prop]
						if (value instanceof Function) {
							accProps[prop] = value(store[STATE])
						} else {
							accProps[prop] = store[STATE][value]
						}
					}
					for (const prop in methodToPropsMaps_[i]) {
						accProps[prop] = methodToPropsMaps_[i][prop]
					}
					return accProps
				}, {})
				return <Component {...accProps} {...props} />
			}}
		</Subscribe>
	)
}

export { StateContainer }
