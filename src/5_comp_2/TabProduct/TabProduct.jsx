import React, { useState } from 'react'
import { stopUndefined } from '1_utils'
import { Exports } from '5_comp_1'

const {
	ImagesTooltipOptioned,
	ButtonSoundStoreSoundPropedCardUser,
	InputNumber,
	ButtonCommonChat,
	ButtonsCommonCheckout,
	Row,
	Col,
} = stopUndefined(Exports)

const TAB_PRODUCT_PRICE = 'price'
const TAB_PRODUCT_NUM_ORDERS = 'orders'
const TAB_PRODUCT_ICON = 'icon'
const TAB_PRODUCT_DESCRIPTION = 'description'

const TabProduct = props => {
	const [quantity, setQuantity] = useState(1)
	const {
		[TAB_PRODUCT_PRICE]: price,
		[TAB_PRODUCT_NUM_ORDERS]: orders,
		[TAB_PRODUCT_ICON]: icon,
		[TAB_PRODUCT_DESCRIPTION]: description,
	} = props
	return (
		<>
			<Row>
				<Col xs='3'>
					<ImagesTooltipOptioned icons={icon} />
				</Col>
				<Col>
					<Row xs='1'>
						<Col>
							<p>
								<span style={{ color: 'yellow' }}>$</span>
								<span
									style={{
										color: 'yellow',
										fontSize: '2rem',
									}}
								>
									{price}
								</span>
								/hour
							</p>
						</Col>
						<Col>
							<p className='text-white lead'>
								<i className='tim-icons icon-notes text-success pb-1'></i>
								{orders} orders completed
							</p>
						</Col>
						<Col xs='8'>
							<ButtonSoundStoreSoundPropedCardUser gender={true} />
						</Col>
					</Row>
				</Col>
				<Col>
					<Row xs='1'>
						<Col>
							<InputNumber
								min={1}
								max={23}
								value={quantity}
								setValue={setQuantity}
							/>
						</Col>
						<Col>
							<ButtonsCommonCheckout />
						</Col>
						<Col>
							<ButtonCommonChat />
						</Col>
					</Row>
				</Col>
			</Row>
			<Row className='pt-3'>
				<Col md='12'>
					<hr className='line-primary' />
				</Col>
			</Row>
			<Row>
				<Col>
					<p>{description}</p>
				</Col>
			</Row>
		</>
	)
}

export {
	TabProduct,
	TAB_PRODUCT_DESCRIPTION,
	TAB_PRODUCT_ICON,
	TAB_PRODUCT_NUM_ORDERS,
	TAB_PRODUCT_PRICE,
}
