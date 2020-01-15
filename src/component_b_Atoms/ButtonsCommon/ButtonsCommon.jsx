import React, { Fragment, useCallback } from 'react'
import { Row, Col } from 'reactstrap'
import classnames from 'classnames'
import { Exports } from 'component_a_Protons'
import { stopUndefined } from 'utils'
const { Button, UncontrolledTooltip, Icon, Link } = stopUndefined(Exports)

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
		<Row className={classnames('justify-content-center', rowClass)}>
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
							{...(to && { tag: Link, to })} // visit other page
							{...(href && {
								target: '_blank',
								rel: 'noopener noreferrer',
								href,
							})} // visit third party website
							onClick={onClick_}
						>
							<Icon {...icon} />
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
