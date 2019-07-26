import React from 'react'
import classnames from 'classnames'
import Loader from 'react-loader-spinner'
import {
	Input,
	FormGroup,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
} from 'reactstrap'

const InputText = props => {
	const {
		id,
		icon,
		name,
		type,
		value,
		spinner,
		className,
		placeholder,
		hasFocus,
		hasDanger,
		hasSuccess,
		onBlur,
		onFocus,
		onChange,
		onKeyPress,
	} = props

	const Group = icon ? InputGroup : FormGroup

	return (
		<Group
			className={classnames(className, {
				'has-danger': hasDanger,
				'has-success': hasSuccess,
				'input-group-focus': hasFocus,
				'mb-0': true,
			})}>
			{icon && (
				<InputGroupAddon addonType='prepend'>
					<InputGroupText>
						{spinner ? (
							<div style={{ height: 16 }} className='d-flex align-items-center'>
								<Loader
									type={spinner}
									color='#00BFFF'
									height='15px'
									width='15px'
								/>
							</div>
						) : (
							<i className={icon} />
						)}
					</InputGroupText>
				</InputGroupAddon>
			)}
			<Input
				placeholder={placeholder}
				id={id}
				name={name}
				value={value} // the input.value has no purpose other than suppress uncontrollable to controllable warning
				type={type}
				onFocus={onFocus}
				onBlur={onBlur}
				onChange={onChange}
				onKeyPress={onKeyPress}
			/>
		</Group>
	)
}

export { InputText }
