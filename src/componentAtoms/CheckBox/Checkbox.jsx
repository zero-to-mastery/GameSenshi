import React, { useState, useCallback } from 'react'
import Loader from 'react-loader-spinner'
import { Label, FormGroup, Input } from 'reactstrap'

const CheckBox = props => {
	const {
		initialValue,
		onChange,
		className,
		children,
		loading,
		...otherProps
	} = props

	const [value, setValue] = useState(initialValue)
	//const [loading, setLoading] = useState(false)
	const onChange_ = useCallback(
		e => {
			setValue(value => !value)
			onChange && onChange(e)
		},
		[onChange]
	)

	return (
		<FormGroup check={!loading} className={`mb-0 ${className}`}>
			<Label check>
				{!loading && (
					<Input
						type='checkbox'
						value={value}
						onChange={onChange_}
						{...otherProps}
					/>
				)}
				<div className='form-check-sign d-flex'>
					{loading && (
						<>
							<Loader
								type='Circles'
								color='#00BFFF'
								height='18px'
								width='18px'
							/>
							<span style={{ marginRight: '7px' }} />
						</>
					)}
					<span
						/* onClick={() => {
							setLoading(state => !state)
						}} */
						style={{ color: 'rgb(255,255,255,0.6' }}>
						{children}
					</span>
				</div>
			</Label>
		</FormGroup>
	)
}

export { CheckBox }
