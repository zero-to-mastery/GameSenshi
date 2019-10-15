import React, { Fragment } from 'react'
import { Button, UncontrolledTooltip } from 'reactstrap'

const BUTTONS_SOCIAL_PROFILE = 'onClicks'
const ID = 'id'
const ICON = 'icon'
const COLOR = 'color'
const TOOLTIP = 'tooltip'
const BUTTONS = 'buttons'

const ButtonsSocial = props => {
	const { [BUTTONS]: buttons, [BUTTONS_SOCIAL_PROFILE]: onClicks } = props

	return (
		<div className='btn-wrapper text-center'>
			{buttons.map((button, i) => {
				const {
					[ID]: id,
					[ICON]: icon,
					[COLOR]: color,
					[TOOLTIP]: tooltip,
				} = button
				return (
					<Fragment key={id}>
						<Button
							size='lg'
							className='btn-icon btn-round'
							color={color}
							href=''
							id={id}
							target='_blank'
							// onClick={onClicks[i]}
						>
							<i className={icon} />
						</Button>
						<UncontrolledTooltip delay={0} target={id}>
							{tooltip}
						</UncontrolledTooltip>
					</Fragment>
				)
			})}
		</div>
	)
}

export { ButtonsSocial, ID, ICON, COLOR, TOOLTIP, BUTTONS_SOCIAL_PROFILE }
