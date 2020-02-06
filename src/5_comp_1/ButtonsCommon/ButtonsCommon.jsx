import React, { Fragment, useCallback } from 'react'
import { Row, Col } from 'reactstrap'
import clsx from 'clsx'
import { Exports } from '5_comp_0'
import { stopUndefined } from '1_utils'
const { Button, UncontrolledTooltip, Link } = stopUndefined(Exports)

const BUTTONS_COMMON_ID = 'id'
const BUTTONS_COMMON_ICON = 'icon'
const BUTTONS_COMMON_COLOR = 'color'
const BUTTONS_COMMON_TOOLTIP = 'tooltip'
const BUTTONS_COMMON_HREF = 'href'
const BUTTONS_COMMON_LABEL = 'label'
const BUTTONS_COMMON_TO = 'to'

const ButtonsCommon = props => {
	const { onClick, buttons, className, col, baseClass, rowClass } = props

	const EnclosureCol = col ? Col : Fragment
	return (
		<Row className={clsx('justify-content-center', rowClass)}>
			{buttons.map(button => {
				const {
					[BUTTONS_COMMON_ID]: id,
					[BUTTONS_COMMON_ICON]: icon,
					[BUTTONS_COMMON_COLOR]: color,
					[BUTTONS_COMMON_TOOLTIP]: tooltip,
					[BUTTONS_COMMON_HREF]: href,
					[BUTTONS_COMMON_TO]: to,
					[BUTTONS_COMMON_LABEL]: label,
				} = button

				const onClick_ = useCallback(
					e => {
						onClick && onClick(e, button)
					},
					[onClick, button]
				)
				const id_ = 'ButtonsCommon' + id
				return (
					<EnclosureCol key={id_}>
						<Button
							size='lg'
							baseClass={baseClass}
							className={className || 'btn-icon btn-round'}
							color={color}
							id={id_}
							{...((to || href) && { tag: Link })}
							to={to}
							href={href}
							onClick={onClick_}
						>
							{icon()}
							{label}
						</Button>
						<UncontrolledTooltip delay={0} target={id_}>
							{tooltip}
						</UncontrolledTooltip>
					</EnclosureCol>
				)
			})}
		</Row>
	)
}

export {
	ButtonsCommon,
	BUTTONS_COMMON_ID,
	BUTTONS_COMMON_ICON,
	BUTTONS_COMMON_COLOR,
	BUTTONS_COMMON_TOOLTIP,
	BUTTONS_COMMON_HREF,
	BUTTONS_COMMON_LABEL,
	BUTTONS_COMMON_TO,
}
