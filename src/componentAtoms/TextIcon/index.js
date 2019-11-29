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
					src={'none'}
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
					src={'none'}
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

const TextIconPropedProfileName = props => {
	const { className, ...otherProps } = props
	return (
		<TextIconPropedProfile
			className={classnames('text-warning', className)}
			aria-label='discover'
			emoji='🧑'
			{...otherProps}
		>
			Profile Page
		</TextIconPropedProfile>
	)
}

const TextIconPropedProfileGift = props => {
	const { className, ...otherProps } = props
	return (
		<TextIconPropedProfile
			className={classnames('text-warning', className)}
			aria-label='discover'
			emoji='🎁'
			{...otherProps}
		>
			Gifts
		</TextIconPropedProfile>
	)
}

const TextIconPropedProfileGallery = props => {
	const { className, ...otherProps } = props
	return (
		<TextIconPropedProfile
			className={classnames('text-warning', className)}
			aria-label='discover'
			emoji='📸'
			{...otherProps}
		>
			Images
		</TextIconPropedProfile>
	)
}

const TextIconPropedProfileComments = props => {
	const { className, ...otherProps } = props
	return (
		<TextIconPropedProfile
			className={classnames('text-warning', className)}
			aria-label='discover'
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
	TextIconPropedProfileName,
	TextIconPropedProfileGift,
	TextIconPropedProfileGallery,
	TextIconPropedProfileComments,
}
