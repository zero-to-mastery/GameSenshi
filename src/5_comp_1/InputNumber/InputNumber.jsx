import React, { useCallback } from 'react'
import { Input, InputGroup, InputGroupAddon } from 'reactstrap'
import { styledHOC } from '0_styled'
import { Exports } from '5_comp_0'
import { stopUndefined } from '1_utils'
import clsx from 'clsx'
const { Button } = stopUndefined(Exports)

const InputStyled = styledHOC(Input)(2)

const buttonClass = 'btn btn-info btn-sm m-0 h-100 rounded-0 btn-simple'

const InputNumber = props => {
	const { className, min, max, setValue, onChange, value, ...restProps } = props

	const increment = useCallback(() => {
		setValue(value => Math.min(max, value + 1))
	}, [setValue])

	const decrement = useCallback(() => {
		setValue(value => Math.max(min, value - 1))
	}, [setValue])

	const onChange_ = useCallback(
		e => {
			onChange && onChange(e)
			const inputValue = parseInt(e.target.value)
			if (inputValue > max) {
				setValue(max)
			} else if (inputValue < min || isNaN(inputValue)) {
				setValue(min)
			} else {
				setValue(inputValue)
			}
		},
		[setValue, onChange, min, max]
	)

	return (
		<InputGroup className='mb-0'>
			<InputGroupAddon addonType='prepend'>
				<Button onClick={decrement} className={buttonClass}>
					<i className='tim-icons icon-simple-delete'></i>
				</Button>
			</InputGroupAddon>
			<InputStyled
				className={clsx(
					'text-white text-center border-right-0 border-left-0 border-top border-bottom border-info rounded-0',
					className
				)}
				styledCss={`
				::-webkit-inner-spin-button, ::-webkit-outer-spin-button{
        	-webkit-appearance: none; 
        	margin: 0; 
    		}
				-moz-appearance: textfield;
				font-size: 1rem;
					`}
				value={value}
				type='number'
				min='1'
				max='5'
				onChange={onChange_}
				{...restProps}
			/>
			<InputGroupAddon addonType='append'>
				<Button onClick={increment} className={buttonClass}>
					<i className='tim-icons icon-simple-add'></i>
				</Button>
			</InputGroupAddon>
		</InputGroup>
	)
}

export { InputNumber }
