import React from 'react'

const TabPaneContainer = props => {
	const { children } = props

	return (
		<div className='g-pos-rel h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-30--md'>
			{children}
		</div>
	)
}

export { TabPaneContainer }
