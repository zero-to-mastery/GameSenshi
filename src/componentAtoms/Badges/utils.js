import React from 'react'
import { FIRESTORE_SENSHI_SETTINGS_PROFILE_GENDER_FEMALE } from 'constantValues'
import { BADGES_COLOR, BADGES_BODY, BADGES_ID, BADGES_CLASS } from './Badges'
import { createGetOptions } from 'utils'
import styles from './styles.module.css'

const options = [
	{
		[BADGES_ID]: FIRESTORE_SENSHI_SETTINGS_PROFILE_GENDER_FEMALE,
		[BADGES_COLOR]: 'primary',
		[BADGES_BODY]: (
			<>
				Female <i className='fas fa-venus' style={{ fontSize: 'larger' }} />
			</>
		),
	},
	{
		[BADGES_ID]: 'online',
		[BADGES_BODY]: <i className='fas fa-wifi' />,
		[BADGES_CLASS]: `${styles.online} text-white`,
	},
]

const getOptions = createGetOptions(options, BADGES_ID)

export { getOptions }
