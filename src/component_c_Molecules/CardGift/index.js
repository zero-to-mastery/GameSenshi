import React from 'react'
import { CardGift } from './CardGift'
import { gifts } from './utils'

const CardGiftPropedProfile = props => {
	return <CardGift icons={gifts} {...props} />
}
export { CardGiftPropedProfile }
