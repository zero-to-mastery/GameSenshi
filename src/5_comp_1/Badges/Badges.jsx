import React, { Fragment } from 'react'
import { Badge, Row, Col } from 'reactstrap'
import clsx from 'clsx'
import { Exports } from '5_comp_0'
import { stopUndefined } from '1_utils'

const { UncontrolledTooltip } = stopUndefined(Exports)

const BADGES_COLOR = 'color'
const BADGES_BODY = 'body'
const BADGES_ID = 'id'
const BADGES_TOOLTIP = 'tooltip'
const BADGES_CLASS = 'classname'

const Badges = props => {
	const { badges, className, col, row, badgeClass } = props
	const EnclosureCol = col ? Col : Fragment
	const EnclosureRow = row ? Row : Fragment
	return (
		<EnclosureRow {...(row && { className: clsx(className) })}>
			{badges.map(badge => {
				const {
					[BADGES_COLOR]: color,
					[BADGES_BODY]: body,
					[BADGES_ID]: id,
					[BADGES_TOOLTIP]: tooltip,
					[BADGES_CLASS]: classname,
				} = badge
				return (
					<EnclosureCol key={id}>
						<Badge
							color={color}
							className={clsx(badgeClass, classname)}
							id={id}
						>
							{body}
						</Badge>
						<UncontrolledTooltip delay={0} target={id}>
							{tooltip}
						</UncontrolledTooltip>
					</EnclosureCol>
				)
			})}
		</EnclosureRow>
	)
}

export {
	Badges,
	BADGES_COLOR,
	BADGES_BODY,
	BADGES_ID,
	BADGES_TOOLTIP,
	BADGES_CLASS,
}
