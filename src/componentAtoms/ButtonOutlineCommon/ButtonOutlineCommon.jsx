import React, { Fragment } from 'react'
import { Button, UncontrolledTooltip } from 'reactstrap'
import Image from 'material-ui-image'

const ICONS_COMMON_ID = 'id'
const ICONS_COMMON_TOOLTIP = 'tooltip'
const ICON_COMMON_PATH = 'path'

const ButtonOutlineCommon = props => {
	const { options } = props

	return options.map(option => {
		const {
			[ICONS_COMMON_ID]: id,
			[ICONS_COMMON_TOOLTIP]: tooltip,
			[ICON_COMMON_PATH]: path,
		} = option
		const id_ = 'IconsCommon' + id.replace(/ /g, '')
		return (
			<Fragment>
				<Button className='btn-simple' color='reddit'>
					<Image
						src={path}
						alt={tooltip}
						id={id_}
						style={{ backgroundColor: 'transparent' }}
					/>
					<UncontrolledTooltip delay={0} target={id_}>
						{tooltip}
					</UncontrolledTooltip>
				</Button>
			</Fragment>
		)
	})
}

export { ButtonOutlineCommon }
