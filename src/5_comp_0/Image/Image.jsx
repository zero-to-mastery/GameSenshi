import React, { memo } from 'react'
import ImageMU from 'material-ui-image'
import clsx from 'clsx'

const Image = memo(props => {
	const { className, style, ...otherProp } = props
	return (
		<ImageMU
			color='transparent'
			style={{ padding: 0, ...style }}
			className={clsx('position-static', className)}
			{...otherProp}
		/>
	)
})

export { Image }
