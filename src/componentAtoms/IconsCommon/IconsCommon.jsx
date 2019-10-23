import React from 'react'
import classNames from 'classnames'
import { UncontrolledTooltip } from 'reactstrap'
import Image from 'material-ui-image'

const ICONS_COMMON_ID = 'id'
const ICONS_COMMON_TOOLTIP = 'tooltip'
const ICON_COMMON_PATH = 'path'

const IconsCommon = props => {
	const { icons, className } = props

	return icons.map(icon => {
		const {
			[ICONS_COMMON_ID]: id,
			[ICON_COMMON_PATH]: path,
			[ICONS_COMMON_TOOLTIP]: tooltip,
		} = icon
		const id_ = 'IconsCommon' + id.replace(/ /g, '')
		return (
			<div key={id_} className={classNames('m-1', className)}>
				<Image
					src={path}
					alt={tooltip}
					id={id_}
					style={{ backgroundColor: 'transparent' }}
				/>
				<UncontrolledTooltip delay={0} target={id_}>
					{tooltip}
				</UncontrolledTooltip>
			</div>
		)
	})
}

export { IconsCommon, ICONS_COMMON_ID, ICON_COMMON_PATH, ICONS_COMMON_TOOLTIP }
