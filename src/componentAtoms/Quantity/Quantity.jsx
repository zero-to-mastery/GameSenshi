import React, { Fragment, memo, useState } from 'react'
import { Button, UncontrolledTooltip } from 'reactstrap'

const ID = 'id'
const ICON = 'icon'
const COLOR = 'color'
const TOOLTIP = 'tooltip'
const BUTTONS = 'buttons'
const SET_QUANTITY = 'setQuantity'
const QUANTITY = 'quantity'

const ButtonIncrement = memo(props => {
	const { [SET_QUANTITY]: setQuantity, [QUANTITY]: quantity } = props
	return (
		<Button
			className='btn-round btn-simple'
			color='warning'
			onClick={setQuantity(quantity + 1)}>
			<i className='tim-icons icon-simple-add' />
		</Button>
	)
})

const ButtonDecrement = memo(props => {
	const { [SET_QUANTITY]: setQuantity, [QUANTITY]: quantity } = props
	return (
		<Button
			className='btn-round btn-simple'
			color='warning'
			onClick={setQuantity(quantity - 1)}>
			<i className='tim-icons icon-simple-delete' />
		</Button>
	)
})

const Quantity = memo(props => {
	const [quantity, setQuantity] = useState(1)
	const { children } = props
	return (
		<Fragment>
			<ButtonDecrement quantity={quantity} setQuantity={setQuantity} />
			<Input
				className='input-number'
				value={quantity}
				type='text'
				onChange={e => setQuantity(parseInt(e.target.value))}
			/>
			<ButtonIncrement quantity={quantity} setQuantity={setQuantity} />
		</Fragment>
	)
})

export { Quantity }
