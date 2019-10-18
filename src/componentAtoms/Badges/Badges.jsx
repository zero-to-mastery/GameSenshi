import React from 'react'
import { Badge } from 'reactstrap'

const BADGES_COLOR = 'color'
const BADGES_BODY = 'body'
const BADGES_ID = 'id'

const Badges = props => {
	const { badges } = props
	return badges.map(badge => {
		const {
			[BADGES_COLOR]: color,
			[BADGES_BODY]: body,
			[BADGES_ID]: id,
		} = badge
		return (
			<Badge color={color} key={id} className='ml-1'>
				{body}
			</Badge>
		)
	})
}

export { Badges, BADGES_COLOR, BADGES_BODY, BADGES_ID }
