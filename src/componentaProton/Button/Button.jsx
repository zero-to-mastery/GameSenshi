import React, { forwardRef } from 'react'
import { Button as ButtonRS } from 'reactstrap'
import ButtonBase from '@material-ui/core/ButtonBase'
import classnames from 'classnames'
import styles from './styles.module.css'

const Button = forwardRef((props, ref) => {
	const { baseClass, baseStyle, className, tag, ...otherProps } = props
	const className_ = className || ''
	return (
		<ButtonBase
			component='span'
			className={classnames(baseClass, {
				[styles['btn']]: !className_.includes('btn-round'),
				[styles['btn-round']]: className_.includes('btn-round'),
			})}
			style={baseStyle}
		>
			<ButtonRS
				ref={ref}
				tag={tag}
				className={classnames(className)}
				{...otherProps}
				{...(tag && { baseClass, baseStyle })}
			/>
		</ButtonBase>
	)
})

export { Button }
