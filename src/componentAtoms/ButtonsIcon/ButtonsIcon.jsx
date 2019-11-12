import React, { Fragment, useCallback, useMemo } from 'react'
import { Button, UncontrolledTooltip } from 'reactstrap'
import classNames from 'classnames'

const BUTTONS_ICON_ID = 'id'
const BUTTONS_ICON_ICON = 'icon'
const BUTTONS_ICON_COLOR = 'color'
const BUTTONS_ICON_TOOLTIP = 'tooltip'
const BUTTONS_ICON_HREF = 'href'

const ButtonsIcon = props => {
	const { onClick, buttons, className } = props

	return (
		<div className={classNames('text-center', className)}>
			{buttons.map(button => {
				const {
					[BUTTONS_ICON_ID]: id,
					[BUTTONS_ICON_ICON]: icon,
					[BUTTONS_ICON_COLOR]: color,
					[BUTTONS_ICON_TOOLTIP]: tooltip,
					[BUTTONS_ICON_HREF]: href,
				} = button

				const href_ = href || ''

				const onClick_ = useCallback(
					e => {
						onClick && onClick(e, button)
					},
					[onClick, button]
				)
				const id_ = useMemo(() => 'ButtonsIcon' + id.replace(/ /g, ''), [id])

				return (
					<Fragment key={id_}>
						<Button
							size='lg'
							className='btn-icon btn-round'
							color={color}
							href={href_}
							id={id_}
							target='_blank'
							rel='noopener noreferrer'
							onClick={onClick_}>
							<i className={icon} />
						</Button>
						<UncontrolledTooltip delay={0} target={id_}>
							{tooltip}
						</UncontrolledTooltip>
					</Fragment>
				)
			})}
		</div>
	)
}

export {
	ButtonsIcon,
	BUTTONS_ICON_ID,
	BUTTONS_ICON_ICON,
	BUTTONS_ICON_COLOR,
	BUTTONS_ICON_TOOLTIP,
	BUTTONS_ICON_HREF,
}
