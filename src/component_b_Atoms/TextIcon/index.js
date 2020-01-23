import React from 'react'
import { TextIcon } from './TextIcon'
import classnames from 'classnames'
import { Row, Col } from 'reactstrap'

const TextIconPropedIndex = props => {
	const { className, ...otherProps } = props
	return (
		<Row>
			<Col>
				<TextIcon
					h='h1'
					className={classnames('font-weight-bold title mt-3 mb-3', className)}
					{...otherProps}
				/>
			</Col>
		</Row>
	)
}

const TextIconPropedProfile = props => {
	const { className, ...otherProps } = props
	return (
		<Row>
			<Col>
				<TextIcon
					h='h1'
					className={classnames('font-weight-bold title mt-3 mb-3', className)}
					{...otherProps}
				/>
			</Col>
		</Row>
	)
}

const TextIconPropedPopularPlayer = props => {
	const { className, ...otherProps } = props
	return (
		<TextIconPropedIndex
			className={classnames('text-primary', className)}
			aria='recommended player'
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
			aria='new player'
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
			aria='discover'
			emoji='🏆'
			{...otherProps}
		>
			Discover
		</TextIconPropedIndex>
	)
}

const TextIconPropedProfileGift = props => {
	const { className, ...otherProps } = props
	return (
		<TextIconPropedProfile
			className={classnames('text-warning', className)}
			aria='discover'
			emoji='🎁'
			{...otherProps}
		>
			Gifts
		</TextIconPropedProfile>
	)
}

const TextIconPropedProfileComments = props => {
	const { className, ...otherProps } = props
	return (
		<TextIconPropedProfile
			className={classnames('text-warning', className)}
			aria='discover'
			emoji='💬'
			{...otherProps}
		>
			Comments
		</TextIconPropedProfile>
	)
}

export {
	TextIconPropedPopularPlayer,
	TextIconPropedNewPlayer,
	TextIconPropedRandomPlayer,
	TextIconPropedProfileGift,
	TextIconPropedProfileComments,
}
