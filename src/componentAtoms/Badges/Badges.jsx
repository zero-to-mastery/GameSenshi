import React from 'react'
import { Badge, UncontrolledTooltip } from 'reactstrap'

const BADGES_COLOR = 'color'
const BADGES_BODY = 'body'
const BADGES_ID = 'id'
const BADGES_TOOLTIP = 'tooltip'

const BADGES_OPTIONS = ['female', 'verified', 'risingStar']

const options = [
	{
		[BADGES_ID]: BADGES_OPTIONS[0],
		[BADGES_COLOR]: 'primary',
		[BADGES_BODY]: 'Female',
	},
	{
		[BADGES_ID]: BADGES_OPTIONS[1],
		[BADGES_COLOR]: 'info',
		[BADGES_BODY]: 'Verified',
	},
	{
		[BADGES_ID]: BADGES_OPTIONS[2],
		[BADGES_COLOR]: 'warning',
		[BADGES_BODY]: 'Rising Star',
		[BADGES_TOOLTIP]: 'New player that gaining attention fast!',
	},
]

const Badges = props => {
	const { badges } = props
	return badges.map(badge => {
		const {
			[BADGES_COLOR]: color,
			[BADGES_BODY]: body,
			[BADGES_ID]: id,
			[BADGES_TOOLTIP]: tooltip,
		} = options.find(option => option[BADGES_ID] === badge)

		return (
			<>
				<Badge color={color} key={id} className='ml-1' id={id}>
					{body}
				</Badge>
				{tooltip && (
					<UncontrolledTooltip delay={0} target={id}>
						{tooltip}
					</UncontrolledTooltip>
				)}
			</>
		)
	})
}

export { Badges, BADGES_OPTIONS }
