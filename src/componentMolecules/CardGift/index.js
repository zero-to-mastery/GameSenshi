import React from 'react'
import { CardGift } from './CardGift'
import { gifts } from './utils'

const CardGiftWithProps = props => {
	const { ...otherProps } = props
	return <CardGift icons={gifts} {...otherProps} />
}
export { CardGiftWithProps }
