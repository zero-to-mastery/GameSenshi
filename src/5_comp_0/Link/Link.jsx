import React from 'react'
import LinkNoStack from 'react-router-link-nostack'
import ButtonBase from '@material-ui/core/ButtonBase'
import clsx from 'clsx'

const LinkNoBase = LinkNoStack

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
				<LinkNoBase
					to={to}
					className={clsx('text-nowrap w-100 mx-0', className)}
					{...otherProps}
				>
					{children}
				</LinkNoBase>
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

export { Link, LinkNoBase }
