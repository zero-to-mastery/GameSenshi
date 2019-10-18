import React, { Fragment } from 'react'
import { Button, UncontrolledTooltip } from 'reactstrap'
import classNames from 'classnames'

const BUTTON_SOCIALS_AUTH_ON_CLICKS = 'onClicks'
const BUTTON_SOCIALS_ID = 'id'
const BUTTON_SOCIALS_ICON = 'icon'
const BUTTON_SOCIALS_COLOR = 'color'
const BUTTON_SOCIALS_TOOLTIP = 'tooltip'
const BUTTONS = 'buttons'

const ButtonSocials = props => {
	const {
		[BUTTON_SOCIALS_AUTH_ON_CLICKS]: onClicks,
		[BUTTONS]: buttons,
		className,
	} = props

	return (
		<div className={classNames('btn-wrapper', 'text-center', className)}>
			{buttons.map((button, i) => {
				const {
					[BUTTON_SOCIALS_ID]: id,
					[BUTTON_SOCIALS_ICON]: icon,
					[BUTTON_SOCIALS_COLOR]: color,
					[BUTTON_SOCIALS_TOOLTIP]: tooltip,
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
	BUTTON_SOCIALS_AUTH_ON_CLICKS,
	BUTTON_SOCIALS_ID,
	BUTTON_SOCIALS_ICON,
	BUTTON_SOCIALS_COLOR,
	BUTTON_SOCIALS_TOOLTIP,
}
