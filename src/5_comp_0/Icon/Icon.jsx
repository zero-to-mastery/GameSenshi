import React, { useState, useCallback } from 'react'
import Image from 'material-ui-image'

const Icon = props => {
	const [error, setError] = useState(false)

	const { image, emoji, icon, 'aria-label': aria, className } = props

	const onError = useCallback(() => {
		setError(true)
	}, [])

	return (
		(image || emoji || icon) && (
			<span className={className}>
				{image && !error && (
					<Image src={image} onError={onError} color='transparent' />
				)}
				{(!image || (emoji && error)) && (
					<span role='img' aria-label={aria}>
						{emoji}
					</span>
				)}
				{(!image || (icon && error)) && icon && icon()}
			</span>
		)
	)
}

export { Icon }
