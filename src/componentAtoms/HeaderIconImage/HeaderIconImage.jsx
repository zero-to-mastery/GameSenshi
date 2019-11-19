import React, { useState, useCallback } from 'react'
import classnames from 'classnames'
import Image from 'material-ui-image'
import { Row, Col } from 'reactstrap'

const HeaderIconImage = props => {
	const [error, setError] = useState(false)

	const {
		h: H,
		className,
		children,
		src,
		iconHeight,
		iconWidth,
		...otherProps
	} = props

	const onError = useCallback(() => {
		setError(true)
	}, [])

	return (
		<Row>
			<Col>
				<H className={classnames('title d-flex', className)} {...otherProps}>
					{!error && (
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
					{children}
				</H>
			</Col>
		</Row>
	)
}

export { HeaderIconImage }
