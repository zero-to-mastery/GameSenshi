import React from 'react'
import { TextIcon } from './TextIcon'
import clsx from 'clsx'
import { Row, Col } from 'reactstrap'

const TextIconPropedIndex = props => {
	const { className, ...otherProps } = props
	return (
		<Row>
			<Col>
				<TextIcon
					h='h1'
					className={clsx('font-weight-bold title mt-3 mb-3', className)}
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
					className={clsx('font-weight-bold title mt-3 mb-3', className)}
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
			className={clsx('text-primary', className)}
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
			className={clsx('text-success', className)}
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
			className={clsx('text-warning', className)}
			aria='Random Players'
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
			className={clsx('text-warning', className)}
			aria='Gift'
			emoji='🎁'
			{...otherProps}
		>
			Gifts
		</TextIconPropedProfile>
	)
}

const TextIconPropedProfileReviews = props => {
	const { className, ...otherProps } = props
	return (
		<TextIconPropedProfile
			className={clsx('text-warning', className)}
			aria='Reviews'
			emoji='💬'
			{...otherProps}
		>
			Reviews
		</TextIconPropedProfile>
	)
}

const TextIconPropedAppointments = props => {
	const { className, ...otherProps } = props
	return (
		<TextIconPropedProfile
			className={clsx('text-warning', className)}
			aria='Make Appointments'
			emoji='💌'
			{...otherProps}
		>
			Appointments
		</TextIconPropedProfile>
	)
}

export {
	TextIconPropedPopularPlayer,
	TextIconPropedNewPlayer,
	TextIconPropedRandomPlayer,
	TextIconPropedProfileGift,
	TextIconPropedProfileReviews,
	TextIconPropedAppointments,
}
