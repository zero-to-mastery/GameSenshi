import React, { useState, useCallback, useMemo } from 'react'
import Image from 'material-ui-image'

const Icon = props => {
	const [error, setError] = useState(false)

	const { image, emoji, icon, 'aria-label': aria, className } = props

	const onError = useCallback(() => {
		setError(true)
	}, [])

	const icon_ = useMemo(() => (icon ? icon : () => {}), [icon])

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
				{(!image || (icon && error)) && icon_()}
			</span>
		)
	)
}

export { Icon }
