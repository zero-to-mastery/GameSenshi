import React from 'react'
import clsx from 'clsx'
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
		icon,
		spinner,
		className,
		hasFocus,
		hasDanger,
		hasSuccess,
		children,
		...restProps
	} = props

	const Group = icon ? InputGroup : FormGroup

	return (
		<FormGroup>
			<Group
				className={clsx(className, {
					'has-danger': hasDanger,
					'has-success': hasSuccess,
					'input-group-focus': hasFocus,
					'mb-0': true,
				})}
			>
				{icon && (
					<InputGroupAddon addonType='prepend'>
						<InputGroupText>
							{spinner ? (
								<div
									style={{ height: 16 }}
									className='d-flex align-items-center'
								>
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
				<Input {...restProps} />
			</Group>
			{children}
		</FormGroup>
	)
}

export { InputText }
