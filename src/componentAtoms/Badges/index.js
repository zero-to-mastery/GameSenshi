import React, { useMemo } from 'react'
import { Badges } from './Badges'
import { getOptions } from './utils'

const BadgesOptioned = props => {
	const { badges, ...otherProps } = props
	const badges_ = useMemo(() => getOptions(badges), [badges])
	return <Badges badges={badges_} {...otherProps} />
}

const BadgesPropedSenshi = props => {
	return <BadgesOptioned className='mx-1' {...props} />
}

export { BadgesOptioned, BadgesPropedSenshi, Badges }
