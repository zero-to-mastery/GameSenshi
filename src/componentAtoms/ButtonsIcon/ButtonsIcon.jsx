import React, { Fragment, useCallback } from 'react'
import { Row } from 'reactstrap'
import classnames from 'classnames'
import { Exports } from 'componentaProton'
import { stopUndefined } from 'utils'
const { Button, UncontrolledTooltip } = stopUndefined(Exports)

const BUTTONS_ICON_ID = 'id'
const BUTTONS_ICON_ICON = 'icon'
const BUTTONS_ICON_COLOR = 'color'
const BUTTONS_ICON_TOOLTIP = 'tooltip'
const BUTTONS_ICON_HREF = 'href'
const BUTTONS_ICON_LABEL = 'label'
const BUTTONS_ICON_CLASS_NAME = 'class'

const ButtonsIcon = props => {
	const { onClick, buttons, className } = props

	return (
		<Row className={classnames('justify-content-center', className)}>
			{buttons.map(button => {
				const {
					[BUTTONS_ICON_ID]: id,
					[BUTTONS_ICON_ICON]: icon,
					[BUTTONS_ICON_COLOR]: color,
					[BUTTONS_ICON_TOOLTIP]: tooltip,
					[BUTTONS_ICON_HREF]: href,
					[BUTTONS_ICON_LABEL]: label,
					[BUTTONS_ICON_CLASS_NAME]: className,
				} = button

				const href_ = href || ''

				const onClick_ = useCallback(
					e => {
						onClick && onClick(e, button)
					},
					[onClick, button]
				)
				const id_ = 'ButtonsIcon' + id
				const baseStyle_ = label ? { flex: 1 } : null
				return (
					<Fragment key={id_}>
						<Button
							size='lg'
							className={className}
							baseStyle={baseStyle_}
							color={color}
							href={href_}
							id={id_}
							target='_blank'
							rel='noopener noreferrer'
							onClick={onClick_}
						>
							{label && label} <i className={icon} />
						</Button>
						<UncontrolledTooltip delay={0} target={id_}>
							{tooltip}
						</UncontrolledTooltip>
					</Fragment>
				)
			})}
		</Row>
	)
}

export {
	ButtonsIcon,
	BUTTONS_ICON_ID,
	BUTTONS_ICON_ICON,
	BUTTONS_ICON_COLOR,
	BUTTONS_ICON_TOOLTIP,
	BUTTONS_ICON_HREF,
	BUTTONS_ICON_LABEL,
	BUTTONS_ICON_CLASS_NAME,
}
