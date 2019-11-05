import React from 'react'
import classnames from 'classnames'
import { Form, InputGroup, Input, InputGroupAddon, Button } from 'reactstrap'

const FINAL_TEXT_DISCOUNT = 'Discount'

const FinalTextDiscount = props => {
	const { discountFocus, setDiscountFocus } = props
	return (
		<Form className='code-validate'>
			<label>Discount</label>
			<InputGroup
				className={classnames({
					'input-group-focus': discountFocus,
				})}>
				<Input
					aria-label='Discount'
					name={FINAL_TEXT_DISCOUNT}
					placeholder='Discount Code'
					type='text'
					onFocus={() => setDiscountFocus(true)}
					onBlur={() => setDiscountFocus(false)}
				/>
				<InputGroupAddon addonType='append'>
					<Button color='info' type='button'>
						Apply
					</Button>
				</InputGroupAddon>
			</InputGroup>
		</Form>
	)
}

export { FinalTextDiscount, FINAL_TEXT_DISCOUNT }
