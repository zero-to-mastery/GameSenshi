import React, { forwardRef, Fragment, useMemo } from 'react'
import { Button as ButtonRS } from 'reactstrap'
import { ButtonBase } from '@material-ui/core'
import clsx from 'clsx'
import styles from './styles.module.css'

const Button = forwardRef((props, ref) => {
	const { baseClass, baseStyle, className, tag, ...otherProps } = props
	const Enclosure = useMemo(() => (tag ? Fragment : ButtonBase), [tag])
	const className_ = className || ''

	return (
		<Enclosure
			{...(!tag && {
				component: 'span',
				className: clsx(
					baseClass,
					className_.includes('btn-round') ? styles['btn-round'] : styles.btn
				),
				style: baseStyle,
			})}
		>
			<ButtonRS
				ref={ref}
				tag={tag}
				className={clsx('text-nowrap w-100 mx-0', className)}
				{...otherProps}
				{...(tag && { baseClass, baseStyle })}
			/>
		</Enclosure>
	)
})

export { Button }
