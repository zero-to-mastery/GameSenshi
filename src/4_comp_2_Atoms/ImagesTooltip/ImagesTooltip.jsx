import React from 'react'
import classnames from 'classnames'
import Image from 'material-ui-image'
import { Exports } from '4_comp_1_Protons'
import { stopUndefined } from '1_utils'
const { UncontrolledTooltip } = stopUndefined(Exports)

const ICONS_COMMON_ID = 'id'
const ICONS_COMMON_TOOLTIP = 'tooltip'
const ICON_COMMON_PATH = 'path'

const ImagesTooltip = props => {
	const { icons, className } = props

	return icons.map(icon => {
		const {
			[ICONS_COMMON_ID]: id,
			[ICON_COMMON_PATH]: path,
			[ICONS_COMMON_TOOLTIP]: tooltip,
		} = icon
		const id_ = 'ImagesTooltip' + id.replace(/ /g, '')
		return (
			<div key={id_} className={classnames('m-1', className)}>
				<Image src={path} alt={tooltip} id={id_} color={'transparent'} />
				<UncontrolledTooltip delay={0} target={id_}>
					{tooltip}
				</UncontrolledTooltip>
			</div>
		)
	})
}

export {
	ImagesTooltip,
	ICONS_COMMON_ID,
	ICON_COMMON_PATH,
	ICONS_COMMON_TOOLTIP,
}
