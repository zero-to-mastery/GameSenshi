import React, { Fragment } from 'react'
import { Button, UncontrolledTooltip } from 'reactstrap'
import classNames from 'classnames'

const BUTTONS_SOCIAL_AUTH_ON_CLICKS = 'onClicks'
const ID = 'id'
const ICON = 'icon'
const COLOR = 'color'
const TOOLTIP = 'tooltip'
const BUTTONS = 'buttons'

const ButtonSocials = props => {
	const {
		[BUTTONS_SOCIAL_AUTH_ON_CLICKS]: onClicks,
		[BUTTONS]: buttons,
		className,
	} = props

	return (
		<div className={classNames('btn-wrapper', 'text-center', className)}>
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
							onClick={onClicks[i]}>
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

export {
	ButtonSocials,
	BUTTONS_SOCIAL_AUTH_ON_CLICKS,
	ID,
	ICON,
	COLOR,
	TOOLTIP,
}
