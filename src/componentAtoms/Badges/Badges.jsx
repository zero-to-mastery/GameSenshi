import React, { Fragment } from 'react'
import { Badge } from 'reactstrap'
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
	const { badges, className } = props
	return badges.map(badge => {
		const {
			[BADGES_COLOR]: color,
			[BADGES_BODY]: body,
			[BADGES_ID]: id,
			[BADGES_TOOLTIP]: tooltip,
			[BADGES_CLASS]: classname,
		} = badge
		return (
			<Fragment key={id}>
				<Badge
					color={color}
					className={classnames(classname, className)}
					id={id}
				>
					{body}
				</Badge>
				<UncontrolledTooltip delay={0} target={id}>
					{tooltip}
				</UncontrolledTooltip>
			</Fragment>
		)
	})
}

export {
	Badges,
	BADGES_COLOR,
	BADGES_BODY,
	BADGES_ID,
	BADGES_TOOLTIP,
	BADGES_CLASS,
}
