import React from 'react'
import { TabPaneHorizontal } from './TabPaneHorizontal'

const TabPaneHorizontalPropedLOL = props => {
	const { ...otherProps } = props
	return <TabPaneHorizontal name='LOL' {...otherProps} />
}

const TabPaneHorizontalPropedApex = props => {
	const { ...otherProps } = props
	return <TabPaneHorizontal name='ApexLegends' {...otherProps} />
}

const TabPaneHorizontalPropedFortnite = props => {
	const { ...otherProps } = props
	return <TabPaneHorizontal name='Fortnite' {...otherProps} />
}

const TabPaneHorizontalPropedPUBG = props => {
	const { ...otherProps } = props
	return <TabPaneHorizontal name='PUBG' {...otherProps} />
}

const TabPaneHorizontalPropedDota2 = props => {
	const { ...otherProps } = props
	return <TabPaneHorizontal name='Dota 2' {...otherProps} />
}
export {
	TabPaneHorizontalPropedApex,
	TabPaneHorizontalPropedDota2,
	TabPaneHorizontalPropedFortnite,
	TabPaneHorizontalPropedLOL,
	TabPaneHorizontalPropedPUBG,
}
