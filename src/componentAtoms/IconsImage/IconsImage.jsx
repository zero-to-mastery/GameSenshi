import React from 'react'
import classnames from 'classnames'
import Image from 'material-ui-image'
import { Exports } from 'componentaProton'
import { stopUndefined } from 'utils'
const { UncontrolledTooltip } = stopUndefined(Exports)

const ICONS_COMMON_ID = 'id'
const ICONS_COMMON_TOOLTIP = 'tooltip'
const ICON_COMMON_PATH = 'path'

const IconsImage = props => {
	const { icons, className } = props

	return icons.map(icon => {
		const {
			[ICONS_COMMON_ID]: id,
			[ICON_COMMON_PATH]: path,
			[ICONS_COMMON_TOOLTIP]: tooltip,
		} = icon
		const id_ = 'IconsImage' + id.replace(/ /g, '')
		return (
			<div key={id_} className={classnames('m-1', className)}>
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

export { IconsImage, ICONS_COMMON_ID, ICON_COMMON_PATH, ICONS_COMMON_TOOLTIP }
