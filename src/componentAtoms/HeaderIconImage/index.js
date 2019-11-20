import React from 'react'
import { HeaderIconImage } from './HeaderIconImage'
import classnames from 'classnames'

const HeaderIconImagePropedIndex = props => {
	const { className, ...otherProps } = props
	return (
		<HeaderIconImage
			src={'none'}
			h='h1'
			className={classnames('font-weight-bold', className)}
			{...otherProps}
		/>
	)
}

const HeaderIconImagePropedPopularPlayer = props => {
	const { className, ...otherProps } = props
	return (
		<HeaderIconImagePropedIndex
			className={classnames('text-primary', className)}
			aria-label='recommended player'
			emoji='💖'
			{...otherProps}
		>
			Recommended
		</HeaderIconImagePropedIndex>
	)
}

const HeaderIconImagePropedNewPlayer = props => {
	const { className, ...otherProps } = props
	return (
		<HeaderIconImagePropedIndex
			className={classnames('text-success', className)}
			aria-label='new player'
			emoji='🌻'
			{...otherProps}
		>
			New Player
		</HeaderIconImagePropedIndex>
	)
}

const HeaderIconImagePropedRandomPlayer = props => {
	const { className, ...otherProps } = props
	return (
		<HeaderIconImagePropedIndex
			className={classnames('text-warning', className)}
			aria-label='discover'
			emoji='🏆'
			{...otherProps}
		>
			Discover
		</HeaderIconImagePropedIndex>
	)
}
export {
	HeaderIconImagePropedPopularPlayer,
	HeaderIconImagePropedNewPlayer,
	HeaderIconImagePropedRandomPlayer,
}
