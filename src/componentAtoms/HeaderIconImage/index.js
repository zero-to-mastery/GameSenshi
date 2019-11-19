import React from 'react'
import { HeaderIconImage } from './HeaderIconImage'
import classnames from 'classnames'

const HeaderIconImagePropedIndex = props => {
	const { className, ...otherProps } = props
	return (
		<HeaderIconImage
			src={'none'}
			h='h1'
			iconHeight={34}
			iconWidth={34}
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
			{...otherProps}
		>
			<span role='img' aria-label='recommended player'>
				💖
			</span>{' '}
			Recommended
		</HeaderIconImagePropedIndex>
	)
}

const HeaderIconImagePropedNewPlayer = props => {
	const { className, ...otherProps } = props
	return (
		<HeaderIconImagePropedIndex
			className={classnames('text-success', className)}
			{...otherProps}
		>
			<span role='img' aria-label='new player'>
				🌻
			</span>{' '}
			New Player
		</HeaderIconImagePropedIndex>
	)
}

const HeaderIconImagePropedRandomPlayer = props => {
	const { className, ...otherProps } = props
	return (
		<HeaderIconImagePropedIndex
			className={classnames('text-warning', className)}
			{...otherProps}
		>
			<span role='img' aria-label='random player'>
				🏆
			</span>{' '}
			Random
		</HeaderIconImagePropedIndex>
	)
}
export {
	HeaderIconImagePropedPopularPlayer,
	HeaderIconImagePropedNewPlayer,
	HeaderIconImagePropedRandomPlayer,
}
