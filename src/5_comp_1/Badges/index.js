import React, { useMemo } from 'react'
import { Badges } from './Badges'
import { getOptions } from './utils'
import styles from './styles.module.css'

const BadgesOptioned = props => {
	const { badges, ...otherProps } = props
	const badges_ = useMemo(() => getOptions(badges), [badges])
	return <Badges badges={badges_} {...otherProps} />
}

const BadgesPropedSenshi = props => {
	return (
		<BadgesOptioned
			badgeClass='mx-1'
			className={styles['padding-y']}
			{...props}
		/>
	)
}

export { BadgesOptioned, BadgesPropedSenshi, Badges }
