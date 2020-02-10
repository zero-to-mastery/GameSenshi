import React, { useState, useCallback } from 'react'
import Image from 'material-ui-image'
import clsx from 'clsx'

const Icon = props => {
	const [error, setError] = useState(false)

	const { image, emoji, icon, 'aria-label': aria, className, style } = props

	const onError = useCallback(() => {
		setError(true)
	}, [])

	return (
		(image || emoji || icon) && (
			<>
				{image && !error && (
					<Image
						src={image}
						onError={onError}
						color='transparent'
						style={{ padding: 0, ...style }}
						className={clsx('position-static', className)}
					/>
				)}
				{(!image || (emoji && error)) && (
					<span role='img' className={className} aria-label={aria}>
						{emoji}
					</span>
				)}
				{(!image || (icon && error)) && icon && icon()}
			</>
		)
	)
}

export { Icon }
