import React, { Fragment, useCallback } from 'react'
import { Button, UncontrolledTooltip } from 'reactstrap'
import classNames from 'classnames'

const BUTTON_SOCIALS_ID = 'id'
const BUTTON_SOCIALS_ICON = 'icon'
const BUTTON_SOCIALS_COLOR = 'color'
const BUTTON_SOCIALS_TOOLTIP = 'tooltip'
const BUTTON_SOCIALS_HREF = 'href'

const ButtonIcons = props => {
	const { onClick, buttons, className } = props

	return (
		<div className={classNames('btn-wrapper', 'text-center', className)}>
			{buttons.map(button => {
				const {
					[BUTTON_SOCIALS_ID]: id,
					[BUTTON_SOCIALS_ICON]: icon,
					[BUTTON_SOCIALS_COLOR]: color,
					[BUTTON_SOCIALS_TOOLTIP]: tooltip,
					[BUTTON_SOCIALS_HREF]: href,
				} = button

				const href_ = href || ''

				const onClick_ = useCallback(
					e => {
						onClick && onClick(e, button)
					},
					[onClick, button]
				)

				return (
					<Fragment key={id}>
						<Button
							size='lg'
							className='btn-icon btn-round'
							color={color}
							href={href_}
							id={id}
							target='_blank'
							rel='noopener noreferrer'
							onClick={onClick_}>
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
	ButtonIcons,
	BUTTON_SOCIALS_ID,
	BUTTON_SOCIALS_ICON,
	BUTTON_SOCIALS_COLOR,
	BUTTON_SOCIALS_TOOLTIP,
	BUTTON_SOCIALS_HREF,
}
