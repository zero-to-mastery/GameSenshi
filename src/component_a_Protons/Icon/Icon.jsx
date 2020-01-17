import React, { useState, useCallback } from 'react'
import Image from 'material-ui-image'

const ICON_IMAGE = 'image'
const ICON_EMOJI = 'emoji'
const ICON_ICON = 'icon'

const Icon = props => {
	const [error, setError] = useState(false)

	const {
		[ICON_IMAGE]: image,
		[ICON_EMOJI]: emoji,
		[ICON_ICON]: icon,
		'aria-label': aria,
		className,
	} = props

	const onError = useCallback(() => {
		setError(true)
	}, [])

	return (
		(image || emoji || icon) && (
			<span className={className}>
				{image && !error && (
					<Image
						src={image}
						onError={onError}
						color='transparent'
						style={{
							width: 'auto',
							height: '100%',
							padding: 0,
						}}
					/>
				)}
				{(!image || (emoji && error)) && (
					<span role='img' aria-label={aria}>
						{emoji}
					</span>
				)}
				{(!image || (icon && error)) && <i className={icon} />}
			</span>
		)
	)
}

export { Icon, ICON_IMAGE, ICON_EMOJI, ICON_ICON }
