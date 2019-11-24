import React from 'react'
import { TextIcon } from './TextIcon'
import classnames from 'classnames'

const TextIconPropedIndex = props => {
	const { className, ...otherProps } = props
	return (
		<TextIcon
			src={'none'}
			h='h1'
			className={classnames('font-weight-bold title mt-3 mb-3', className)}
			{...otherProps}
		/>
	)
}

const TextIconPropedPopularPlayer = props => {
	const { className, ...otherProps } = props
	return (
		<TextIconPropedIndex
			className={classnames('text-primary', className)}
			aria-label='recommended player'
			emoji='💖'
			{...otherProps}
		>
			Recommended
		</TextIconPropedIndex>
	)
}

const TextIconPropedNewPlayer = props => {
	const { className, ...otherProps } = props
	return (
		<TextIconPropedIndex
			className={classnames('text-success', className)}
			aria-label='new player'
			emoji='🌻'
			{...otherProps}
		>
			New Player
		</TextIconPropedIndex>
	)
}

const TextIconPropedRandomPlayer = props => {
	const { className, ...otherProps } = props
	return (
		<TextIconPropedIndex
			className={classnames('text-warning', className)}
			aria-label='discover'
			emoji='🏆'
			{...otherProps}
		>
			Discover
		</TextIconPropedIndex>
	)
}
export {
	TextIconPropedPopularPlayer,
	TextIconPropedNewPlayer,
	TextIconPropedRandomPlayer,
}
