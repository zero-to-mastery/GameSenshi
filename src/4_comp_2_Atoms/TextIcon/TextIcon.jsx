import React from 'react'
import classnames from 'classnames'
import { Exports } from '5_comp_0'
import { stopUndefined } from '1_utils'
const { Icon } = stopUndefined(Exports)

const TextIcon = props => {
	const {
		h: H,
		className,
		children,
		image,
		icon,
		emoji,
		aria,
		...otherProps
	} = props

	return (
		<H className={classnames('d-flex', className)} {...otherProps}>
			<Icon image={image} emoji={emoji} icon={icon} aria-label={aria} />
			{children}
		</H>
	)
}

export { TextIcon }
