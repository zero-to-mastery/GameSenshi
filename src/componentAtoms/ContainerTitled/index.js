import React from 'react'
import { ContainerTitled } from './ContainerTitled'

const ContainerTitledPropedDefault = props => {
	const { children } = props
	return <ContainerTitled title='Profile page'>{children}</ContainerTitled>
}

export { ContainerTitledPropedDefault }
