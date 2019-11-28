import React, { memo, useState } from 'react'
import { Input, InputGroup, Col } from 'reactstrap'
import styles from './styles.module.css'
import { Exports } from 'componentaProton'
import { stopUndefined } from 'utils'
const { Button } = stopUndefined(Exports)

const SET_QUANTITY = 'setQuantity'
const INPUT_QUANTITY_NAME = 'name'

const ButtonIncrement = memo(props => {
	const { [SET_QUANTITY]: setQuantity } = props
	return (
		<div className='input-group-btn'>
			<Button
				className='btn-round btn-simple'
				color='warning'
				onClick={() => setQuantity(q => q + 1)}
			>
				<i className='tim-icons icon-simple-add' />
			</Button>
		</div>
	)
})

const ButtonDecrement = memo(props => {
	const { [SET_QUANTITY]: setQuantity } = props
	return (
		<div className='input-group-btn'>
			<Button
				className='btn-round btn-simple'
				color='warning'
				onClick={() => setQuantity(q => q - 1)}
			>
				<i className='tim-icons icon-simple-delete' />
			</Button>
		</div>
	)
})

const Quantity = props => {
	const [quantity, setQuantity] = useState(1)
	return (
		<Col md='6'>
			<InputGroup>
				<ButtonDecrement setQuantity={setQuantity} />
				<Input
					className={styles.inputNumber}
					name={INPUT_QUANTITY_NAME}
					id='myNumber'
					value={quantity}
					type='text'
					onChange={e => setQuantity(parseInt(e.target.value))}
				/>
				<ButtonIncrement setQuantity={setQuantity} />
			</InputGroup>
		</Col>
	)
}

export { Quantity, INPUT_QUANTITY_NAME }
