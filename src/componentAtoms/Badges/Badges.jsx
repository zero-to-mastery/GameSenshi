import React from 'react'
import { Badge, UncontrolledTooltip } from 'reactstrap'
import classNames from 'classnames'

const BADGES_COLOR = 'color'
const BADGES_BODY = 'body'
const BADGES_ID = 'id'
const BADGES_TOOLTIP = 'tooltip'

const Badges = props => {
	const { badges, options } = props
	return badges.map((badge, i) => {
		const {
			[BADGES_COLOR]: color,
			[BADGES_BODY]: body,
			[BADGES_ID]: id,
			[BADGES_TOOLTIP]: tooltip,
		} = options.find(option => option[BADGES_ID] === badge)

		return (
			<>
				<Badge
					color={color}
					key={id}
					className={classNames({ 'mr-1': i !== badges.length - 1 })}
					id={id}>
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

export { Badges, BADGES_COLOR, BADGES_BODY, BADGES_ID, BADGES_TOOLTIP }
