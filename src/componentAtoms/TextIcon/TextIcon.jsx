import React, { useState, useCallback } from 'react'
import classnames from 'classnames'
import Image from 'material-ui-image'
import { Row, Col } from 'reactstrap'

const TextIcon = props => {
	const [error, setError] = useState(false)

	const {
		h: H,
		className,
		children,
		src,
		iconHeight,
		iconWidth,
		emoji,
		fallbackToEmoji,
		['aria-label']: aria,
		...otherProps
	} = props

	const onError = useCallback(() => {
		setError(true)
	}, [])

	return (
		<Row>
			<Col>
				<H className={classnames('d-flex', className)} {...otherProps}>
					{!emoji && !error && (
						<div className='mr-2'>
							<Image
								src={src}
								onError={onError}
								color='transparent'
								style={{
									width: iconWidth,
									height: iconHeight,
									padding: 0,
								}}
							/>
						</div>
					)}
					{(emoji || (fallbackToEmoji && error)) && (
						<span role='img' aria-label={aria}>
							{emoji}
						</span>
					)}
					{children}
				</H>
			</Col>
		</Row>
	)
}

export { TextIcon }
