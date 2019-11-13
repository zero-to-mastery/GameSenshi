import React from 'react'
import { ContainerSearchResults } from './ContainerSearchResults'
import { searchResults } from './utils'

const ContainerSearchResultsPropedDefault = props => {
	return <ContainerSearchResults results={searchResults} {...props} />
}

export { ContainerSearchResultsPropedDefault }
