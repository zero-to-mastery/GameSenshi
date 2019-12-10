import React, { useState, useCallback, useEffect } from 'react'
import Loader from 'react-loader-spinner'
import { Label, FormGroup, Input } from 'reactstrap'

const CheckBox = props => {
	const {
		checked,
		onChange,
		className,
		children,
		loading,
		...otherProps
	} = props

	const [checked_, setChecked_] = useState(checked)

	const onChange_ = useCallback(
		e => {
			setChecked_(!checked_)
			onChange && onChange(e, setChecked_)
		},
		[onChange]
	)

	useEffect(() => {
		setChecked_(checked)
	}, [checked])

	return (
		<FormGroup
			check={!loading}
			className={`mb-0 ${className}`}
			style={{ marginTop: '8px' }}
		>
			<Label check>
				{!loading && (
					<Input
						type='checkbox'
						checked={checked_}
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
					<span style={{ color: 'rgb(255,255,255,0.6' }}>{children}</span>
				</div>
			</Label>
		</FormGroup>
	)
}

export { CheckBox }
