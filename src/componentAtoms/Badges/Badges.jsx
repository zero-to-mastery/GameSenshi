import React, { Fragment } from 'react'
import { Badge, Row, Col } from 'reactstrap'
import classnames from 'classnames'
import { Exports } from 'componentaProton'
import { stopUndefined } from 'utils'

const { UncontrolledTooltip } = stopUndefined(Exports)

const BADGES_COLOR = 'color'
const BADGES_BODY = 'body'
const BADGES_ID = 'id'
const BADGES_TOOLTIP = 'tooltip'
const BADGES_CLASS = 'classname'

const Badges = props => {
	const { badges, className, col, badgeClass } = props
	const EnclosureCol = col ? Col : Fragment
	return (
		<Row className={classnames(className)}>
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
							className={classnames(badgeClass, classname)}
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
		</Row>
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
