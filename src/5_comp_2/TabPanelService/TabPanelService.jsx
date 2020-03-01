import React, { useState } from 'react'
import { stopUndefined } from '1_utils'
import { Exports } from '5_comp_1'

const {
	ImagesTooltipOptioned,
	ButtonSoundStoreSoundPropedCardUser,
	InputInteger,
	ButtonCommonChat,
	ButtonsCommonCheckout,
	Row,
	Col,
} = stopUndefined(Exports)

const TAB_PRODUCT_PRICE = 'price'
const TAB_PRODUCT_NUM_ORDERS = 'orders'

const TAB_PRODUCT_DESCRIPTION = 'description'

const TabPanelService = props => {
	const [quantity, setQuantity] = useState(1)
	const {
		[TAB_PRODUCT_PRICE]: price,
		[TAB_PRODUCT_NUM_ORDERS]: orders,
		icon,
		[TAB_PRODUCT_DESCRIPTION]: description,
	} = props
	return (
		<>
			<Row className='align-items-center h-100'>
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
						<Col xs='8'>
							<ButtonSoundStoreSoundPropedCardUser gender={true} />
						</Col>
					</Row>
				</Col>
				<Col>
					<p className='text-white lead'>
						<i className='tim-icons icon-notes text-success pb-1'></i>
						{orders} orders completed
					</p>
				</Col>
			</Row>
			<Row className='mt-4 mb-5'>
				<Col xs='3' />
				<Col>
					<Row className='align-items-center mb-3'>
						<Col xs='3'>
							<p className='m-0'>Hours:</p>
						</Col>
						<Col xs='5'>
							<InputInteger
								min={1}
								max={23}
								value={quantity}
								setValue={setQuantity}
							/>
						</Col>
					</Row>
					<Row>
						<Col xs='4.5' className='pr-1'>
							<ButtonCommonChat />
						</Col>
						<Col xs='4.5' className='pl-1'>
							<ButtonsCommonCheckout />
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col>
					<h4 className='font-weight-bold'>Introduction</h4>
					<p>{description}</p>
				</Col>
			</Row>
		</>
	)
}

export {
	TabPanelService,
	TAB_PRODUCT_DESCRIPTION,
	TAB_PRODUCT_NUM_ORDERS,
	TAB_PRODUCT_PRICE,
}
