import React from 'react'
import LinkNoStack from 'react-router-link-nostack'
import ButtonBase from '@material-ui/core/ButtonBase'
import clsx from 'clsx'

const Link = props => {
	const {
		baseClass,
		baseStyle,
		to,
		href,
		children,
		className,
		...otherProps
	} = props
	return (
		<ButtonBase component='span' className={clsx(baseClass)} style={baseStyle}>
			{to && (
				<LinkNoStack
					to={to}
					className={clsx('text-nowrap w-100 mx-0', className)}
					{...otherProps}
				>
					{children}
				</LinkNoStack>
			)}
			{!to && href && (
				<a
					className={clsx('text-nowrap w-100 mx-0', className)}
					target='_blank'
					rel='noopener noreferrer'
					href={href}
					{...otherProps}
				>
					{children}
				</a>
			)}
		</ButtonBase>
	)
}

export { Link, LinkNoStack }
