import React from 'react'
import clsx from 'clsx'
import { Exports } from '5_comp_0'
import { stopUndefined } from '1_utils'
const { UncontrolledTooltip, Row, Col, Image } = stopUndefined(Exports)

const ICONS_COMMON_ID = 'id'
const ICONS_COMMON_TOOLTIP = 'tooltip'
const ICON_COMMON_PATH = 'path'

const ImagesTooltip = props => {
	const { icons, className, ...otherProps } = props

	return (
		<Row>
			{icons.map(icon => {
				const {
					[ICONS_COMMON_ID]: id,
					[ICON_COMMON_PATH]: path,
					[ICONS_COMMON_TOOLTIP]: tooltip,
				} = icon
				const id_ = 'ImagesTooltip' + id.replace(/ /g, '')
				return (
					<Col key={id_}>
						<Image
							src={path}
							alt={tooltip}
							id={id_}
							className={clsx(className)}
							{...otherProps}
						/>
						<UncontrolledTooltip delay={0} target={id_}>
							{tooltip}
						</UncontrolledTooltip>
					</Col>
				)
			})}
		</Row>
	)
}

export {
	ImagesTooltip,
	ICONS_COMMON_ID,
	ICON_COMMON_PATH,
	ICONS_COMMON_TOOLTIP,
}
