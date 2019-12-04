import React, { forwardRef } from 'react'
import { Button as Button1 } from 'reactstrap'
import ButtonBase from '@material-ui/core/ButtonBase'
import classnames from 'classnames'
import styles from './styles.module.css'

const Button = forwardRef((props, ref) => {
	const { baseClass, baseStyle, className, ...otherProps } = props
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
			<Button1 ref={ref} className={className_} {...otherProps} />
		</ButtonBase>
	)
})

export { Button }
