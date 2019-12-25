import React from 'react'
import {
	FIRESTORE_SENSHI_BADGES_VERIFIED,
	FIRESTORE_SENSHI_BADGES_FEMALE,
	FIRESTORE_SENSHI_BADGES_RISING_STAR,
	FIRESTORE_SENSHI_BADGES_ONLINE,
} from 'constantValues'
import {
	BADGES_COLOR,
	BADGES_BODY,
	BADGES_ID,
	BADGES_TOOLTIP,
	BADGES_CLASS,
} from './Badges'
import { createGetOptions } from 'utils'
import styles from './styles.module.css'

const options = [
	{
		[BADGES_ID]: FIRESTORE_SENSHI_BADGES_FEMALE,
		[BADGES_COLOR]: 'primary',
		[BADGES_BODY]: 'Female',
	},
	{
		[BADGES_ID]: FIRESTORE_SENSHI_BADGES_VERIFIED,
		[BADGES_COLOR]: 'info',
		[BADGES_BODY]: 'Verified',
	},
	{
		[BADGES_ID]: FIRESTORE_SENSHI_BADGES_ONLINE,
		[BADGES_BODY]: <i className='fas fa-wifi' />,
		[BADGES_CLASS]: `${styles.online} text-white`,
	},
	{
		[BADGES_ID]: FIRESTORE_SENSHI_BADGES_RISING_STAR,
		[BADGES_COLOR]: 'warning',
		[BADGES_BODY]: 'Rising Star',
		[BADGES_TOOLTIP]: 'New player that gain attention fast!',
	},
]

const getOptions = createGetOptions(options, BADGES_ID)

export { getOptions }
