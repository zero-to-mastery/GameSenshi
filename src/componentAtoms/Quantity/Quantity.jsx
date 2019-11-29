import React, { memo, useState } from 'react'
import { Input, InputGroup, Col, Button } from 'reactstrap'
import styles from './styles.module.css'

const SET_QUANTITY = 'setQuantity'
const INPUT_QUANTITY_NAME = 'name'

const Quantity = props => {
	const [quantity, setQuantity] = useState(1)
	return (
		<InputGroup>
			<Input
				className={styles.inputNumber}
				name={INPUT_QUANTITY_NAME}
				id='myNumber'
				value={quantity}
				type='text'
				onChange={e => setQuantity(parseInt(e.target.value))}
			/>
			<div className='btn-group' role='group'>
				<Button
					onClick={() => setQuantity(value => value - 1)}
					className='btn btn-info btn-sm'
				>
					<i className='tim-icons icon-simple-delete'></i>
				</Button>
				<Button
					onClick={() => setQuantity(value => value + 1)}
					className='btn btn-info btn-sm'
				>
					<i className='tim-icons icon-simple-add'></i>
				</Button>
			</div>
		</InputGroup>
	)
}

export { Quantity, INPUT_QUANTITY_NAME }
